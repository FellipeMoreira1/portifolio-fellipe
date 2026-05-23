export default function Contact() {
  const contacts = [
    { label: "Email", value: "fellipe_moreira@outlook.com", icon: "✉", href: "mailto:fellipe_moreira@outlook.com" },
    { label: "LinkedIn", value: "/in/fellipesmoreira", icon: "▶", href: "https://www.linkedin.com/in/fellipesmoreira/" },
    { label: "GitHub", value: "@FellipeMoreira1", icon: "◈", href: "https://github.com/FellipeMoreira1" },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 relative bg-[#05090f]">
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
        <div className="flex items-center gap-4 mb-10 md:mb-16">
          <span className="font-mono text-[#00ff41] text-sm">04.</span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-white">
            Contacto
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-green-500/30 to-transparent" />
        </div>

        <div className="space-y-8">
          <p className="text-slate-300 text-sm leading-relaxed font-mono">
            <span className="text-[#00ff41]">$ </span>
            Disponível para projetos de pentesting, consultoria de segurança,
            bug bounty e colaborações.
          </p>

          <div className="space-y-4">
            {contacts.map((item) => (
              <div key={item.label} className="flex items-center gap-3 font-mono text-sm">
                <span className="text-[#00ff41] w-4">{item.icon}</span>
                <div>
                  <div className="text-slate-500 text-xs">{item.label}</div>
                  <a
                    href={item.href}
                    target={item.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-[#00ff41] transition-colors"
                  >
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
