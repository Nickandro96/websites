import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Quality() {
  return (
    <Layout>
      <section className="bg-secondary/30 py-12 border-b border-border">
        <div className="container">
          <Link href="/services">
            <a className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> Retour aux services
            </a>
          </Link>
          <div className="max-w-4xl">
            <span className="text-chart-2 font-bold tracking-wider uppercase text-sm mb-4 block">Expertise ISO 9001 & 13485</span>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">Management de la Qualité</h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Structurez votre organisation et garantissez la conformité de vos processus avec un Système de Management de la Qualité (SMQ) robuste et performant.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Pourquoi certifier votre SMQ ?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Dans le secteur des dispositifs médicaux, la certification ISO 13485 n'est pas seulement un gage de qualité, c'est souvent un prérequis réglementaire indispensable pour accéder aux marchés internationaux et prouver la maîtrise de vos processus.
                </p>
                <p className="text-lg text-muted-foreground">
                  Au-delà de la contrainte, un SMQ bien construit est un levier de performance qui réduit les coûts de non-qualité, sécurise vos opérations et rassure vos clients et partenaires.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary mb-8">Notre Accompagnement</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Diagnostic initial & Gap Analysis",
                    "Rédaction du Manuel Qualité & Procédures",
                    "Cartographie des processus",
                    "Gestion documentaire",
                    "Formation du Responsable Qualité",
                    "Audits internes & à blanc",
                    "Gestion des non-conformités & CAPA",
                    "Revue de direction"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 border border-border bg-secondary/10">
                      <Check className="h-5 w-5 text-chart-2 mt-0.5 shrink-0" />
                      <span className="font-medium text-primary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-primary text-primary-foreground p-8">
                <h3 className="text-xl font-bold mb-4">Besoin d'un audit ?</h3>
                <p className="mb-6 opacity-90">
                  Vérifiez la conformité de votre système avant l'audit de certification officiel.
                </p>
                <Link href="/contact">
                  <Button variant="secondary" className="w-full font-bold text-primary">
                    Demander un devis
                  </Button>
                </Link>
              </div>

              <div className="border border-border p-8">
                <h3 className="text-xl font-bold text-primary mb-4">Normes concernées</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="border-b border-border pb-2">ISO 13485:2016</li>
                  <li className="border-b border-border pb-2">ISO 9001:2015</li>
                  <li className="border-b border-border pb-2">21 CFR Part 820 (USA)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
