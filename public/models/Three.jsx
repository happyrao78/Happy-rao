
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
export function Third(props) {
  const { nodes, materials } = useGLTF('/models/three-transformed.glb')
  const modelRef = useRef();
  useFrame(() =>{
modelRef.current.rotation.y += 0.005;
  })
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes._rootJoint} />
      <skinnedMesh geometry={nodes.Object_85.geometry} material={materials['Material.002']} skeleton={nodes.Object_85.skeleton} scale={1.262} />
      <skinnedMesh geometry={nodes.Object_87.geometry} material={materials['Material.002']} skeleton={nodes.Object_87.skeleton} scale={1.262} />
      <skinnedMesh geometry={nodes.Object_89.geometry} material={materials['Material.002']} skeleton={nodes.Object_89.skeleton} scale={1.262} />
      <skinnedMesh geometry={nodes.Object_91.geometry} material={materials['Material.002']} skeleton={nodes.Object_91.skeleton} scale={1.262} />
      <skinnedMesh geometry={nodes.Object_93.geometry} material={materials['Material.002']} skeleton={nodes.Object_93.skeleton} scale={1.262} />
      <skinnedMesh geometry={nodes.Object_95.geometry} material={materials['Material.002']} skeleton={nodes.Object_95.skeleton} scale={1.262} />
      <skinnedMesh geometry={nodes.Object_97.geometry} material={materials['Material.002']} skeleton={nodes.Object_97.skeleton} scale={1.262} />
    </group>
  )
}

useGLTF.preload('/models/three-transformed.glb')
