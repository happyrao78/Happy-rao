
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
export function Second(props) {
  const { nodes, materials } = useGLTF('/models/two-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.GLTF_created_0_rootJoint} />
      <skinnedMesh geometry={nodes.Object_92.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Object_92.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={1.333} />
      <skinnedMesh geometry={nodes.Object_95.geometry} material={materials.suit_sheet} skeleton={nodes.Object_95.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={1.333} />
      <skinnedMesh geometry={nodes.Object_98.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Object_98.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={1.333} />
      <skinnedMesh geometry={nodes.Object_101.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Object_101.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={1.333} />
      <skinnedMesh geometry={nodes.Object_104.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Object_104.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={1.333} />
      <skinnedMesh geometry={nodes.Object_107.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Object_107.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={1.333} />
      <skinnedMesh geometry={nodes.Object_110.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Object_110.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={1.333} />
      <skinnedMesh geometry={nodes.Object_113.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Object_113.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={1.333} />
      <skinnedMesh geometry={nodes.Object_116.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Object_116.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={1.333} />
    </group>
  )
}

useGLTF.preload('/models/two-transformed.glb')
