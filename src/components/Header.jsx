"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const navItems = [
  { label: "About Lab", href: "/about" },
  { label: "Programs", href: "/activity" },
  { label: "Practicum", href: "/practicum" },
  { label: "Research", href: "/research" },
  { label: "Team", href: "/team" },
  { label: "Alumni", href: "/alumni" },
  { label: "Achievements", href: "/achievement" },
  { label: "Contributors", href: "/contributor" },
  { label: "Certificate", href: "/certificate" },
];

export default function Header({ className = "" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef(null);
  const navigationRef = useRef(null);

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 24);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    navigationRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      menuButtonRef.current?.focus();
    };
  }, [menuOpen]);

  return (
    <>
      <header
        aria-hidden={!scrolled && !menuOpen}
        className={`fixed inset-x-0 top-0 z-[70] w-full border-b backdrop-blur-xl transition-[opacity,transform,background-color,color] duration-300 ${
          scrolled || menuOpen
            ? "translate-y-0 border-black/10 bg-white/90 text-navy opacity-100"
            : "pointer-events-none -translate-y-full border-transparent bg-transparent text-white opacity-0"
        } ${className}`}
      >
      <div className="mx-auto flex w-full items-center justify-between px-5 py-3.5 md:px-10 lg:px-14">
        <Link href="/" aria-label="Adaptive Network Laboratory - beranda" className="group relative z-[60]">
          <Logo
            size={42}
            textColor={scrolled || menuOpen ? "text-navy" : "text-white"}
            className="[&_span]:font-display [&_span]:text-[0.72rem] [&_span]:uppercase [&_span]:tracking-[0.08em] [&_span]:transition-colors group-hover:[&_span]:text-primary md:[&_span]:text-sm"
          />
        </Link>

        <div className="relative z-[60] flex items-center gap-3">
          <span className={`hidden font-mono text-[0.6rem] tracking-[0.18em] md:block ${scrolled || menuOpen ? "text-navy/70" : "text-white/80"}`}>
            TELKOM UNIVERSITY / BANDUNG
          </span>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            aria-label={menuOpen ? "Tutup navigasi" : "Buka navigasi"}
            className="group flex min-h-11 min-w-11 items-center justify-center gap-3 border border-current/25 px-3 transition-colors hover:border-primary hover:text-primary"
          >
            <span className="font-mono text-[0.68rem] tracking-[0.16em]">{menuOpen ? "CLOSE" : "MENU"}</span>
            <span className="flex w-5 flex-col gap-[5px]" aria-hidden="true">
              <span className={`h-px bg-current transition-transform ${menuOpen ? "translate-y-[3px] rotate-45" : ""}`} />
              <span className={`h-px bg-current transition-transform ${menuOpen ? "-translate-y-[3px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      </header>

      <nav
        ref={navigationRef}
        id="site-navigation"
        tabIndex={-1}
        aria-label="Navigasi utama"
        aria-hidden={!menuOpen}
        style={{
          visibility: menuOpen ? "visible" : "hidden",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        className={`fixed inset-0 z-[60] overflow-y-auto bg-navy text-white transition-[opacity,translate] duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] focus:outline-none motion-reduce:transition-none ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <div className="mx-auto flex min-h-full max-w-[1440px] flex-col px-6 pb-8 pt-24 md:px-14 md:pb-10 md:pt-28">
          <div className="mb-7 flex items-end justify-between border-b border-white/15 pb-4 md:mb-10">
            <span className="editorial-label">ANL / NAVIGATION</span>
            <span className="hidden font-mono text-[0.62rem] tracking-[0.15em] text-white/50 sm:block">
              ADAPTIVE NETWORK LABORATORY
            </span>
          </div>
          <div className="grid flex-1 grid-cols-1 content-start">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: menuOpen ? "80ms" : "0ms" }}
              className={`group flex items-center gap-5 border-b border-white/15 py-3 transition-[opacity,transform,color] duration-500 ease-out hover:text-primary md:gap-9 md:py-4 motion-reduce:transition-none ${
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
            >
              <span className="font-mono text-xs text-primary">00</span>
              <span className="font-display text-3xl uppercase leading-none tracking-tight sm:text-4xl md:text-6xl">Home</span>
              <span className="ml-auto text-xl transition-transform group-hover:-translate-y-[2px] group-hover:translate-x-[3px]">↗</span>
            </Link>
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{ transitionDelay: menuOpen ? `${110 + index * 35}ms` : "0ms" }}
                className={`group flex items-center gap-5 border-b border-white/15 py-3 transition-[opacity,transform,color] duration-500 ease-out hover:text-primary md:gap-9 md:py-4 motion-reduce:transition-none ${
                  menuOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                }`}
              >
                <span className="font-mono text-xs text-primary">{String(index + 1).padStart(2, "0")}</span>
                <span className="font-display text-3xl uppercase leading-none tracking-tight sm:text-4xl md:text-6xl">{item.label}</span>
                <span className="ml-auto text-xl transition-transform group-hover:-translate-y-[2px] group-hover:translate-x-[3px]">↗</span>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-col justify-between gap-3 font-mono text-[0.6rem] tracking-[0.14em] text-white/45 sm:flex-row">
            <span>TELKOM UNIVERSITY / BANDUNG, INDONESIA</span>
            <span>ADAPTIVE NETWORK LABORATORY / TELKOM UNIVERSITY</span>
          </div>
        </div>
      </nav>
    </>
  );
}
