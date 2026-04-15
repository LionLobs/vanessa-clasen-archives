import quill from "@/assets/quill-divider.png";
import logo from "@/assets/logo-vanessa.jpg";

const Footer = () => {
  return (
    <footer id="contato" className="bg-muted/20 border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="quill-divider">
          <img src={quill} alt="" className="w-10 h-10 opacity-60" loading="lazy" />
        </div>

        <div className="text-center mb-10">
          <img src={logo} alt="Vanessa Clasen" className="h-16 mx-auto mb-6" />
          <p className="font-elegant text-lg text-foreground/50 italic max-w-md mx-auto">
            Escritora e jornalista — cada história nasce à mão, em tinta e alma, antes de ganhar o mundo.
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-10">
          {["Instagram", "Facebook", "Amazon"].map((social) => (
            <a
              key={social}
              href="#"
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors tracking-wider uppercase"
            >
              {social}
            </a>
          ))}
        </div>

        <div className="border-t border-border/50 pt-6 text-center">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Vanessa Clasen — Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
