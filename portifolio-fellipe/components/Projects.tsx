interface Project {
  title: string;
  description: string;
  tags: string[];
  type: "pentest" | "tool" | "research" | "ctf";
  highlight?: string;
  github?: string;
  report?: string;
}

const projects: Project[] = [
  {
    title: "Web Application Pentest — E-commerce",
    description:
      "Teste de penetração completo a uma aplicação e-commerce. Identificadas vulnerabilidades críticas incluindo SQL Injection, XSS armazenado e IDOR. Relatório detalhado com exploits de prova de conceito e recomendações de remediação.",
    tags: ["OWASP Top 10", "Burp Suite", "SQLMap", "XSS", "IDOR"],
    type: "pentest",
    highlight: "3 CVEs reportados",
  },
  {
    title: "Network Penetration Testing Lab",
    description:
      "Ambiente de laboratório simulando uma rede corporativa com Active Directory. Demonstração de ataques como Kerberoasting, Pass-the-Hash e movimentação lateral usando técnicas reais de red team.",
    tags: ["Active Directory", "Kerberoasting", "Mimikatz", "BloodHound", "Nmap"],
    type: "tool",
    highlight: "Domain Admin em 4h",
    github: "#",
  },
  {
    title: "CVE Research — Buffer Overflow",
    description:
      "Pesquisa e análise de vulnerabilidade de buffer overflow em serviço de rede legacy. Desenvolvimento de exploit funcional em ambiente controlado e divulgação responsável ao vendor.",
    tags: ["C/C++", "GDB", "pwntools", "ROP chains", "ASLR bypass"],
    type: "research",
    highlight: "Disclosure responsável",
    report: "#",
  },
  {
    title: "CTF Write-ups — HackTheBox",
    description:
      "Coleção de write-ups detalhados de máquinas HackTheBox resolvidas, cobrindo web exploitation, binary exploitation, criptografia e forensics. Rank top 5% na plataforma.",
    tags: ["Web", "Binary Exploitation", "Crypto", "Forensics", "Privilege Escalation"],
    type: "ctf",
    highlight: "Top 5% HTB",
    github: "#",
  },
  {
    title: "Automated Recon Framework",
    description:
      "Ferramenta Python para automação de reconhecimento em testes de penetração. Integra subdomain enumeration, port scanning, screenshot capture e geração automática de relatório.",
    tags: ["Python", "Async", "Shodan API", "Nuclei", "Subfinder"],
    type: "tool",
    github: "#",
  },
  {
    title: "Phishing Awareness Training",
    description:
      "Campanha de simulação de phishing para avaliação de maturidade de segurança em organização com 200+ colaboradores. Métricas de clique, análise comportamental e programa de treino personalizado.",
    tags: ["Social Engineering", "GoPhish", "OSINT", "Security Awareness"],
    type: "pentest",
    highlight: "68% taxa de captura",
  },
];

const typeConfig = {
  pentest: { label: "Pentest", color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20" },
  tool: { label: "Ferramenta", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  research: { label: "Pesquisa", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
  ctf: { label: "CTF", color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
};

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-10 md:mb-16">
          <span className="font-mono text-[#00ff41] text-sm">04.</span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-white">
            Projetos
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-green-500/30 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const t = typeConfig[project.type];
            return (
              <div
                key={project.title}
                className="card-hover bg-[#080f12] border border-green-500/10 rounded-lg p-6 flex flex-col"
              >
                {/* Top row */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`font-mono text-xs px-2 py-0.5 rounded border ${t.bg} ${t.border} ${t.color}`}
                  >
                    {t.label}
                  </span>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        className="text-slate-500 hover:text-[#00ff41] transition-colors font-mono text-xs"
                        aria-label="GitHub"
                      >
                        [gh]
                      </a>
                    )}
                    {project.report && (
                      <a
                        href={project.report}
                        className="text-slate-500 hover:text-[#00ff41] transition-colors font-mono text-xs"
                        aria-label="Report"
                      >
                        [pdf]
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-mono text-base font-semibold text-white mb-3 leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Highlight */}
                {project.highlight && (
                  <div className="font-mono text-xs text-[#00ff41] mb-4 flex items-center gap-1">
                    <span className="text-green-500/50">→</span>
                    {project.highlight}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-slate-500 bg-[#0d1a14] border border-green-500/10 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
