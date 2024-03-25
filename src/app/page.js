'use client'
import Image from "next/image";
import React from "react";
import bg from "../../public/background/home-background.png"
import clsx from 'clsx';
import Navigation from "./components/Navigation";
import Wizard from "../../public/models/wizard-transformed.jsx";
// import Circle from "./components/navigation/CircularText";
// import HireMe from "./components/HireMe";
import { extend } from '@react-three/fiber'

import AnimatedCursor from "react-animated-cursor";

import { OrbitControls, TransformControls } from 'three-stdlib'

extend({ OrbitControls, TransformControls })

import RenderModel from "./components/RenderModel";
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
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt ="background-image" fill className="w-full h-full object-cover object-center opacity-25"/>
      <div className="w-full h-screen">
        {}
        <Navigation />
        <RenderModel>
          <Wizard />
          
         
        </RenderModel>
        
      </div>
      <orbitControls />
    <transformControls />
    </main>
    </>
  );
}

   