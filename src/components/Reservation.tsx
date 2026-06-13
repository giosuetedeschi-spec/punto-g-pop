import { useMemo, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import {
  Drumstick,
  CakeSlice,
  Wheat,
  PencilRuler,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  CalendarDays,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import rosticceriaImg from "@/assets/rosticceria.jpg";
import pasticceriaImg from "@/assets/pasticceria.jpg";
import pastificioImg from "@/assets/pastificio.jpg";

type Category = {
  id: string;
  label: string;
  icon: typeof Drumstick;
  image: string;
  accent: string;
  products: { id: string; name: string; unit: string }[];
};

const categories: Category[] = [
  {
    id: "rosticceria",
    label: "Rosticceria",
    icon: Drumstick,
    image: rosticceriaImg,
    accent: "bg-primary",
    products: [
      { id: "r1", name: "Arancini misti", unit: "cad." },
      { id: "r2", name: "Torta salata del giorno", unit: "fetta" },
      { id: "r3", name: "Pizza al taglio", unit: "trancio" },
      { id: "r4", name: "Polpette al sugo", unit: "vaschetta" },
    ],
  },
  {
    id: "pasticceria",
    label: "Pasticceria",
    icon: CakeSlice,
    image: pasticceriaImg,
    accent: "bg-secondary",
    products: [
      { id: "p1", name: "Crostata frutta", unit: "fetta" },
      { id: "p2", name: "Bignè crema", unit: "cad." },
      { id: "p3", name: "Tiramisù monoporzione", unit: "cad." },
      { id: "p4", name: "Biscotti assortiti", unit: "etto" },
    ],
  },
  {
    id: "pastificio",
    label: "Pastificio",
    icon: Wheat,
    image: pastificioImg,
    accent: "bg-lime",
    products: [
      { id: "f1", name: "Tagliatelle fresche", unit: "porzione" },
      { id: "f2", name: "Ravioli ricotta e spinaci", unit: "porzione" },
      { id: "f3", name: "Gnocchi di patate", unit: "porzione" },
      { id: "f4", name: "Lasagne pronte", unit: "vaschetta" },
    ],
  },
];

const reservationSchema = z.object({
  nome: z.string().trim().min(2, "Inserisci il tuo nome").max(80),
  telefono: z
    .string()
    .trim()
    .min(6, "Inserisci un telefono valido")
    .max(20)
    .regex(/^[0-9+()\s-]+$/, "Telefono non valido"),
  data: z.string().min(1, "Scegli una data di ritiro"),
  note: z.string().max(500).optional(),
});

export function Reservation() {
  const [active, setActive] = useState<string>("rosticceria");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [custom, setCustom] = useState("");
  const [form, setForm] = useState({ nome: "", telefono: "", data: "", note: "" });

  const isCustom = active === "commissione";
  const currentCategory = categories.find((c) => c.id === active);

  const productName = (id: string) => {
    for (const c of categories) {
      const p = c.products.find((x) => x.id === id);
      if (p) return p.name;
    }
    return id;
  };

  const setQty = (id: string, delta: number) =>
    setCart((prev) => {
      const next = Math.max(0, (prev[id] ?? 0) + delta);
      const copy = { ...prev };
      if (next === 0) delete copy[id];
      else copy[id] = next;
      return copy;
    });

  const cartItems = useMemo(
    () => Object.entries(cart).filter(([, q]) => q > 0),
    [cart],
  );
  const totalItems = cartItems.reduce((s, [, q]) => s + q, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = reservationSchema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Controlla i dati inseriti");
      return;
    }
    if (totalItems === 0 && custom.trim().length < 3) {
      toast.error("Aggiungi almeno un prodotto o descrivi l'ordine su commissione");
      return;
    }

    toast.success(`Grazie ${parsed.data.nome}! Prenotazione ricevuta`, {
      description: `Ti contatteremo allo ${parsed.data.telefono} per confermare il ritiro del ${parsed.data.data}.`,
    });
    setCart({});
    setCustom("");
    setForm({ nome: "", telefono: "", data: "", note: "" });
  };

  return (
    <section id="prenota" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="max-w-2xl">
        <span className="font-display text-sm uppercase tracking-widest text-secondary">
          Prenotazione online
        </span>
        <h2 className="mt-2 text-4xl md:text-5xl">Riserva i tuoi preferiti</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Scegli dalla rosticceria, pasticceria e pastificio oppure richiedi un
          ordine su commissione personalizzato. Pensiamo a tutto noi.
        </p>
      </div>

      {/* Category tabs */}
      <div className="mt-8 flex flex-wrap gap-3">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`inline-flex items-center gap-2 rounded-full border-[3px] border-ink px-4 py-2 text-sm font-bold transition-all ${
              active === c.id
                ? `${c.accent} text-ink shadow-[var(--shadow-pop-sm)]`
                : "bg-card hover:-translate-y-0.5"
            }`}
          >
            <c.icon size={18} /> {c.label}
          </button>
        ))}
        <button
          onClick={() => setActive("commissione")}
          className={`inline-flex items-center gap-2 rounded-full border-[3px] border-ink px-4 py-2 text-sm font-bold transition-all ${
            isCustom ? "bg-secondary text-ink shadow-[var(--shadow-pop-sm)]" : "bg-card hover:-translate-y-0.5"
          }`}
        >
          <PencilRuler size={18} /> Su commissione
        </button>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        {/* Catalog / custom panel */}
        <div className="rounded-3xl border-[3px] border-ink bg-card p-6 shadow-[var(--shadow-pop)]">
          {!isCustom && currentCategory && (
            <>
              <div className="mb-6 flex items-center gap-4">
                <img
                  src={currentCategory.image}
                  alt={currentCategory.label}
                  width={768}
                  height={768}
                  loading="lazy"
                  className="h-20 w-20 rounded-2xl border-[3px] border-ink object-cover"
                />
                <div>
                  <h3 className="text-2xl">{currentCategory.label}</h3>
                  <p className="text-sm text-muted-foreground">
                    Seleziona quantità e aggiungi alla prenotazione
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {currentCategory.products.map((p) => (
                  <li
                    key={p.id}
                    className="flex items-center justify-between gap-3 rounded-2xl border-[3px] border-ink bg-background p-3"
                  >
                    <div>
                      <p className="font-semibold">{p.name}</p>
                      <p className="text-xs text-muted-foreground">per {p.unit}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setQty(p.id, -1)}
                        className="flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-ink bg-card hover:bg-muted"
                        aria-label={`Riduci ${p.name}`}
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-6 text-center font-display">
                        {cart[p.id] ?? 0}
                      </span>
                      <button
                        onClick={() => setQty(p.id, 1)}
                        className="flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-ink bg-lime hover:brightness-95"
                        aria-label={`Aggiungi ${p.name}`}
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}

          {isCustom && (
            <div>
              <h3 className="text-2xl">Ordine su commissione</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Torta di compleanno, buffet per un evento, menù personalizzato?
                Raccontaci cosa ti serve e lo realizziamo per te.
              </p>
              <div className="mt-4">
                <Label htmlFor="custom">Descrivi il tuo ordine</Label>
                <Textarea
                  id="custom"
                  value={custom}
                  onChange={(e) => setCustom(e.target.value)}
                  maxLength={500}
                  placeholder="Es. Torta senza glutine e senza lattosio per 12 persone, tema Pop Art..."
                  className="mt-2 min-h-32 rounded-2xl border-[3px] border-ink"
                />
              </div>
            </div>
          )}
        </div>

        {/* Summary + form */}
        <div className="rounded-3xl border-[3px] border-ink bg-background p-6 shadow-[var(--shadow-pop)]">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} />
            <h3 className="text-2xl">La tua prenotazione</h3>
          </div>

          <div className="mt-4 space-y-2">
            {cartItems.length === 0 && custom.trim().length === 0 && (
              <p className="text-sm text-muted-foreground">
                Nessun prodotto selezionato.
              </p>
            )}
            {cartItems.map(([id, q]) => (
              <div
                key={id}
                className="flex items-center justify-between rounded-xl border-[3px] border-ink bg-card px-3 py-2 text-sm"
              >
                <span className="font-semibold">{productName(id)}</span>
                <span className="flex items-center gap-2">
                  <span className="font-display">×{q}</span>
                  <button
                    onClick={() => setQty(id, -q)}
                    aria-label="Rimuovi"
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 size={15} />
                  </button>
                </span>
              </div>
            ))}
            {custom.trim().length > 0 && (
              <div className="rounded-xl border-[3px] border-ink bg-secondary/60 px-3 py-2 text-sm">
                <span className="font-bold">Su commissione: </span>
                {custom.slice(0, 70)}
                {custom.length > 70 ? "…" : ""}
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="mt-5 space-y-3">
            <div>
              <Label htmlFor="nome">Nome</Label>
              <Input
                id="nome"
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                maxLength={80}
                className="mt-1 rounded-xl border-[3px] border-ink"
                placeholder="Il tuo nome"
              />
            </div>
            <div>
              <Label htmlFor="telefono">Telefono</Label>
              <Input
                id="telefono"
                value={form.telefono}
                onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                maxLength={20}
                className="mt-1 rounded-xl border-[3px] border-ink"
                placeholder="+39 ..."
              />
            </div>
            <div>
              <Label htmlFor="data">Data di ritiro</Label>
              <div className="relative">
                <CalendarDays
                  size={18}
                  className="pointer-events-none absolute left-3 top-1/2 mt-0.5 -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  id="data"
                  type="date"
                  value={form.data}
                  onChange={(e) => setForm({ ...form, data: e.target.value })}
                  className="mt-1 rounded-xl border-[3px] border-ink pl-10"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="note">Note (facoltative)</Label>
              <Textarea
                id="note"
                value={form.note}
                onChange={(e) => setForm({ ...form, note: e.target.value })}
                maxLength={500}
                className="mt-1 rounded-xl border-[3px] border-ink"
                placeholder="Allergie, orario preferito..."
              />
            </div>
            <Button type="submit" variant="pop" size="lg" className="w-full">
              Invia prenotazione
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
