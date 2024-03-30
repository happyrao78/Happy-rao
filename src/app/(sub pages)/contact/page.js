'use client'
import Image from "next/image";
import React from "react";
import bg from "/public/background/contact-background.png";
import happy from "../../../../public/background/logo.png";
import AnimatedCursor from "react-animated-cursor";
import Form from "../../components/contact/form";
export default function Contact() {
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
    
    
      <Image priority sizes="100vw" src={bg} alt ="background-image"  className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"/>

      
     
      
      
      
      <Image src={happy} alt ="background-image"  className="-z-50 fixed top-4 left-10 w-60 height-60 object-cover object-center opacity-70 justify-center items-center "/>
      <article className="relative w-full flex flex-col items-center justify-center space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-3/4">
          <h1 className="text-accent font-semibold tex-center text-4xl capitalize">Contact Happy Yadav</h1>
          <p className="text-center font-light">Let's make a worth connection ! Drop your queries / message below and I'll reply to it as early as possible.</p>
        </div>
        <Form />
      </article>
    
    </>
  );
}

   