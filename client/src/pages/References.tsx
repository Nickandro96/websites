import Layout from "@/components/Layout";
import { Link } from "wouter";
export default function References() {
  const cases = [
    {
      title: "Préparer une échéance d’audit",
      context:
        "Un responsable qualité doit prioriser les écarts et rassembler les preuves disponibles.",
      work: "Définir le périmètre, examiner les documents et organiser le plan de préparation.",
      output: "Un état des écarts et un plan d’action suivi.",
      href: "/services/qualite",
    },
    {
      title: "Organiser le portefeuille CAPA",
      context:
        "Les actions correctives restent ouvertes et les responsabilités sont peu visibles.",
      work: "Revoir les priorités, les responsables et les modalités de vérification de l’efficacité.",
      output: "Un tableau de suivi et une cadence de revue.",
      href: "/services/qualite#capa",
    },
    {
      title: "Structurer une démarche RABC",
      context:
        "Une blanchisserie souhaite examiner ses circuits et ses pratiques de maîtrise de la biocontamination.",
      work: "Observer les étapes du traitement du linge et documenter les risques à traiter.",
      output: "Une synthèse des constats et des actions à prioriser.",
      href: "/services/rabc",
    },
  ];
  return (
    <Layout>
      <section className="py-16 bg-secondary/30 border-b border-border">
        <div className="container max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Des situations d’intervention concrètes
          </h1>
          <p className="text-xl text-muted-foreground">
            Les exemples ci-dessous illustrent des besoins possibles et les
            travaux proposés. Ils ne constituent pas des témoignages ni des
            résultats clients.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="container grid lg:grid-cols-3 gap-6">
          {cases.map((item) => (
            <article key={item.title} className="border border-border p-7">
              <h2 className="text-2xl font-bold mb-5">{item.title}</h2>
              <p className="text-muted-foreground mb-4">{item.context}</p>
              <h3 className="font-semibold mb-2">Travail proposé</h3>
              <p className="text-muted-foreground mb-4">{item.work}</p>
              <h3 className="font-semibold mb-2">Livrable à définir</h3>
              <p className="text-muted-foreground mb-6">{item.output}</p>
              <Link
                href={item.href}
                className="font-semibold underline underline-offset-4"
              >
                Voir l’accompagnement associé
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="py-16 bg-primary text-white">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-5">
            Votre situation mérite un cadrage spécifique
          </h2>
          <p className="text-lg text-white/80 mb-6">
            Décrivez votre activité, votre échéance et votre principal point de
            blocage pour préciser le type d’accompagnement adapté.
          </p>
          <Link
            href="/contact"
            className="font-semibold underline underline-offset-4"
          >
            Présenter mon besoin
          </Link>
          <Link
            href="/a-propos"
            className="block mt-5 underline underline-offset-4"
          >
            Découvrir le parcours du consultant
          </Link>
        </div>
      </section>
    </Layout>
  );
}
