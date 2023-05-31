import Head from "next/head";
import Image from "next/image";
import { CallOut } from "@codegouvfr/react-dsfr/CallOut";

import qrCodePic from "../../public/qrcode.png";
import appStorePic from "../../public/app-store.png";
import googlePlayPic from "../../public/google-play.png";
import phoneScreenPic1 from "../../public/phone-screen-1.png";
import phoneScreenPic2 from "../../public/phone-screen-2.png";
import phoneScreenPic3 from "../../public/phone-screen-3.png";
import phoneScreenPic4 from "../../public/phone-screen-4.png";
import phoneScreenPic5 from "../../public/phone-screen-5.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>NATA - Accueil</title>
        <meta
          name="description"
          content="L'application mobile destinée aux femmes enceintes afin de les accompagner dans leur suivi de grossesse à travers un parcours éclairé et sécurisant."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <>
        <section className="fr-container" style={{ position: "relative" }}>
          <h1>NATA</h1>
          <p className="text-lead">
            Améliore le pouvoir d&apos;agir et l&apos;autonomie des femmes au
            moment de leur grossesse. <br />
            <strong>En fonction de leur situation sociale et médicale</strong>,
            des <strong>messages clés</strong> sont délivrés ainsi qu&apos;une{" "}
            <strong>orientation adaptée</strong>.
          </p>
          <div className="jumbo">
            <p>
              Un service publique <strong>100% gratuit</strong>,{" "}
              <strong>100% anonyme</strong> et{" "}
              <strong>sans aucune récupération de données</strong>
            </p>
            <div className="flex" style={{ gap: "40px", height: "30rem" }}>
              <div className="flex-1" style={{ position: "relative" }}>
                <Image
                  // width={291}
                  // height={583}
                  fill={true}
                  src={phoneScreenPic1}
                  alt="écran d'exemple de la l'application"
                />
              </div>
              <div className="flex-1" style={{ position: "relative" }}>
                <Image
                  // width={286}
                  // height={603}
                  fill={true}
                  src={phoneScreenPic2}
                  alt="écran d'exemple de la l'application"
                />
              </div>
              <div className="flex-1" style={{ position: "relative" }}>
                <Image
                  // width={317}
                  // height={580}
                  fill={true}
                  src={phoneScreenPic3}
                  alt="écran d'exemple de la l'application"
                />
              </div>
              <div className="flex-1" style={{ position: "relative" }}>
                <Image
                  // width={318}
                  // height={582}
                  fill={true}
                  src={phoneScreenPic4}
                  alt="écran d'exemple de la l'application"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="fr-container">
          <h2>
            Un outil de médiation numérique dans un environnement social
            exigeant
          </h2>
          <ul className="tiles">
            <li>
              <CallOut
                colorVariant="green-archipel"
                title="Augmentation significative de la mortalité infantile depuis 2012"
              >
                Sur 1000 naissances, la France est passée de 3,3 décès à 3,5
                décès de nourrissons de moins d&apos;un an.
              </CallOut>
            </li>
            <li>
              <CallOut
                colorVariant="green-archipel"
                title="En France en 2015, 22% des naissances vivantes concernaient des femmes nées à l'étranger"
              >
                En adéquation avec la littérature européenne, de récentes
                recherches font état d&apos;un risque accru de mort maternelle
                ou de morbidité maternelle sévère (MMS) pour ces femmes
                comparées à la population générale.
              </CallOut>
            </li>
            <li>
              <CallOut
                colorVariant="green-archipel"
                title="Isolement social, obstacles liés à la langue, peu de connaissances du système de soins et errance résidentielle"
              >
                Autant de facteurs de vulnérabilité ayant un impact sur le suivi
                de grossesse.
              </CallOut>
            </li>
          </ul>
        </section>

        <section className="fr-container">
          <h2>Nata et ses fonctionnalités</h2>
          <div className="flex" style={{ marginLeft: "2rem" }}>
            <ul
              className="flex flex-column flex-1"
              style={{
                gap: "1rem",
                lineHeight: "2rem",
                fontSize: "x-large",
                marginRight: "3rem",
                justifyContent: "center",
              }}
            >
              <li>
                <strong>
                  Favoriser la prise en charge de la femme enceinte
                </strong>
                , en orientant vers les bons professionnels de santé selon la
                couverture médicale déclarée
              </li>
              <li>
                <strong>Alerter en cas de symptômes d&apos;urgence</strong> en
                orientant directement vers le 15 et les urgences maternités
              </li>
              <li>
                <strong>Permettre de se repérer</strong> dans toutes les étapes
                du suivi grossesse
              </li>
              <li>
                <strong>Faciliter la communication</strong> avec les
                professionnels du médico-social, via une page résumant le
                profil, le suivi de grossesse et la situation sociale de
                l&apos;utilisatrice
              </li>
              <li>
                <strong>Comprendre</strong> les examens médicaux prescrits et
                s&apos;autonomiser dans les démarches administratives à faire
              </li>
              <li>
                <strong>Trouver l&apos;aide adaptée</strong> à ses ressources et
                à sa situation d&apos;hébergement, et au plus proche avec la
                géolocalisation
              </li>
            </ul>
            <div className="relative">
              <Image src={phoneScreenPic5} alt="pof" width={286} height={587} />
            </div>
          </div>
        </section>

        <section className="fr-container">
          <h2 style={{ textAlign: "center" }}>
            Téléchargez l&apos;application
          </h2>
          <div className="download-links">
            <div>
              <Image
                priority
                width={250}
                src={qrCodePic}
                alt="Image du lien vers l'App Store"
              />
            </div>
            <div className="store-links">
              <a
                target="_blank"
                href="https://apps.apple.com/us/app/nata/id1670657282"
                id="download"
              >
                <Image
                  priority
                  width={250}
                  src={appStorePic}
                  alt="Image du lien vers l'App Store"
                />
              </a>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.nata"
              >
                <Image
                  priority
                  width={250}
                  src={googlePlayPic}
                  alt="Image du lien vers le Google Play Store"
                />
              </a>
            </div>
          </div>
        </section>

        <section className="fr-container">
          <h2>Qui sommes nous ?</h2>
          <div
            style={{
              gap: "0.8rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p style={{ fontSize: "x-large", lineHeight: "2rem" }}>
              Nata est un dispositif expérimenté et créé par Maëlle Prioux ,
              Responsable Projets Santé // Médical et soins au Samu Social de
              Paris et son équipe, financé par l&apos;Agence Régionale de Santé
              et incubé à la Fabrique numérique des Ministères sociaux.
            </p>
            <p style={{ fontSize: "larger", lineHeight: "2rem" }}>
              Notre équipe est présente pour répondre à toutes vos questions du
              lundi au vendredi à l&apos;adresse mail suivante :{" "}
              <a href="mailto:nata@fabrique.social.gouv.fr" target="_blank">
                nata@fabrique.social.gouv.fr
              </a>
            </p>
          </div>
        </section>
      </>
    </>
  );
}
