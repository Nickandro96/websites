import { Link } from "wouter";

export default function MissionScope({
  audience,
  deliverables,
  preparation,
}: {
  audience: string;
  deliverables: string[];
  preparation: string;
}) {
  return (
    <section
      className="py-16 bg-secondary/30"
      aria-label="Cadrage de la mission"
    >
      <div className="container grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Une mission cadrée autour de votre besoin
          </h2>
          <p className="text-muted-foreground mb-4">{audience}</p>
          <p className="text-muted-foreground">{preparation}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">
            Des livrables définis avant le démarrage
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            {deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted-foreground">
            Le devis précise le périmètre, les responsabilités, le calendrier et
            les modalités sur site ou à distance.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-5 font-semibold underline underline-offset-4"
          >
            Décrire mon besoin et demander un premier échange
          </Link>
        </div>
      </div>
    </section>
  );
}
