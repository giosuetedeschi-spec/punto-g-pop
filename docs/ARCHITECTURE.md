# Punto G - Architettura & Documentazione Tecnica

## Indice
1. Panoramica
2. Stack Tecnologico
3. Struttura Progetto
4. Design System
5. Routing & SSR
6. Componenti
7. Build & Deploy
8. Configurazione Ambiente
9. Sviluppo
10. Troubleshooting

---

## Panoramica

Punto G e' una gastronomia, rosticceria, pasticceria e pastificio 100% senza glutine a Torino (Piazza Montanari 143/B), realizzato da Milko e Antonio.

Il sito e' una Single Page Application (SPA) con Server-Side Rendering (SSR) costruita con TanStack Start, React 19 e Tailwind CSS v4.

Funzionalita:
- Homepage con hero section, filosofia, mappa, footer
- Sistema di prenotazione online con carrello
- Ordini su commissione personalizzati
- Sezione informativa convenzione ASL per celiaci
- Mappa Google Maps integrata
- Design responsive mobile-first stile Pop Art

---

## Stack Tecnologico

| Layer | Tecnologia | Versione |
|-------|-----------|----------|
| Runtime | Bun | 1.x |
| Framework | TanStack Start | 1.167.50 |
| UI Library | React | 19.2.0 |
| Linguaggio | TypeScript | 5.7+ |
| Routing | TanStack Router | 1.168.25 |
| Build | Vite | 6.x |
| Styling | Tailwind CSS | 4.2.1 |
| Componenti UI | Radix UI | various |
| Form | React Hook Form | 7.x |
| Validazione | Zod | 3.x |
| Notifiche | Sonner | 1.x |
| Icone | Lucide React | 0.575.0 |
| Lint | ESLint | 9.x |
| Format | Prettier | 3.x |

---

## Struttura Progetto

punto-g-pop/
+-- public/
|   +-- robots.txt
+-- src/
|   +-- router.tsx              # Setup TanStack Router + SSR
|   +-- server.ts               # Entry point server (h3 + error handling)
|   +-- start.ts                # Entry point startup
|   +-- styles.css              # Tema Tailwind + variabili CSS pop art
|   +-- routeTree.gen.ts        # Auto-generato da TanStack Router
|   +-- assets/                 # Immagini statiche
|   |   +-- hero-cooks.jpg
|   |   +-- pasticceria.jpg
|   |   +-- pastificio.jpg
|   |   +-- rosticceria.jpg
|   +-- components/
|   |   +-- Navbar.tsx          # Navbar sticky con sidebar mobile
|   |   +-- Hero.tsx            # Hero section con CTA
|   |   +-- Philosophy.tsx      # Sezione filosofia (Milko & Antonio)
|   |   +-- Reservation.tsx     # Sistema prenotazione con carrello
|   |   +-- AslSection.tsx      # Sezione convenzione ASL
|   |   +-- MapSection.tsx      # Mappa Google + info contatto
|   |   +-- Footer.tsx          # Footer con social
|   |   +-- ui/                 # Componenti shadcn/ui (Button, Input, etc.)
|   +-- hooks/
|   |   +-- use-mobile.tsx      # Hook detect mobile
|   +-- lib/
|   |   +-- config.server.ts    # Config server-only (env vars)
|   |   +-- error-capture.ts    # Cattura errori SSR
|   |   +-- error-page.ts       # Pagina errore HTML
|   |   +-- utils.ts            # Utility (cn per class merging)
|   +-- routes/
|       +-- index.tsx           # Route principale (/)
|       +-- __root.tsx          # Root layout
|       +-- sitemap[.]xml.ts    # Sitemap dinamica
+-- docs/
|   +-- ARCHITECTURE.md         # Questo file
+-- package.json
+-- vite.config.ts
+-- tsconfig.json
+-- bun.lock

---

## Design System

### Palette Colori (Pop Art)

