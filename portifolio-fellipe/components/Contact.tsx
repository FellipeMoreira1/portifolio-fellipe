"use client";

import { useState, FormEvent } from "react";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simula envio — integrar com Formspree / Resend / EmailJS
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");

    setTimeout(() => {
      setStatus("idle");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 px-6 relative bg-[#05090f]">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,65,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-4xl mx-auto relative">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-[#00ff41] text-sm">05.</span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-white">
            Contacto
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-green-500/30 to-transparent" />
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Left info */}
          <div className="md:col-span-2 space-y-6">
            <p className="text-slate-400 text-sm leading-relaxed font-mono">
              <span className="text-[#00ff41]">$ </span>
              Disponível para projetos de pentesting, consultoria de segurança,
              bug bounty e colaborações.
            </p>

            <div className="space-y-4">
              {[
                { label: "Email", value: "fellipe@sec.dev", icon: "✉" },
                { label: "LinkedIn", value: "/in/fellipe-sec", icon: "▶" },
                { label: "GitHub", value: "@fellipe-sec", icon: "◈" },
                { label: "HackTheBox", value: "@fellipe_htb", icon: "⬡" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 font-mono text-sm"
                >
                  <span className="text-[#00ff41] w-4">{item.icon}</span>
                  <div>
                    <div className="text-slate-600 text-xs">{item.label}</div>
                    <div className="text-slate-300">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#080f12] border border-green-500/10 rounded-lg p-4">
              <div className="font-mono text-xs text-slate-500 space-y-1">
                <div className="text-[#00ff41] mb-2">// PGP Key</div>
                <div className="break-all text-slate-600">
                  4A3F 8B2E 1C9D 0E7F 5A6B...
                </div>
                <button className="text-green-500/60 hover:text-[#00ff41] transition-colors mt-2">
                  Copiar chave completa
                </button>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="md:col-span-3 bg-[#080f12] border border-green-500/10 rounded-lg p-8"
          >
            {/* Terminal bar */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-green-500/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="font-mono text-slate-600 text-xs ml-2">
                ~/send-message.sh
              </span>
            </div>

            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-mono text-xs text-slate-500 mb-1.5 block">
                    <span className="text-green-500/50">--</span> nome
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="O seu nome"
                    className="w-full bg-[#0d1a14] border border-green-500/20 rounded px-4 py-2.5 font-mono text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#00ff41]/50 focus:ring-1 focus:ring-[#00ff41]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-slate-500 mb-1.5 block">
                    <span className="text-green-500/50">--</span> email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="email@exemplo.com"
                    className="w-full bg-[#0d1a14] border border-green-500/20 rounded px-4 py-2.5 font-mono text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#00ff41]/50 focus:ring-1 focus:ring-[#00ff41]/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-xs text-slate-500 mb-1.5 block">
                  <span className="text-green-500/50">--</span> assunto
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Assunto da mensagem"
                  className="w-full bg-[#0d1a14] border border-green-500/20 rounded px-4 py-2.5 font-mono text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#00ff41]/50 focus:ring-1 focus:ring-[#00ff41]/20 transition-all"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-slate-500 mb-1.5 block">
                  <span className="text-green-500/50">--</span> mensagem
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Descreva o seu projeto ou proposta..."
                  className="w-full bg-[#0d1a14] border border-green-500/20 rounded px-4 py-2.5 font-mono text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#00ff41]/50 focus:ring-1 focus:ring-[#00ff41]/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="w-full py-3 bg-[#00ff41] text-black font-mono font-bold text-sm rounded hover:bg-green-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,255,65,0.4)]"
              >
                {status === "idle" && "$ ./send-message.sh"}
                {status === "sending" && "Enviando..."}
                {status === "sent" && "✓ Mensagem enviada!"}
                {status === "error" && "✗ Erro — tente novamente"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
