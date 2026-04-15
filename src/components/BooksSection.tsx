import coverSombras from "@/assets/cover-sombras.jpg";
import coverMar from "@/assets/cover-mar.jpg";
import coverGuardia from "@/assets/cover-guardia.jpg";
import videoSombras from "@/assets/video-sombras.mp4.asset.json";
import videoMar from "@/assets/video-mar.mp4.asset.json";
import videoGuardia from "@/assets/video-guardia.mp4.asset.json";
import quill from "@/assets/quill-divider.png";
import { useState } from "react";

const books = [
  {
    id: "sombras",
    title: "Nas Sombras da Lembrança",
    genre: "Suspense Psicológico",
    cover: coverSombras,
    video: videoSombras.url,
    overlayClass: "bg-gradient-to-r from-[hsl(0_0%_3%/0.92)] via-[hsl(0_0%_5%/0.85)] to-[hsl(0_0%_3%/0.75)]",
    synopsis:
      "Alguns segredos deveriam ficar guardados para sempre... Um suspense psicológico que mergulha nas profundezas da memória, onde lembranças esquecidas podem ser mais perigosas do que a verdade.",
  },
  {
    id: "mar",
    title: "O Mar Sempre Devolve Seus Mortos",
    genre: "Suspense Policial",
    cover: coverMar,
    video: videoMar.url,
    overlayClass: "bg-gradient-to-r from-[hsl(0_50%_5%/0.90)] via-[hsl(0_40%_8%/0.82)] to-[hsl(0_30%_5%/0.75)]",
    synopsis:
      "O mar guarda segredos que nenhuma maré consegue apagar. Um suspense policial visceral ambientado no litoral brasileiro, onde cada onda traz à tona verdades enterradas e destinos cruzados.",
  },
  {
    id: "guardia",
    title: "A Última Guardiã de Camões",
    genre: "Romance Histórico",
    cover: coverGuardia,
    video: videoGuardia.url,
    overlayClass: "bg-gradient-to-r from-[hsl(30_20%_5%/0.88)] via-[hsl(35_15%_8%/0.80)] to-[hsl(30_10%_5%/0.70)]",
    synopsis:
      "Manuscritos esquecidos, heranças ocultas e segredos literários se entrelaçam neste romance histórico premiado que atravessa o tempo — revelando que algumas verdades jamais deixam de existir.",
    award: "🏆 1º lugar — FLIPoços",
  },
];

const BooksSection = () => {
  const [activeBook, setActiveBook] = useState(0);
  const book = books[activeBook];

  return (
    <section id="obras" className="relative py-24 overflow-hidden">
      {/* Video backgrounds - all rendered, only active one visible */}
      {books.map((b, i) => (
        <div
          key={b.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            activeBook === i ? "opacity-100" : "opacity-0"
          }`}
        >
          <video
            src={b.video}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${b.overlayClass}`} />
        </div>
      ))}

      <div className="relative z-10 container mx-auto px-6">
        <div className="quill-divider">
          <img src={quill} alt="" className="w-10 h-10 opacity-60" loading="lazy" />
        </div>

        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-3">
            As <span className="text-gold-gradient">Obras</span>
          </h2>
          <p className="font-elegant text-lg text-foreground/50 italic">
            Três narrativas que desafiam o silêncio
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-16 flex-wrap">
          {books.map((b, i) => (
            <button
              key={b.id}
              onClick={() => setActiveBook(i)}
              className={`px-6 py-3 font-heading text-sm tracking-wider uppercase transition-all rounded-sm ${
                activeBook === i
                  ? "bg-gold-gradient text-primary-foreground shadow-gold"
                  : "border border-border text-foreground/60 hover:border-primary/50 hover:text-primary"
              }`}
            >
              {b.title.split(" ").slice(0, 3).join(" ")}…
            </button>
          ))}
        </div>

        {/* Active Book */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-3 bg-gold-gradient rounded-sm opacity-20 blur-xl" />
              <img
                src={book.cover}
                alt={book.title}
                className="relative w-56 md:w-72 shadow-2xl rounded-sm transition-all duration-500"
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-elegant text-sm uppercase tracking-widest text-primary">
                {book.genre}
              </span>
              {book.award && (
                <span className="bg-primary/15 border border-primary/30 text-primary text-xs font-body px-3 py-1 rounded-full">
                  {book.award}
                </span>
              )}
            </div>
            <h3 className="font-heading text-2xl md:text-4xl font-bold text-foreground">
              {book.title}
            </h3>
            <p className="font-body text-base text-foreground/70 leading-relaxed">
              {book.synopsis}
            </p>
            <a
              href="#"
              className="inline-block border-2 border-gold px-8 py-3 font-heading text-sm font-semibold text-primary tracking-wider uppercase hover:bg-primary/10 transition-colors rounded-sm"
            >
              Conhecer este livro →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