Primari:
- primary: #ff823a (Arancione)
- secondary: #bc84ee (Viola)
- lime: #dcfd8b (Lime/Verde chiaro)

Neutri:
- background: #fff8ef (Beige chiaro)
- foreground: #1a1414 (Nero morbido)
- ink: #1a1414 (Linee/bordi)
- card: #ffffff (Bianco)

Effetti ombra pop:
- shadow-pop: 6px 6px 0 0 var(--ink)
- shadow-pop-lg: 10px 10px 0 0 var(--ink)
- shadow-pop-sm: 4px 4px 0 0 var(--ink)

### Font
- Display: Archivo Black (titoli)
- Body: Space Grotesk (testo)

### Bordi
Tutti i componenti principali hanno border-[3px] border-ink per lo stile pop art.

---

## Routing & SSR

### TanStack Router (File-Based)
- src/routes/index.tsx -> / (homepage)
- src/routes/__root.tsx -> Layout root (wrapper)

### SSR Head Management
Ogni route definisce head() per SEO (title, description, og:title, og:description).

### Routing Frontend
Navigazione interna con ancore HTML (#prenota, #filosofia, #asl, #dove).

---

## Componenti

### Navbar
- Sticky top con backdrop-blur
- Logo con lettera G in cerchio arancione
- Link interni: Chi siamo, Prenota, Convenzione ASL, Dove siamo
- CTA Prenota ora prominente
- Mobile: sidebar collapse con hamburger menu

### Hero
- Immagine cuochi con overlay halftone pattern
- Badge 100% Senza Glutine
- Titolo: Gusto POP, zero glutine.
- CTA: Prenota i prodotti + Vieni a trovarci

### Philosophy
- Tre card: Artigianalita, Sicurezza, Inclusivita
- Icona + titolo + descrizione per ogni valore
- Ombreggiatura pop art

### Reservation
- 3 categorie: Rosticceria, Pasticceria, Pastificio
- Prodotti con quantita selezionabile (+/-)
- Carrello con totale e rimozione
- Form prenotazione: nome, email, data, note
- Validazione con Zod
- Feedback toast con Sonner

### AslSection
- Info convenzione ASL per celiaci
- Lista punti vantaggio con icone ShieldCheck
- CTA verso la mappa

### MapSection
- Google Maps embed dell'indirizzo
- Info contatto: indirizzo, telefono, email, orari
- Link Indicazioni stradali verso Google Maps

### Footer
- Logo + tagline
- Indirizzo
- Link social (Instagram, Facebook)
- Copyright dinamico

---

## Build & Deploy

Comandi:
  bun run build           # Build produzione
  bun run build:dev       # Build development
  bun run preview         # Preview locale

Deploy opzioni:
1. Vercel (auto-deploy da GitHub)
2. Cloudflare Workers (default TanStack Start con Nitro)
3. Docker + Proxmox (self-hosted)

---

## Configurazione Ambiente

.env (non committare):
  VITE_SITE_URL=https://puntog.it        # Pubblico (Vite prefisso)
  DATABASE_URL=postgresql://...          # Server-only

Regola: VITE_* = pubblico (esposto al client), altri = server-only.

---

## Sviluppo

Setup:
  git clone https://github.com/giosuetedeschi-spec/punto-g-pop.git
  cd punto-g-pop
  bun install
  bun run dev

Alias import: @/ -> ./src/
Class merging: cn() da tailwind-merge + clsx
Componenti UI: pattern shadcn/ui in src/components/ui/

---

## Troubleshooting

Build fallisce con duplicate plugin:
  Non aggiungere manualmente: tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro.
  Sono gia inclusi in @lovable.dev/vite-tanstack-config.

Errori SSR h3:
  src/server.ts wrappa errori catastrofici della SSR e restituisce pagina errore HTML.

Variabili ambiente undefined:
  Su Cloudflare Workers, leggi process.env DENTRO le funzioni handler, non a modulo scope.
