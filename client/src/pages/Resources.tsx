import Layout from "@/components/Layout";
import { guides } from "@/lib/guides";
import { Link } from "wouter";
export default function Resources() {
  const links = [
    {
      title: "Règlement (UE) 2017/745 — texte et versions consolidées",
      url: "https://eur-lex.europa.eu/eli/reg/2017/745/oj",
    },
    {
      title:
        "ISO 26000 — lignes directrices relatives à la responsabilité sociétale",
      url: "https://www.iso.org/standard/42546.html",
    },
    {
      title: "NF EN 14065 — présentation du référentiel RABC par AFNOR",
      url: "https://www.boutique.afnor.org/fr-fr/norme/nf-en-14065/textiles-textiles-traites-en-blanchisserie-systeme-de-maitrise-de-la-biocon/fa180053/1613",
    },
    {
      title: "FDA — Quality Management System Regulation (QMSR)",
      url: "https://www.fda.gov/medical-devices/postmarket-requirements-devices/quality-management-system-regulation-qmsr",
    },
  ];
  return (
    <Layout>
      <section className="py-16 bg-secondary/30 border-b border-border">
        <div className="container max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Ressources qualité, CAPA et RABC
          </h1>
          <p className="text-xl text-muted-foreground">
            Des repères pratiques pour préparer vos travaux, organiser vos
            questions et cadrer un accompagnement.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Guides à lire en ligne</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <article
                key={guide.slug}
                className="border border-border p-7 flex flex-col"
              >
                <h3 className="text-2xl font-bold mb-4">{guide.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {guide.description}
                </p>
                <Link
                  href={`/ressources/${guide.slug}`}
                  className="mt-auto font-semibold underline underline-offset-4"
                >
                  Lire le guide
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-secondary/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-5">
            Sources officielles utiles
          </h2>
          <p className="text-muted-foreground mb-6">
            Ces liens donnent accès aux textes ou aux présentations des
            organismes compétents. Ils ne constituent pas une analyse
            d’applicabilité à votre activité.
          </p>
          <ul className="space-y-5">
            {links.map((item) => (
              <li key={item.url}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                >
                  {item.title}
                  <span className="sr-only"> — ouvre un nouvel onglet</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}
