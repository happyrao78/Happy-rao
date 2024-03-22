'use client'
import Image from "next/image";
import React from "react";
import bg from "../../public/background/home-background.png"
import clsx from 'clsx';
import Wizard from "../../public/models/Wizard-transformed";
import { extend } from '@react-three/fiber'
import { OrbitControls, TransformControls } from 'three-stdlib'
extend({ OrbitControls, TransformControls })

import RenderModel from "./components/RenderModel";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt ="background-image" fill className="w-full h-full object-cover object-center opacity-25"/>
      <div className="w-full h-screen">
        {}
        <RenderModel>
          <Wizard />
        </RenderModel>
        
      </div>
      <orbitControls />
    <transformControls />
    </main>
  );
}

   