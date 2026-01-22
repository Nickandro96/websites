import Layout from "@/components/Layout";

export default function Legal() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold text-primary mb-12">Mentions Légales</h1>
          
          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Éditeur du site</h2>
              <p>
                Le site internet <strong>n3-conseil.com</strong> est édité par la société N3 Conseil.<br />
                Forme juridique : SASU<br />
                Siège social : [Adresse à compléter]<br />
                SIRET : [Numéro SIRET à compléter]<br />
                Directeur de la publication : Nick NGANKEP
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Hébergement</h2>
              <p>
                Le site est hébergé par :<br />
                [Nom de l'hébergeur]<br />
                [Adresse de l'hébergeur]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Propriété intellectuelle</h2>
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Données personnelles</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Pour exercer ce droit, contactez-nous à : infos@n3-conseil.com.
              </p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
}
