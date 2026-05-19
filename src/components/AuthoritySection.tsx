import quill from "@/assets/quill-divider.png";
import vanessaPortrait from "@/assets/vanessa-portrait.jpg";
import vanessaAward from "@/assets/vanessa-award.jpg";

const AuthoritySection = () => {
  return (
    <section id="autoridade" className="relative py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-5 md:px-6">
        <div className="quill-divider">
          <img src={quill} alt="" className="w-8 h-8 opacity-60" loading="lazy" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center max-w-6xl mx-auto mb-12 md:mb-16">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-3 md:-inset-4 bg-gold-gradient opacity-15 blur-2xl rounded-sm" />
            <div className="relative grid grid-cols-5 gap-3">
              <img
                src={vanessaPortrait}
                alt="Vanessa Clasen com o livro premiado"
                className="col-span-3 w-full aspect-[3/4] object-cover rounded-sm border border-primary/20 shadow-2xl"
                loading="lazy"
              />
              <img
                src={vanessaAward}
                alt="Vanessa Clasen recebendo o prêmio FLIPoços"
                className="col-span-2 w-full aspect-[3/4] object-cover rounded-sm border border-primary/20 shadow-2xl mt-8"
                loading="lazy"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <span className="font-elegant text-[11px] md:text-xs uppercase tracking-[0.3em] text-primary/80">
              A Autora
            </span>
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground mt-3 mb-4 leading-tight">
              Reconhecimento que <span className="text-gold-gradient">valida</span> a experiência
            </h2>
            <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed">
              Natural de Florianópolis, jornalista e autora premiada. Sua escrita nasce do encontro entre terra e mar, memória e silêncio — como quem lança garrafas ao oceano em busca de respostas.
            </p>
            <p className="font-elegant text-base md:text-lg italic text-primary/80 border-l-2 border-primary/40 pl-3 mt-5">
              "Cada manuscrito nasce à mão — a tinta encontra o papel antes do mundo."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: "🥇",
              title: "1º lugar no FLIPoços",
              desc: "Prêmio para escritores independentes",
            },
            {
              icon: "🏆",
              title: "2º melhor suspense",
              desc: "Prêmio Book Brasil (2024)",
            },
            {
              icon: "📚",
              title: "Contos e poemas premiados",
              desc: "Em concursos literários nacionais",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-sm p-5 md:p-6 text-center hover:border-primary/40 hover:shadow-gold transition-all duration-300"
            >
              <span className="text-2xl md:text-3xl mb-2 block">{item.icon}</span>
              <h3 className="font-heading text-sm md:text-base font-bold text-foreground mb-1">{item.title}</h3>
              <p className="font-body text-xs md:text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
