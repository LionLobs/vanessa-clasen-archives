import { useState } from "react";
import quill from "@/assets/quill-divider.png";
import { MessageCircle, Instagram, BookOpen, Check } from "lucide-react";

const WHATSAPP_NUMBER = "5548999563444";
const INSTAGRAM_URL =
  "https://www.instagram.com/vanessaclasen.escritora?igsh=MXJiZGwwaThsMHR6cQ==";

const BOOKS = [
  { id: "guardia", title: "A Última Guardiã de Camões" },
  { id: "mar", title: "O Mar Sempre Devolve Seus Mortos" },
  { id: "sombras", title: "Nas Sombras da Lembrança" },
] as const;

const Newsletter = () => {
  const [selected, setSelected] = useState<string>(BOOKS[0].title);

  const message = encodeURIComponent(
    `Olá Vanessa! Vim pelo site e quero o livro "${selected}".`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <section id="reservar" className="relative py-24 overflow-hidden bg-muted/20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 max-w-2xl">
        <div className="quill-divider">
          <img src={quill} alt="" className="w-10 h-10 opacity-60" loading="lazy" />
        </div>

        <div className="text-center mb-10">
          <BookOpen className="w-10 h-10 text-primary/70 mx-auto mb-6" strokeWidth={1.2} />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Garanta seu <span className="text-gold-gradient">exemplar</span>
          </h2>
          <p className="font-elegant text-lg text-foreground/60 italic leading-relaxed">
            Escolha a obra desejada e fale diretamente com Vanessa pelo WhatsApp{" "}
            <br className="hidden md:block" />
            para finalizar sua reserva com atendimento pessoal.
          </p>
        </div>

        <div className="max-w-lg mx-auto mb-8">
          <p className="font-heading text-xs tracking-widest uppercase text-primary/70 mb-3 text-center">
            Selecione a obra
          </p>
          <div className="flex flex-col gap-2">
            {BOOKS.map((book) => {
              const isActive = selected === book.title;
              return (
                <button
                  key={book.id}
                  type="button"
                  onClick={() => setSelected(book.title)}
                  className={`group flex items-center justify-between gap-3 px-5 py-3 rounded-sm border text-left transition-all ${
                    isActive
                      ? "border-primary bg-primary/10 shadow-gold"
                      : "border-primary/20 bg-background/40 hover:border-primary/50 hover:bg-primary/5"
                  }`}
                >
                  <span className="font-elegant text-sm md:text-base text-foreground">
                    {book.title}
                  </span>
                  <span
                    className={`flex items-center justify-center w-5 h-5 rounded-full border ${
                      isActive
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-primary/40"
                    }`}
                  >
                    {isActive && <Check className="w-3 h-3" strokeWidth={3} />}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gold-gradient px-7 py-4 font-heading text-sm font-semibold text-primary-foreground tracking-wider uppercase hover:opacity-90 transition-opacity rounded-sm shadow-gold"
          >
            <MessageCircle className="w-4 h-4" strokeWidth={1.75} />
            Reservar pelo WhatsApp
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-primary/50 bg-background/40 backdrop-blur-sm px-7 py-4 font-heading text-sm font-semibold text-primary tracking-wider uppercase hover:bg-primary/10 transition-colors rounded-sm"
          >
            <Instagram className="w-4 h-4" strokeWidth={1.75} />
            Instagram
          </a>
        </div>

        <p className="text-center font-elegant text-xs text-foreground/40 italic mt-5">
          +55 48 99956-3444 — atendimento direto com a autora.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;