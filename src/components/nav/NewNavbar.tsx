"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { navLinks } from "@/lib/content";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDevRenderGuard, useDevScrollGuard } from "@/lib/devPerformanceGuard";
import { useDevFlags } from "@/lib/SafeDevContext";

// Longer delays so dropdown stays open long enough to move your mouse onto it
const hoverOpenDelay = 90;
const hoverCloseDelay = 420;

const NAVBAR_HEIGHT_PX = 56;

const NewNavbar = () => {
  useDevRenderGuard("NewNavbar");

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const openTimeout = useRef<NodeJS.Timeout | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  const glassRef = useRef<HTMLDivElement | null>(null);

  const shouldReduceMotion = useReducedMotion();
  const scrollGuard = useDevScrollGuard("NewNavbar ScrollTrigger");
  const { enableMotion, enableScroll, enableObservers, enableGlass } = useDevFlags();
  const allowMotion = enableMotion && !shouldReduceMotion;

  useEffect(() => {
    if (!allowMotion || !enableScroll) return;
    const node = glassRef.current;
    if (!node) return;

    gsap.registerPlugin(ScrollTrigger);

    const threshold = 40;
    const update = (value: number) => {
      const next = value > threshold ? "true" : "false";
      // Only touch the DOM if it actually changed.
      if (node.dataset.scrolled !== next) node.dataset.scrolled = next;
    };

    // Use ScrollTrigger so GSAP owns the scroll signal (avoids Framer+GSAP conflicts).
    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        scrollGuard();
        update(self.scroll());
      },
    });

    update(ScrollTrigger.scroll() || 0);
    return () => trigger.kill();
  }, [allowMotion, enableScroll, scrollGuard]);


  useEffect(() => {
    const node = glassRef.current;
    if (!node || !allowMotion || !enableObservers || !enableGlass) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let frame = 0;
    let rect = node.getBoundingClientRect();

    const recalc = () => {
      rect = node.getBoundingClientRect();
    };

    const update = (x: number, y: number) => {
      const clampedX = Math.min(1, Math.max(0, x));
      const clampedY = Math.min(1, Math.max(0, y));

      if (frame) return; // throttle to 1 RAF
      frame = requestAnimationFrame(() => {
        frame = 0;
        node.style.setProperty("--mx", clampedX.toString());
        node.style.setProperty("--my", clampedY.toString());
      });
    };

    const onMove = (event: PointerEvent) => {
      if (!rect.width || !rect.height) return;
      update(
        (event.clientX - rect.left) / rect.width,
        (event.clientY - rect.top) / rect.height
      );
    };

    const onLeave = () => update(0.5, 0.3);

    // initialize once
    recalc();
    onLeave();

    node.addEventListener("pointermove", onMove, { passive: true });
    node.addEventListener("pointerleave", onLeave, { passive: true });
    window.addEventListener("resize", recalc, { passive: true });

    return () => {
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", recalc);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [allowMotion, enableObservers, enableGlass]);


  useEffect(() => {
    if (!mobileOpen && !openMenu) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setOpenMenu(null);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [mobileOpen, openMenu]);

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

  // If you click anywhere outside the dropdown, close it (nice UX)
  useEffect(() => {
    if (!openMenu) return;
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      // If click happens inside the navbar/dropdown, ignore
      if (target.closest("[data-navbar-root='true']")) return;
      setOpenMenu(null);
    };
    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, [openMenu]);

  return (
    <>
      <motion.header className="fixed inset-x-0 top-0 z-[999] px-3">
        {/* Root wrapper so outside-click can detect inside clicks */}
        <motion.div
          data-navbar-root="true"
          className="mx-auto max-w-6xl"
          initial={false}
        >
          {/* Full glass pill */}
          <motion.div
            ref={glassRef}
            className="liquid-glass flex h-14 w-full items-center justify-between gap-3 rounded-2xl px-4 py-2"
            data-scrolled="false"
          >
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image
                src="/images/brand/logo.png"
                alt="Cougar Robotics logo"
                width={36}
                height={36}
                className="h-8 w-8 object-contain"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden min-w-0 flex-1 items-center justify-center gap-x-5 gap-y-2 text-[0.62rem] uppercase tracking-[0.16em] text-black/90 lg:flex flex-wrap leading-tight">
              {navLinks.map((link) => {
                const hasChildren = Boolean(link.children?.length);
                const isOpen = openMenu === link.label;

                return (
                  <motion.div
                    key={link.label}
                    whileHover={allowMotion ? { y: -1, opacity: 1 } : undefined}
                    transition={allowMotion ? { duration: 0.15, ease: "easeOut" } : undefined}
                    className="group relative"
                    onMouseEnter={() => (hasChildren ? scheduleOpen(link.label) : setOpenMenu(null))}
                    onMouseLeave={() => (hasChildren ? scheduleClose() : undefined)}
                  >
                    <Link
                      href={link.href}
                      className="px-1 py-1 transition-colors hover:text-black whitespace-nowrap"
                      onFocus={() => (hasChildren ? setOpenMenu(link.label) : setOpenMenu(null))}
                    >
                      {link.label}
                    </Link>

                    <span className="pointer-events-none absolute -bottom-2 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-[var(--tech-primary)] opacity-60 transition-transform duration-150 ease-out group-hover:scale-x-100" />

                    {hasChildren ? (
                      <div
                        className={`liquid-panel absolute left-0 top-full mt-3 w-64 rounded-2xl p-4 transition-all duration-200 ${
                          isOpen ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-1"
                        }`}
                        onMouseEnter={() => scheduleOpen(link.label)}
                        onMouseLeave={scheduleClose}
                        onBlur={(event) => {
                          if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                            setOpenMenu(null);
                          }
                        }}
                      >
                        <ul className="flex flex-col gap-2 text-[0.65rem] uppercase tracking-[0.16em] text-black/90">
                          {link.children?.map((child) => (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                className="block rounded-full px-3 py-2 transition-colors hover:bg-white/25 hover:text-black"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </motion.div>
                );
              })}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-3 shrink-0">
              <Button
                asChild
                className="hidden text-[0.6rem] uppercase tracking-[0.28em] lg:inline-flex"
                style={{
                  ["--button-color" as any]: "var(--tech-primary)",
                  ["--button-glow" as any]: "rgba(0,79,0,0.35)",
                }}
              >
                <Link href="/contact">Join Us</Link>
              </Button>

              <Button
                type="button"
                size="sm"
                className="lg:hidden"
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
              >
                <span className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em]">
                  {mobileOpen ? <X className="h-3 w-3" /> : <Menu className="h-3 w-3" />}
                  Menu
                </span>
              </Button>
            </div>
          </motion.div>

          {/* Mobile nav */}
          {allowMotion ? (
            <AnimatePresence>
              {mobileOpen ? (
                <motion.nav
                  id="mobile-nav"
                  className="liquid-panel mt-3 rounded-3xl px-6 py-6 text-xs uppercase tracking-[0.24em] text-black/95"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <ul className="grid gap-3">
                    {navLinks.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className="block py-1" onClick={() => setMobileOpen(false)}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4">
                    <Button
                      asChild
                      size="sm"
                      className="text-xs uppercase tracking-[0.3em]"
                      style={{
                        ["--button-color" as any]: "var(--tech-primary)",
                        ["--button-glow" as any]: "rgba(0,79,0,0.35)",
                      }}
                    >
                      <Link href="/contact" onClick={() => setMobileOpen(false)}>
                        Join Us
                      </Link>
                    </Button>
                  </div>
                </motion.nav>
              ) : null}
            </AnimatePresence>
          ) : mobileOpen ? (
            <nav
              id="mobile-nav"
              className="liquid-panel mt-3 rounded-3xl px-6 py-6 text-xs uppercase tracking-[0.24em] text-black/95"
            >
              <ul className="grid gap-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="block py-1" onClick={() => setMobileOpen(false)}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-4">
                <Button
                  asChild
                  size="sm"
                  className="text-xs uppercase tracking-[0.3em]"
                  style={{
                    ["--button-color" as any]: "var(--tech-primary)",
                    ["--button-glow" as any]: "rgba(0,79,0,0.35)",
                  }}
                >
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    Join Us
                  </Link>
                </Button>
              </div>
            </nav>
          ) : null}
        </motion.div>
      </motion.header>

      <div style={{ height: NAVBAR_HEIGHT_PX }} aria-hidden="true" />
    </>
  );
};

export default NewNavbar;
