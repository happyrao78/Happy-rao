'use client'
import Image from "next/image";
import React from "react";
import bg from "../../public/background/home-background.png"
import clsx from 'clsx';
import Navigation from "./components/Navigation";
// import Yadav from "../../public/models/Home";
import Wizard from "../../public/models/wizard-transformed.jsx";


import { extend } from '@react-three/fiber'
import Rao from "../../public/models/Final";
import { OrbitControls, TransformControls } from 'three-stdlib'

import AnimatedCursor from "react-animated-cursor";



extend({ OrbitControls, TransformControls })

import RenderModel from "./components/RenderModel";
// import Rao from "../../public/models/Final";

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
          {/* <Wizard /> */}
          {/* <Yadav /> */}
          <Rao />
          
         
        </RenderModel>
        
      </div>
      <orbitControls />
    <transformControls />
    </main>
    </>
  );
}

   