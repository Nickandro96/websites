import Layout from "@/components/Layout";
import MissionScope from "@/components/MissionScope";
import { Button } from "@/components/ui/button";
import { Check, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Quality() {
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
              Expertise ISO 9001 & 13485
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Accompagnement qualité ISO 9001 et ISO 13485
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Vous préparez une certification ou souhaitez améliorer votre
              système de management de la qualité ? N3 Conseil vous accompagne
              dans la structuration de vos processus, la gestion documentaire et
              la préparation de vos audits selon les référentiels ISO 9001 et
              ISO 13485, en fonction de votre activité.
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
                  Pourquoi certifier votre SMQ ?
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Dans le secteur des dispositifs médicaux, le système qualité
                  doit être adapté aux activités et aux exigences applicables.
                  Un accompagnement ISO 13485 ou ISO 9001 permet d’examiner les
                  processus, leur documentation et les preuves disponibles avant
                  de définir les actions à engager.
                </p>
                <p className="text-lg text-muted-foreground">
                  Au-delà de la contrainte, un SMQ bien construit est un levier
                  de performance qui réduit les coûts de non-qualité, sécurise
                  vos opérations et rassure vos clients et partenaires.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary mb-8">
                  Notre Accompagnement
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Diagnostic initial & Gap Analysis",
                    "Rédaction du Manuel Qualité & Procédures",
                    "Cartographie des processus",
                    "Gestion documentaire",
                    "Formation du Responsable Qualité",
                    "Audits internes & à blanc",
                    "Gestion des non-conformités & CAPA",
                    "Revue de direction",
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
                <h3 className="text-xl font-bold mb-4">Besoin d'un audit ?</h3>
                <p className="mb-6 opacity-90">
                  Vérifiez la conformité de votre système avant l'audit de
                  certification officiel.
                </p>
                <Button
                  variant="secondary"
                  className="w-full font-bold text-primary"
                  asChild
                >
                  <Link href="/contact">Demander un devis</Link>
                </Button>
              </div>

              <div className="border border-border p-8">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Référentiels et périmètre
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="border-b border-border pb-2">
                    ISO 13485:2016
                  </li>
                  <li className="border-b border-border pb-2">ISO 9001:2015</li>
                  <li className="border-b border-border pb-2">
                    Périmètre réglementaire défini selon les marchés visés
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="capa" className="py-16 scroll-mt-28">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-5">
            CAPA et validation : remettre le suivi sous contrôle
          </h2>
          <p className="text-lg text-muted-foreground mb-5">
            L’accompagnement peut porter sur le portefeuille de non-conformités
            et d’actions correctives : priorisation, analyse des causes,
            attribution des actions et vérification de leur efficacité. Un
            tableau de bord relie l’avancement aux décisions attendues.
          </p>
          <p className="text-lg text-muted-foreground">
            Pour un projet de qualification ou de validation IQ/OQ/PQ, nous
            définissons le périmètre, les critères d’acceptation, les preuves et
            les responsabilités avant l’exécution des travaux.
          </p>
        </div>
      </section>
      <MissionScope
        audience="Directions et responsables qualité de PME, fabricants ou distributeurs de dispositifs médicaux : une intervention pour préparer un audit, structurer le système ou renforcer le pilotage des actions."
        preparation="Précisez le référentiel, l’échéance, les sites concernés et les principaux écarts connus."
        deliverables={[
          "État des lieux et priorités",
          "Plan d’action et responsabilités",
          "Documentation ou supports de suivi selon le périmètre",
        ]}
      />
    </Layout>
  );
}
