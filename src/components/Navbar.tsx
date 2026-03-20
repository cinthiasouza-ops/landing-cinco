"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Conheça", href: "#conheca" },
  { label: "Para quem", href: "#para-quem" },
  { label: "Kits", href: "#kits" },
  { label: "Perguntas frequentes", href: "#perguntas" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 bg-primary transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_24px_rgba(0,0,0,0.25)]" : ""
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-7 md:px-14 lg:px-28">
        {/* Logo + nav links */}
        <div className="flex items-center gap-6 lg:gap-[100px]">
          <Link href="/" onClick={closeMenu} aria-label="Início">
            <Image
              src="/images/logo.svg"
              alt="CINCO"
              width={108}
              height={32}
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden items-center gap-[50px] lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-base font-normal text-white transition-opacity hover:opacity-75"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-8 lg:flex">
          <Link
            href="#para-quem"
            className="flex items-center gap-3 rounded-full px-4 py-4 text-base font-bold text-white outline outline-1 outline-white/30 transition-all hover:bg-white/10"
          >
            <span>Para organizações</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </Link>

          <Link
            href="#kits"
            className="rounded-full bg-white px-4 py-4 text-base font-bold text-cta transition-all hover:bg-white/90"
          >
            Experimente agora
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col items-center justify-center gap-1.5 p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden bg-primary transition-all duration-300 lg:hidden ${
          open ? "max-h-[500px] border-t border-white/10" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-7 pb-6 pt-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={closeMenu}
                className="block py-3 text-base font-normal text-white transition-opacity hover:opacity-75"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-4 flex flex-col gap-3">
            <Link
              href="#para-quem"
              onClick={closeMenu}
              className="flex items-center justify-center gap-3 rounded-full px-4 py-3 text-base font-bold text-white outline outline-1 outline-white/30"
            >
              Para organizações
            </Link>
            <Link
              href="#kits"
              onClick={closeMenu}
              className="rounded-full bg-white py-3 text-center text-base font-bold text-cta"
            >
              Experimente agora
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
