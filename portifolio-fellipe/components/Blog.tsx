import React from "react";

interface Post {
  id: number;
  category: string;
  categoryColor: string;
  categoryBg: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}

const posts: Post[] = [
  {
    id: 1,
    category: "SC-900",
    categoryColor: "#00ff41",
    categoryBg: "rgba(0,255,65,0.08)",
    title: "SC-900: Guia Completo para Iniciantes em Segurança Microsoft",
    excerpt:
      "O SC-900 é o ponto de entrada ideal para quem quer certificar-se em segurança, conformidade e identidade na cloud Microsoft. Descubra o que estudar, como estruturar a preparação e o que esperar no exame.",
    date: "2025-03-15",
    readTime: "8 min",
    tags: ["Microsoft", "Certificação", "Segurança"],
  },
  {
    id: 2,
    category: "Microsoft Sentinel",
    categoryColor: "#38bdf8",
    categoryBg: "rgba(56,189,248,0.08)",
    title: "KQL para SOC Analysts: Queries Essenciais no Microsoft Sentinel",
    excerpt:
      "Dominar KQL (Kusto Query Language) é fundamental para qualquer analista que trabalhe com Microsoft Sentinel. Neste artigo exploro as queries mais úteis no dia-a-dia de um SOC — desde threat hunting a regras analíticas.",
    date: "2025-04-02",
    readTime: "12 min",
    tags: ["KQL", "Sentinel", "SOC"],
  },
  {
    id: 3,
    category: "AZ-900",
    categoryColor: "#60a5fa",
    categoryBg: "rgba(96,165,250,0.08)",
    title: "AZ-900 para Profissionais de Segurança: O Que Realmente Importa",
    excerpt:
      "Muitos ignoram o AZ-900 por ser 'apenas fundamentos', mas para um analista de segurança cloud, entender a arquitectura Azure é indispensável. Aqui está o meu percurso e os tópicos que mais pesam na prática.",
    date: "2025-04-20",
    readTime: "6 min",
    tags: ["Azure", "Cloud", "Certificação"],
  },
  {
    id: 4,
    category: "Zero Trust",
    categoryColor: "#a78bfa",
    categoryBg: "rgba(167,139,250,0.08)",
    title: "Implementar Zero Trust com Microsoft 365 Defender",
    excerpt:
      "O modelo Zero Trust deixou de ser teoria — é hoje a base das melhores práticas de segurança. Veja como o ecossistema Microsoft 365 implementa cada pilar do framework e como avaliar a maturidade da sua organização.",
    date: "2025-05-08",
    readTime: "10 min",
    tags: ["Zero Trust", "M365", "Defender"],
  },
];

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("pt-PT", { day: "2-digit", month: "short", year: "numeric" });
}

export default function Blog() {
  return (
    <section id="blog" className="py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[#00ff41] text-sm">05.</span>
            <span className="font-mono text-slate-500 text-sm tracking-widest uppercase">Blog</span>
            <div className="h-px flex-1 bg-gradient-to-r from-green-500/30 to-transparent" />
          </div>
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-slate-100">
            // Artigos & Notas
          </h2>
          <p className="font-mono text-slate-500 text-sm mt-3">
            Reflexões sobre certificações Microsoft, operações SOC e segurança cloud.
          </p>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="card-hover group relative rounded border border-green-500/10 bg-[#080f12] p-6 flex flex-col gap-4 cursor-pointer transition-all duration-300 hover:border-green-500/30"
              style={{ background: "#080f12" }}
            >
              {/* Top row: category + date */}
              <div className="flex items-center justify-between gap-2">
                <span
                  className="font-mono text-xs font-semibold px-2 py-1 rounded tracking-widest uppercase"
                  style={{
                    color: post.categoryColor,
                    background: post.categoryBg,
                    border: `1px solid ${post.categoryColor}30`,
                  }}
                >
                  {post.category}
                </span>
                <span className="font-mono text-slate-600 text-xs">{formatDate(post.date)}</span>
              </div>

              {/* Title */}
              <h3
                className="font-mono text-slate-100 font-bold text-base md:text-lg leading-snug group-hover:text-[#00ff41] transition-colors duration-200"
              >
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="font-mono text-slate-500 text-sm leading-relaxed flex-1">
                {post.excerpt}
              </p>

              {/* Bottom row: tags + read time */}
              <div className="flex items-center justify-between gap-2 pt-2 border-t border-green-500/10">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-slate-600 text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <span className="font-mono text-slate-600 text-xs shrink-0 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {post.readTime}
                </span>
              </div>

              {/* Hover glow accent */}
              <div
                className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 0 1px rgba(0,255,65,0.15)",
                }}
              />
            </article>
          ))}
        </div>

        {/* Footer note */}
        <p className="font-mono text-slate-600 text-xs text-center mt-10">
          <span className="text-green-500/40">// </span>
          Mais artigos em breve — acompanhe no{" "}
          <a
            href="https://www.linkedin.com/in/fellipesmoreira/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00ff41]/60 hover:text-[#00ff41] transition-colors"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </section>
  );
}
