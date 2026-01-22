import Layout from "@/components/Layout";

export default function Privacy() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold text-primary mb-12">Politique de Confidentialité</h1>
          
          <div className="space-y-8 text-muted-foreground">
            <p>
              La protection de vos données personnelles est une priorité pour N3 Conseil. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Collecte des données</h2>
              <p>
                Nous collectons les informations que vous nous fournissez directement via le formulaire de contact (nom, email, téléphone, entreprise). Ces données sont nécessaires pour traiter votre demande.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Utilisation des données</h2>
              <p>
                Vos données sont utilisées exclusivement pour :
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Répondre à vos demandes d'information ou de devis.</li>
                <li>Vous envoyer des informations sur nos services (si vous y avez consenti).</li>
                <li>Améliorer notre site et nos services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Partage des données</h2>
              <p>
                Nous ne vendons, n'échangeons ni ne louons vos données personnelles à des tiers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Vos droits</h2>
              <p>
                Vous pouvez à tout moment demander l'accès, la modification ou la suppression de vos données en nous contactant à infos@n3-conseil.com.
              </p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
}
