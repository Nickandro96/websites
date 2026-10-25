import Layout from "@/components/Layout";

export default function Legal() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold text-primary mb-12">
            Mentions légales
          </h1>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">
                1. Éditeur du site
              </h2>
              <p>
                Le site internet <strong>n3-conseil.com</strong> est édité par
                Nick NGANKEP NZETCHOUANG, entrepreneur individuel (EI), sous le
                nom N3 Conseil.
                <br />
                Forme juridique : entrepreneur individuel (EI)
                <br />
                Domiciliation : 5 place Ingres, 37200 Tours, France
                <br />
                SIREN : 912 622 222 — SIRET : 912 622 222 00020
                <br />
                Directeur de la publication : Nick NGANKEP
                <br />
                Téléphone :{" "}
                <a href="tel:+33751466684" className="underline">
                  07 51 46 66 84
                </a>
                <br />
                E-mail :{" "}
                <a href="mailto:infos@n3-conseil.com" className="underline">
                  infos@n3-conseil.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">
                2. Hébergement
              </h2>
              <p>
                Le site est hébergé par :<br />
                Vercel Inc.
                <br />
                440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis.
                <br />
                <a
                  href="https://vercel.com/legal/privacy-notice"
                  className="underline"
                >
                  Informations de l’hébergeur
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">
                3. Propriété intellectuelle
              </h2>
              <p>
                L'ensemble de ce site relève de la législation française et
                internationale sur le droit d'auteur et la propriété
                intellectuelle. Tous les droits de reproduction sont réservés, y
                compris pour les documents téléchargeables et les
                représentations iconographiques et photographiques.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">
                4. Données personnelles
              </h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données
                (RGPD), vous disposez d'un droit d'accès, de rectification et de
                suppression des données vous concernant. Pour exercer ce droit,
                contactez-nous à : infos@n3-conseil.com.
              </p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
}
