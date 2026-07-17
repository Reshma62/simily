import { Lato } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

/* Body font — Lato, self-hosted via next/font/google. */
const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["300", "400", "700", "900"],
});

/* Heading font — Cabinet Grotesk is not on Google Fonts, so it's
   self-hosted with next/font/local. Put the variable-font file at:
   app/fonts/CabinetGrotesk-Variable.woff2
   (free download: https://www.fontshare.com/fonts/cabinet-grotesk) */
const cabinet = localFont({
  src: "./fonts/CabinetGrotesk-Variable.woff2",
  variable: "--font-cabinet",
  weight: "100 900",
  display: "swap",
});

export const metadata = {
  title: "Smily — Dental Care",
  description:
    "Discover your best smile with our dentist. Modern dental care: implants, plaque removal, root canal treatment and oral surgery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${cabinet.variable}`}>
        {children}
      </body>
    </html>
  );
}
