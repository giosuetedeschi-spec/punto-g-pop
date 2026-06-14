# Punto G — 🍳 Gastronomia & Pastificio Senza Glutine

Sito web per **Punto G**, gastronomia, rosticceria, pasticceria e pastificio 100% senza glutine a Torino (Piazza Montanari 143/B).

Realizzato da Milko e Antonio, Punto G offre prodotti artigianali senza glutine con laboratorio dedicato e convenzione ASL per celiaci.

![Punto G](https://raw.githubusercontent.com/giosuetedeschi-spec/punto-g-pop/main/src/assets/hero-cooks.jpg)

## ✨ Funzionalità

- **Homepage completa**: Hero section, filosofia, mappa, footer
- **Prenotazione online**: Catalogo prodotti diviso in rosticceria, pasticceria e pastificio con gestione carrello
- **Ordini su commissione**: Richiesta personalizzate (torte, buffet, menù)
- **Sezione ASL**: Info sulla convenzione per l'uso dei buoni celiachia
- **Mappa integrata**: Google Maps con indicazioni stradali
- **Responsive**: Layout adattivo mobile/desktop con sidebar collapse
- **Pop Art UI**: Design colorato con stile pop (colori lime, arancione, viola, ombrette nere)

## 🛠️ Stack Tecnologico

| Layer | Tecnologia |
|-------|------------|
| Framework | [TanStack Start](https://tanstack.com/start) (React + SSR) |
| Linguaggio | TypeScript |
| Routing | TanStack Router (file-based, con `head()` per SEO/meta) |
| Build | [Vite](https://vitejs.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) + `tailwind-merge` + `class-variance-authority` |
| Componenti UI | [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/) pattern (`src/components/ui/`) |
| Validazione | [Zod](https://zod.it/) (schema prenotazione) |
| Form | [React Hook Form](https://react-hook-form.com/) + `@hookform/resolvers` |
| Notifiche | [Sonner](https://sonner.emilkowal.ski/) (toast) |
| Icone | [Lucide React](https://lucide.dev/) |
| Lint/Format | ESLint 9 + Prettier |
| Package Manager | [Bun](https://bun.sh/) |

## 📁 Struttura del Progetto

```
punto-g-pop/
├── public/
│   └── robots.txt
├── src/
│   ├── router.tsx              # Setup TanStack Router
│   ├── routeTree.gen.ts        # Route tree autogenerato
│   ├── server.ts               # Entry SSR
│   ├── start.ts                # Entry client
│   ├── styles.css              # Global CSS + tema Pop Art (CSS vars)
│   ├── assets/                 # Immagini (hero, rosticceria, pasticceria, pastificio)
│   ├── components/
│   │   ├── Navbar.tsx          # Header sticky con nav + mobile menu
│   │   ├── Hero.tsx            # Hero con CTA prenotazione e mappa
│   │   ├── Philosophy.tsx      # Sezione "Milko & Antonio" + valori
│   │   ├── Reservation.tsx     # Form prenotazione con catalogo + carrello
│   │   ├── AslSection.tsx      # Sezione convenzione ASL
│   │   ├── MapSection.tsx      # Google Maps embed + contatti + orari
│   │   ├── Footer.tsx          # Footer con social e indirizzo
│   │   └── ui/                 # Componenti shadcn/ui (40+ primitives)
│   ├── hooks/
│   │   └── use-mobile.tsx      # Hook detect mobile breakpoint
│   ├── lib/
│   │   ├── config.server.ts    # Config server-side
│   │   ├── error-capture.ts    # Error boundary
│   │   ├── error-page.ts       # Pagina errore
│   │   ├── utils.ts            # Utilità (cn, ecc.)
│   │   └── api/
│   │       └── example.functions.ts
│   └── routes/
│       ├── __root.tsx          # Layout root
│       ├── index.tsx           # Homepage (assembla tutti i componenti)
│       ├── sitemap[.]xml.ts    # Sitemap dinamica
│       └── README.md
├── components.json             # Config shadcn/ui
├── vite.config.ts              # Config Vite + TanStack Start plugin
├── tsconfig.json               # Config TypeScript
├── bun.lock                    # Lockfile Bun
├── package.json                # Dipendenze e script
├── eslint.config.js            # Config ESLint 9
├── .prettierrc                 # Config Prettier
└── .prettierignore
```

## 🚀 Come Avviato

### Prerequisiti

- [Bun](https://bun.sh/) (v1.x+) — oppure npm/pnpm/yarn

### Installazione

```bash
# Clona il repository
git clone https://github.com/giosuetedeschi-spec/punto-g-pop.git
cd punto-g-pop

# Installa le dipendenze
bun install
```

### Sviluppo

```bash
# Avvia il server di sviluppo
bun run dev
```

Apri `http://localhost:5173` nel browser.

### Build Produzione

```bash
# Build ottimizzato
bun run build

# Preview del build
bun run preview
```

### Lint & Format

```bash
bun run lint      # Controllo ESLint
bun run format    # Formattazione Prettier
```

## 🎨 Personalizzazione del Tema

Il tema Pop Art è definito in `src/styles.css` tramite CSS custom properties:

```css
--color-primary:    /* arancione/rosa pop */
--color-secondary:  /* viola pop */
--color-lime:       /* lime pop */
--color-ink:        /* nero bordi */
```

I componenti UI shadcn/ui sono in `src/components/ui/` — personalizzabili singolarmente.

## 📦 Dipendenze Chiave

- **React 19** con JSX trasform
- **TanStack Router** per il routing file-based con supporto SSR
- **TanStack Start** come meta-framework (SSR + build)
- **Radix UI** come primitive accessibili
- **Tailwind CSS v4** per lo styling utility-first
- **Zod + React Hook Form** per validazione form type-safe

## 📝 Note

- La prenotazione è **frontend-only** (toast di conferma, nessun backend integrato)
- Le immagini dei prodotti sono in `src/assets/`
- La mappa usa Google Maps_embed (nessuna API key richiesta)
- I link social (Instagram, Facebook) puntano a pagine placeholder da configurare

## 📄 Licenza

Tutti i diritti riservati © 2026 Punto G
