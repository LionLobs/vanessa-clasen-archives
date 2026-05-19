import coverSombras from "@/assets/cover-sombras.jpg";
import coverMar from "@/assets/cover-mar.jpg";
import coverGuardia from "@/assets/cover-guardia.jpg";
import videoSombras from "@/assets/video-sombras.mp4.asset.json";
import videoMar from "@/assets/video-mar.mp4.asset.json";
import videoGuardia from "@/assets/video-guardia.mp4.asset.json";
import quill from "@/assets/quill-divider.png";
import { useEffect, useRef, useState } from "react";

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
    quote: "“A memória é o último lugar onde os mortos ainda respiram.”",
  },
  {
    id: "mar",
    title: "O Mar Sempre Devolve Seus Mortos",
    genre: "Suspense Policial",
    cover: coverMar,
    video: videoMar.url,
    overlayClass: "bg-gradient-to-r from-[hsl(0_60%_8%/0.92)] via-[hsl(355_50%_12%/0.85)] to-[hsl(0_45%_8%/0.78)]",
    synopsis:
      "O mar guarda segredos que nenhuma maré consegue apagar. Um suspense policial visceral ambientado no litoral brasileiro, onde cada onda traz à tona verdades enterradas e destinos cruzados.",
    quote: "“Há marés que trazem corpos. Outras, devolvem culpas.”",
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
    quote: "“Cada manuscrito é um sussurro do tempo que insiste em ser ouvido.”",
  },
];

const BooksSection = () => {
  return (
    <section id="obras" className="relative">
      {/* Intro */}
      <div className="container mx-auto px-6 pt-24 pb-12 text-center relative z-10">
        <div className="quill-divider">
          <img src={quill} alt="" className="w-10 h-10 opacity-60" loading="lazy" />
        </div>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-3">
          As <span className="text-gold-gradient">Obras</span>
        </h2>
        <p className="font-elegant text-lg text-foreground/50 italic max-w-2xl mx-auto">
          Role para descobrir cada universo — escrito à mão, palavra por palavra, como quem borda destinos em papel antigo.
        </p>
        <p className="font-elegant text-sm text-primary/70 italic mt-6 animate-pulse">↓ role para mergulhar</p>
      </div>

      {books.map((b, i) => (
        <BookExperience key={b.id} book={b} index={i} total={books.length} />
      ))}
    </section>
  );
};

type Book = (typeof books)[number];

const BookExperience = ({ book, index, total }: { book: Book; index: number; total: number }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting && entry.intersectionRatio > 0.3),
      { threshold: [0, 0.3, 0.6, 1] }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${book.cover})` }}
        aria-hidden
      />
      <video
        src={book.video}
        poster={book.cover}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      />
      <div className={`absolute inset-0 ${book.overlayClass}`} />

      <div className="relative z-10 container mx-auto px-6 py-24">
        <div
          className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className={`flex justify-center ${index % 2 === 1 ? "md:order-2" : ""}`}>
            <div className="relative">
              <div className="absolute -inset-8 bg-gold-gradient rounded-sm opacity-25 blur-3xl" />
              <div className="book-mockup w-60 md:w-80">
                <div className="book-mockup__inner">
                  <div className="book-mockup__back" />
                  <div className="book-mockup__pages" />
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="book-mockup__cover"
                    loading="lazy"
                  />
                  <div className="book-mockup__spine" />
                  <div className="book-mockup__gloss" />
                </div>
                <div className="book-mockup__reflection" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="font-elegant text-5xl md:text-6xl italic text-primary/40 leading-none">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
              <span className="font-elegant text-xs uppercase tracking-widest text-foreground/50">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-elegant text-sm uppercase tracking-widest text-primary">
                {book.genre}
              </span>
              {"award" in book && book.award && (
                <span className="bg-primary/15 border border-primary/30 text-primary text-xs font-body px-3 py-1 rounded-full">
                  {book.award}
                </span>
              )}
            </div>

            <h3 className="font-heading text-3xl md:text-5xl font-bold text-foreground leading-tight">
              {book.title}
            </h3>

            <p className="font-elegant text-xl md:text-2xl italic text-primary/80 border-l-2 border-primary/40 pl-4">
              {book.quote}
            </p>

            <p className="font-body text-base md:text-lg text-foreground/75 leading-relaxed">
              {book.synopsis}
            </p>

            <a
              href="#reservar"
              className="inline-block border-2 border-gold px-8 py-3 font-heading text-sm font-semibold text-primary tracking-wider uppercase hover:bg-primary/10 transition-colors rounded-sm"
            >
              Conhecer este livro →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksSection;
