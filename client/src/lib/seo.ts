import { guides } from "./guides";
export const siteUrl = "https://www.n3-conseil.com";
export const seoPages: Record<string, { title: string; description: string }> =
  {
    "/": {
      title: "Conseil qualité, MDR et RABC — N3 Conseil",
      description:
        "N3 Conseil accompagne vos projets qualité ISO 9001 et ISO 13485, MDR, RABC et RSE. Interventions dans toute la France, selon le périmètre convenu.",
    },
    "/services": {
      title: "Conseil, audit et accompagnement — N3 Conseil",
      description:
        "Découvrez les accompagnements N3 Conseil : systèmes qualité, affaires réglementaires des dispositifs médicaux, RABC en blanchisserie et démarche RSE.",
    },
    "/services/qualite": {
      title: "Conseil ISO 9001 et ISO 13485 — N3 Conseil",
      description:
        "Structurez votre système qualité ISO 9001 ou ISO 13485 avec N3 Conseil : diagnostic, documentation, audits internes et préparation à la certification.",
    },
    "/services/reglementaire": {
      title: "Conseil MDR et dispositifs médicaux — N3 Conseil",
      description:
        "N3 Conseil accompagne la conformité MDR de vos dispositifs médicaux : stratégie réglementaire, documentation technique, risques et suivi après commercialisation.",
    },
    "/services/rabc": {
      title: "Audit et accompagnement RABC — N3 Conseil",
      description:
        "Maîtrisez la biocontamination du linge avec N3 Conseil : diagnostic, analyse des risques, formation et accompagnement RABC selon NF EN 14065.",
    },
    "/services/rse": {
      title: "Conseil RSE et démarche ISO 26000 — N3 Conseil",
      description:
        "Structurez votre démarche RSE avec N3 Conseil : diagnostic, parties prenantes, plan d’action et indicateurs, selon les lignes directrices ISO 26000.",
    },
    "/a-propos": {
      title: "Nick NGANKEP, consultant qualité — N3 Conseil",
      description:
        "Découvrez Nick NGANKEP, fondateur de N3 Conseil, et son accompagnement en qualité, affaires réglementaires des dispositifs médicaux et RABC.",
    },
    "/methodologie": {
      title: "Notre méthode de conseil et d’audit — N3 Conseil",
      description:
        "Du diagnostic initial au suivi des actions, découvrez la méthode N3 Conseil pour accompagner vos projets qualité, réglementaires, RABC et RSE.",
    },
    "/references": {
      title: "Situations d’intervention qualité et RABC — N3 Conseil",
      description:
        "Audit à préparer, CAPA à organiser ou démarche RABC à structurer : découvrez des exemples de besoins et les interventions proposées par N3 Conseil.",
    },
    "/ressources": {
      title: "Ressources qualité, MDR et RABC — N3 Conseil",
      description:
        "Lisez les guides N3 Conseil pour préparer un audit qualité, piloter les CAPA et cadrer un diagnostic RABC. Des repères pratiques et des sources officielles.",
    },
    "/contact": {
      title: "Contact et premier échange gratuit — N3 Conseil",
      description:
        "Échangez avec N3 Conseil sur votre besoin en qualité, MDR, RABC ou RSE. Un premier entretien gratuit de 30 minutes pour préciser votre projet.",
    },
    "/mentions-legales": {
      title: "Mentions légales — N3 Conseil",
      description:
        "Consultez les informations légales du site N3 Conseil et les coordonnées de son éditeur.",
    },
    "/confidentialite": {
      title: "Politique de confidentialité — N3 Conseil",
      description:
        "Consultez la politique de confidentialité de N3 Conseil et les informations relatives au traitement des données personnelles.",
    },
  };
for (const guide of guides)
  seoPages[`/ressources/${guide.slug}`] = {
    title: `${guide.title} — N3 Conseil`,
    description: guide.description,
  };
export const notFoundSeo = {
  title: "Page introuvable — N3 Conseil",
  description:
    "Cette page est introuvable. Retrouvez les prestations et les coordonnées de N3 Conseil depuis la page d’accueil.",
};
export const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "N3 Conseil",
  url: siteUrl,
  email: "infos@n3-conseil.com",
  telephone: "+33751466684",
  legalName: "Nick NGANKEP NZETCHOUANG EI",
  identifier: "SIREN 912622222",
  sameAs: ["https://www.linkedin.com/in/nick-ngankep"],
};
