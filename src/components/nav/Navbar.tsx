"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { navLinks } from "@/lib/content";
import Button from "@/components/ui/Button";

const hoverOpenDelay = 120;
const hoverCloseDelay = 160;

const Navbar = () => {
  const [openMobile, setOpenMobile] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const openTimeout = useRef<NodeJS.Timeout | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  const { scrollY } = useScroll();
  const reduceMotion = useReducedMotion();

  const clearTimers = () => {
    if (openTimeout.current) {
      clearTimeout(openTimeout.current);
      openTimeout.current = null;
    }
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  };

  const scheduleOpen = (label: string) => {
    clearTimers();
    openTimeout.current = setTimeout(() => setOpenMenu(label), hoverOpenDelay);
  };

  const scheduleClose = () => {
    clearTimers();
    closeTimeout.current = setTimeout(() => setOpenMenu(null), hoverCloseDelay);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setOpenMobile(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setIsScrolled(latest > 24);

    if (reduceMotion) {
      setIsHidden(false);
      return;
    }

    const delta = latest - previous;
    if (latest < 120) {
      setIsHidden(false);
      return;
    }
    if (delta > 8) setIsHidden(true);
    if (delta < -8) setIsHidden(false);
  });

  return (
    <motion.header
      className="sticky top-0 z-40 px-4 pt-3 sm:px-6"
      animate={
        reduceMotion
          ? undefined
          : {
              y: isHidden ? -110 : 0,
            }
      }
      transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`mx-auto flex w-full max-w-7xl items-center gap-4 rounded-full border px-4 py-3 transition-all duration-200 sm:px-5 ${
          isScrolled
            ? "border-slate-900/10 bg-white/88 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.38)] backdrop-blur-xl"
            : "border-transparent bg-white/66 backdrop-blur-md"
        }`}
      >
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/images/brand/logo.png"
            alt="Cougar Robotics logo"
            width={64}
            height={64}
            className="h-12 w-12 flex-none object-contain md:h-14 md:w-14"
            priority
          />
          <div className="hidden min-w-0 lg:block">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-500">Team 1403</p>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-950">Cougar Robotics</p>
          </div>
        </Link>

        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <Button
            type="button"
            size="sm"
            onClick={() => setOpenMobile((prev) => !prev)}
            aria-expanded={openMobile}
            aria-controls="mobile-nav"
          >
            <span className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em]">
              {openMobile ? <X className="h-3 w-3" /> : <Menu className="h-3 w-3" />}
              Menu
            </span>
          </Button>
        </div>

        <nav className="hidden lg:flex flex-1 justify-end" aria-label="Primary">
          <ul className="flex flex-wrap items-center justify-end gap-x-2 gap-y-2 text-[0.68rem] uppercase tracking-[0.16em] text-slate-600 xl:gap-x-3">
            {navLinks.map((link) => {
              const hasChildren = Boolean(link.children?.length);
              const isOpen = openMenu === link.label;
              const menuId = `${link.label.toLowerCase().replace(/\s+/g, "-")}-menu`;
              return (
                <li
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => (hasChildren ? scheduleOpen(link.label) : setOpenMenu(null))}
                  onMouseLeave={() => (hasChildren ? scheduleClose() : undefined)}
                >
                  <div className="flex items-center gap-1">
                    <Link
                      href={link.href}
                      className="rounded-full px-3 py-2 transition-colors hover:text-slate-950 focus-visible:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c79b2c]/35"
                      onFocus={() => (hasChildren ? setOpenMenu(link.label) : setOpenMenu(null))}
                      aria-haspopup={hasChildren ? "menu" : undefined}
                      aria-expanded={hasChildren ? isOpen : undefined}
                      aria-controls={hasChildren ? menuId : undefined}
                    >
                      {link.label}
                    </Link>
                    {hasChildren ? (
                      <Button
                        type="button"
                      size="icon"
                      aria-label={`Open ${link.label} menu`}
                      aria-expanded={isOpen}
                      aria-controls={menuId}
                      className="text-slate-600"
                      onFocus={() => setOpenMenu(link.label)}
                      onClick={() => setOpenMenu(isOpen ? null : link.label)}
                    >
                        <ChevronDown className="h-3 w-3" />
                      </Button>
                    ) : null}
                  </div>
                  {hasChildren ? (
                    <AnimatePresence>
                      {isOpen ? (
                        <motion.div
                          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute left-0 top-full z-50 mt-3 w-72 rounded-[1.4rem] border border-slate-900/10 bg-white/96 p-4 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.35)] backdrop-blur-xl"
                          id={menuId}
                          role="menu"
                          aria-label={`${link.label} submenu`}
                          onMouseEnter={() => scheduleOpen(link.label)}
                          onMouseLeave={scheduleClose}
                          onBlur={(event) => {
                            if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                              setOpenMenu(null);
                            }
                          }}
                        >
                          <ul className="flex flex-col gap-2 text-[0.65rem] uppercase tracking-[0.16em] text-slate-600">
                            {link.children?.map((child) => (
                              <li key={child.label}>
                                <Link
                                  href={child.href}
                                  className="block rounded-2xl px-3 py-2.5 transition-colors hover:bg-slate-100 hover:text-slate-950"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <AnimatePresence>
        {openMobile ? (
          <motion.nav
            id="mobile-nav"
            className="lg:hidden"
            aria-label="Primary mobile"
            initial={reduceMotion ? false : { opacity: 0, y: -10 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="mt-3 flex flex-col gap-4 rounded-[1.8rem] border border-slate-900/10 bg-white/95 px-6 py-6 text-xs uppercase tracking-[0.2em] text-slate-800 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.34)] backdrop-blur-xl">
              {navLinks.map((link) => (
                <li key={`${link.label}-mobile`} className="space-y-2">
                  <Link href={link.href} className="block text-slate-950" onClick={() => setOpenMobile(false)}>
                    {link.label}
                  </Link>
                  {link.children ? (
                    <ul className="grid gap-2 pl-3 text-[0.65rem] uppercase tracking-[0.2em] text-slate-600">
                      {link.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            className="block"
                            onClick={() => setOpenMobile(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
