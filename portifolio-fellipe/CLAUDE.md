# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server at http://localhost:3000
npm run build    # production build (run this to verify no type/compile errors)
npm run lint     # ESLint via next lint
npm run start    # serve the production build locally
```

No test suite is configured.

## Architecture

Single-page Next.js 15 App Router application. All content is in one route (`app/page.tsx`) that composes seven section components in order: `Navbar → Hero → About → Certifications → Projects → Contact → Footer`.

Each section is a standalone file under `components/` and uses an `id` attribute matching the navbar anchor links (`#about`, `#certifications`, `#projects`, `#contact`).

**Content is stored as typed arrays at the top of each component file** — no CMS, no external data fetching:
- `components/Certifications.tsx` — `certifications: Certification[]` with `status: "active" | "progress" | "expired"`
- `components/Projects.tsx` — `projects: Project[]` with `type: "pentest" | "tool" | "research" | "ctf"`
- `components/About.tsx` — `skills[]` groups and inline stat numbers

Client components (`"use client"`) are only `Navbar` (scroll detection, mobile menu state) and `Hero` (typing animation loop) and `Contact` (form state). All others are server components.

## Design System

Cyber/hacker aesthetic: dark background `#030712`, primary accent `#00ff41` (cyber green), secondary darks `#080f12` / `#0d1a14`. Font: `font-mono` for all labels, headings, and code-like elements; `text-slate-*` scale for body text.

Custom Tailwind tokens defined in `tailwind.config.ts`:
- Colors: `dark.900/800/700`, `green.cyber`
- Animations: `blink`, `fade-in`, `slide-up`, `glow-pulse`, `scan-line`
- Background utilities: `grid-pattern`, `radial-green`

Utility classes defined in `globals.css` (not Tailwind plugins): `.glow-green`, `.glow-border`, `.terminal-cursor`, `.scan-overlay`, `.card-hover`.

Grid backgrounds and glow effects are applied inline via `style=` props (not Tailwind classes) because they use `rgba` values that aren't in the config.

## Deploy

`vercel.json` is configured — importing the GitHub repo into Vercel deploys automatically. No environment variables required.

## Contact Form

`components/Contact.tsx` currently simulates sending with a `setTimeout`. To make it functional, replace the mock with a real provider (Formspree, Resend, EmailJS) at the `// Simula envio` comment block.
