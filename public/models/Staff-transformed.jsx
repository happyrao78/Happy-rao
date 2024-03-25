"use client"
import React,{useRef} from 'react'

import { useGLTF } from '@react-three/drei'
import {useFrame} from '@react-three/fiber'
const Staff=(props)=> {
  const { nodes, materials } = useGLTF('/models/Staff-transformed-transformed.glb');
  const modelRef = useRef();
  useFrame(() =>{
modelRef.current.rotation.y += 0.007
  })
  return (
    <group {...props} dispose={null}
    scale={[3,3,3]}
    position={[0,-2,0]}
    ref={modelRef}
    >
      <mesh geometry={nodes.Wizard_Staff3_Wizard_Staff3_0.geometry} material={materials.Wizard_Staff3} position={[-0.041, 0.983, 0.768]} rotation={[0, Math.PI / 2, 0]} scale={0.04} />
      <mesh geometry={nodes.Wizard_Staff2_Wizard_Staff2_0.geometry} material={materials.Wizard_Staff2} position={[-0.041, 0.983, 0.768]} rotation={[0, Math.PI / 2, 0]} scale={0.04} />
    </group>
  )
}

useGLTF.preload('/models/staff-transformed-transformed.glb')
export default Staff;