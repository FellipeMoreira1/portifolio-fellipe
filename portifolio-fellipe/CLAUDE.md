# CLAUDE.md

## Commands
```bash
npm run dev      # localhost:3000
npm run build    # verify types/compile
npm run lint
npm run start    # serve production build
```

## Architecture

Next.js 15 App Router, single page. `app/page.tsx` composes 8 sections:
`Navbar → Hero → About → Certifications → Experience → Projects → Contact → Footer`

Navbar anchors: `#about` `#certifications` `#experience` `#projects` `#contact`

**Content lives as typed arrays at the top of each component — no CMS, no fetching:**
- `About.tsx` — `skills[]` groups, inline stats
- `Certifications.tsx` — `Certification[]` · `status: "active"|"progress"|"expired"` · `url?`
- `Experience.tsx` — `Position[]` · `current?: boolean` (timeline, newest first)
- `Projects.tsx` — `Project[]` · `type: "pentest"|"tool"|"research"|"ctf"`

Section numbers: 01 About · 02 Certifications · 03 Experience · 04 Projects · 05 Contact

`"use client"` only: `Navbar` (scroll + mobile menu), `Hero` (typing animation), `Contact` (form state).

## Design System

Dark bg `#030712`, accent `#00ff41` (cyber green), secondary `#080f12` / `#0d1a14`.
`font-mono` for all labels/headings; `text-slate-*` for body.

Tailwind tokens (`tailwind.config.ts`): colors `dark.900/800/700` `green.cyber` · animations `blink` `fade-in` `slide-up` `glow-pulse` `scan-line`.

Utility classes (`globals.css`): `.glow-green` `.glow-border` `.terminal-cursor` `.scan-overlay` `.card-hover`.

Grid/glow effects use inline `style=` props with `rgba` (not Tailwind classes).

## Assets

`public/Fellipe_Moreira_CV.pdf` — linked from Hero "Baixe meu CV" button (`download` attribute).

## Deploy

`vercel.json` configured — push to GitHub triggers auto-deploy. No env vars required.

## Contact Form

`Contact.tsx` simulates send with `setTimeout`. Replace at `// Simula envio` with Formspree / Resend / EmailJS.
