import Layout from "@/components/Layout";
import { Link } from "wouter";

export default function About() {
  const experience = [
    [
      "Linet France — Responsable QHSE",
      "Pilotage sur quatre sites dans la distribution de dispositifs médicaux : systèmes qualité, obligations du distributeur, CAPA, audits et démarche RABC. Coordination de travaux de qualification IQ/OQ/PQ, de sécurité et d’environnement.",
    ],
    [
      "Essity — Système qualité et affaires réglementaires",
      "Dispositifs médicaux de compression : système ISO 13485, travaux de documentation technique MDR, audits, traitement des écarts et validations de processus.",
    ],
    [
      "Sanofi Pasteur — Assurance qualité système",
      "Environnement pharmaceutique : gestion des habilitations et compétences, traitement des anomalies et suivi des actions dans un contexte BPF/GMP.",
    ],
    [
      "Cermix France — Management de la qualité",
      "Industrie : audits internes ISO 9001, accompagnement des audits externes, revues de direction et qualification des fournisseurs.",
    ],
  ];
  return (
    <Layout>
      <section className="bg-secondary/30 py-16 md:py-20 border-b border-border">
        <div className="container max-w-4xl">
          <p className="text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-4">
            Votre interlocuteur
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nick NGANKEP, fondateur de N3 Conseil
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Mon parcours relie les systèmes qualité, les affaires réglementaires
            des dispositifs médicaux et le pilotage QHSE sur le terrain. Je vous
            aide à clarifier vos priorités et à organiser des actions que vos
            équipes peuvent suivre.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl space-y-10">
          <div>
            <h2 className="text-3xl font-bold mb-5">
              Des exigences aux décisions opérationnelles
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Un audit à préparer, des actions correctives en attente, un
              dossier technique à structurer ou un processus à qualifier : ces
              situations demandent de relier les exigences aux pratiques. Mon
              approche consiste à documenter les constats, prioriser les risques
              et organiser le suivi avec les personnes concernées.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-5">
              Un parcours dans les dispositifs médicaux, la pharmacie et
              l’industrie
            </h2>
            <p className="text-muted-foreground mb-6">
              Ces expériences relèvent de mon parcours salarié, distinct des
              missions de N3 Conseil.
            </p>
            <div className="space-y-5">
              {experience.map(([title, text]) => (
                <article
                  key={title}
                  className="border-l-2 border-primary pl-6 py-2"
                >
                  <h3 className="font-bold text-xl mb-3">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-5">
              Formation et méthodes de travail
            </h2>
            <ul className="list-disc pl-5 space-y-3 text-muted-foreground">
              <li>
                Mastère spécialisé Manager de la qualité — Arts et Métiers,
                2020–2021.
              </li>
              <li>Master QSE — Hauts-de-France, 2018–2020.</li>
              <li>
                Analyse des causes, CAPA, audits, gestion documentaire,
                indicateurs et pilotage multi-sites.
              </li>
            </ul>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              [
                "Clarté",
                "Des priorités explicites et des livrables compréhensibles.",
              ],
              [
                "Rigueur",
                "Des constats reliés aux documents et aux pratiques observées.",
              ],
              [
                "Transfert",
                "Des outils de suivi que vos équipes peuvent reprendre.",
              ],
            ].map(([title, text]) => (
              <article key={title} className="border border-border p-6">
                <h3 className="font-bold text-xl mb-3">{title}</h3>
                <p className="text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
          <p className="text-lg text-muted-foreground">
            Basé à Tours, j’interviens dans toute la France selon les modalités
            convenues. Le premier échange sert à préciser votre besoin et à
            vérifier l’adéquation avec le périmètre d’intervention proposé. Les
            modalités, le calendrier et les livrables sont ensuite définis dans
            la proposition de mission.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link
              href="/services"
              className="font-semibold underline underline-offset-4"
            >
              Voir les missions proposées
            </Link>
            <Link
              href="/methodologie"
              className="font-semibold underline underline-offset-4"
            >
              Comprendre la méthode
            </Link>
            <Link
              href="/contact"
              className="font-semibold underline underline-offset-4"
            >
              Échanger avec Nick NGANKEP
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
