import quill from "@/assets/quill-divider.png";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Uma viagem deliciosa em uma narrativa envolvente e delicada. Facilmente somos transportados para uma atmosfera que entrelaça memória, literatura e identidade. Sua escrita é elegante e visualmente rica, revelando uma voz potente que toca, com muita sofisticação, as camadas mais profundas… É uma leitura necessária, marcante e que permanece conosco muito tempo depois de fecharmos o livro.",
    author: "Júri do Prêmio FLIPoços",
    role: "A Última Guardiã de Camões",
  },
  {
    text: "Vanessa produziu um suspense psicológico envolvente desde a primeira página.",
    author: "Carlos Stegemann",
    role: "Jornalista e Editor — Nas Sombras da Lembrança",
  },
  {
    text: "…Li como quem acorda de um sonho lírico, tocada pela sensibilidade com que desafia o cânone literário. Mais do que um tributo nostálgico, é uma celebração daquelas que escreveram à sombra da História.",
    author: "Celina Cheberle",
    role: "Leitora — A Última Guardiã de Camões",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-16 md:py-20 bg-muted/20">
      <div className="container mx-auto px-5 md:px-6 mb-8 md:mb-10">
        <div className="quill-divider">
          <img src={quill} alt="" className="w-8 h-8 opacity-60" loading="lazy" />
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-3">
            O que dizem sobre <span className="text-gold-gradient">a obra</span>
          </h2>
          <p className="font-elegant text-sm md:text-base text-foreground/50 italic">
            Vozes de leitores, críticos e jurados que se deixaram tocar pela escrita.
          </p>
        </div>
      </div>

      <div className="marquee">
        <div className="marquee__track" style={{ animationDuration: "60s" }}>
          {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
            <article
              key={i}
              className="group relative bg-card border border-border rounded-sm p-5 md:p-6 hover:border-primary/40 hover:shadow-gold transition-all duration-500 w-[300px] sm:w-[360px] md:w-[420px] flex-shrink-0"
            >
              <Quote className="w-6 h-6 text-primary/40 mb-3" strokeWidth={1.2} />
              <p className="font-elegant text-base md:text-lg italic text-foreground/80 leading-relaxed mb-5">
                “{t.text}”
              </p>
              <div className="border-t border-border/50 pt-3">
                <p className="font-heading text-xs md:text-sm font-semibold text-primary tracking-wide">
                  {t.author}
                </p>
                <p className="font-body text-[10px] md:text-xs text-muted-foreground tracking-wider uppercase mt-1">
                  {t.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;