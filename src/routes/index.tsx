import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { Reservation } from "@/components/Reservation";
import { AslSection } from "@/components/AslSection";
import { Reviews } from "@/components/Reviews";
import { Faq } from "@/components/Faq";
import { MapSection } from "@/components/MapSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Punto G — Gastronomia e Pastificio Senza Glutine a Torino" },
      {
        name: "description",
        content:
          "Gastronomia, rosticceria, pasticceria e pastificio 100% senza glutine a Torino. Prenota online i prodotti artigianali di Milko e Antonio. Convenzione ASL.",
      },
      { property: "og:title", content: "Punto G — Senza Glutine a Torino" },
      {
        property: "og:description",
        content:
          "Artigianale, vibrante, 100% gluten free. Prenota in Piazza Montanari 143/B, Torino. Convenzione ASL.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Reservation />
        <AslSection />
        <Reviews />
        <Faq />
        <MapSection />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
