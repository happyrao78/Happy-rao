import React, { useRef } from 'react'
import { useFrame } from "@react-three/fiber";

import { useGLTF } from '@react-three/drei'

const Happy = (props) => {
  // Add your wizard component logic here
  const { nodes } = useGLTF('/models//happy-transformed.glb');
  const modelRef =useRef()
  useFrame((state) =>{
    // console.log(state.clock)
    modelRef.current.position.y = -1.5 + Math.sin(state.clock.elapsedTime)*0.15;

  })
  return (
    <group {...props} dispose={null}
     ref={modelRef}
     position={[1, 1, 1]}
      rotation={[0, Math.PI, 0]}
    >
      <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
    </group>
  )
}

useGLTF.preload('/models//happy-transformed.glb')
export default Happy;