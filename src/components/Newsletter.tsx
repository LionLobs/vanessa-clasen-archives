import { useState } from "react";
import quill from "@/assets/quill-divider.png";
import { Mail, Send } from "lucide-react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Por favor, insira um e-mail válido.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("Bem-vindo(a) ao círculo literário de Vanessa Clasen.");
      setEmail("");
      setLoading(false);
    }, 800);
  };

  return (
    <section id="reservar" className="relative py-24 overflow-hidden bg-muted/20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 max-w-2xl">
        <div className="quill-divider">
          <img src={quill} alt="" className="w-10 h-10 opacity-60" loading="lazy" />
        </div>

        <div className="text-center mb-10">
          <Mail className="w-10 h-10 text-primary/70 mx-auto mb-6" strokeWidth={1.2} />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cartas que <span className="text-gold-gradient">o tempo não apaga</span>
          </h2>
          <p className="font-elegant text-lg text-foreground/60 italic leading-relaxed">
            Receba em primeira mão lançamentos, capítulos inéditos e
            <br className="hidden md:block" />
            convites para sessões de autógrafos.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu melhor e-mail"
            required
            className="flex-1 bg-background border border-border rounded-sm px-5 py-4 font-body text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/60 focus:outline-none focus:ring-1 focus:ring-primary/40 transition-colors"
          />
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 bg-gold-gradient px-7 py-4 font-heading text-sm font-semibold text-primary-foreground tracking-wider uppercase hover:opacity-90 transition-opacity rounded-sm shadow-gold disabled:opacity-60"
          >
            {loading ? "Enviando..." : (<>Inscrever <Send className="w-4 h-4" /></>)}
          </button>
        </form>

        <p className="text-center font-elegant text-xs text-foreground/40 italic mt-5">
          Sem spam. Apenas literatura, escrita à mão, com cuidado.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;