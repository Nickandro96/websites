import Layout from "@/components/Layout";
import MissionScope from "@/components/MissionScope";
import { Button } from "@/components/ui/button";
import { Check, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Regulatory() {
  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-12 border-b border-white/10">
        <div className="container">
          <Link href="/services" asChild>
            <a className="inline-flex items-center text-sm font-medium text-white/60 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> Retour aux services
            </a>
          </Link>
          <div className="max-w-4xl">
            <span className="text-chart-2 font-bold tracking-wider uppercase text-sm mb-4 block">
              MDR 2017/745
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Accompagnement MDR pour vos dispositifs médicaux
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
              N3 Conseil accompagne les entreprises du dispositif médical dans
              leur démarche de conformité au règlement européen MDR : stratégie
              réglementaire, documentation technique et suivi après
              commercialisation, selon votre dispositif et l’avancement de votre
              projet.
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
                  Le défi du Règlement 2017/745
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Le règlement (UE) 2017/745 définit des obligations différentes
                  selon le rôle de l’opérateur économique. Le cadrage distingue
                  les travaux du fabricant de ceux du distributeur et identifie
                  les documents, contrôles et interfaces à examiner.
                </p>
                <p className="text-lg text-muted-foreground">
                  Nous vous aidons à structurer votre documentation technique et
                  à préparer les échanges avec les parties prenantes de votre
                  démarche de conformité.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary mb-8">
                  Nos Prestations
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Stratégie réglementaire & Classification",
                    "Rédaction du Dossier Technique (TD)",
                    "Gestion des Risques (ISO 14971)",
                    "Coordination des contributions à l’évaluation clinique",
                    "Suivi Post-Market (PMS / PMCF)",
                    "Revue de l’étiquetage et des informations fournies",
                    "Analyse des obligations et de la traçabilité du distributeur",
                    "Organisation des preuves et suivi des écarts documentaires",
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
              <div className="bg-secondary p-8 border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Transition MDR
                </h3>
                <p className="mb-6 text-muted-foreground text-sm">
                  Faites le point sur l’avancement de votre projet MDR et les
                  actions à prioriser selon votre dispositif et votre situation.
                </p>
                <Button className="w-full font-bold" asChild>
                  <Link href="/contact">Cadrer mon besoin réglementaire</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MissionScope
        audience="Fabricants et distributeurs de dispositifs médicaux : votre rôle dans la chaîne d’approvisionnement détermine les obligations à examiner et les travaux à organiser."
        preparation="Précisez votre rôle, les dispositifs concernés, le marché visé et les documents disponibles."
        deliverables={[
          "Cartographie documentaire",
          "Liste des écarts et informations manquantes",
          "Feuille de route et suivi des contributions",
        ]}
      />
    </Layout>
  );
}
