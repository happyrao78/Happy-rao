
import React, { useRef } from 'react'
import { useFrame } from "@react-three/fiber";
import { useGLTF } from '@react-three/drei'

export default function Rao(props) {
  const { nodes, materials } = useGLTF('/models/final-transformed.glb');
  const modelRef =useRef()
    useFrame((state, delta,xrFrame) =>{
      console.log(state.clock)
      modelRef.current.position.y = -1.5 + Math.sin(state.clock.elapsedTime)*0.15;
    
    })
  return (
    <group {...props} dispose={null}
     ref={modelRef}
               position={[0,-1.5,0]}
               scale={[0.02,0.02,0.02]}
               rotation={[0.25,0,0]}>
      <primitive object={nodes._rootJoint} />
      <skinnedMesh geometry={nodes.Object_68.geometry} material={materials.Body} skeleton={nodes.Object_68.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
      <skinnedMesh geometry={nodes.Object_70.geometry} material={materials.Clothing} skeleton={nodes.Object_70.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/models/final-transformed.glb')
