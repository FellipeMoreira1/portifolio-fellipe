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
- `About.tsx` — `skills[]` groups com campo `level: "Expert"|"Advanced"|"Proficient"` por item
- `Certifications.tsx` — `Certification[]` com campos: `badge`, `badgeColor`, `badgeBg?`, `badgeImageUrl?`, `issuerUrl`, `url?`, `credentialId?`
- `Experience.tsx` — `Position[]` · `current?: boolean` (timeline, newest first) · colapsa a 3 por defeito
- `Projects.tsx` — `Project[]` · `type: "pentest"|"tool"|"research"|"ctf"` (oculto)

Section numbers: 01 About · 02 Certifications · 03 Experience · 04 Contact
*(04 Projects reservado para quando Projects for activado)*

`"use client"` components: `Navbar` (scroll + active section + animations), `Hero` (typing animation), `Contact` (form state), `Experience` (expand/collapse state).

## Design System

Dark bg `#030712`, accent `#00ff41` (cyber green), secondary `#080f12` / `#0d1a14`.
`font-mono` for all labels/headings; `text-slate-*` for body.

Tailwind tokens (`tailwind.config.ts`): colors `dark.900/800/700` `green.cyber` · animations `blink` `fade-in` `slide-up` `glow-pulse` `scan-line`.

Utility classes (`globals.css`): `.glow-green` `.glow-border` `.terminal-cursor` `.scan-overlay` `.card-hover`.

Grid/glow effects use inline `style=` props with `rgba` (not Tailwind classes).

**Contrast:** usar mínimo `text-slate-400` para texto legível — `text-slate-500` apenas para elementos decorativos secundários. `text-slate-600` falha WCAG AA.

## Animações on-scroll

Implementadas via `IntersectionObserver` no `Navbar.tsx` (já client component).
- Todas as `<section>` começam com `opacity:0 translateY(20px)` via CSS em `globals.css`
- `section#hero` é excepção — sempre visível, sem animação de entrada
- Observer adiciona classe `.is-visible` quando a secção entra no viewport (threshold 0.08)
- `@media (prefers-reduced-motion: reduce)` desactiva todas as animações e transições

## Responsividade

Site totalmente responsivo. Breakpoints usados: `sm` (640px) · `md` (768px) · `lg` (1024px).
- Hero: `text-4xl sm:text-6xl md:text-8xl` · botões `flex-col sm:flex-row`
- Navbar: logo `> FM_` mobile / `> FELLIPE MOREIRA_` sm+
- Secções: `py-16 md:py-24` · `px-4 sm:px-6`
- globals.css: `min-width: 0` em `*`, `-webkit-text-size-adjust: 100%`

## Navbar — Secção Activa

O `Navbar.tsx` usa dois `IntersectionObserver` em simultâneo:
1. **activeObserver** (`rootMargin: "-40% 0px -55% 0px"`) → actualiza `activeSection` state → highlight do link activo (underline verde full-width + texto cyber green)
2. **animObserver** (`threshold: 0.08`) → adiciona `.is-visible` às secções → dispara fade-in (unobserve após trigger)

## Hero — Hierarquia de CTAs

Botão primário: `Contactar` (sólido: `bg-[#00ff41] text-black`)
Botões secundários: `LinkedIn` · `Baixe meu CV` (ghost: `border-[#00ff41]/50 text-[#00ff41]`)
Botão `Ver Projetos` comentado — reativar quando Projects estiver pronto (tornar primário ou secundário conforme contexto).
Background: `public/images/hero-bg.jpg` com overlay `bg-[#030712]/80`.

## About — Skills com níveis

Cada skill item tem `level: "Expert" | "Advanced" | "Proficient"`.
Cores: Expert → `text-[#00ff41]` · Advanced → `text-blue-400` · Proficient → `text-slate-400`.
Configuração em `levelConfig` map no topo do componente.

## Experience — Colapso

Mostra `VISIBLE_DEFAULT = 3` posições por defeito (as mais recentes).
Botão "Ver N posições anteriores" expande para todas.
Botão "Recolher histórico" volta ao estado inicial.
Componente usa `"use client"` + `useState`.

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

**Grid 7 itens:** quando `length % 3 === 1`, o último card recebe `lg:col-start-2` para centrar na linha.

## Contact

Contactos reais:
- Email: `fellipe_moreira@outlook.com` (`mailto:`)
- LinkedIn: `linkedin.com/in/fellipesmoreira/` (link externo)
- GitHub: `github.com/FellipeMoreira1` (link externo)
- HackTheBox: `@fellipe_htb` (sem link)

**Formspree:** integração real implementada. Endpoint em `FORMSPREE_ENDPOINT` no topo do componente.
> Substituir `YOUR_FORM_ID` pelo ID do formulário em https://formspree.io (gratuito, 50 submissões/mês).

PGP Key block removido (era placeholder fictício).

## Assets

`public/Fellipe_Moreira_CV.pdf` — linked from Hero "Baixe meu CV" button (`download` attribute).
`public/badges/` — logos das entidades certificadoras.
`public/images/hero-bg.jpg` — imagem de fundo do Hero (cybersecurity banner).
`public/images/profile.jpg` — foto de perfil usada no About.

## Deploy

`vercel.json` configured — push to GitHub (`FellipeMoreira1/portifolio-fellipe`) triggers auto-deploy. No env vars required.
