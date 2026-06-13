import { MapPin, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t-[3px] border-ink bg-ink text-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-background bg-primary font-display text-lg text-primary-foreground">
              G
            </span>
            <span className="font-display text-2xl">Punto G</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-background/70">
            Gastronomia e pastificio artigianale 100% senza glutine. Torino.
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-background/80">
          <MapPin size={16} /> Piazza Montanari 143/B, Torino
        </div>

        <div className="flex gap-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-background bg-secondary text-ink transition-transform hover:-translate-y-1"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-background bg-lime text-ink transition-transform hover:-translate-y-1"
          >
            <Facebook size={20} />
          </a>
        </div>
      </div>
      <div className="border-t-[3px] border-background/20 py-4 text-center text-xs text-background/60">
        © {new Date().getFullYear()} Punto G — Tutti i diritti riservati
      </div>
    </footer>
  );
}
