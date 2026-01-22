import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle2, ShieldCheck, FileText, Activity, Users } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-secondary/30">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10" />
          <img 
            src="/images/hero-medical-quality.jpg" 
            alt="Audit qualité dispositif médical" 
            className="w-full h-full object-cover object-right"
          />
        </div>
        
        <div className="container relative z-20 py-20">
          <div className="max-w-3xl space-y-8 animate-in slide-in-from-left-10 duration-700 fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Expertise QHSE & Réglementaire
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-primary leading-[1.1]">
              Transformez vos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">obligations</span> en avantages compétitifs
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              N3 Conseil sécurise votre conformité et booste votre performance dans les secteurs des dispositifs médicaux, de la qualité et de la RSE.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/services">
                <Button size="lg" className="text-lg px-8 py-6 rounded-none shadow-lg hover:shadow-xl transition-all">
                  Découvrir nos services <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-none border-2 hover:bg-primary/5">
                  Demander un audit gratuit
                </Button>
              </Link>
            </div>

            <div className="pt-12 flex items-center gap-8 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-chart-2 h-5 w-5" />
                <span>+70 Audits réalisés</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-chart-2 h-5 w-5" />
                <span>+15 Certifications</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-chart-2 h-5 w-5" />
                <span>Expertise Terrain</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Bento Grid Style */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-primary mb-4">Une expertise multi-domaines</h2>
              <p className="text-lg text-muted-foreground">
                Nous intervenons sur l'ensemble de votre chaîne de valeur pour garantir une conformité à 360° et une performance durable.
              </p>
            </div>
            <Link href="/services">
              <Button variant="ghost" className="group text-primary font-semibold">
                Voir tous les services <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
            {/* Service 1 - Large */}
            <div className="md:col-span-2 group relative overflow-hidden bg-secondary/20 border border-border hover:border-primary/50 transition-colors">
              <div className="absolute inset-0">
                <img 
                  src="/images/service-quality.jpg" 
                  alt="Qualité ISO 13485" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>
              <div className="relative h-full p-8 flex flex-col justify-end">
                <div className="mb-auto bg-primary/10 w-12 h-12 flex items-center justify-center text-primary">
                  <Activity className="h-6 w-6" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-3">Qualité ISO 9001 & 13485</h3>
                <p className="text-muted-foreground text-lg mb-6 max-w-xl">
                  Construction et optimisation de votre système de management de la qualité. Audits internes, préparation aux certifications et maîtrise des processus.
                </p>
                <Link href="/services/qualite">
                  <span className="inline-flex items-center text-primary font-semibold cursor-pointer hover:underline">
                    En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group relative overflow-hidden bg-primary text-primary-foreground">
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="/images/service-regulatory.jpg" 
                  alt="Affaires Réglementaires" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary mix-blend-multiply" />
              </div>
              <div className="relative h-full p-8 flex flex-col justify-end">
                <div className="mb-auto bg-white/10 w-12 h-12 flex items-center justify-center text-white">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Affaires Réglementaires MDR</h3>
                <p className="text-white/80 mb-6">
                  Conformité MDR 2017/745, documentation technique et gestion des risques ISO 14971.
                </p>
                <Link href="/services/reglementaire">
                  <span className="inline-flex items-center text-white font-semibold cursor-pointer hover:underline">
                    Découvrir <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group relative overflow-hidden bg-secondary/20 border border-border hover:border-primary/50 transition-colors">
              <div className="absolute inset-0">
                <img 
                  src="/images/service-rabc.jpg" 
                  alt="RABC Biocontamination" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>
              <div className="relative h-full p-8 flex flex-col justify-end">
                <div className="mb-auto bg-primary/10 w-12 h-12 flex items-center justify-center text-primary">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">RABC Biocontamination</h3>
                <p className="text-muted-foreground mb-6">
                  Maîtrise de la biocontamination textile selon la norme NF EN 14065 pour blanchisseries.
                </p>
                <Link href="/services/rabc">
                  <span className="inline-flex items-center text-primary font-semibold cursor-pointer hover:underline">
                    Explorer <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Service 4 */}
            <div className="md:col-span-2 group relative overflow-hidden bg-secondary/20 border border-border hover:border-primary/50 transition-colors">
              <div className="absolute inset-0">
                <img 
                  src="/images/service-rse.jpg" 
                  alt="RSE ISO 26000" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>
              <div className="relative h-full p-8 flex flex-col justify-end">
                <div className="mb-auto bg-primary/10 w-12 h-12 flex items-center justify-center text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-3">RSE ISO 26000</h3>
                <p className="text-muted-foreground text-lg mb-6 max-w-xl">
                  Démarche de Responsabilité Sociétale des Entreprises. Diagnostic, stratégie et reporting ESG pour une performance durable.
                </p>
                <Link href="/services/rse">
                  <span className="inline-flex items-center text-primary font-semibold cursor-pointer hover:underline">
                    Voir l'offre RSE <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Rigueur, Proximité et Performance Durable</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Notre approche repose sur une méthode éprouvée, combinant expertise terrain, exigence réglementaire et accompagnement humain. Nous ne nous contentons pas de vous conseiller, nous construisons avec vous.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white border border-border flex items-center justify-center text-xl font-bold text-primary shadow-sm">01</div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Écoute & Diagnostic</h3>
                    <p className="text-muted-foreground">Analyse approfondie de vos enjeux pour définir une stratégie QHSE sur-mesure.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white border border-border flex items-center justify-center text-xl font-bold text-primary shadow-sm">02</div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Accompagnement Opérationnel</h3>
                    <p className="text-muted-foreground">Déploiement de solutions pragmatiques pour garantir la conformité et optimiser vos processus.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white border border-border flex items-center justify-center text-xl font-bold text-primary shadow-sm">03</div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Suivi & Pérennisation</h3>
                    <p className="text-muted-foreground">Mesure des résultats et amélioration continue pour inscrire la performance dans la durée.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-white p-8 shadow-2xl border border-border relative z-10">
                <div className="h-full w-full border border-primary/10 p-8 flex flex-col justify-center items-center text-center space-y-6">
                  <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center text-primary">
                    <ShieldCheck className="h-10 w-10" />
                  </div>
                  <blockquote className="text-xl font-medium text-primary italic">
                    "Notre mission est de rendre la conformité accessible et d'en faire un véritable levier de croissance pour votre entreprise."
                  </blockquote>
                  <div className="pt-4 border-t border-border w-full">
                    <div className="font-bold text-primary">Nick NGANKEP</div>
                    <div className="text-sm text-muted-foreground">Fondateur & Consultant Expert</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary/5 z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Prêt à sécuriser votre conformité ?</h2>
          <p className="text-xl text-primary-foreground/80 mb-10">
            Échangeons sur vos projets et vos enjeux. Bénéficiez d'un premier diagnostic gratuit et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-primary font-bold text-lg px-8 py-6 rounded-none">
                Contacter un expert
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 py-6 rounded-none">
                Explorer nos services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
