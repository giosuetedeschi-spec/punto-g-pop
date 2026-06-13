import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const ADDRESS = "Piazza Montanari 143/B, Torino";
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS,
)}&output=embed`;
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  ADDRESS,
)}`;

const hours = [
  { d: "Lun – Ven", h: "08:30 – 19:30" },
  { d: "Sabato", h: "08:30 – 14:00" },
  { d: "Domenica", h: "Chiuso" },
];

export function MapSection() {
  return (
    <section id="dove" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="max-w-2xl">
        <span className="font-display text-sm uppercase tracking-widest text-primary">
          Dove siamo
        </span>
        <h2 className="mt-2 text-4xl md:text-5xl">Passa a trovarci a Torino</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Ci trovi nel cuore della città. Ritira la tua prenotazione o vieni a
          scoprire le novità del giorno.
        </p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-4">
          <div className="rounded-3xl border-[3px] border-ink bg-primary p-6 text-primary-foreground shadow-[var(--shadow-pop)]">
            <MapPin size={28} />
            <h3 className="mt-3 text-2xl">Indirizzo</h3>
            <p className="mt-1 font-semibold">{ADDRESS}</p>
            <Button variant="popWhite" className="mt-4" asChild>
              <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
                Indicazioni stradali
              </a>
            </Button>
          </div>

          <div className="rounded-3xl border-[3px] border-ink bg-card p-6 shadow-[var(--shadow-pop)]">
            <div className="flex items-center gap-2">
              <Clock size={22} />
              <h3 className="text-2xl">Orari</h3>
            </div>
            <ul className="mt-3 space-y-2">
              {hours.map((h) => (
                <li key={h.d} className="flex justify-between border-b border-dashed border-ink/30 pb-2 text-sm">
                  <span className="font-semibold">{h.d}</span>
                  <span className="text-muted-foreground">{h.h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a href="tel:+390110000000" className="flex items-center gap-2 font-semibold hover:text-primary">
                <Phone size={16} /> +39 011 000 0000
              </a>
              <a href="mailto:ciao@puntog.it" className="flex items-center gap-2 font-semibold hover:text-primary">
                <Mail size={16} /> ciao@puntog.it
              </a>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border-[3px] border-ink shadow-[var(--shadow-pop-lg)]">
          <iframe
            title="Mappa Punto G — Piazza Montanari 143/B, Torino"
            src={mapSrc}
            className="h-full min-h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
