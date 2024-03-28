
"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function HatModel(props) {
  const { nodes, materials } = useGLTF('/models/hat-transformed-transformed.glb')
  const modelRef = useRef();
  useFrame(() =>{
modelRef.current.rotation.y += 0.005;
  })
  return (
    <group {...props} dispose={null}
    ref={modelRef} scale={[1.8,1.8,1.8]} rotation={[0.4,-1,0]} position={[0,0,0]} >
      <mesh geometry={nodes.Object_2.geometry} material={materials.initialShadingGroup} position={[0, -3.867, 0]} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/models/hat-transformed-transformed.glb')
