import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#filosofia", label: "Chi siamo" },
  { href: "#prenota", label: "Prenota" },
  { href: "#asl", label: "Convenzione ASL" },
  { href: "#dove", label: "Dove siamo" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-background/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-ink bg-primary font-display text-lg text-primary-foreground shadow-[var(--shadow-pop-sm)]">
            G
          </span>
          <span className="font-display text-xl tracking-tight">Punto G</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:bg-lime"
            >
              {l.label}
            </a>
          ))}
          <Button variant="pop" size="sm" asChild>
            <a href="#prenota">Prenota ora</a>
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-ink bg-card md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Apri menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-1 border-t-[3px] border-ink bg-background px-4 py-3 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-full px-4 py-3 text-sm font-semibold hover:bg-lime"
            >
              {l.label}
            </a>
          ))}
          <Button variant="pop" className="mt-2" asChild>
            <a href="#prenota" onClick={() => setOpen(false)}>
              Prenota ora
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
