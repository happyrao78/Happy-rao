"use client"
import { Environment } from '@react-three/drei'

import clsx from 'clsx';

import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
const RenderModel = ({children, className}) => {
    return (
        <Canvas
        className={clsx("w-screen -z-10 h-screen relative", className)}>
<Suspense fallback={null}>
{children}
</Suspense>
<Environment preset='dawn' />
        </Canvas>
    )
}
export default RenderModel