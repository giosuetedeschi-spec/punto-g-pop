import { HeartHandshake, Hammer, Leaf } from "lucide-react";

const values = [
  {
    icon: Hammer,
    title: "Artigianalità",
    text: "Impasti lavorati a mano ogni giorno, ricette costruite con pazienza e materie prime selezionate.",
    color: "bg-primary",
  },
  {
    icon: Leaf,
    title: "Sicurezza",
    text: "Laboratorio 100% gluten free: nessuna contaminazione, solo gusto a cui puoi dare fiducia.",
    color: "bg-lime",
  },
  {
    icon: HeartHandshake,
    title: "Inclusività",
    text: "Buono per chi è celiaco, buono per tutti. La tavola è un posto dove nessuno resta escluso.",
    color: "bg-secondary",
  },
];

export function Philosophy() {
  return (
    <section id="filosofia" className="border-y-[3px] border-ink bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="max-w-2xl">
          <span className="font-display text-sm uppercase tracking-widest text-primary">
            La nostra filosofia
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl">
            Milko &amp; Antonio: due artigiani, una passione
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Punto G nasce dall'idea che “senza glutine” non debba mai voler dire
            “senza gusto”. Milko e Antonio uniscono tecnica, ricerca e creatività
            per portare in tavola rosticceria, pasticceria e pasta fresca che
            sorprendono a ogni morso.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-3xl border-[3px] border-ink bg-background p-6 shadow-[var(--shadow-pop)] transition-transform hover:-translate-y-1"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl border-[3px] border-ink ${v.color} text-ink shadow-[var(--shadow-pop-sm)]`}
              >
                <v.icon size={26} />
              </div>
              <h3 className="mt-4 text-2xl">{v.title}</h3>
              <p className="mt-2 text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
