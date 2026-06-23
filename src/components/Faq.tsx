import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Tutti i prodotti sono davvero senza glutine?",
    a: "Assolutamente sì! Il nostro laboratorio è 100% dedicato ai prodotti senza glutine. Non utilizziamo farine contenenti glutine in nessuna fase della produzione, eliminando qualsiasi rischio di contaminazione.",
  },
  {
    q: "Posso usare i buoni ASL per celiaci?",
    a: "Sì, Punto G è un punto vendita convenzionato con il Sistema Sanitario Nazionale. Porta il tuo tesserino ASL e potrai acquistare i nostri prodotti utilizzando i buoni celiachia.",
  },
  {
    q: "Fate ordini personalizzati per eventi?",
    a: "Certo! Realizziami torte di compleanno, buffet per feste, menù per eventi aziendali e qualsiasi altra esigenza. Contattaci con almeno 5 giorni di anticipo per ordini speciali.",
  },
  {
    q: "Quali allergeni gestite oltre al glutine?",
    a: "Oltre al glutine, possiamo produrre senza lattosio, senza uova, senza frutta secca e altri allergeni su richiesta. Specifica sempre le tue intolleranze al momento dell'ordine.",
  },
  {
    q: "Posso prenotare e ritirare un altro giorno?",
    a: "Sì! Al momento della prenotazione puoi scegliere la data di ritiro che preferisci. Ti consigliamo di prenotare almeno 24 ore in anticipo per i prodotti freschi.",
  },
  {
    q: "Fate consegne a domicilio?",
    a: "Al momento non facciamo consegne a domicilio, ma puoi prenotare online e ritirare in negozio. Siamo in Piazza Montanari 143/B, facilmente raggiungibili con i mezzi pubblici.",
  },
  {
    q: "I prodotti sono adatti ai celiaci sensibili?",
    a: "Sì, il nostro laboratorio dedicato garantisce l'assenza totale di contaminazione. Siamo orgogliosi di avere clienti celiaci che da anni si fidano di noi senza mai avere problemi.",
  },
  {
    q: "Come conservo i prodotti a casa?",
    a: "I prodotti freschi (pasta, pizza, arancini) vanno consumati entro 2 giorni e conservati in frigorifero. I prodotti da forno (biscotti, crostate) durano 5-7 giorni in un contenitore ermetico. Le torte vanno tenute in frigo.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border-[3px] border-ink bg-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold hover:bg-muted/50 transition-colors"
      >
        <span>{q}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="border-t-[3px] border-ink/10 px-5 py-4">
          <p className="text-muted-foreground leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="border-y-[3px] border-ink bg-card">
      <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-secondary px-4 py-1.5 text-sm font-bold shadow-[var(--shadow-pop-sm)]">
            <HelpCircle size={16} /> Domande frequenti
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl">
            Hai una domanda?
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Ecco le risposte alle domande che ci fanno più spesso.
            Non trovi quello che cerchi? Scrivici!
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
