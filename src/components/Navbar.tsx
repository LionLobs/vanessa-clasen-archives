import { useState, useEffect } from "react";
import logo from "@/assets/logo-vanessa.jpg";
import quill from "@/assets/quill-divider.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Início", href: "#inicio" },
    { label: "Livro Premiado", href: "#premiado" },
    { label: "Obras", href: "#obras" },
    { label: "Sobre", href: "#autoridade" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-gold" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logo} alt="Vanessa Clasen" className="h-12 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-body text-foreground/80 hover:text-primary transition-colors tracking-wider uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <img src={quill} alt="" className="h-5 w-5 opacity-50" loading="lazy" />
          <a
            href="#premiado"
            className="bg-gold-gradient px-5 py-2 text-sm font-heading font-semibold text-primary-foreground rounded-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            Reservar Livro
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 text-sm font-body text-foreground/80 hover:text-primary transition-colors tracking-wider uppercase border-b border-border/30"
            >
              {link.label}
            </a>
          ))}
          <div className="p-4">
            <a
              href="#premiado"
              className="block text-center bg-gold-gradient px-5 py-3 text-sm font-heading font-semibold text-primary-foreground rounded-sm"
            >
              Reservar Livro
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
