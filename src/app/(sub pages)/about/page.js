'use client'
import Image from "next/image";
import React from "react";
import bg from "/public/background/about-background.png";
import happy from "../../../../public/background/logo.png";
import AnimatedCursor from "react-animated-cursor";
import RenderModel from "../../components/RenderModel";
// import HatModel from "../../../../public/models/Hat-transformed"
// import LogoPic from "../../../../public/models/Logo"
// import Fourth from "../../../../public/models/Four";
import AboutDetails from "@/app/components/about";


export default function Home() {
  return (
    <>
      <AnimatedCursor 
      innerSize={8}
      outerSize={30}
      color="256, 256, 256"
      outerAlpha={.2}
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
      ]} />
    
    
      <Image src={bg} alt ="background-image"  className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"/>

      
    
      <div className="w-full h-screen absolute top-[60%] -translate-y-1/2 left-0">
      
      <RenderModel>
      
          {/* <HatModel /> */}
          {/* <Fourth /> */}
          {/* <LogoPic /> */}
        </RenderModel>
      
      </div>
      <Image priority sizes="100vw" src={happy} alt ="background-image"  className="-z-50  top-[50%]  w-60 height-60  object-center  justify-center items-center left-1/2 mt-10 opacity-75 "/>
    <div className="relative w-full h-60 flex flex-col items-center justify-center ">
    
    
    <div className="absolute flex flex-col items-center text-center top-[40%] left-1/2 -translate-y-1/2 -translate-x-1/2" >
    

    
      <h1 className=" mt-8 text-4xl text-accent">"सर्वे भवन्तु सुखिनः, सर्वे सन्तु निरामयाः।"</h1>
      <p className="font-light text-foreground mt-8 text-ls">~ May all beings be happy, may all beings be free from illness.</p>
      
    </div>
    </div>
    <AboutDetails />
    </>
  );
}

   