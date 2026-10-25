import Layout from "@/components/Layout";

export default function Privacy() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold text-primary mb-12">
            Politique de confidentialité
          </h1>

          <div className="space-y-8 text-muted-foreground">
            <p>
              La protection de vos données personnelles est une priorité pour N3
              Conseil. Cette politique de confidentialité explique comment nous
              collectons, utilisons et protégeons vos informations.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">
                Collecte des données
              </h2>
              <p>
                Nous collectons les informations que vous nous fournissez
                directement via le formulaire de contact (prénom, nom, adresse
                e-mail, entreprise si renseignée, sujet, message et accord au
                traitement). Ces données sont nécessaires pour traiter votre
                demande.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">
                Utilisation des données
              </h2>
              <p>Vos données sont utilisées exclusivement pour :</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Répondre à vos demandes d'information ou de devis.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">
                Partage des données
              </h2>
              <p>
                Le formulaire transmet votre demande au service Formspree,
                utilisé pour sa réception, et N3 Conseil la traite pour vous
                répondre. Le site est hébergé par Vercel. Nous ne vendons pas
                vos données personnelles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">
                Vos droits
              </h2>
              <p>
                Vous pouvez demander l’accès, la rectification ou l’effacement
                de vos données et, selon les conditions applicables, la
                limitation du traitement, la portabilité ou vous opposer au
                traitement. Vous pouvez retirer votre consentement lorsque le
                traitement repose sur celui-ci. Contact : infos@n3-conseil.com.
                Vous pouvez également adresser une réclamation à la CNIL.
              </p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
}
