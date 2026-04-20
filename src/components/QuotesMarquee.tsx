const quotes = [
  "✒ Escrito à mão, palavra por palavra",
  "🏆 1º lugar — FLIPoços 2024",
  "📖 2º melhor suspense — Prêmio Book Brasil",
  "🌊 Da Florianópolis das marés ao papel antigo",
  "✦ Romance histórico premiado nacionalmente",
  "🪶 Cada manuscrito nasce em tinta e silêncio",
  "📚 Três obras publicadas",
  "🥇 Reconhecida pela crítica literária",
];

const QuotesMarquee = () => {
  return (
    <div className="relative bg-muted/20 border-y border-border/40 py-5 overflow-hidden">
      <div className="marquee">
        <div className="marquee__track">
          {[...quotes, ...quotes].map((q, i) => (
            <span
              key={i}
              className="font-elegant italic text-base md:text-lg text-foreground/60 whitespace-nowrap flex items-center gap-3"
            >
              {q}
              <span className="text-primary/40">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuotesMarquee;