const skills = [
  {
    category: "Microsoft Security",
    items: ["Microsoft Sentinel", "Defender XDR", "Microsoft Purview", "Microsoft Entra ID"],
  },
  {
    category: "SOC & Resposta",
    items: ["Detecção de Ameaças", "Incident Response", "Análise Forense", "Gestão de Vulnerabilidades"],
  },
  {
    category: "Infraestrutura",
    items: ["Windows Server", "Active Directory", "Redes LAN/WAN", "Email Security"],
  },
  {
    category: "Cloud & Identidade",
    items: ["Microsoft Azure", "Microsoft 365", "Acesso Condicional", "Proteção de Identidade"],
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-10 md:mb-16">
          <span className="font-mono text-[#00ff41] text-sm">01.</span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-white">
            Sobre Mim
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-green-500/30 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Bio */}
          <div className="space-y-6">
            <div className="bg-[#080f12] border border-green-500/10 rounded-lg p-6 font-mono text-sm relative overflow-hidden">
              {/* Terminal title bar */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-green-500/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="text-slate-600 text-xs ml-2">~/about.md</span>
              </div>

              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  <span className="text-[#00ff41]">$</span> Profissional de cibersegurança
                  com foco em segurança em nuvem Microsoft, atuando como Security Operations
                  Analyst com experiência em Microsoft Sentinel, Defender XDR, Purview e Entra ID.
                </p>
                <p>
                  <span className="text-[#00ff41]">$</span> Responsável por monitorização
                  e detecção de ameaças, análise forense de incidentes, gestão de vulnerabilidades
                  e implementação de controles de segurança em ambientes Microsoft corporativos.
                </p>
                <p>
                  <span className="text-[#00ff41]">$</span> Mais de 20 anos em TI, com sólida
                  base em infraestrutura de redes e administração de sistemas antes da transição
                  para cibersegurança.
                </p>
                <p className="text-[#00ff41]/70">
                  <span className="text-slate-500">// </span>
                  &quot;A melhor defesa começa pelo conhecimento profundo do ambiente.&quot;
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "20+", label: "Anos em TI" },
                { value: "2+", label: "Anos em SOC" },
                { value: "4", label: "Certs Microsoft" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#080f12] border border-green-500/10 rounded-lg p-4 text-center hover:border-green-500/30 transition-colors"
                >
                  <div
                    className="font-mono text-2xl font-bold text-[#00ff41]"
                    style={{ textShadow: "0 0 10px rgba(0,255,65,0.4)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="font-mono text-xs text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((group) => (
              <div
                key={group.category}
                className="bg-[#080f12] border border-green-500/10 rounded-lg p-5 hover:border-green-500/25 transition-colors"
              >
                <h3 className="font-mono text-xs text-[#00ff41] font-bold mb-3 tracking-widest uppercase">
                  {group.category}
                </h3>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 font-mono text-sm text-slate-400">
                      <span className="text-green-500/50">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
