"use client";

import { useEffect, useState } from "react";

const TYPED_STRINGS = [
  "Security Operations Analyst",
  "Microsoft Sentinel Specialist",
  "Incident Response Analyst",
  "Cloud Security Engineer",
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TYPED_STRINGS[stringIndex];
    const speed = isDeleting ? 50 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setDisplayText(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setStringIndex((i) => (i + 1) % TYPED_STRINGS.length);
          setCharIndex(0);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, stringIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,65,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,65,0.07)_0%,transparent_65%)]" />

      {/* Scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent"
          style={{ animation: "scanLine 8s linear infinite" }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Professional badge */}
        <div className="flex justify-center mb-8">
          <div
            className="inline-flex items-center gap-2 sm:gap-4 px-4 sm:px-8 md:px-10 py-3 sm:py-4 rounded font-mono tracking-widest animate-[glow-pulse_2.5s_ease-in-out_infinite]"
            style={{
              border: "1px solid rgba(0,255,65,0.45)",
              background: "rgba(0,255,65,0.04)",
            }}
          >
            <span className="text-green-400/90 font-semibold text-xs sm:text-base md:text-lg">SOC ANALYST</span>
            <span className="text-green-500/40 text-base sm:text-lg">·</span>
            <span className="text-slate-400 text-xs sm:text-base md:text-lg">LISBOA, PT</span>
          </div>
        </div>

        {/* Name */}
        <h1 className="font-mono text-4xl sm:text-6xl md:text-8xl font-black tracking-tight mb-4">
          <span
            className="text-[#00ff41]"
            style={{
              textShadow: "0 0 30px rgba(0,255,65,0.5), 0 0 60px rgba(0,255,65,0.2)",
            }}
          >
            FELLIPE MOREIRA
          </span>
        </h1>

        {/* Typed role */}
        <div className="font-mono text-lg sm:text-2xl md:text-3xl text-slate-300 mb-10 h-8 sm:h-10">
          <span className="text-green-500/70">$ </span>
          <span>{displayText}</span>
          <span className="animate-[blink_1s_step-end_infinite] text-[#00ff41]">|</span>
        </div>

        {/* Bio line */}
        <p className="font-mono text-slate-500 text-sm sm:text-base md:text-lg mb-10 sm:mb-14 max-w-2xl mx-auto leading-relaxed">
          <span className="text-green-500/50">// </span>
          Security Operations Analyst | Microsoft Sentinel & Defender XDR | Cloud & Data Security
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3 bg-[#00ff41] text-black font-mono font-bold text-base rounded hover:bg-green-400 transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,255,65,0.5)] text-center"
          >
            Ver Projetos
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3 border border-[#00ff41]/50 text-[#00ff41] font-mono font-bold text-base rounded hover:border-[#00ff41] hover:bg-[#00ff41]/10 transition-all duration-200 text-center"
          >
            Contactar
          </a>
          <a
            href="https://www.linkedin.com/in/fellipesmoreira/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3 border border-[#00ff41]/50 text-[#00ff41] font-mono font-bold text-base rounded hover:border-[#00ff41] hover:bg-[#00ff41]/10 transition-all duration-200 inline-flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <a
            href="/Fellipe_Moreira_CV.pdf"
            download="Fellipe_Moreira_CV.pdf"
            className="w-full sm:w-auto px-8 py-3 border border-green-500/30 text-slate-400 font-mono font-bold text-base rounded hover:border-green-500/60 hover:text-[#00ff41] hover:bg-[#00ff41]/5 transition-all duration-200 inline-flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Baixe meu CV
          </a>
        </div>
      </div>

      {/* Scroll indicator — outside content div to avoid overlap */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-green-500/40 z-10">
        <span className="font-mono text-xs">scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-green-500/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
