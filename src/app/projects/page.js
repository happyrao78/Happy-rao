'use client'
import Image from "next/image";
import React from "react";
import bg from "/public/background/projects.png";
import AnimatedCursor from "react-animated-cursor";
import ProjectList from "../components/projects";
import { projectsData } from "../data";
import RenderModel from "../components/RenderModel";
// import Staff from "../../../../public/models/Staff-transformed";
import dynamic from 'next/dynamic'

const Staff = dynamic(() => import("../../../public/models/Staff-transformed"), { ssr: false })
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
    
    
      <Image priority sizes="100vw" src={bg} alt ="background-image"  className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"/>
      <ProjectList projects={projectsData} />
      <div className="flex items-center justify-center fixed top-16 
      -translate-x-1/2 lg:translate-x-0 -z-10
      left-1/2 lg:top-20 lg:-left-24 h-screen">
      {/* <RenderModel>
          <Staff />
        </RenderModel> */}
      </div>
    
    </>
  );
}

   