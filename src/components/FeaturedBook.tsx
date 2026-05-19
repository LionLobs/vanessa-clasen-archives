import coverGuardia from "@/assets/cover-guardia.jpg";
import mockupGuardia from "@/assets/mockup-guardia.png";
import mapGuardia from "@/assets/map-guardia.png";
import videoGuardia from "@/assets/video-guardia.mp4.asset.json";
import quill from "@/assets/quill-divider.png";

const PRESALE_URL = "https://benfeitoria.com/aultimaguardiadecamoes";

const FeaturedBook = () => {
  return (
    <section id="premiado" className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${coverGuardia})` }}
        aria-hidden
      />
      <video
        src={videoGuardia.url}
        poster={coverGuardia}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(30_20%_5%/0.90)] via-[hsl(35_15%_8%/0.82)] to-[hsl(30_10%_5%/0.72)]" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="quill-divider">
          <img src={quill} alt="" className="w-10 h-10 opacity-60" loading="lazy" />
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-full px-6 py-2 mb-6">
            <span className="text-lg">🏆</span>
            <span className="font-body text-sm text-primary font-semibold">
              1º lugar — 4° Prêmio FLIPoços para Escritores Independentes
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-2">
            A Última Guardiã de <span className="text-gold-gradient">Camões</span>
          </h2>
          <p className="font-elegant text-lg text-foreground/50 italic">Escrito à mão, com a delicadeza de quem tece o tempo em cada linha.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="flex justify-center">
            <div className="relative w-full">
              <div className="absolute -inset-6 bg-gold-gradient rounded-sm opacity-15 blur-3xl" />
              <img
                src={mockupGuardia}
                alt="Edição especial de colecionador — A Última Guardiã de Camões, capa dura, papel pólen 90g, fita de cetim dourada"
                className="relative w-full max-w-xl mx-auto drop-shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-6">
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              Um romance histórico envolvente, onde manuscritos esquecidos, heranças ocultas e segredos literários se entrelaçam.
            </p>
            <p className="font-body text-base text-foreground/70 leading-relaxed">
              Nesta obra premiada, Vanessa Clasen conduz o leitor por uma narrativa que atravessa o tempo — revelando que algumas verdades jamais deixam de existir.
            </p>

            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 font-body text-xs md:text-sm text-foreground/70 pt-2">
              <li className="flex items-center gap-2"><span className="text-primary">✦</span> Capa dura premium</li>
              <li className="flex items-center gap-2"><span className="text-primary">✦</span> Papel pólen 90g</li>
              <li className="flex items-center gap-2"><span className="text-primary">✦</span> Fita de cetim dourada</li>
              <li className="flex items-center gap-2"><span className="text-primary">✦</span> Edição de colecionador</li>
            </ul>

            <div className="pt-4">
              <a
                href={PRESALE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold-gradient px-10 py-4 font-heading text-base font-semibold text-primary-foreground tracking-wider uppercase hover:opacity-90 transition-opacity rounded-sm shadow-gold"
              >
                🏆 Reservar na Pré-venda
              </a>
              <p className="font-elegant text-sm text-foreground/40 italic mt-3">
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
          <div className="relative">
            <div className="absolute -inset-4 bg-gold-gradient opacity-10 blur-3xl rounded-full" />
            <img
              src={mapGuardia}
              alt="Mapa da jornada — Porto, Coimbra, Lisboa e Açores"
              className="relative w-full max-w-3xl mx-auto rounded-sm shadow-2xl border border-primary/20"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBook;
