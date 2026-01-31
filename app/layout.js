import {
  Playfair_Display,
  DM_Sans,
  Cormorant_Garamond,
} from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Omar Ben Fathallah - Ingénieur en Génie Logiciel",
  description:
    "Portfolio professionnel d'Omar Ben Fathallah - Développeur Full-Stack spécialisé en Spring Boot, Angular, ReactJS et DevOps",
  keywords:
    "Omar Ben Fathallah, Ingénieur Logiciel, Full-Stack Developer, Spring Boot, Angular, ReactJS, DevOps, Tunisia",
  authors: [{ name: "Omar Ben Fathallah" }],
  openGraph: {
    title: "Omar Ben Fathallah - Ingénieur en Génie Logiciel",
    description:
      "Portfolio professionnel - Développeur Full-Stack passionné par l'architecture des systèmes",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${dmSans.variable} ${cormorant.variable} font-sans antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
