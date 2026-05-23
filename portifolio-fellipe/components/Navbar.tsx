"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "Sobre" },
  { href: "#certifications", label: "Certificações" },
  { href: "#experience", label: "Experiência" },
  // { href: "#projects", label: "Projetos" },  // secção em construção
  // { href: "#blog", label: "Blog" },  // secção em construção
  { href: "#contact", label: "Contacto" },
];

const allSectionIds = ["hero", "about", "certifications", "experience", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Track active nav section (centre of viewport)
    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    // Trigger fade-in animation for each section
    const animObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            animObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    allSectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        activeObserver.observe(el);
        animObserver.observe(el);
      }
    });

    return () => {
      activeObserver.disconnect();
      animObserver.disconnect();
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#030712]/95 backdrop-blur-md border-b border-green-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="#hero"
          className="font-mono text-[#00ff41] font-bold text-base sm:text-xl tracking-widest hover:glow-green transition-all shrink-0"
          style={{ textShadow: "0 0 12px rgba(0,255,65,0.4)" }}
        >
          <span className="text-slate-400">&gt;</span>
          <span className="hidden sm:inline"> FELLIPE MOREIRA</span>
          <span className="sm:hidden"> FM</span>
          <span className="animate-[blink_1s_step-end_infinite] text-[#00ff41]">_</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`font-mono text-base font-semibold transition-colors duration-200 relative group tracking-wide ${
                    isActive ? "text-[#00ff41]" : "text-slate-300 hover:text-[#00ff41]"
                  }`}
                >
                  <span className="text-green-500/60 mr-1.5 text-sm">//</span>
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-[#00ff41] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#00ff41] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 space-y-1.5">
            <span
              className={`block h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#080f12]/98 border-b border-green-500/20 px-6 py-5">
          <ul className="space-y-5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`font-mono text-base font-semibold transition-colors block tracking-wide ${
                      isActive ? "text-[#00ff41]" : "text-slate-300 hover:text-[#00ff41]"
                    }`}
                  >
                    <span className={`mr-2 ${isActive ? "text-[#00ff41]" : "text-green-500/60"}`}>{">"}</span>
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
