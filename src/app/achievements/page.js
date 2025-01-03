"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import bg from "/public/background/achievements.png";
import happy from "../../../public/background/logo.png";
import AnimatedCursor from "react-animated-cursor";
import AboutDetails from "@/app/components/about";
import Index from "@/app/components/achievements";

export default function Page() {
 
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

      <Image 
        src={bg} 
        alt="background-image" 
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />
      <Index />

     
    </>
  );
}
