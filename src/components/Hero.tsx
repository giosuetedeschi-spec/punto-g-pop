import { Sparkles, Wheat, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCooks from "@/assets/hero-cooks.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="halftone pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-lime px-4 py-1.5 text-sm font-bold shadow-[var(--shadow-pop-sm)]">
            <Wheat size={16} /> 100% Senza Glutine
          </span>

          <h1 className="mt-5 text-5xl leading-[0.95] sm:text-6xl md:text-7xl">
            Gusto
            <span className="text-primary"> POP</span>,
            <br />
            zero
            <span className="text-secondary"> glutine</span>.
          </h1>

          <p className="mt-5 max-w-md text-lg text-muted-foreground">
            Gastronomia e pastificio artigianale a Torino. Da{" "}
            <strong className="text-foreground">Milko</strong> e{" "}
            <strong className="text-foreground">Antonio</strong>, dove ogni
            prodotto è fatto a mano, con amore e senza compromessi.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button variant="pop" size="lg" asChild>
              <a href="#prenota">
                <Sparkles /> Prenota i prodotti
              </a>
            </Button>
            <Button variant="popWhite" size="lg" asChild>
              <a href="#dove">
                <MapPin /> Vieni a trovarci
              </a>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl bg-secondary" aria-hidden />
          <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-lime" aria-hidden />
          <img
            src={heroCooks}
            alt="Milko e Antonio, i fondatori di Punto G, in stile Pop Art"
            width={1280}
            height={1280}
            className="relative rounded-3xl border-[3px] border-ink object-cover shadow-[var(--shadow-pop-lg)]"
          />
        </div>
      </div>
    </section>
  );
}
