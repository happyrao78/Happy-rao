
import React, { useRef,useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
export default function Fourth(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/four-transformed.glb')
  
  const actions  = useAnimations(animations, group)
  useEffect(() => {
    if (actions && Array.isArray(actions)) { // Check if actions is defined and is an array
      actions.forEach((action) => {
        action.play();
      });
    }

    // Stop the animations when the component unmounts
    return () => {
      if (actions && Array.isArray(actions)) { // Check if actions is defined and is an array
        actions.forEach((action) => {
          action.stop();
        });
      }
    };
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}
    >
      <group name="Sketchfab_Scene">
        <group name="GLTF_SceneRootNode">
          <group name="Gyroid_Sphere_and_Cube_1" position={[0, 1.358, 0]}>
            <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.material} />
            <mesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials['Glossy.002']} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/four-transformed.glb')
