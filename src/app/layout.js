import "./globals.css";
import { Bebas_Neue, Montserrat } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Farai Bauti",
  description: "Portfolio of Farai Bauti",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${montserrat.variable} font-montserrat ${bebas.variable} dark:bg-dark dark:text-light bg-light `}
      >
        {children}
      </body>
    </html>
  );
}
