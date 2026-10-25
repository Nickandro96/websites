import { Link } from "wouter";

export const missions = [
  {
    title: "Préparer un audit qualité",
    need: "Un audit approche et vos priorités restent dispersées.",
    deliverables:
      "Analyse des écarts, priorités documentées et plan d’action avec responsables et échéances.",
    href: "/services/qualite",
    link: "Préparer mon audit",
  },
  {
    title: "Piloter les non-conformités et les CAPA",
    need: "Les actions s’accumulent et leur efficacité est difficile à démontrer.",
    deliverables:
      "Revue du portefeuille, critères de priorité, tableau de suivi et organisation des revues.",
    href: "/services/qualite#capa",
    link: "Structurer le suivi des CAPA",
  },
  {
    title: "Structurer un projet MDR",
    need: "Vous devez organiser la documentation ou examiner vos obligations de distributeur.",
    deliverables:
      "État documentaire, responsabilités et feuille de route adaptée à votre rôle d’opérateur économique.",
    href: "/services/reglementaire",
    link: "Cadrer mon projet MDR",
  },
  {
    title: "Faire le point sur une démarche RABC",
    need: "Vous souhaitez examiner les circuits, les pratiques ou la qualification d’un processus.",
    deliverables:
      "Diagnostic des pratiques, analyse des risques et plan d’amélioration adapté à l’activité.",
    href: "/services/rabc",
    link: "Cadrer mon diagnostic RABC",
  },
];

export default function MissionCards() {
  return (
    <section
      className="py-16 md:py-24 bg-secondary/30"
      aria-labelledby="missions-title"
    >
      <div className="container">
        <div className="max-w-3xl mb-10">
          <h2
            id="missions-title"
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            Quel besoin souhaitez-vous traiter ?
          </h2>
          <p className="text-lg text-muted-foreground">
            Partez de votre situation : nous définissons ensuite le périmètre,
            les livrables et les modalités de l’intervention.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {missions.map((mission) => (
            <article
              key={mission.href}
              className="bg-white border border-border p-6 md:p-8 flex flex-col"
            >
              <h3 className="text-xl font-bold text-primary mb-3">
                {mission.title}
              </h3>
              <p className="text-muted-foreground mb-4">{mission.need}</p>
              <p className="text-sm text-muted-foreground mb-6">
                <strong className="text-primary">
                  Livrables à définir ensemble :{" "}
                </strong>
                {mission.deliverables}
              </p>
              <Link
                href={mission.href}
                className="mt-auto text-primary font-semibold underline underline-offset-4"
              >
                {mission.link}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
