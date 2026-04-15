import heroBg from "@/assets/hero-bg.jpg";
import quill from "@/assets/quill-divider.png";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 section-overlay-strong" />
      
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <img
            src={quill}
            alt=""
            className="w-16 h-16 mx-auto mb-8 opacity-70"
            width={512}
            height={512}
          />
        </div>

        <h1
          className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="text-foreground">"Nas sombras, a guardiã das palavras sempre devolve a </span>
          <span className="text-gold-gradient">verdade.</span>
          <span className="text-foreground">"</span>
        </h1>

        <p
          className="font-elegant text-xl md:text-2xl text-foreground/60 italic mb-4 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          — Vanessa Clasen
        </p>

        <p
          className="font-body text-base md:text-lg text-foreground/70 mb-4 max-w-2xl mx-auto animate-fade-up"
          style={{ animationDelay: "0.7s" }}
        >
          Suspense psicológico e narrativas literárias que atravessam memória, silêncio e destino.
        </p>

        <div
          className="inline-flex items-center gap-2 bg-muted/50 border border-primary/30 rounded-full px-5 py-2 mb-10 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <span className="text-lg">🏆</span>
          <span className="font-body text-sm text-primary font-medium">
            1º lugar no Festival Literário Internacional de Poços de Caldas — FLIPoços
          </span>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 animate-fade-up"
          style={{ animationDelay: "1s" }}
        >
          <a
            href="#capitulo"
            className="w-full sm:w-auto border-2 border-gold px-8 py-4 font-heading text-sm font-semibold text-primary tracking-wider uppercase hover:bg-primary/10 transition-colors rounded-sm"
          >
            📖 Leia o Primeiro Capítulo
          </a>
          <a
            href="#premiado"
            className="w-full sm:w-auto bg-gold-gradient px-8 py-4 font-heading text-sm font-semibold text-primary-foreground tracking-wider uppercase hover:opacity-90 transition-opacity rounded-sm shadow-gold"
          >
            🏆 Reserve o Livro Premiado
          </a>
        </div>

        <p
          className="font-elegant text-sm text-foreground/40 italic animate-fade-up"
          style={{ animationDelay: "1.1s" }}
        >
          Edição especial em pré-reserva.
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
