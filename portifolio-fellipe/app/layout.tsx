import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fellipe | Cyber Security Specialist",
  description:
    "Portfolio profissional de Fellipe — Cyber Security Specialist. Pentesting, análise de vulnerabilidades e segurança ofensiva.",
  keywords: ["cybersecurity", "pentesting", "security", "portfolio", "Fellipe"],
  openGraph: {
    title: "Fellipe | Cyber Security Specialist",
    description: "Portfolio profissional de cibersegurança",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body className="bg-[#030712] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
