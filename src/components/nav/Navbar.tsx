"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { navLinks } from "@/lib/content";
import Button from "@/components/ui/Button";

const hoverOpenDelay = 120;
const hoverCloseDelay = 160;

const Navbar = () => {
  const [openMobile, setOpenMobile] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const openTimeout = useRef<NodeJS.Timeout | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

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

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-6 py-4">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/images/brand/logo.png"
            alt="Cougar Robotics logo"
            width={64}
            height={64}
            className="h-14 w-14 md:h-16 md:w-16 flex-none object-contain"
            priority
          />
        </Link>

        <div className="ml-auto flex items-center gap-2 lg:hidden">
          {/* Mobile menu toggle to avoid dead state on small screens. */}
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
          <ul className="flex flex-wrap items-center justify-end gap-x-4 xl:gap-x-6 gap-y-2 text-[0.72rem] uppercase tracking-[0.10em] text-black/70">
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
                      className="rounded-full px-3 py-2 transition-colors hover:text-black focus-visible:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
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
                        className="text-black/70"
                        onFocus={() => setOpenMenu(link.label)}
                        onClick={() => setOpenMenu(isOpen ? null : link.label)}
                      >
                        <ChevronDown className="h-3 w-3" />
                      </Button>
                    ) : null}
                  </div>
                  {hasChildren ? (
                    <div
                      className={`absolute left-0 top-full mt-3 w-64 rounded-2xl border border-black/10 bg-[#E8F5E9] p-4 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.6)] transition-all duration-200 z-50 ${
                        isOpen ? "opacity-100 pointer-events-auto" : "pointer-events-none opacity-0"
                      }`}
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
                      <ul className="flex flex-col gap-2 text-[0.65rem] uppercase tracking-[0.16em] text-black/70">
                        {link.children?.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="block rounded-full px-3 py-2 transition-colors hover:bg-[#FFDB58]/40 hover:text-black"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      {openMobile ? (
        <nav id="mobile-nav" className="lg:hidden" aria-label="Primary mobile">
          <ul className="flex flex-col gap-4 border-t border-black/10 bg-white px-6 py-6 text-xs uppercase tracking-[0.2em] text-black/80">
            {navLinks.map((link) => (
              <li key={`${link.label}-mobile`} className="space-y-2">
                <Link href={link.href} className="block text-black" onClick={() => setOpenMobile(false)}>
                  {link.label}
                </Link>
                {link.children ? (
                  <ul className="grid gap-2 pl-3 text-[0.65rem] uppercase tracking-[0.2em] text-black/70">
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
        </nav>
      ) : null}
    </header>
  );
};

export default Navbar;
