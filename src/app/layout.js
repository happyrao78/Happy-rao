"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from 'clsx';
import FireFliesBackground from "./components/FireFliesBackground";
import Sound from "./components/sound"
import { useEffect, useState } from "react";
// import { Loader } from "lucide-react";
import Loader from "./components/Loader/loader";
import { metadata } from "./components/meta";
import Top from "./components/Loader/topLoading";
import LoginComp from "./components/Login";
import ChatBot from "./components/ChatBot";
import ProfileCard from "./components/ProfileCard";

const inter = Inter({ subsets: ["latin"],
variable: "--font-inter",
});

// export const metadata = {
//   title: "Happy Yadav",
//   description: "This is a personal portfolio website made using react, next.js, tailwindcss, three.js, emailjs. 🖥️⚙️",
//   name: "google-site-verification",
//   content: "xib0rnzpGcFXRULeLaNYEFJCECscHeA2Scqv3rGJtfQ",
// };

export default function RootLayout({ children }) {
  const [loading,setLoading]= useState(true);
  const [topLoading, setTopLoading] = useState(0);
  useEffect(()=>{
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000);
    return()=> clearTimeout(timer);
  },[])
  //useeffect is used in order to render this feature in client side only and not in serverside
// useEffect(()=>{
//   const disableContext = ()=>{ 
//     document.addEventListener("contextmenu", (e)=>{
//     e.preventDefault();
//   },false);
// }
// disableContext();

// return  ()=>{
// document.removeEventListener("contextmenu",(e)=>{
//   e.preventDefault();
// },false)
// }
// },[])
 
// disableContext();
  useEffect(()=>{
    const topLoader = setTimeout(() => {
      setTopLoading(false)
    }, 3000);
    return()=> clearTimeout(topLoader);
  },[])

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
        <meta name="google-site-verification" content={metadata.content} />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MC9Y68T72Z"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MC9Y68T72Z');
            `,
          }}
        />
      </head>
    
      <body  className={clsx(inter.variable, "bg-background text-foreground font-inter")}>
      {loading ? <Loader /> && <Top /> : [<Sound key="sound" /> ,<LoginComp key="login"/>] }
      
      {children}
  
      <FireFliesBackground />
    
      <div id="my-modal" />
      
      </body>
    </html>
  );
}
