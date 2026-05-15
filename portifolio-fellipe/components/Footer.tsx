export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-green-500/10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-sm text-slate-500">
          <span className="text-green-500/40">&gt; </span>
          © {new Date().getFullYear()} Fellipe Moreira — All rights reserved.
        </div>

        {/* Social quick links */}
        <div className="flex items-center gap-5">
          {[
            { label: "GitHub", href: "https://github.com/FellipeMoreira1", icon: "◈" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/fellipesmoreira/", icon: "▶" },
            { label: "Email", href: "mailto:fellipe_moreira@outlook.com", icon: "✉" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="font-mono text-xs text-slate-500 hover:text-[#00ff41] transition-colors inline-flex items-center gap-1.5"
            >
              <span className="text-green-500/40 group-hover:text-[#00ff41]">{link.icon}</span>
              {link.label}
            </a>
          ))}
        </div>

        <div className="font-mono text-xs text-slate-600">
          Next.js · Tailwind · TypeScript
        </div>
      </div>
    </footer>
  );
}
