interface Certification {
  name: string;
  issuer: string;
  date: string;
  status: "active" | "progress" | "expired";
  credentialId?: string;
  badge: string;
  url?: string;
  badgeColor: string;
  issuerUrl: string;
  badgeImageUrl?: string;
  badgeBg?: string;
}

const certifications: Certification[] = [
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "Jan 2026",
    status: "active",
    credentialId: "60A2FC36C443F489",
    badge: "AZ-900",
    url: "https://learn.microsoft.com/pt-br/users/fellipemoreira-7715/credentials/60a2fc36c443f489",
    badgeColor: "#0078D4",
    issuerUrl: "https://microsoft.com",
    badgeImageUrl: "https://images.credly.com/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png",
    badgeBg: "#ffffff",
  },
  {
    name: "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
    issuer: "Microsoft",
    date: "Aug 2025",
    status: "active",
    credentialId: "C669EECFF8DA47C4",
    badge: "SC-900",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/FellipeMoreira-7715/C669EECFF8DA47C4?sharingId",
    badgeColor: "#0078D4",
    issuerUrl: "https://microsoft.com",
    badgeImageUrl: "https://images.credly.com/images/fc1352af-87fa-4947-ba54-398a0e63322e/security-compliance-and-identity-fundamentals-600x600.png",
    badgeBg: "#ffffff",
  },
  {
    name: "SC-900: Microsoft Security, Compliance, Identity",
    issuer: "Udemy",
    date: "Jul 2024",
    status: "active",
    credentialId: "UC-0167e8a6",
    badge: "SC-900",
    url: "https://www.udemy.com/certificate/UC-0167e8a6-4b2e-4613-9337-37eeef2a0363/",
    badgeColor: "#A435F0",
    issuerUrl: "https://udemy.com",
    badgeImageUrl: "/badges/udemy.svg",
    badgeBg: "#ffffff",
  },
  {
    name: "Microsoft 365 Fundamentals",
    issuer: "Ka Solution",
    date: "Oct 2022",
    status: "active",
    credentialId: "47326-71787",
    badge: "MS-900",
    badgeColor: "#1E70B5",
    issuerUrl: "https://www.kasolution.com.br",
    badgeImageUrl: "/badges/kasolution.png",
    badgeBg: "#ffffff",
  },
  {
    name: "Bootcamp Online — Analista de Cybersecurity",
    issuer: "XP Educação",
    date: "Sep 2020",
    status: "active",
    badge: "XPE",
    badgeColor: "#16B364",
    issuerUrl: "https://www.xpeducacao.com.br",
    badgeImageUrl: "/badges/igti.svg",
    badgeBg: "#0d1117",
  },
  {
    name: "Treinamento para Data Protection Officers",
    issuer: "Silveiro Advogados",
    date: "Jul 2020",
    status: "active",
    badge: "DPO",
    url: "https://silveiroadvogados.launchlab.com.br/public/certificates/9e3c18e6-b3ff-45ac-ae97-d17fdff9e4f5/share",
    badgeColor: "#252830",
    issuerUrl: "https://silveiro.com.br",
    badgeImageUrl: "/badges/silveiro.svg",
    badgeBg: "#f5f5f5",
  },
  {
    name: "Introdução ao Git e ao GitHub",
    issuer: "Digital Innovation One",
    date: "Feb 2021",
    status: "active",
    credentialId: "E7600853",
    badge: "GIT",
    url: "https://certificates.digitalinnovation.one/E7600853",
    badgeColor: "#4A63A9",
    issuerUrl: "https://dio.me",
    badgeImageUrl: "/badges/dio.svg",
    badgeBg: "#0d1117",
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
    color: "text-slate-400",
    bg: "bg-slate-500/10",
    border: "border-slate-500/30",
    dot: "bg-slate-400",
  },
};

const total = certifications.length;

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 md:py-24 px-4 sm:px-6 relative bg-[#05090f]">
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
        <div className="flex items-center gap-4 mb-10 md:mb-16">
          <span className="font-mono text-[#00ff41] text-sm">02.</span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-white">
            Certificações
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-green-500/30 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => {
            const s = statusConfig[cert.status];
            // Centre the last card when it sits alone in its row
            const aloneOnLg = total % 3 === 1 && i === total - 1;
            const aloneOnMd = total % 2 === 1 && i === total - 1;
            return (
              <div
                key={cert.name}
                className={`group bg-[#080f12] border border-green-500/10 rounded-xl p-6 hover:border-green-500/30 transition-all duration-300 hover:bg-[#0a1510] flex flex-col gap-4${
                  aloneOnLg ? " lg:col-start-2" : ""
                }${
                  aloneOnMd && !aloneOnLg ? " md:col-span-2 md:max-w-sm md:mx-auto" : ""
                }`}
              >
                {/* Badge + status */}
                <div className="flex items-start justify-between">
                  <div
                    className="w-24 h-24 rounded-xl flex items-center justify-center shrink-0 select-none overflow-hidden"
                    style={{
                      background: cert.badgeImageUrl
                        ? cert.badgeBg ?? "#0d1117"
                        : cert.badgeColor,
                      boxShadow: `0 0 28px ${cert.badgeColor}60, 0 4px 16px rgba(0,0,0,0.5)`,
                      padding: cert.badgeImageUrl ? "10px" : "4px",
                    }}
                  >
                    {cert.badgeImageUrl ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={cert.badgeImageUrl}
                        alt={`${cert.badge} badge`}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <span className="font-mono font-black text-sm tracking-widest text-white">
                        {cert.badge}
                      </span>
                    )}
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-mono px-2 py-1 rounded-full border ${s.bg} ${s.border} ${s.color}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${s.dot} ${cert.status === "active" ? "animate-pulse" : ""}`} />
                    {s.label}
                  </span>
                </div>

                {/* Name + issuer */}
                <div className="flex-1">
                  <h3 className="font-mono text-base font-semibold text-white mb-1.5 leading-snug group-hover:text-[#00ff41] transition-colors">
                    {cert.name}
                  </h3>
                  <p className="font-mono text-sm text-slate-400">
                    {cert.issuer} · {cert.date}
                  </p>
                </div>

                {/* Credential ID */}
                {cert.credentialId && (
                  <div className="font-mono text-sm text-slate-400 border-t border-green-500/10 pt-3">
                    <span className="text-green-500/50">ID: </span>
                    {cert.credentialId}
                  </div>
                )}

                {/* Links footer */}
                <div className="flex items-center gap-4 pt-1 border-t border-green-500/10">
                  <a
                    href={cert.issuerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-sm font-medium text-slate-400 hover:text-white transition-colors"
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full inline-block shrink-0"
                      style={{ background: cert.badgeColor }}
                    />
                    {cert.issuer}
                  </a>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-sm font-medium text-green-500/60 hover:text-[#00ff41] transition-colors ml-auto"
                    >
                      ↗ ver credencial
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
