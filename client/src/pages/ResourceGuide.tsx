import Layout from "@/components/Layout";
import { guides } from "@/lib/guides";
import { Link, useLocation } from "wouter";
import NotFound from "./NotFound";

export default function ResourceGuide() {
  const [location] = useLocation();
  const guide = guides.find((item) => location === `/ressources/${item.slug}`);
  if (!guide) return <NotFound />;
  return (
    <Layout>
      <article className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <Link
            href="/ressources"
            className="text-sm underline underline-offset-4"
          >
            Retour aux ressources
          </Link>
          <p className="mt-8 mb-4 text-sm uppercase tracking-wider text-muted-foreground">
            Repères pratiques · N3 Conseil
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{guide.title}</h1>
          <p className="text-xl text-muted-foreground mb-12">
            {guide.description}
          </p>
          <div className="space-y-10">
            {guide.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {section.text}
                </p>
              </section>
            ))}
          </div>
          <aside className="mt-12 border border-border bg-secondary/30 p-7">
            <h2 className="text-2xl font-bold mb-4">
              Appliquer ces repères à votre situation
            </h2>
            <p className="text-muted-foreground mb-5">
              Votre activité, vos risques et votre échéance déterminent le
              périmètre de l’accompagnement.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link
                href={guide.service}
                className="font-semibold underline underline-offset-4"
              >
                Voir la prestation associée
              </Link>
              <Link
                href="/contact"
                className="font-semibold underline underline-offset-4"
              >
                Décrire mon besoin
              </Link>
            </div>
          </aside>
        </div>
      </article>
    </Layout>
  );
}
