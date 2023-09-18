import { IBM_Plex_Sans, Titillium_Web } from "next/font/google";

export const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--IbmPlexSans",
});

export const titillium = Titillium_Web({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--titilium-web",
});
