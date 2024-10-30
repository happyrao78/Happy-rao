'use client'
import Image from "next/image";
import React, {useState,useEffect} from "react";
import bg from "../../public/background/home-background.png"
import clsx from 'clsx';
import Navigation from "./components/navigation";
import { extend } from '@react-three/fiber'
import { motion } from "framer-motion";
import { OrbitControls, TransformControls } from '@react-three/drei'
import AnimatedCursor from "react-animated-cursor";
import dynamic from 'next/dynamic'
import Loader from "./components/Loader/loader";
// import Top from "./components/Loader/topLoading";
import ChatBot from "./components/ChatBot";


extend({ OrbitControls, TransformControls })

import RenderModel from "./components/RenderModel";
const Rao = dynamic(() => import("../../public/models/Final"), { ssr: false })

export default function Home() {
  const[loading,setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  })
  return (
    <>
    {loading ? (
      <Loader />
    ): (
    <>
      <AnimatedCursor 
        innerSize={9}
        outerSize={40}
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
      <span className="reveal-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ">
          <span className="block text-accent font-semibold text-5xl sm:text-7xl  ">THE </span> 
          <span className="block text-accent font-semibold text-5xl sm:text-7xl">HARYANVI </span> 
          <span className="block text-accent font-semibold text-5xl sm:text-7xl">CODER </span>     
        </span>                 
        {/* <Top /> */}
                          
        
        <Image priority sizes="100vw" src={bg} alt="background-image" fill className="w-full h-full object-cover object-center opacity-25" />
        <div className="w-full h-screen">
          <Navigation />
          <ChatBot />
          {/* <Top /> */}
          {/* <RenderModel> */}
          {/* <Yadav /> */}
          {/* <Rao /> */}
          {/* </RenderModel> */}
        </div>
        <orbitControls />
        <transformControls />
      </main>
      {/* <Top /> */}
      </>
    )}
    </>
  );
}

