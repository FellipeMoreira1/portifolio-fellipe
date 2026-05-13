export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-green-500/10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-sm text-slate-600">
          <span className="text-green-500/40">&gt; </span>
          © {new Date().getFullYear()} Fellipe — All rights reserved.
        </div>
        <div className="font-mono text-xs text-slate-700">
          Built with Next.js · Tailwind CSS · TypeScript
        </div>
      </div>
    </footer>
  );
}
