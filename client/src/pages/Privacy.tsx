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
            <p className="text-sm">Mise à jour : 25 octobre 2026.</p>
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
              <h2 className="text-2xl font-bold text-primary mb-4">Responsable du traitement</h2>
              <p>Nick NGANKEP NZETCHOUANG, entrepreneur individuel sous le nom N3 Conseil, SIREN 912 622 222, 5 place Ingres, 37200 Tours, France. Pour toute question relative à vos données : <a href="mailto:infos@n3-conseil.com" className="underline">infos@n3-conseil.com</a>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">
                Utilisation des données
              </h2>
              <p>Vos données sont utilisées exclusivement pour :</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Répondre à vos demandes d'information ou de devis.</li>
              </ul>
              <p className="mt-4">Le traitement du formulaire repose sur votre consentement, recueilli lors de l’envoi. Lorsqu’une demande porte sur une prestation, les échanges nécessaires à la préparation ou à l’exécution d’un contrat peuvent également être traités sur cette base. Les champs obligatoires permettent de traiter votre demande ; sans ces informations, le formulaire ne peut pas être envoyé. L’envoi ne vous inscrit pas à une newsletter.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Durée de conservation</h2>
              <p>Les demandes sont conservées pendant le temps nécessaire à leur traitement et au suivi des échanges. Pour une demande sans suite contractuelle, N3 Conseil retient une durée maximale de trois ans à compter de la collecte ou du dernier échange venant de vous. Les données devenues inutiles sont supprimées plus tôt. En cas de relation contractuelle ou d’obligation légale, seules les pièces nécessaires peuvent être conservées pour la durée applicable à cette finalité. Vous pouvez demander l’effacement ou retirer votre consentement à l’adresse ci-dessous, sous réserve des données dont la conservation reste légalement nécessaire.</p>
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
              <p className="mt-4">L’accès aux demandes est réservé à N3 Conseil et aux prestataires techniques nécessaires à leur transmission et à leur réception. Formspree indique utiliser une infrastructure aux États-Unis ; des traitements peuvent donc avoir lieu hors de l’Espace économique européen. Les informations techniques et les modalités propres à ces prestataires sont décrites dans leurs politiques : <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="underline">Formspree</a> et <a href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noopener noreferrer" className="underline">Vercel</a>. Vous pouvez nous contacter pour obtenir des précisions sur le traitement de votre demande et exercer vos droits.</p>
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

