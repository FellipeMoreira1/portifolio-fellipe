interface Certification {
  name: string;
  issuer: string;
  date: string;
  status: "active" | "progress" | "expired";
  credentialId?: string;
  badge?: string;
}

const certifications: Certification[] = [
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "2023",
    status: "active",
    credentialId: "COMP001-XXXX",
    badge: "SEC+",
  },
  {
    name: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    date: "2023",
    status: "active",
    credentialId: "ECC-XXXX",
    badge: "CEH",
  },
  {
    name: "eLearnSecurity Junior Penetration Tester (eJPT)",
    issuer: "eLearnSecurity",
    date: "2022",
    status: "active",
    credentialId: "INE-XXXX",
    badge: "eJPT",
  },
  {
    name: "Offensive Security Certified Professional (OSCP)",
    issuer: "Offensive Security",
    date: "Em curso",
    status: "progress",
    badge: "OSCP",
  },
  {
    name: "Google Cybersecurity Professional",
    issuer: "Google / Coursera",
    date: "2022",
    status: "active",
    badge: "GCC",
  },
  {
    name: "AWS Security Specialty",
    issuer: "Amazon Web Services",
    date: "Planeado 2025",
    status: "progress",
    badge: "AWS",
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
            return (
              <div
                key={cert.name}
                className="group bg-[#080f12] border border-green-500/10 rounded-lg p-6 hover:border-green-500/30 transition-all duration-300 hover:bg-[#0a1510] cursor-default"
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
