import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Search, Settings, BarChart3, RefreshCw, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function Methodology() {
  const steps = [
    {
      number: "01",
      title: "Diagnostic & Audit Initial",
      description: "Nous commençons par une immersion dans votre structure pour comprendre vos processus, identifier les écarts par rapport aux référentiels (ISO 13485, MDR, RABC...) et évaluer vos risques.",
      icon: Search,
      details: ["Audit à blanc", "Analyse d'écarts (Gap Analysis)", "Rapport détaillé avec plan d'actions"]
    },
    {
      number: "02",
      title: "Stratégie & Planification",
      description: "Nous co-construisons une feuille de route réaliste et adaptée à vos contraintes opérationnelles. L'objectif est de définir les priorités pour atteindre la conformité sans paralyser l'activité.",
      icon: Settings,
      details: ["Définition du périmètre", "Planning de mise en œuvre", "Allocation des ressources"]
    },
    {
      number: "03",
      title: "Déploiement Opérationnel",
      description: "Nous vous accompagnons dans la rédaction documentaire, la mise en place des procédures et la formation de vos équipes. Nous travaillons à vos côtés, sur le terrain.",
      icon: RefreshCw,
      details: ["Rédaction SMQ / Dossier Technique", "Formation des collaborateurs", "Mise en place des indicateurs"]
    },
    {
      number: "04",
      title: "Audit & Certification",
      description: "Nous vérifions l'efficacité du système mis en place par des audits internes et vous assistons lors de l'audit de certification final avec l'organisme notifié.",
      icon: CheckCircle2,
      details: ["Audits internes de vérification", "Préparation à l'audit de certification", "Support jour J"]
    },
    {
      number: "05",
      title: "Suivi & Amélioration",
      description: "La certification n'est pas une fin en soi. Nous assurons un suivi pour maintenir le système, traiter les non-conformités et piloter l'amélioration continue.",
      icon: BarChart3,
      details: ["Veille réglementaire", "Revues de direction", "Optimisation continue"]
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-secondary/30 py-20 border-b border-border">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Notre Méthodologie</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Une approche structurée, pragmatique et éprouvée pour mener vos projets de certification et de conformité vers le succès.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24">
        <div className="container">
          <div className="space-y-24 relative before:absolute before:inset-0 before:ml-8 md:before:ml-[50%] before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/0 before:via-primary/20 before:to-primary/0">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${index % 2 === 0 ? '' : ''}`}>
                
                {/* Icon/Number Center Marker */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-background border-4 border-secondary z-10 group-hover:border-primary transition-colors duration-500 shadow-sm">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content Card */}
                <div className="w-[calc(100%-5rem)] md:w-[calc(50%-4rem)] ml-20 md:ml-0 p-8 bg-white border border-border shadow-sm hover:shadow-md transition-shadow duration-300 relative">
                  <div className="text-4xl font-bold text-secondary/40 absolute top-4 right-4">{step.number}</div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{step.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm font-medium text-primary/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-chart-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Empty space for the other side */}
                <div className="hidden md:block md:w-[calc(50%-4rem)]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Prêt à démarrer votre projet ?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Bénéficiez de cette méthodologie rigoureuse pour sécuriser votre conformité.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-primary font-bold px-8">
              Discuter de votre projet
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
