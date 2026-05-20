import quill from "@/assets/quill-divider.png";
import { MessageCircle, Instagram, BookOpen } from "lucide-react";

const WHATSAPP_NUMBER = "5548999563444";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá Vanessa! Gostaria de garantir meu exemplar de 'A Última Guardiã de Camões'."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
const INSTAGRAM_URL =
  "https://www.instagram.com/vanessaclasen.escritora?igsh=MXJiZGwwaThsMHR6cQ==";

const Newsletter = () => {
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
            Fale diretamente com Vanessa pelo WhatsApp e finalize sua reserva
            <br className="hidden md:block" />
            com atendimento pessoal e exclusivo.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto justify-center">
          <a
            href={WHATSAPP_URL}
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