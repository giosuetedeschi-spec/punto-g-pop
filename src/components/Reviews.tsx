import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Marco P.",
    rating: 5,
    text: "Miglior pasticceria senza glutine di Torino! I bignè sono divini, sempre freschi e il personale è super gentile.",
    date: "2 settimane fa",
  },
  {
    name: "Giulia R.",
    rating: 5,
    text: "Finalmente un posto dove posso mangiare una pizza al taglio senza pensieri. La crosta è croccante e gustosa, sembra normale!",
    date: "1 mese fa",
  },
  {
    name: "Alessandro M.",
    rating: 5,
    text: "Ho ordinato una torta di compleanno su commissione: senza glutine E senza lattosio. Era bellissima e buonissima. Grazie Milko!",
    date: "3 settimane fa",
  },
  {
    name: "Francesca L.",
    rating: 4,
    text: "Ottimi prodotti e convenzione ASL comodissima. Unico neo: il sabato mattina c'è un po' di fila, ma vale la pena aspettare.",
    date: "2 mesi fa",
  },
  {
    name: "Davide C.",
    rating: 5,
    text: "Le tagliatelle fresche sono le migliori che abbia mai mangiato, glutine o no. Antonio è un vero artigiano.",
    date: "1 mese fa",
  },
  {
    name: "Sara B.",
    rating: 5,
    text: "Ambiente accogliente, prodotti fantastici e prezzi onesti. Il tiramisù monoporzione è una meraviglia. Consigliatissimo!",
    date: "3 mesi fa",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <span className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < count ? "fill-primary text-primary" : "text-ink/20"}
        />
      ))}
    </span>
  );
}

export function Reviews() {
  return (
    <section id="recensioni" className="border-y-[3px] border-ink bg-lime/40">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="max-w-2xl">
          <span className="font-display text-sm uppercase tracking-widest text-primary">
            Cosa dicono di noi
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl">
            Le recensioni dei nostri clienti
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Non è solo noi a dire che siamo buoni — sono i nostri clienti.
            Ecco cosa pensano di Punto G.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-3xl border-[3px] border-ink bg-card p-6 shadow-[var(--shadow-pop)] transition-transform hover:-translate-y-1"
            >
              <Quote size={24} className="text-primary/40" />
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                "{r.text}"
              </p>
              <div className="mt-4 flex items-center justify-between border-t-[3px] border-ink/10 pt-4">
                <div>
                  <p className="font-bold">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.date}</p>
                </div>
                <Stars count={r.rating} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://maps.app.goo.gl/wEcpKKyv1aqw5N3j6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-card px-6 py-3 font-bold shadow-[var(--shadow-pop-sm)] transition-transform hover:-translate-y-0.5"
          >
            <Star size={18} className="fill-primary text-primary" />
            Vedi tutte le recensioni su Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
