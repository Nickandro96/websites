import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { label: "Accueil", path: "/" },
    { label: "Services", path: "/services" },
    { label: "À propos", path: "/a-propos" },
    { label: "Méthodologie", path: "/methodologie" },
    { label: "Références", path: "/references" },
    { label: "Ressources", path: "/ressources" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-xs font-medium hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Phone className="h-3 w-3" /> 07 51 46 66 84
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-3 w-3" /> infos@n3-conseil.com
            </span>
          </div>
          <div className="flex gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
              <Linkedin className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header 
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 border-b border-transparent",
          isScrolled ? "bg-background/95 backdrop-blur-sm border-border py-3 shadow-sm" : "bg-background py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 group">
              <div className="h-10 w-10 bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl rounded-none group-hover:bg-primary/90 transition-colors">
                N3
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none tracking-tight text-primary">CONSEIL</span>
                <span className="text-[0.65rem] uppercase tracking-widest text-muted-foreground">Qualité & Réglementaire</span>
              </div>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative py-1",
                  location === item.path 
                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary" 
                    : "text-muted-foreground"
                )}>
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button size="sm" className="rounded-none font-semibold px-6">
                Contact
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-24 px-6 lg:hidden animate-in slide-in-from-top-10 duration-200">
          <nav className="flex flex-col gap-6 text-lg font-medium">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a className={cn(
                  "py-2 border-b border-border/50 transition-colors",
                  location === item.path ? "text-primary border-primary" : "text-muted-foreground"
                )}>
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="w-full mt-4 rounded-none" size="lg">
                Contact
              </Button>
            </Link>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground pt-16 pb-8">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-white text-primary flex items-center justify-center font-bold text-lg rounded-none">
                N3
              </div>
              <span className="font-bold text-xl tracking-tight">CONSEIL</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-xs">
              Expertise en Qualité, Affaires Réglementaires et RSE pour les dispositifs médicaux et industries de santé.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li><Link href="/services/qualite"><a className="hover:text-white transition-colors">Qualité ISO 13485</a></Link></li>
              <li><Link href="/services/reglementaire"><a className="hover:text-white transition-colors">Affaires Réglementaires MDR</a></Link></li>
              <li><Link href="/services/rabc"><a className="hover:text-white transition-colors">RABC Biocontamination</a></Link></li>
              <li><Link href="/services/rse"><a className="hover:text-white transition-colors">RSE ISO 26000</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Entreprise</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li><Link href="/a-propos"><a className="hover:text-white transition-colors">À propos</a></Link></li>
              <li><Link href="/methodologie"><a className="hover:text-white transition-colors">Méthodologie</a></Link></li>
              <li><Link href="/references"><a className="hover:text-white transition-colors">Références</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-white transition-colors">Contact</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 shrink-0" />
                <span>07 51 46 66 84</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 shrink-0" />
                <span>infos@n3-conseil.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Linkedin className="h-5 w-5 mt-0.5 shrink-0" />
                <a href="#" className="hover:text-white transition-colors">Suivez-nous sur LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/60">
          <p>© 2026 N3 Conseil. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales"><a className="hover:text-white transition-colors">Mentions Légales</a></Link>
            <Link href="/confidentialite"><a className="hover:text-white transition-colors">Politique de Confidentialité</a></Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
