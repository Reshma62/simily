import { Plus_Jakarta_Sans, Jost } from "next/font/google";
import "./globals.css";

/* Fonts are exposed as CSS variables and consumed in globals.css
   (--font-display / --font-body). */
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Smily — Dental Care",
  description:
    "Discover your best smile with our dentist. Modern dental care: implants, plaque removal, root canal treatment and oral surgery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${jost.variable}`}>{children}</body>
    </html>
  );
}
