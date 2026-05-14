interface Certification {
  name: string;
  issuer: string;
  date: string;
  status: "active" | "progress" | "expired";
  credentialId?: string;
  badge: string;
  url?: string;
}

const certifications: Certification[] = [
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "Jan 2026",
    status: "active",
    credentialId: "60A2FC36C443F489",
    badge: "AZ-900",
    url: "https://learn.microsoft.com/api/credentials/share/pt-br/FellipeMoreira-7715/60A2FC36C443F489?sharingId",
  },
  {
    name: "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
    issuer: "Microsoft",
    date: "Aug 2025",
    status: "active",
    credentialId: "C669EECFF8DA47C4",
    badge: "SC-900",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/FellipeMoreira-7715/C669EECFF8DA47C4?sharingId",
  },
  {
    name: "SC-900: Microsoft Security, Compliance, Identity",
    issuer: "Udemy",
    date: "Jul 2024",
    status: "active",
    credentialId: "UC-0167e8a6",
    badge: "SC-900",
    url: "https://www.udemy.com/certificate/UC-0167e8a6-4b2e-4613-9337-37eeef2a0363/",
  },
  {
    name: "Microsoft 365 Fundamentals",
    issuer: "Ka Solution",
    date: "Oct 2022",
    status: "active",
    credentialId: "47326-71787",
    badge: "MS-900",
  },
  {
    name: "Bootcamp Online — Analista de Cybersecurity",
    issuer: "IGTI",
    date: "Sep 2020",
    status: "active",
    badge: "IGTI",
  },
  {
    name: "Treinamento para Data Protection Officers",
    issuer: "Silveiro Advogados",
    date: "Jul 2020",
    status: "active",
    badge: "DPO",
    url: "https://silveiroadvogados.launchlab.com.br/public/certificates/9e3c18e6-b3ff-45ac-ae97-d17fdff9e4f5/share",
  },
  {
    name: "Introdução ao Git e ao GitHub",
    issuer: "Digital Innovation One",
    date: "Feb 2021",
    status: "active",
    credentialId: "E7600853",
    badge: "GIT",
    url: "https://certificates.digitalinnovation.one/E7600853",
  },
];

const statusConfig = {
  active: {
    label: "Ativo",
    color: "text-[#00ff41]",
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    dot: "bg-[#00ff41]",
  },
  progress: {
    label: "Em progresso",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/30",
    dot: "bg-yellow-400",
  },
  expired: {
    label: "Expirado",
    color: "text-slate-500",
    bg: "bg-slate-500/10",
    border: "border-slate-500/30",
    dot: "bg-slate-500",
  },
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 relative bg-[#05090f]">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,65,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-[#00ff41] text-sm">02.</span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-white">
            Certificações
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-green-500/30 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => {
            const s = statusConfig[cert.status];
            const Wrapper = cert.url ? "a" : "div";
            const wrapperProps = cert.url
              ? { href: cert.url, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <Wrapper
                key={cert.name}
                {...wrapperProps}
                className="group bg-[#080f12] border border-green-500/10 rounded-lg p-6 hover:border-green-500/30 transition-all duration-300 hover:bg-[#0a1510] cursor-default block"
              >
                {/* Badge + status */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#0d1a14] border border-green-500/20 flex items-center justify-center font-mono font-bold text-xs text-[#00ff41] tracking-wider">
                    {cert.badge}
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-mono px-2 py-1 rounded-full border ${s.bg} ${s.border} ${s.color}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${s.dot} ${cert.status === "active" ? "animate-pulse" : ""}`} />
                    {s.label}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-mono text-sm font-semibold text-white mb-1 leading-snug group-hover:text-[#00ff41] transition-colors">
                  {cert.name}
                </h3>

                {/* Issuer + date */}
                <p className="font-mono text-xs text-slate-500 mb-3">
                  {cert.issuer} · {cert.date}
                </p>

                {/* Credential ID */}
                {cert.credentialId && (
                  <div className="font-mono text-xs text-slate-600 border-t border-green-500/10 pt-3">
                    <span className="text-green-500/40">ID: </span>
                    {cert.credentialId}
                  </div>
                )}

                {/* External link indicator */}
                {cert.url && (
                  <div className="font-mono text-xs text-green-500/30 mt-2 group-hover:text-green-500/60 transition-colors">
                    ↗ ver credencial
                  </div>
                )}
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
