import Layout from "@/components/Layout";
import MissionScope from "@/components/MissionScope";
import { Button } from "@/components/ui/button";
import { Check, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Rse() {
  return (
    <Layout>
      <section className="bg-secondary/30 py-12 border-b border-border">
        <div className="container">
          <Link href="/services" asChild>
            <a className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> Retour aux services
            </a>
          </Link>
          <div className="max-w-4xl">
            <span className="text-chart-2 font-bold tracking-wider uppercase text-sm mb-4 block">
              ISO 26000
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Structurer votre démarche RSE avec ISO 26000
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Intégrez les enjeux sociaux et environnementaux à votre stratégie
              pour une performance durable et responsable.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  La RSE comme levier de croissance
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Les demandes des clients et les questionnaires d’appels
                  d’offres peuvent nécessiter des informations sociales et
                  environnementales structurées. Une démarche RSE aide à définir
                  les priorités et à organiser les éléments de réponse.
                </p>
                <p className="text-lg text-muted-foreground">
                  Nous vous aidons à structurer la démarche et ses indicateurs
                  en vous appuyant sur les lignes directrices ISO 26000. ISO
                  26000 est un cadre de recommandations et ne donne pas lieu à
                  une certification.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary mb-8">
                  Notre Approche RSE
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Diagnostic RSE 360°",
                    "Identification des parties prenantes",
                    "Matrice de matérialité",
                    "Préparation des éléments de réponse aux questionnaires clients",
                    "Plan d'actions et KPI",
                    "Reporting extra-financier (ESG)",
                    "Coordination des informations sociales et environnementales",
                    "Achats responsables",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 border border-border bg-secondary/10"
                    >
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
                  Définissons le périmètre de votre diagnostic et les
                  informations à réunir avant de fixer les modalités de
                  l’intervention.
                </p>
                <Button
                  variant="secondary"
                  className="w-full font-bold text-primary"
                  asChild
                >
                  <Link href="/contact">En savoir plus</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MissionScope
        audience="Directions et responsables QSE qui souhaitent organiser les actions sociales et environnementales et rendre leurs éléments de preuve plus accessibles."
        preparation="Précisez les demandes clients, votre démarche actuelle et les informations déjà disponibles."
        deliverables={[
          "Diagnostic ciblé",
          "Plan d’action et indicateurs",
          "Organisation des données utiles aux réponses clients",
        ]}
      />
    </Layout>
  );
}
