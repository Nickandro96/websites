import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import MissionCards from "@/components/MissionCards";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  FileText,
  Activity,
  Users,
} from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-secondary/30">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10" />
          <img
            src="/images/hero-medical-quality.webp"
            alt=""
            fetchPriority="high"
            width={1600}
            height={893}
            className="w-full h-full object-cover object-right"
          />
        </div>

        <div className="container relative z-20 py-20">
          <div className="max-w-3xl space-y-8 animate-in slide-in-from-left-10 duration-700 fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Expertise QHSE & Réglementaire
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-primary leading-[1.1]">
              Conseil en{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                qualité
              </span>
              , MDR et RABC
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Un audit approche, vos CAPA s’accumulent ou votre documentation
              doit être structurée ? N3 Conseil accompagne les fabricants et
              distributeurs de dispositifs médicaux ainsi que les acteurs du
              traitement du linge : des priorités claires, des livrables définis
              et des actions suivies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6 rounded-none shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <Link href="/services">
                  Découvrir nos services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 rounded-none border-2 hover:bg-primary/5"
                asChild
              >
                <Link href="/contact">Premier échange gratuit</Link>
              </Button>
            </div>

            <div className="pt-12 flex flex-wrap items-center gap-5 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-chart-2 h-5 w-5" />
                <span>Expérience multi-sites</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-chart-2 h-5 w-5" />
                <span>CAPA et audits qualité</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-chart-2 h-5 w-5" />
                <span>Validation IQ/OQ/PQ</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MissionCards />

      {/* Services Section - Bento Grid Style */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Des domaines d’intervention complémentaires
              </h2>
              <p className="text-lg text-muted-foreground">
                Systèmes qualité, affaires réglementaires et maîtrise des
                processus : choisissez le domaine qui correspond à votre besoin.
              </p>
            </div>
            <Button
              variant="ghost"
              className="group text-primary font-semibold"
              asChild
            >
              <Link href="/services">
                Voir tous les services{" "}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
            {/* Service 1 - Large */}
            <div className="md:col-span-2 group relative overflow-hidden bg-secondary/20 border border-border hover:border-primary/50 transition-colors">
              <div className="absolute inset-0">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/service-quality.webp"
                  alt="Qualité ISO 13485"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>
              <div className="relative h-full min-h-[400px] p-6 md:p-8 flex flex-col justify-end">
                <div className="mb-auto bg-primary/10 w-12 h-12 flex items-center justify-center text-primary">
                  <Activity className="h-6 w-6" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-3">
                  Qualité ISO 9001 & 13485
                </h3>
                <p className="text-muted-foreground text-lg mb-6 max-w-xl">
                  Construction et optimisation de votre système de management de
                  la qualité. Audits internes, préparation aux certifications et
                  maîtrise des processus.
                </p>
                <Link href="/services/qualite">
                  <span className="inline-flex items-center text-primary font-semibold cursor-pointer hover:underline">
                    Accompagnement ISO 9001 et ISO 13485{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group relative overflow-hidden bg-primary text-primary-foreground">
              <div className="absolute inset-0 opacity-20">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/service-regulatory.webp"
                  alt="Affaires Réglementaires"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary mix-blend-multiply" />
              </div>
              <div className="relative h-full min-h-[400px] p-6 md:p-8 flex flex-col justify-end">
                <div className="mb-auto bg-white/10 w-12 h-12 flex items-center justify-center text-white">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Affaires Réglementaires MDR
                </h3>
                <p className="text-white/80 mb-6">
                  Conformité MDR 2017/745, documentation technique et gestion
                  des risques ISO 14971.
                </p>
                <Link href="/services/reglementaire">
                  <span className="inline-flex items-center text-white font-semibold cursor-pointer hover:underline">
                    Conseil MDR <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group relative overflow-hidden bg-secondary/20 border border-border hover:border-primary/50 transition-colors">
              <div className="absolute inset-0">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/service-rabc.webp"
                  alt="RABC Biocontamination"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>
              <div className="relative h-full min-h-[400px] p-6 md:p-8 flex flex-col justify-end">
                <div className="mb-auto bg-primary/10 w-12 h-12 flex items-center justify-center text-primary">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  RABC Biocontamination
                </h3>
                <p className="text-muted-foreground mb-6">
                  Maîtrise de la biocontamination textile selon la norme NF EN
                  14065 pour blanchisseries.
                </p>
                <Link href="/services/rabc">
                  <span className="inline-flex items-center text-primary font-semibold cursor-pointer hover:underline">
                    Accompagnement RABC <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Service 4 */}
            <div className="md:col-span-2 group relative overflow-hidden bg-secondary/20 border border-border hover:border-primary/50 transition-colors">
              <div className="absolute inset-0">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/service-rse.webp"
                  alt="RSE ISO 26000"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>
              <div className="relative h-full min-h-[400px] p-6 md:p-8 flex flex-col justify-end">
                <div className="mb-auto bg-primary/10 w-12 h-12 flex items-center justify-center text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-3">
                  RSE ISO 26000
                </h3>
                <p className="text-muted-foreground text-lg mb-6 max-w-xl">
                  Démarche de Responsabilité Sociétale des Entreprises.
                  Diagnostic, stratégie et reporting ESG pour une performance
                  durable.
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
              <h2 className="text-4xl font-bold text-primary mb-6">
                Rigueur, Proximité et Performance Durable
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Nous partons de votre situation, examinons les écarts et
                organisons les actions avec vos équipes. Chaque priorité doit
                avoir un responsable, une échéance et une preuve de réalisation.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white border border-border flex items-center justify-center text-xl font-bold text-primary shadow-sm">
                    01
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Écoute & Diagnostic
                    </h3>
                    <p className="text-muted-foreground">
                      Analyse approfondie de vos enjeux pour définir une
                      stratégie QHSE sur mesure.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white border border-border flex items-center justify-center text-xl font-bold text-primary shadow-sm">
                    02
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Accompagnement Opérationnel
                    </h3>
                    <p className="text-muted-foreground">
                      Mise en œuvre des actions définies, suivi des écarts et
                      organisation des preuves.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white border border-border flex items-center justify-center text-xl font-bold text-primary shadow-sm">
                    03
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Suivi & Pérennisation
                    </h3>
                    <p className="text-muted-foreground">
                      Mesure des résultats et amélioration continue pour
                      inscrire la performance dans la durée.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-white p-5 md:p-8 shadow-2xl border border-border relative z-10">
                <div className="h-full w-full border border-primary/10 p-4 md:p-8 flex flex-col justify-center items-center text-center space-y-6">
                  <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center text-primary">
                    <ShieldCheck className="h-10 w-10" />
                  </div>
                  <blockquote className="text-xl font-medium text-primary italic">
                    "Notre mission est de rendre la conformité accessible et
                    d'en faire un véritable levier de croissance pour votre
                    entreprise."
                  </blockquote>
                  <div className="pt-4 border-t border-border w-full">
                    <div className="font-bold text-primary">Nick NGANKEP</div>
                    <div className="text-sm text-muted-foreground">
                      Fondateur et consultant QHSE
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 right-0 lg:-right-6 w-full h-full bg-primary/5 z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à sécuriser votre conformité ?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10">
            Échangeons sur vos projets et vos enjeux lors d'un premier entretien
            gratuit de 30 minutes, sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-primary font-bold text-lg px-8 py-6 rounded-none"
              asChild
            >
              <Link href="/contact">Décrire mon projet</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10 text-lg px-8 py-6 rounded-none"
              asChild
            >
              <Link href="/services">Explorer nos services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
