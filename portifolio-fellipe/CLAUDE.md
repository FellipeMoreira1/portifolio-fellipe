# CLAUDE.md

## Commands
```bash
npm run dev      # localhost:3000
npm run build    # verify types/compile
npm run lint
npm run start    # serve production build
```

## Architecture

Next.js 15 App Router, single page. `app/page.tsx` composes sections:
`Navbar → Hero → About → Certifications → Experience → Contact → Footer`

> `Projects` está comentado em `app/page.tsx` (`{/* <Projects /> */}`) — secção em construção, código intacto em `components/Projects.tsx`.

Navbar anchors: `#about` `#certifications` `#experience` `#contact`
Link `#projects` comentado em `Navbar.tsx` navLinks array.

**Content lives as typed arrays at the top of each component — no CMS, no fetching:**
- `About.tsx` — `skills[]` groups, inline stats
- `Certifications.tsx` — `Certification[]` com campos: `badge`, `badgeColor`, `badgeBg?`, `badgeImageUrl?`, `issuerUrl`, `url?`, `credentialId?`
- `Experience.tsx` — `Position[]` · `current?: boolean` (timeline, newest first)
- `Projects.tsx` — `Project[]` · `type: "pentest"|"tool"|"research"|"ctf"` (oculto)

Section numbers: 01 About · 02 Certifications · 03 Experience · 04 Projects · 05 Contact

`"use client"` only: `Navbar` (scroll + mobile menu), `Hero` (typing animation), `Contact` (form state).

## Design System

Dark bg `#030712`, accent `#00ff41` (cyber green), secondary `#080f12` / `#0d1a14`.
`font-mono` for all labels/headings; `text-slate-*` for body.

Tailwind tokens (`tailwind.config.ts`): colors `dark.900/800/700` `green.cyber` · animations `blink` `fade-in` `slide-up` `glow-pulse` `scan-line`.

Utility classes (`globals.css`): `.glow-green` `.glow-border` `.terminal-cursor` `.scan-overlay` `.card-hover`.

Grid/glow effects use inline `style=` props with `rgba` (not Tailwind classes).

## Responsividade

Site totalmente responsivo. Breakpoints usados: `sm` (640px) · `md` (768px) · `lg` (1024px).
- Hero: `text-4xl sm:text-6xl md:text-8xl` · botões `flex-col sm:flex-row`
- Navbar: logo `> FM_` mobile / `> FELLIPE MOREIRA_` sm+
- Secções: `py-16 md:py-24` · `px-4 sm:px-6`
- globals.css: `min-width: 0` em `*`, `-webkit-text-size-adjust: 100%`

## Certifications — Badge System

Cada certificação tem badge com imagem real ou badge colorido:

| Certificação | Badge | Fonte |
|---|---|---|
| AZ-900, SC-900 | Credly PNG (escudo oficial) | `images.credly.com` |
| MS-900 | Credly PNG (escudo oficial) | `images.credly.com` |
| Udemy SC-900 | SVG local | `public/badges/udemy.svg` |
| XP Educação (IGTI) | SVG oficial | `public/badges/igti.svg` |
| DIO | SVG oficial | `public/badges/dio.svg` |
| Silveiro Advogados | SVG recriado | `public/badges/silveiro.svg` |
| Ka Solution | PNG oficial | `public/badges/kasolution.png` |

Campos do badge no componente:
- `badgeImageUrl` — URL ou path local (`/badges/...`)
- `badgeBg` — `#ffffff` para logos com fundo branco · `#0d1117` para logos com fundo escuro
- `badgeColor` — cor usada no glow (`box-shadow`) e no ponto colorido do rodapé

## Hero

Botões ativos: `Contactar` · `LinkedIn` · `Baixe meu CV` (todos com estilo `border-[#00ff41]/50 text-[#00ff41]`).
Botão `Ver Projetos` comentado — reativar quando Projects estiver pronto.
Background: `public/images/hero-bg.jpg` com overlay `bg-[#030712]/80`.

## About

Foto de perfil circular em `public/images/profile.jpg` com glow verde.
Skills grid: sempre 2 colunas (`grid-cols-2`), cards com `flex flex-col` para preencher altura total.
Fontes aumentadas: bio `text-base`, skills `text-base`, stats valor `text-3xl`.

## Contact

Contactos reais:
- Email: `fellipe_moreira@outlook.com` (`mailto:`)
- LinkedIn: `linkedin.com/in/fellipesmoreira/` (link externo)
- GitHub: `github.com/FellipeMoreira1` (link externo)
- HackTheBox: `@fellipe_htb` (sem link)
- PGP Key: placeholder fictício — substituir quando chave real for gerada

## Assets

`public/Fellipe_Moreira_CV.pdf` — linked from Hero "Baixe meu CV" button (`download` attribute).
`public/badges/` — logos das entidades certificadoras.
`public/images/hero-bg.jpg` — imagem de fundo do Hero (cybersecurity banner).
`public/images/profile.jpg` — foto de perfil usada no About.

## Deploy

`vercel.json` configured — push to GitHub (`FellipeMoreira1/portifolio-fellipe`) triggers auto-deploy. No env vars required.

## Contact Form

`Contact.tsx` simulates send with `setTimeout`. Replace at `// Simula envio` with Formspree / Resend / EmailJS.
