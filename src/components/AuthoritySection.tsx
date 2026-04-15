import quill from "@/assets/quill-divider.png";

const AuthoritySection = () => {
  return (
    <section id="autoridade" className="relative py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="quill-divider">
          <img src={quill} alt="" className="w-10 h-10 opacity-60" loading="lazy" />
        </div>

        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Reconhecimento que <span className="text-gold-gradient">valida</span> a experiência
          </h2>
          <p className="font-body text-base text-foreground/70 leading-relaxed">
            A escrita de Vanessa Clasen vem conquistando leitores e reconhecimento nacional, consolidando sua presença na literatura contemporânea. Natural de Florianópolis, sua escrita nasce do encontro entre terra e mar, memória e silêncio — como quem lança garrafas ao oceano em busca de respostas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
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
              className="bg-card border border-border rounded-sm p-8 text-center hover:border-primary/40 hover:shadow-gold transition-all duration-300"
            >
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center font-elegant text-lg text-foreground/50 italic">
          Cada manuscrito nasce à mão — a tinta encontra o papel antes de encontrar o mundo.
        </p>
      </div>
    </section>
  );
};

export default AuthoritySection;
