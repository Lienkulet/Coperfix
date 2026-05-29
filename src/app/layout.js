import { Inter, Oswald, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: "Coperfix | Copertine moderne la comandă · Chișinău, Moldova",
  description:
    "Coperfix confecționează și montează copertine, terase, balcoane, garduri, parcari auto în Moldova. Echipă proprie, prețuri fixe, garanție 10 ani. Solicită ofertă gratuită.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ro"
      className={`${inter.variable} ${oswald.variable} ${playfair.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
