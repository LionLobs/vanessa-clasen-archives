import mockupGuardia from "@/assets/mockup-guardia.png";
import mapGuardia from "@/assets/map-guardia.png";
import quill from "@/assets/quill-divider.png";
import { Award } from "lucide-react";

const PRESALE_URL = "https://benfeitoria.com/aultimaguardiadecamoes";

const FeaturedBook = () => {
  return (
    <section id="premiado" className="relative py-16 md:py-20 overflow-hidden">
      {/* Fundo warm parchment / noir literário */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(35_25%_10%)_0%,hsl(30_20%_5%)_60%,hsl(20_15%_3%)_100%)]" aria-hidden />
      <div
        className="absolute inset-0 opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.85  0 0 0 0 0.7  0 0 0 0 0.4  0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
        aria-hidden
      />
      {/* Halo dourado no topo */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[60rem] h-[40rem] bg-gold-gradient opacity-[0.08] blur-[120px] rounded-full pointer-events-none" aria-hidden />
      {/* Linhas finas decorativas */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative z-10 container mx-auto px-5 md:px-6">
        <div className="quill-divider">
          <img src={quill} alt="" className="w-8 h-8 opacity-60" loading="lazy" />
        </div>

        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-full px-4 md:px-5 py-1.5 mb-4">
            <Award className="w-4 h-4 text-primary" strokeWidth={1.75} />
            <span className="font-body text-xs md:text-sm text-primary font-semibold">
              1º lugar — 4° Prêmio FLIPoços para Escritores Independentes
            </span>
          </div>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-2">
            A Última Guardiã de <span className="text-gold-gradient">Camões</span>
          </h2>
          <p className="font-elegant text-sm md:text-base text-foreground/50 italic">Escrito à mão, com a delicadeza de quem tece o tempo em cada linha.</p>
        </div>

        {/* Mockup hero — transparente, sem corte seco */}
        <div className="relative max-w-[200px] md:max-w-[260px] mx-auto mb-10 md:mb-14">
          {/* Halo dourado atrás da capa */}
          <div className="absolute -inset-8 bg-gold-gradient opacity-20 blur-[100px] rounded-full pointer-events-none" aria-hidden />
          {/* Moldura sutil dourada */}
          <div className="absolute -inset-1 bg-gradient-to-br from-primary/40 via-transparent to-primary/40 rounded-sm blur-sm pointer-events-none" aria-hidden />
          <img
            src={mockupGuardia}
            alt="Capa do livro A Última Guardiã de Camões, de Vanessa Clasen"
            className="relative w-full mx-auto rounded-sm shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] border border-primary/20"
            loading="lazy"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start max-w-5xl mx-auto">
          <div className="space-y-6">
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              Um romance histórico envolvente, onde manuscritos esquecidos, heranças ocultas e segredos literários se entrelaçam.
            </p>
            <p className="font-body text-base text-foreground/70 leading-relaxed">
              Nesta obra premiada, Vanessa Clasen conduz o leitor por uma narrativa que atravessa o tempo — revelando que algumas verdades jamais deixam de existir.
            </p>
          </div>

          <div className="space-y-6">
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 font-body text-xs md:text-sm text-foreground/75">
              <li className="flex items-center gap-2"><span className="text-primary">✦</span> Capa dura premium</li>
              <li className="flex items-center gap-2"><span className="text-primary">✦</span> Papel pólen 90g</li>
              <li className="flex items-center gap-2"><span className="text-primary">✦</span> Fita de cetim dourada</li>
              <li className="flex items-center gap-2"><span className="text-primary">✦</span> Edição de colecionador</li>
            </ul>

            <div className="pt-2">
              <a
                href={PRESALE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold-gradient px-8 md:px-10 py-3.5 md:py-4 font-heading text-sm md:text-base font-semibold text-primary-foreground tracking-wider uppercase hover:opacity-90 transition-opacity rounded-sm shadow-gold"
              >
                <Award className="w-4 h-4" strokeWidth={1.75} />
                Reservar na Pré-venda
              </a>
              <p className="font-elegant text-xs md:text-sm text-foreground/40 italic mt-3">
                Pré-venda oficial via Benfeitoria — garanta seu exemplar antes do lançamento.
              </p>
            </div>
          </div>
        </div>

        {/* Mapa da jornada */}
        <div className="mt-20 md:mt-28 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="font-elegant text-xs md:text-sm uppercase tracking-[0.3em] text-primary/70 mb-3">
              A Jornada
            </p>
            <h3 className="font-heading text-2xl md:text-4xl font-bold text-foreground">
              De Porto a <span className="text-gold-gradient">Lisboa</span>, pelos rastros de Camões
            </h3>
            <p className="font-elegant text-base md:text-lg italic text-foreground/50 mt-3">
              Cada cidade guarda um segredo. Cada segredo, uma página.
            </p>
          </div>
          <div className="relative max-w-xs sm:max-w-sm md:max-w-md mx-auto">
            {/* Halo dourado */}
            <div className="absolute -inset-6 bg-gold-gradient opacity-15 blur-3xl rounded-full pointer-events-none" aria-hidden />
            {/* Moldura tipo pergaminho antigo */}
            <div className="relative p-3 md:p-4 bg-gradient-to-br from-[hsl(35_25%_12%)] to-[hsl(20_15%_5%)] rounded-sm border border-primary/30 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]">
              <div className="absolute inset-2 border border-primary/20 pointer-events-none rounded-sm" aria-hidden />
              <img
                src={mapGuardia}
                alt="Mapa da jornada — Porto, Coimbra, Lisboa e Açores"
                className="relative w-full rounded-sm"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBook;
