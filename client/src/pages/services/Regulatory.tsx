import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Regulatory() {
  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-12 border-b border-white/10">
        <div className="container">
          <Link href="/services">
            <a className="inline-flex items-center text-sm font-medium text-white/60 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> Retour aux services
            </a>
          </Link>
          <div className="max-w-4xl">
            <span className="text-chart-2 font-bold tracking-wider uppercase text-sm mb-4 block">MDR 2017/745</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Affaires Réglementaires</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
              Assurez la conformité de vos dispositifs médicaux au Règlement Européen (MDR) et sécurisez leur marquage CE.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Le défi du Règlement 2017/745</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Le nouveau règlement européen a considérablement élevé les exigences en matière de documentation technique, d'évaluation clinique et de surveillance après commercialisation.
                </p>
                <p className="text-lg text-muted-foreground">
                  Nous vous aidons à naviguer dans cette complexité pour constituer des dossiers techniques robustes, capables de passer l'épreuve de l'organisme notifié.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary mb-8">Nos Prestations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Stratégie réglementaire & Classification",
                    "Rédaction du Dossier Technique (TD)",
                    "Gestion des Risques (ISO 14971)",
                    "Évaluation Clinique (CEP / CER)",
                    "Suivi Post-Market (PMS / PMCF)",
                    "Étiquetage et IFU (ISO 15223)",
                    "Enregistrement EUDAMED",
                    "Réponse aux questions de l'ON"
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
              <div className="bg-secondary p-8 border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">Transition MDR</h3>
                <p className="mb-6 text-muted-foreground text-sm">
                  La période de transition touche à sa fin. Sécurisez vos certificats dès maintenant.
                </p>
                <Link href="/contact">
                  <Button className="w-full font-bold">
                    Audit de transition
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
