import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Rabc() {
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
            <span className="text-chart-2 font-bold tracking-wider uppercase text-sm mb-4 block">NF EN 14065</span>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">Méthode RABC</h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Maîtrisez la biocontamination textile en blanchisserie hospitalière et industrielle pour garantir la sécurité du patient.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">L'hygiène du linge : un enjeu sanitaire</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  La méthode RABC (Risk Analysis and Biocontamination Control) est l'équivalent de l'HACCP pour le traitement du linge. Elle vise à garantir une qualité microbiologique maîtrisée des textiles livrés aux services de soins.
                </p>
                <p className="text-lg text-muted-foreground">
                  Nous vous accompagnons dans la mise en place de ce système préventif, de l'analyse des risques à la validation des processus de lavage.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary mb-8">Notre Expertise RABC</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Diagnostic initial des installations",
                    "Analyse des risques biocontamination",
                    "Définition de la marche en avant",
                    "Protocoles d'hygiène et d'habillage",
                    "Plan de prélèvements microbiologiques",
                    "Formation du personnel",
                    "Audit de suivi annuel",
                    "Dossier de certification"
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
              <div className="bg-white p-8 border border-border shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-4">Formation RABC</h3>
                <p className="mb-6 text-muted-foreground text-sm">
                  Formez vos équipes aux bonnes pratiques d'hygiène et à la méthode RABC.
                </p>
                <Link href="/contact">
                  <Button variant="outline" className="w-full font-bold">
                    Programme de formation
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
