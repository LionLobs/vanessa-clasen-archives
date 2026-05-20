import quill from "@/assets/quill-divider.png";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Uma narrativa que prende do início ao fim. Vanessa tem o dom raro de transformar palavras em imagens vivas — você sente o cheiro do mar, o peso do silêncio.",
    author: "Revista Letras & Marés",
    role: "Crítica Literária",
  },
  {
    text: "O cuidado artesanal de cada frase é impressionante. Saber que tudo é escrito à mão antes de chegar ao papel impresso torna a experiência ainda mais íntima.",
    author: "Helena Marques",
    role: "Leitora — Florianópolis",
  },
  {
    text: "‘A Última Guardiã de Camões’ é daqueles livros que se lê devagar, com reverência. Uma joia da literatura contemporânea brasileira.",
    author: "Prêmio FLIPoços",
    role: "Júri Oficial 2024",
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