import Image from "next/image";
import React from "react";
import { CiVirus } from "react-icons/ci";
import bg from "/public/background/contact-background.png";
import AnimatedCursor from "react-animated-cursor";
import Form from "../components/contact/form";

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
        ]}
      />
    
      <Image priority sizes="100vw" src={bg} alt="background-image" className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"/>
      
      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <div className="flex gap-10 w-auto ">
            <CiVirus className="text-white text-8xl hover:text-accent transition ease-in-out duration-250 motion-safe:animate-spin-slow" />
            <CiVirus className="text-white text-8xl hover:text-accent transition ease-in-out duration-250 motion-safe:animate-spin-slow" />
            <CiVirus className="text-white text-8xl hover:text-accent transition ease-in-out duration-250 motion-safe:animate-spin-slow" />
          </div>
          <h1 className="whitespace-nowrap text-accent font-semibold text-center text-4xl capitalize">Contact Happy Yadav</h1>
          <p className="text-center font-light text-sm xs:text-base">Let&apos;s make a worth connection! Drop your queries / message below and I&apos;ll reply to it as early as possible.</p>
        </div>
        <Form />
      </article>
    </>
  );
}
