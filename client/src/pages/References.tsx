import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";
import { Link } from "wouter";

export default function References() {
  const testimonials = [
    {
      author: "Directeur Qualité",
      company: "Fabricant DM Classe IIa",
      text: "L'accompagnement de N3 Conseil a été déterminant pour notre passage au MDR. Leur expertise technique et leur pragmatisme nous ont permis de structurer notre documentation technique efficacement.",
      sector: "Dispositifs Médicaux"
    },
    {
      author: "Responsable Blanchisserie",
      company: "Centre Hospitalier Régional",
      text: "Nous avons fait appel à N3 Conseil pour la mise en place de la démarche RABC. L'audit initial a été très révélateur et le plan d'action proposé parfaitement adapté à nos contraintes architecturales.",
      sector: "Santé / RABC"
    },
    {
      author: "CEO",
      company: "Start-up MedTech",
      text: "Un partenaire de confiance qui a su s'adapter à notre rythme de start-up tout en maintenant un niveau d'exigence élevé pour notre certification ISO 13485.",
      sector: "Innovation Santé"
    }
  ];

  const sectors = [
    { name: "Industrie du Dispositif Médical", desc: "Fabricants, Sous-traitants, Distributeurs" },
    { name: "Établissements de Santé", desc: "Hôpitaux, Cliniques, EHPAD" },
    { name: "Blanchisseries Industrielles", desc: "Traitement du linge hospitalier" },
    { name: "Laboratoires", desc: "Analyses médicales, Recherche" }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-secondary/30 py-20 border-b border-border">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Ils nous font confiance</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              La satisfaction de nos clients est notre meilleure carte de visite. Découvrez les secteurs dans lesquels nous intervenons et les retours de nos partenaires.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Nos Secteurs d'Intervention</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, idx) => (
              <div key={idx} className="p-6 border border-border bg-white hover:border-primary/50 transition-colors text-center">
                <h3 className="font-bold text-lg text-primary mb-2">{sector.name}</h3>
                <p className="text-sm text-muted-foreground">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container">
          <h2 className="text-3xl font-bold mb-16 text-center">Témoignages Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <div key={idx} className="bg-white/5 p-8 border border-white/10 relative">
                <Quote className="absolute top-6 left-6 w-8 h-8 text-chart-2 opacity-50" />
                <p className="text-lg leading-relaxed mb-8 pt-8 italic opacity-90">"{item.text}"</p>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-bold">{item.author}</div>
                  <div className="text-sm opacity-70">{item.company}</div>
                  <div className="text-xs text-chart-2 mt-2 uppercase tracking-wider font-medium">{item.sector}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container max-w-2xl">
          <h2 className="text-3xl font-bold text-primary mb-6">Rejoignez nos clients satisfaits</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Vous souhaitez en savoir plus sur nos références ou échanger avec l'un de nos clients ?
          </p>
          <Link href="/contact">
            <Button size="lg" className="px-8">
              Contactez-nous
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
