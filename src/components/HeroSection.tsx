import quill from "@/assets/quill-divider.png";
import vanessaPortrait from "@/assets/vanessa-portrait-hero.jpg";

const PRESALE_URL = "https://benfeitoria.com/aultimaguardiadecamoes";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] md:min-h-screen flex items-center overflow-hidden pt-24 md:pt-20 pb-16 bg-background"
    >
      {/* Foto de fundo da Vanessa */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-[position:65%_top] md:bg-contain md:bg-right md:bg-[position:right_center]"
        style={{ backgroundImage: `url(${vanessaPortrait})` }}
        aria-hidden
      />

      {/* Mobile: escurece um pouco o fundo para legibilidade */}
      <div className="absolute inset-0 bg-background/70 md:hidden" aria-hidden />

      {/* Desktop: gradiente suave da esquerda → transparente para revelar a foto à direita */}
      <div
        className="hidden md:block absolute inset-0 bg-gradient-to-r from-background from-15% via-background/65 via-55% to-transparent to-95%"
        aria-hidden
      />

      {/* Vinheta cinematográfica nas bordas */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,hsl(0_0%_0%/0.75)_100%)]"
        aria-hidden
      />

      {/* Brilho dourado quente atrás da foto */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_80%_45%,hsl(var(--primary)/0.18)_0%,transparent_55%)] mix-blend-screen"
        aria-hidden
      />

      {/* Linhas decorativas dourads */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative z-10 container mx-auto px-5 md:px-6">
        <div className="max-w-xl lg:max-w-2xl text-left">
          <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-full px-3 md:px-4 py-1 mb-5 animate-fade-up backdrop-blur-sm">
            <span className="text-sm">🏆</span>
            <span className="font-body text-[10px] md:text-xs text-primary font-semibold tracking-wider uppercase">
              Pré-venda aberta · Edição de colecionador
            </span>
          </div>

          <img
            src={quill}
            alt=""
            className="w-10 h-10 mb-5 opacity-60 animate-fade-up"
            width={512}
            height={512}
            style={{ animationDelay: "0.2s" }}
          />

          <h1
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-5 animate-fade-up [text-shadow:0_2px_24px_hsl(0_0%_0%/0.65)]"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="text-foreground">A Última Guardiã de </span>
            <span className="text-gold-gradient">Camões</span>
          </h1>

          <p
            className="font-elegant text-base sm:text-lg md:text-xl text-foreground italic mb-3 animate-fade-up leading-relaxed [text-shadow:0_2px_16px_hsl(0_0%_0%/0.75)]"
            style={{ animationDelay: "0.5s" }}
          >
            O novo romance premiado de{" "}
            <span className="text-primary not-italic font-semibold">Vanessa Clasen</span>.
          </p>
          <p
            className="font-body text-sm md:text-base text-foreground/90 mb-7 md:mb-8 animate-fade-up leading-relaxed max-w-xl [text-shadow:0_2px_14px_hsl(0_0%_0%/0.75)]"
            style={{ animationDelay: "0.6s" }}
          >
            Manuscritos esquecidos, heranças ocultas e segredos literários que atravessam séculos
            — escrito à mão, em tinta e silêncio.
          </p>

          <div
            className="flex flex-col sm:flex-row items-stretch sm:items-start justify-start gap-3 md:gap-4 mb-5 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href={PRESALE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gold-gradient px-7 md:px-9 py-3.5 font-heading text-xs md:text-sm font-semibold text-primary-foreground tracking-wider uppercase hover:opacity-90 transition-opacity rounded-sm shadow-gold"
            >
              🏆 Garantir meu exemplar
            </a>
            <a
              href="#premiado"
              className="w-full sm:w-auto border border-primary/50 bg-background/40 backdrop-blur-sm px-6 md:px-8 py-3.5 font-heading text-xs md:text-sm font-semibold text-primary tracking-wider uppercase hover:bg-primary/10 transition-colors rounded-sm"
            >
              Conhecer a obra
            </a>
          </div>

          <div
            className="flex flex-wrap items-center justify-start gap-x-5 gap-y-2 text-[11px] md:text-xs font-body text-foreground/70 animate-fade-up [text-shadow:0_2px_10px_hsl(0_0%_0%/0.7)]"
            style={{ animationDelay: "1s" }}
          >
            <span className="flex items-center gap-1.5"><span className="text-primary">✦</span> Capa dura premium</span>
            <span className="flex items-center gap-1.5"><span className="text-primary">✦</span> Tiragem limitada</span>
            <span className="flex items-center gap-1.5"><span className="text-primary">✦</span> 1º FLIPoços</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
