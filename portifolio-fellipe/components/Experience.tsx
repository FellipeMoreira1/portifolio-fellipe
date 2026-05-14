interface Position {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  current?: boolean;
}

const positions: Position[] = [
  {
    title: "Analista de Cibersegurança",
    company: "VdA Vieira de Almeida",
    location: "Lisboa, Portugal",
    startDate: "Jan 2023",
    endDate: "Presente",
    current: true,
    highlights: [
      "Monitoramento de eventos de segurança e detecção de ameaças com Microsoft Sentinel",
      "Análise forense e resposta a incidentes com MTTR < 2 horas",
      "Administração e hardening de Microsoft Defender para Endpoint",
      "Gestão de vulnerabilidades: identificação, priorização e mitigação",
      "Proteção de dados críticos de 500+ usuários (zero data breaches)",
    ],
  },
  {
    title: "Administrador de Redes",
    company: "Polícia Militar do Estado do Rio de Janeiro",
    location: "Rio de Janeiro, Brasil",
    startDate: "Mai 2012",
    endDate: "Out 2022",
    highlights: [
      "Administração de infraestrutura de rede (LAN/WAN) em ambiente de segurança pública",
      "Gestão de Windows Server, Active Directory, DNS e DHCP",
      "Redução de 40% em incidentes de rede através de monitoramento proativo",
      "Implementação de políticas de backup e disaster recovery",
    ],
  },
  {
    title: "Instrutor Voluntário — Projeto Social",
    company: "Polícia Militar do Estado do Rio de Janeiro",
    location: "Rio de Janeiro, Brasil",
    startDate: "Fev 2014",
    endDate: "Mar 2020",
    highlights: [
      "Ensino de informática e tecnologias para crianças e adolescentes",
      "Preparação de 30+ alunos para certificações Microsoft Office",
      "Desenvolvimento de currículos personalizados para diferentes faixas etárias",
    ],
  },
  {
    title: "Técnico em Eletrônica",
    company: "H. Strattner & Cia. Ltda.",
    location: "Rio de Janeiro, Brasil",
    startDate: "Jun 2010",
    endDate: "Set 2011",
    highlights: [
      "Manutenção preventiva e corretiva de equipamentos de esterilização médica (MEDISAFE / SCICAN)",
      "Instalação de software proprietário e firmware de equipamentos",
    ],
  },
  {
    title: "Técnico em Eletrônica",
    company: "Engeclinic Serviços Ltda",
    location: "Rio de Janeiro, Brasil",
    startDate: "Jul 2009",
    endDate: "Jun 2010",
    highlights: [
      "Manutenção de equipamentos médico-hospitalares e laboratoriais",
      "Suporte técnico em instituição de referência nacional (FIOCRUZ)",
    ],
  },
  {
    title: "Técnico de Equipamentos Médicos",
    company: "COPTEC RIO Instrumentos Científicos",
    location: "Rio de Janeiro, Brasil",
    startDate: "Abr 2007",
    endDate: "Mai 2009",
    highlights: [
      "Manutenção de equipamentos de Gasometria RadioMeter e Anatomia Patológica Thermo Scientific",
      "Instalação e configuração de redes de comunicação para equipamentos médicos",
    ],
  },
  {
    title: "Técnico de Suporte de Informática",
    company: "Caçula",
    location: "Rio de Janeiro, Brasil",
    startDate: "Jan 2006",
    endDate: "Mar 2007",
    highlights: [
      "Manutenção de 100+ máquinas com alto índice de disponibilidade",
      "Administração de redes com Active Directory e cabeamento estruturado",
    ],
  },
  {
    title: "Estagiário Técnico em Informática",
    company: "Grupo Goedert Ltda",
    location: "Rio de Janeiro, Brasil",
    startDate: "Abr 2005",
    endDate: "Jan 2006",
    highlights: [
      "Instalação e configuração de sistemas de CFTV em múltiplas localizações",
      "Montagem e otimização de computadores para circuitos de segurança",
    ],
  },
  {
    title: "Estagiário Técnico em Eletrônica",
    company: "CEDAE — Companhia Estadual de Águas e Esgotos",
    location: "Rio de Janeiro, Brasil",
    startDate: "Ago 2004",
    endDate: "Abr 2005",
    highlights: [
      "Manutenção e diagnóstico de rádio de ondas curtas e estações repetidoras",
      "Suporte técnico aos técnicos em campo",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-[#00ff41] text-sm">03.</span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-white">
            Experiência
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-green-500/30 to-transparent" />
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-green-500/40 via-green-500/20 to-transparent" />

          <div className="space-y-8">
            {positions.map((pos, i) => (
              <div key={i} className="relative pl-8 md:pl-20">
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-6 top-5 -translate-x-1/2 w-3 h-3 rounded-full border-2 ${
                    pos.current
                      ? "border-[#00ff41] bg-[#00ff41] shadow-[0_0_8px_rgba(0,255,65,0.6)]"
                      : "border-green-500/40 bg-[#030712]"
                  }`}
                />

                <div
                  className={`group bg-[#080f12] border rounded-lg p-6 transition-all duration-300 hover:bg-[#0a1510] ${
                    pos.current
                      ? "border-green-500/30 hover:border-green-500/50"
                      : "border-green-500/10 hover:border-green-500/25"
                  }`}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-mono text-base font-semibold text-white group-hover:text-[#00ff41] transition-colors">
                        {pos.title}
                      </h3>
                      <p className="font-mono text-sm text-slate-400 mt-0.5">
                        {pos.company}
                        <span className="text-slate-600"> · </span>
                        <span className="text-slate-500">{pos.location}</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {pos.current && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono px-2 py-1 rounded-full border bg-green-500/10 border-green-500/30 text-[#00ff41]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff41] animate-pulse" />
                          Atual
                        </span>
                      )}
                      <span className="font-mono text-xs text-slate-500">
                        {pos.startDate} — {pos.endDate}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mt-3">
                    {pos.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 font-mono text-xs text-slate-400">
                        <span className="text-green-500/50 mt-0.5 shrink-0">›</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
