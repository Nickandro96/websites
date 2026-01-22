import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Rse() {
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
            <span className="text-chart-2 font-bold tracking-wider uppercase text-sm mb-4 block">ISO 26000</span>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">Démarche RSE</h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Intégrez les enjeux sociaux et environnementaux à votre stratégie pour une performance durable et responsable.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">La RSE comme levier de croissance</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  La Responsabilité Sociétale des Entreprises (RSE) n'est plus une option. Clients, collaborateurs et investisseurs exigent désormais des engagements concrets.
                </p>
                <p className="text-lg text-muted-foreground">
                  Nous vous aidons à structurer votre démarche selon les lignes directrices de l'ISO 26000, pour transformer ces attentes en opportunités d'innovation et de différenciation.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary mb-8">Notre Approche RSE</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Diagnostic RSE 360°",
                    "Identification des parties prenantes",
                    "Matrice de matérialité",
                    "Définition de la raison d'être",
                    "Plan d'actions et KPI",
                    "Reporting extra-financier (ESG)",
                    "Marque employeur",
                    "Achats responsables"
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
                <h3 className="text-xl font-bold mb-4">Diagnostic Flash</h3>
                <p className="mb-6 opacity-90">
                  Évaluez votre maturité RSE en 2 jours et identifiez vos axes prioritaires.
                </p>
                <Link href="/contact">
                  <Button variant="secondary" className="w-full font-bold text-primary">
                    En savoir plus
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
