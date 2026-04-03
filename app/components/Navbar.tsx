"use client";

import { useState, useEffect } from "react";
import { CONTACT } from "../lib/data";

const NAV_LINKS = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#servicios", label: "Servicios" },
  { href: "#por-que-yo", label: "¿Por qué yo?" },
  { href: "#contacto", label: "Contacto" },
  { href: "#preguntas", label: "Preguntas" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    CONTACT.whatsapp_message
  )}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-purple/95 backdrop-blur-md shadow-lg shadow-brand-purple/20"
          : "bg-brand-purple"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* ── Logo ─────────────────────────────────────────── */}
          <a href="#inicio" className="flex items-center gap-2.5 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Logo-18.png"
              alt=""
              aria-hidden="true"
              className="h-14 md:h-[72px] w-auto object-contain"
            />
            <span className="flex flex-col leading-tight">
              <span className="text-white font-bold text-base tracking-tight">
                Dra. Sofía Vargas
              </span>
              <span className="text-sky-300 font-semibold text-[11px] uppercase tracking-widest">
                Pediatra
              </span>
            </span>
          </a>

          {/* ── Desktop nav ──────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/85 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-cyan hover:bg-brand-cyan-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <WhatsAppIcon />
              Agendar cita
            </a>
          </div>

          {/* ── Mobile hamburger ─────────────────────────────── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            className="md:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            {isOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* ── Mobile menu ───────────────────────────────────── */}
        {isOpen && (
          <div className="md:hidden border-t border-white/15 py-3 space-y-0.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-white/85 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-3 pb-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-brand-cyan hover:bg-brand-cyan-dark text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors w-full"
              >
                <WhatsAppIcon />
                Agendar cita por WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

/* ── Icons ──────────────────────────────────────────────────── */

function MenuIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
