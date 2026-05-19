import vanessaSigning from "@/assets/vanessa-signing.jpg";
import vanessaStage from "@/assets/vanessa-stage.jpg";
import vanessaAward from "@/assets/vanessa-award.jpg";
import quill from "@/assets/quill-divider.png";

const shots = [
  { src: vanessaStage, caption: "Cerimônia de premiação — FLIPoços" },
  { src: vanessaAward, caption: "1º lugar — A Última Guardiã de Camões" },
  { src: vanessaSigning, caption: "Sessão de autógrafos" },
];

const PressGallery = () => {
  return (
    <section className="relative py-14 md:py-20 bg-background">
      <div className="container mx-auto px-5 md:px-6">
        <div className="quill-divider">
          <img src={quill} alt="" className="w-8 h-8 opacity-60" loading="lazy" />
        </div>
        <div className="text-center mb-8 md:mb-12">
          <span className="font-elegant text-[11px] md:text-xs uppercase tracking-[0.3em] text-primary/80">
            Nos bastidores
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground mt-2">
            Momentos da <span className="text-gold-gradient">jornada</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto">
          {shots.map((s, i) => (
            <figure
              key={i}
              className="group relative overflow-hidden rounded-sm border border-primary/15 shadow-xl"
            >
              <img
                src={s.src}
                alt={s.caption}
                loading="lazy"
                className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-3 md:p-4 font-elegant text-xs md:text-sm italic text-foreground/85">
                {s.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressGallery;