'use client'
import Image from "next/image";
import React from "react";
import bg from "../../public/background/home-background.png"
import clsx from 'clsx';
import Navigation from "./components/navigation";
import { TiAdjustBrightness } from "react-icons/ti";
import { extend } from '@react-three/fiber'
import { OrbitControls, TransformControls } from 'three-stdlib'
import AnimatedCursor from "react-animated-cursor";
import dynamic from 'next/dynamic'

extend({ OrbitControls, TransformControls })

import RenderModel from "./components/RenderModel";
const Rao = dynamic(() => import("../../public/models/Final"), { ssr: false })

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
        ]}
      />
      <main className="flex min-h-screen flex-col items-center justify-center relative">
        
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <TiAdjustBrightness className="animate-spin-slow text-yellow-300 opacity-30 h-[340px] w-[340px]" />
          </span>
        
        <Image priority sizes="100vw" src={bg} alt="background-image" fill className="w-full h-full object-cover object-center opacity-25" />
        <div className="w-full h-screen">
          <Navigation />
          {/* <RenderModel> */}
          {/* <Yadav /> */}
          {/* <Rao /> */}
          {/* </RenderModel> */}
        </div>
        <orbitControls />
        <transformControls />
      </main>
    </>
  );
}
