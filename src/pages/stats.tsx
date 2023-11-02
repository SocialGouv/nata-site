import Head from "next/head";

export default function LegalNotices() {
  return (
    <>
      <Head>
        <title>Nata - Statistiques</title>
        <meta
          name="description"
          content="L'application mobile pour les patients Nata qui veulent suivre leurs signes cliniques respiratoires"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <>
        <section className="fr-container">
          <h1 style={{ marginBottom: "4rem" }}>Statistiques</h1>
          <iframe
    src="https://matomo-metabase-nata.fabrique.social.gouv.fr/public/dashboard/4d21c451-4088-425b-9ff4-e301dc6b26de"
    frameborder="0"
    width="1200"
    height="900"
    allowtransparency
></iframe>
        </section>
      </>
    </>
  );
}
