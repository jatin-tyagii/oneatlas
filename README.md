# OneAtlas — Next.js Migration

A pixel-faithful port of the OneAtlas.dev landing page from a single-file HTML/CSS/JS source to **Next.js 14 (App Router) + TypeScript + TailwindCSS + shadcn/ui**.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Build for production

```bash
npm run build
npm start
```

## Stack

- **Next.js 14** (App Router)
- **TypeScript** strict mode
- **TailwindCSS 3.4** with custom design tokens (colors, radii, shadows, keyframes)
- **shadcn/ui** primitives (`Button`, `Input`) for auth forms
- **lucide-react** + inline SVG for icons
- Inter / JetBrains Mono / Instrument Serif via `next/font`

## What was migrated

The source HTML contains a marketing landing page. Every section is ported faithfully:

- Animated hero canvas (blobs, particles, mouse-aware halos, click ripples)
- Sticky glass nav
- AI model strip (infinite-scroll marquee)
- 4-step "Idea to live app" cards with mini previews
- **Platform bento** — interactive 3D stack (click to cycle layers, parallax tilt), live terminal log on hover, deploy progress, role dropdown, cron jobs with add-row, orbiting integrations chips with tooltips, edge-speed count-up
- Templates grid with category filter chips
- Roles bento (PMs, entrepreneurs, marketers, agencies, students)
- Compare table
- Integrations grid
- Pricing with billing toggle and 3 plans
- FAQ accordion
- Final CTA + footer
- Global cursor glow

## Project structure

```
src/
├── app/
│   ├── layout.tsx               Fonts + global styles
│   ├── page.tsx                 Landing page (composes all sections)
│   ├── globals.css              Design tokens + component classes
│   ├── login/page.tsx
│   ├── signup/page.tsx
│   ├── dashboard/page.tsx       Placeholder (reserved for authenticated UI)
│   └── builder/page.tsx         Placeholder (reserved for prompt-to-app builder)
├── components/
│   ├── landing/                 All marketing sections
│   │   ├── cursor-glow.tsx
│   │   ├── logo.tsx
│   │   ├── nav.tsx
│   │   ├── hero.tsx / hero-canvas.tsx
│   │   ├── models-strip.tsx
│   │   ├── steps.tsx / steps-canvas.tsx
│   │   ├── platform.tsx         (heaviest — all platform interactions)
│   │   ├── templates.tsx
│   │   ├── roles-bento.tsx
│   │   ├── compare.tsx
│   │   ├── integrations.tsx
│   │   ├── pricing.tsx
│   │   ├── faq.tsx
│   │   ├── final-cta.tsx
│   │   └── footer.tsx
│   ├── auth/                    Login, signup, Google button
│   └── ui/                      shadcn primitives (button, input)
├── lib/utils.ts                 `cn` helper
└── hooks/use-animation-loop.ts  Shared rAF registry (available, not currently used)
```

## Notes on the migration approach

The source HTML uses many highly specific CSS values (e.g. `14.5px` font sizes, `clamp(36px, 5.2vw, 72px)`, custom radial-gradient mask layers, perspective 3D transforms, hand-tuned keyframes). Converting all of these to pure Tailwind utilities would either explode arbitrary-value usage or lose pixel-fidelity.

The chosen approach:

- **Design tokens** (colors, radii, shadows) are exposed as both CSS variables in `globals.css` **and** Tailwind theme tokens in `tailwind.config.ts`, so utility classes work with the same palette.
- **Component classes** that have no clean Tailwind equivalent (`.hero`, `.pf-tile`, `.t-hero`, `.step-item`, `.cmp-row`, etc.) are preserved verbatim under `@layer components` in `globals.css`. This keeps every pixel-level decision intact while still benefiting from Tailwind's reset, layout utilities, and the auth form styling.
- **JS interactions** (canvas animations, 3D stack rotation, terminal log spawner, FAQ accordion, pricing toggle, filter chips, role dropdown, orbit tooltips, speed counter) are ported to React state + `useEffect`. Each canvas owns its own `requestAnimationFrame` loop with cleanup on unmount.
- **Fonts**: `next/font/google` loads Inter, JetBrains Mono, and Instrument Serif. The original source also requested "Sohne" (a commercial Klim font), which was dropped — Google Fonts doesn't host it.

## Scope

The source HTML only contains the marketing landing page. The original migration spec also listed dashboard, builder, and preview routes, but those screens were not part of the source. Building them from scratch would have meant **designing new UI**, which violates the "DO NOT redesign anything" rule. Instead, `/dashboard` and `/builder` exist as honest placeholders so navigation works — wire your own UI in when you're ready.

`/login` and `/signup` are fully built with shadcn `Input`/`Button` primitives and a Google OAuth button UI, including loading states. They're not wired to a real auth provider — plug in NextAuth / Clerk / Supabase / etc. as needed.
