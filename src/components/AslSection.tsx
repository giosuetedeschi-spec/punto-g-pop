import { BadgeCheck, FileText, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const points = [
  "Prodotti riconosciuti dal Sistema Sanitario Nazionale",
  "Spesa detraibile tramite buoni ASL per celiaci",
  "Personale formato sulla gestione del senza glutine",
];

export function AslSection() {
  return (
    <section id="asl" className="border-y-[3px] border-ink bg-secondary">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-card px-4 py-1.5 text-sm font-bold shadow-[var(--shadow-pop-sm)]">
            <BadgeCheck size={16} /> Convenzione ASL
          </span>
          <h2 className="mt-5 text-4xl text-secondary-foreground md:text-5xl">
            Usa i tuoi buoni celiachia da noi
          </h2>
          <p className="mt-4 max-w-md text-lg text-secondary-foreground/80">
            Punto G è un punto vendita convenzionato: puoi acquistare i prodotti
            senza glutine utilizzando i buoni erogati dall'ASL. Porta il tuo
            tesserino e pensiamo noi al resto.
          </p>

          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 rounded-2xl border-[3px] border-ink bg-card p-3 shadow-[var(--shadow-pop-sm)]"
              >
                <ShieldCheck className="mt-0.5 shrink-0 text-primary" size={22} />
                <span className="font-semibold">{p}</span>
              </li>
            ))}
          </ul>

          <Button variant="pop" size="lg" className="mt-7" asChild>
            <a href="#dove">
              <FileText /> Chiedi informazioni
            </a>
          </Button>
        </div>

        <div className="relative">
          <div className="rounded-3xl border-[3px] border-ink bg-lime p-8 shadow-[var(--shadow-pop-lg)]">
            <div className="rounded-2xl border-[3px] border-dashed border-ink bg-card p-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-ink bg-primary text-primary-foreground shadow-[var(--shadow-pop-sm)]">
                <BadgeCheck size={30} />
              </div>
              <p className="mt-4 font-display text-3xl">Convenzionato</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Sistema Sanitario Nazionale
              </p>
              <div className="mt-5 grid grid-cols-3 gap-2 text-xs font-bold">
                <span className="rounded-lg border-[3px] border-ink bg-lime py-2">
                  Celiachia
                </span>
                <span className="rounded-lg border-[3px] border-ink bg-primary py-2 text-primary-foreground">
                  Buoni
                </span>
                <span className="rounded-lg border-[3px] border-ink bg-secondary py-2">
                  No glutine
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
