import { useRouter } from "next/navigation";
import Head from "next/head";
import React from "react";
import * as rdd from "react-device-detect";

export default function Terms() {
  const { push } = useRouter();

  React.useEffect(() => {
    if (rdd.isMobile && rdd.isIOS) {
      console.log("ios");
      push("https://apps.apple.com/us/app/nata/id6448191010");
    } else if (rdd.isMobile && rdd.isAndroid) {
      console.log("android");
      push(
        "https://play.google.com/store/apps/details?id=com.nata01&gl=FR&pli=1"
      );
    } else {
      console.log("desktop");
      push("/");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Nata - Page redirection stores</title>
        <meta
          name="description"
          content="L'application mobile pour les patients Nata qui veulent suivre leurs signes cliniques respiratoires"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    </>
  );
}
