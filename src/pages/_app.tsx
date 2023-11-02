import Link from "next/link";
import type { AppProps } from "next/app";
import { fr } from "@codegouvfr/react-dsfr";
import { init } from "@socialgouv/matomo-next";
import { Header } from "@codegouvfr/react-dsfr/Header";
import { Footer } from "@codegouvfr/react-dsfr/Footer";
import {
  Display,
  headerFooterDisplayItem,
} from "@codegouvfr/react-dsfr/Display";
import { createNextDsfrIntegrationApi } from "@codegouvfr/react-dsfr/next-pagesdir";

import "@/styles/globals.css";
import { useEffect } from "react";

declare module "@codegouvfr/react-dsfr/next-pagesdir" {
  interface RegisterLink {
    Link: typeof Link;
  }
}

const { withDsfr, dsfrDocumentApi } = createNextDsfrIntegrationApi({
  defaultColorScheme: "system",
  Link,
  preloadFonts: [
    //"Marianne-Light",
    //"Marianne-Light_Italic",
    "Marianne-Regular",
    //"Marianne-Regular_Italic",
    "Marianne-Medium",
    //"Marianne-Medium_Italic",
    "Marianne-Bold",
    //"Marianne-Bold_Italic",
    //"Spectral-Regular",
    //"Spectral-ExtraBold"
  ],
});

export { dsfrDocumentApi };

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL || "";
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID || "";

function App({ Component, pageProps }: AppProps) {
  const brandTop = (
    <>
      MINISTÈRES
      <br />
      SOCIAUX
    </>
  );

  const homeLinkProps = { href: "/", title: "Accueil - Nata" };

  useEffect(() => {
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header
        brandTop={brandTop}
        serviceTitle="NATA"
        operatorLogo={{
          alt: "logo NATA",
          imgUrl: "logo-nata.png",
          orientation: "horizontal",
        }}
        homeLinkProps={homeLinkProps}
        serviceTagline="L'application mobile destinée aux femmes enceintes afin de les accompagner dans leur suivi de grossesse à travers un parcours éclairé et sécurisant."
      />
      <main
        style={{
          flex: 1,
          gap: "4rem",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          ...fr.spacing("padding", { topBottom: "16v", rightLeft: "10v" }),
        }}
      >
        <Component {...pageProps} />
      </main>
      <Footer
        brandTop={brandTop}
        operatorLogo={{
          alt: "logo Nata",
          imgUrl: "logo-nata.png",
          orientation: "horizontal",
        }}
        homeLinkProps={homeLinkProps}
        accessibility="non compliant"
        bottomItems={[headerFooterDisplayItem]}
        contentDescription={`
          Nata, l'application mobile destinée aux femmes enceintes afin de les accompagner dans leur suivi de grossesse à travers un parcours éclairé et sécurisant.
        `}
        termsLinkProps={{ href: "/terms" }}
        websiteMapLinkProps={{ href: "#" }}
        linkList={[
          {
            categoryName: "Données personnelles",
            links: [{
              linkProps: { href: "/privacy-policy" },
              text: "Politique de confidentialité",
            }]
          },
          {
            categoryName: "Statistiques",
            links: [{
              linkProps: { href: "/stats" },
              text: "Statistiques d'utilisation",
            }]
          }
        ]}
        partnersLogos={{
          main: {
            imgUrl: "/logo-ars.png",
            alt: "Logo de l'ARS Île de France",
            href: "https://www.iledefrance.ars.sante.fr/",
          },
          sub: [
            {
              imgUrl: "/logo-samu-social.png",
              alt: "Logo du SAMU social de Paris",
              href: "https://www.samusocial.paris/",
            },
            {
              imgUrl: "/logo-soliguide.svg",
              alt: "Logo de Soliguide",
              href: "https://soliguide.fr/fr/",
            },
            {
              imgUrl: "/logo-solipam.jpeg",
              alt: "Logo de Solipam",
              href: "https://solipam.fr/",
            },
          ],
        }}
      />
      <Display />
    </div>
  );
}

export default withDsfr(App);
