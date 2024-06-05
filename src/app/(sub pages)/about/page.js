"use client"
import Image from "next/image";
import React, { useState } from "react";
import bg from "/public/background/about-background.png";
import happy from "../../../../public/background/logo.png";
import AnimatedCursor from "react-animated-cursor";
import AboutDetails from "@/app/components/about";

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <AnimatedCursor 
        innerSize={8}
        outerSize={30}
        color="256, 256, 256"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={3}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
    
      <Image src={bg} alt="background-image" className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"/>
      
      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-[60%] -translate-y-1/2 left-0"/>
      
      {/* Image with revealing effect and hover effects */}
      <Image
        priority
        sizes="100vw"
        src={happy}
        alt="background-image"
        className={`-z-50 top-[50%] w-60 height-60 rounded-3xl object-center justify-center items-center left-1/2 mt-10 opacity-75 transition-opacity duration-1000 ${
          imageLoaded ? 'opacity-100 hover:opacity-75 hover:scale-110' : 'opacity-0'
        }`}
        onLoad={() => setImageLoaded(true)}
      />
      
      <div className="relative w-full h-60 flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[40%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="whitespace-nowrap mt-8 text-xl xs:text-2xl sm:text-3xl lg:text-4xl text-accent sanskrit-logo">&quot;सर्वे भवन्तु सुखिनः, सर्वे सन्तु निरामयाः।&quot;</h1>
          <p className="font-light text-foreground mt-8 text-ls hover:text-accent transition ease-in-out duration-500 sanskrit-logo">~ May all beings be happy, may all beings be free from illness.</p>
        </div>
      </div>
      
      <AboutDetails />
    </>
  );
}
