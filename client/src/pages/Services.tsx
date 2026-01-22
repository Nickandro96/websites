import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, ShieldCheck, FileText, Users, Check } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      id: "qualite",
      title: "Qualité ISO 9001 & 13485",
      description: "Construction et optimisation de votre système de management de la qualité pour une maîtrise durable de vos processus.",
      icon: Activity,
      features: [
        "Mise en place du SMQ",
        "Audits internes (processus / système)",
        "Préparation aux certifications",
        "Traitement des non-conformités & CAPA",
        "Qualification / Validation (IQ OQ PQ)"
      ],
      image: "/images/service-quality.jpg",
      link: "/services/qualite"
    },
    {
      id: "reglementaire",
      title: "Affaires Réglementaires MDR",
      description: "Accompagnement complet pour la conformité de vos dispositifs médicaux au règlement européen 2017/745.",
      icon: ShieldCheck,
      features: [
        "Stratégie réglementaire",
        "Constitution du dossier technique (TD)",
        "Gestion des risques ISO 14971",
        "Suivi Post-Market (PMS, PMCF)",
        "Relations avec l'Organisme Notifié"
      ],
      image: "/images/service-regulatory.jpg",
      link: "/services/reglementaire"
    },
    {
      id: "rabc",
      title: "RABC Biocontamination",
      description: "Maîtrise de la biocontamination textile selon la norme NF EN 14065 pour les blanchisseries hospitalières et industrielles.",
      icon: FileText,
      features: [
        "Mise en place du système RABC",
        "Analyse des risques biocontamination",
        "Audits et contrôles microbiologiques",
        "Formation des équipes",
        "Optimisation des flux et du zonage"
      ],
      image: "/images/service-rabc.jpg",
      link: "/services/rabc"
    },
    {
      id: "rse",
      title: "RSE ISO 26000",
      description: "Démarche de Responsabilité Sociétale des Entreprises pour allier éthique, performance et impact durable.",
      icon: Users,
      features: [
        "Diagnostic RSE complet",
        "Définition de la stratégie RSE",
        "Plan d'actions et déploiement",
        "Reporting ESG et indicateurs",
        "Valorisation de la démarche"
      ],
      image: "/images/service-rse.jpg",
      link: "/services/rse"
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Nos Services</h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Des solutions expertes en Qualité, Réglementaire, RABC et RSE conçues pour renforcer votre conformité, sécuriser vos risques et améliorer durablement vos performances.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="container space-y-32">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] overflow-hidden border border-border group">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/50 text-primary border border-border">
                  <service.icon className="h-8 w-8" />
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <Check className="h-5 w-5 text-chart-2 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={service.link}>
                  <Button size="lg" className="rounded-none px-8 mt-4">
                    En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary/30 border-t border-border">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">Besoin d'une solution sur-mesure ?</h2>
          <p className="text-lg text-muted-foreground mb-10">
            Chaque entreprise est unique. Discutons de vos besoins spécifiques pour construire l'accompagnement qui vous correspond.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-none px-10 py-6 text-lg">
              Demander un devis personnalisé
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
