"use client";

import { useEffect, useState } from "react";

const TYPED_STRINGS = [
  "Cyber Security Specialist",
  "Penetration Tester",
  "Vulnerability Analyst",
  "CTF Player",
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
        {/* Terminal header */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/5 font-mono text-xs text-green-400">
          <span className="w-2 h-2 rounded-full bg-[#00ff41] animate-pulse" />
          system.status: online
        </div>

        {/* Name */}
        <h1 className="font-mono text-6xl md:text-8xl font-black tracking-tight mb-4">
          <span className="text-slate-500 text-4xl md:text-5xl block mb-2">
            &lt;root@sec&gt;
          </span>
          <span
            className="text-[#00ff41]"
            style={{
              textShadow: "0 0 30px rgba(0,255,65,0.5), 0 0 60px rgba(0,255,65,0.2)",
            }}
          >
            FELLIPE
          </span>
        </h1>

        {/* Typed role */}
        <div className="font-mono text-xl md:text-2xl text-slate-300 mb-8 h-8">
          <span className="text-green-500/70">$ </span>
          <span>{displayText}</span>
          <span className="animate-[blink_1s_step-end_infinite] text-[#00ff41]">|</span>
        </div>

        {/* Bio line */}
        <p className="font-mono text-slate-500 text-sm md:text-base mb-12 max-w-xl mx-auto">
          <span className="text-green-500/50">// </span>
          Protegendo sistemas, identificando vulnerabilidades e construindo ambientes mais seguros.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-[#00ff41] text-black font-mono font-bold text-sm rounded hover:bg-green-400 transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,255,65,0.5)]"
          >
            Ver Projetos
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-[#00ff41]/50 text-[#00ff41] font-mono font-bold text-sm rounded hover:border-[#00ff41] hover:bg-[#00ff41]/10 transition-all duration-200"
          >
            Contactar
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-green-500/40">
          <span className="font-mono text-xs">scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-green-500/40 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
