import coverGuardia from "@/assets/cover-guardia.jpg";
import videoGuardia from "@/assets/video-guardia.mp4.asset.json";
import quill from "@/assets/quill-divider.png";

const FeaturedBook = () => {
  return (
    <section id="premiado" className="relative py-24 overflow-hidden">
      <video
        src={videoGuardia.url}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
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
            <div className="relative">
              <div className="absolute -inset-3 bg-gold-gradient rounded-sm opacity-20 blur-xl" />
              <img
                src={coverGuardia}
                alt="A Última Guardiã de Camões"
                className="relative w-64 md:w-80 shadow-2xl rounded-sm"
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

            <div className="pt-4">
              <a
                href="#reservar"
                className="inline-block bg-gold-gradient px-10 py-4 font-heading text-base font-semibold text-primary-foreground tracking-wider uppercase hover:opacity-90 transition-opacity rounded-sm shadow-gold"
              >
                🏆 Reservar Agora o Livro Premiado
              </a>
              <p className="font-elegant text-sm text-foreground/40 italic mt-3">
                Garanta seu exemplar antes do lançamento oficial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBook;
