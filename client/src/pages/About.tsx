import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Users, Target } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-secondary/30 py-20 border-b border-border">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">L'Expertise au service de la Conformité</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              N3 Conseil est né d'une ambition simple : rendre la conformité plus claire, plus accessible et plus efficace pour les entreprises des secteurs réglementés.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Notre Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Redéfinir la conformité comme un avantage stratégique. Nous croyons en des systèmes simples, efficaces et alignés avec les réalités du terrain, capables d'élever la qualité, de maîtriser les risques et d'inspirer la confiance.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Notre Histoire</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Après plusieurs années d'expérience en Qualité, Affaires Réglementaires, dispositifs médicaux et RABC, Nick NGANKEP a fondé N3 Conseil pour mettre son expertise au service des organisations souhaitant renforcer leurs pratiques et atteindre un haut niveau d'exigence.
                </p>
              </div>
            </div>
            
            <div className="bg-secondary/20 p-8 border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6">Nos Valeurs Fondamentales</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-white p-3 h-fit border border-border shadow-sm">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">Fiabilité</h4>
                    <p className="text-muted-foreground">Une expertise solide, fondée sur des méthodologies éprouvées et une parfaite maîtrise des normes.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white p-3 h-fit border border-border shadow-sm">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">Transparence</h4>
                    <p className="text-muted-foreground">Une communication claire, honnête et responsable à chaque étape de la démarche.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white p-3 h-fit border border-border shadow-sm">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">Engagement</h4>
                    <p className="text-muted-foreground">Un engagement total auprès de nos clients pour une amélioration durable des performances.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 border border-white/20">
              <div className="text-5xl font-bold mb-2">+70</div>
              <div className="text-lg opacity-80">Audits Internes Réalisés</div>
            </div>
            <div className="p-6 border border-white/20">
              <div className="text-5xl font-bold mb-2">+15</div>
              <div className="text-lg opacity-80">Certifications Accompagnées</div>
            </div>
            <div className="p-6 border border-white/20">
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-80">Engagement Client</div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultant Profile */}
      <section className="py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3 aspect-[3/4] bg-secondary relative">
              {/* Placeholder for portrait */}
              <div className="absolute inset-0 flex items-center justify-center bg-secondary/50 text-muted-foreground">
                Photo Consultant
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold text-primary mb-2">Nick NGANKEP</h2>
              <p className="text-xl text-primary/80 mb-6">Consultant Principal & Fondateur</p>
              <div className="space-y-4 text-lg text-muted-foreground mb-8">
                <p>
                  Expert en Qualité et Affaires Réglementaires, je suis spécialisé dans l'accompagnement des entreprises du dispositif médical et des secteurs à fortes contraintes normatives.
                </p>
                <p>
                  Mon approche pragmatique vise à transformer la contrainte réglementaire en levier de performance opérationnelle. Je m'attache à construire des systèmes qualité qui vivent et servent l'entreprise au quotidien.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-secondary/50 text-primary font-medium text-sm border border-border">ISO 13485 Lead Auditor</span>
                <span className="px-4 py-2 bg-secondary/50 text-primary font-medium text-sm border border-border">MDR Specialist</span>
                <span className="px-4 py-2 bg-secondary/50 text-primary font-medium text-sm border border-border">RABC Expert</span>
              </div>
              <Link href="/contact">
                <Button size="lg" className="rounded-none px-8">
                  Me contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
