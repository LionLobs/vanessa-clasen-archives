import quill from "@/assets/quill-divider.png";
import vanessaPortrait from "@/assets/vanessa-portrait-hero.jpg";

const PRESALE_URL = "https://benfeitoria.com/aultimaguardiadecamoes";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-[100svh] md:min-h-screen flex items-center overflow-hidden pt-24 md:pt-20 pb-16 bg-background">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_50%,hsl(var(--primary)/0.12)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,hsl(0_0%_0%/0.45)_100%)] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-5 md:px-6">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Texto */}
          <div className="text-left order-2 md:order-1">
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-full px-3 md:px-4 py-1 mb-5 animate-fade-up">
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
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-5 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <span className="text-foreground">A Última Guardiã de </span>
              <span className="text-gold-gradient">Camões</span>
            </h1>

            <p
              className="font-elegant text-base sm:text-lg md:text-xl text-foreground/70 italic mb-3 animate-fade-up leading-relaxed"
              style={{ animationDelay: "0.5s" }}
            >
              O novo romance premiado de <span className="text-primary not-italic font-semibold">Vanessa Clasen</span>.
            </p>
            <p
              className="font-body text-sm md:text-base text-foreground/60 mb-7 md:mb-8 animate-fade-up leading-relaxed max-w-xl"
              style={{ animationDelay: "0.6s" }}
            >
              Manuscritos esquecidos, heranças ocultas e segredos literários que atravessam séculos — escrito à mão, em tinta e silêncio.
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
                className="w-full sm:w-auto border border-primary/40 px-6 md:px-8 py-3.5 font-heading text-xs md:text-sm font-semibold text-primary tracking-wider uppercase hover:bg-primary/10 transition-colors rounded-sm"
              >
                Conhecer a obra
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-start gap-x-5 gap-y-2 text-[11px] md:text-xs font-body text-foreground/50 animate-fade-up" style={{ animationDelay: "1s" }}>
              <span className="flex items-center gap-1.5"><span className="text-primary">✦</span> Capa dura premium</span>
              <span className="flex items-center gap-1.5"><span className="text-primary">✦</span> Tiragem limitada</span>
              <span className="flex items-center gap-1.5"><span className="text-primary">✦</span> 1º FLIPoços</span>
            </div>
          </div>

          {/* Foto da Vanessa */}
          <div
            className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative w-56 sm:w-72 md:w-full max-w-md">
              <div className="absolute -inset-6 bg-gold-gradient rounded-2xl opacity-25 blur-3xl" />
              <div className="absolute -inset-px rounded-2xl bg-gold-gradient opacity-70" />
              <img
                src={vanessaPortrait}
                alt="Vanessa Clasen, autora premiada de A Última Guardiã de Camões"
                className="relative w-full h-auto rounded-2xl object-cover shadow-gold"
                loading="eager"
              />
              <span className="pointer-events-none absolute -top-3 -left-3 w-10 h-10 border-t border-l border-primary/60" />
              <span className="pointer-events-none absolute -bottom-3 -right-3 w-10 h-10 border-b border-r border-primary/60" />
            </div>
          </div>
        </div>
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
