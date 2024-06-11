import { Inter } from "next/font/google";
import "./globals.css";
import clsx from 'clsx';
import FireFliesBackground from "./components/FireFliesBackground";
import Sound from "./components/sound"

const inter = Inter({ subsets: ["latin"],
variable: "--font-inter",
});

export const metadata = {
  title: "Happy Yadav",
  description: "This is a personal portfolio website made using react, next.js, tailwindcss, three.js, emailjs. 🖥️⚙️",
  name: "google-site-verification",
  content: "xib0rnzpGcFXRULeLaNYEFJCECscHeA2Scqv3rGJtfQ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
        <meta name="google-site-verification" content={metadata.content} />
        <link rel="icon" href="/favicon.ico" />
      </head>
    
      <body className={clsx(inter.variable, "bg-background text-foreground font-inter")}>{children}
      <FireFliesBackground />
      <Sound />
      <div id="my-modal" />
      </body>
    </html>
  );
}
