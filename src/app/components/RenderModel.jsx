import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { TiAdjustBrightness } from 'react-icons/ti';
import clsx from 'clsx';
import React, { Suspense } from 'react';

const RenderModel = ({ children, className }) => {
    return (
        <Canvas className={clsx("w-screen -z-10 h-screen relative", className)}>
            <Suspense fallback={null}>
                {children}
            </Suspense>
            <Environment preset='dawn' />
            <div className="absolute top-4 left-4">
                <TiAdjustBrightness />
            </div>
        </Canvas>
    );
}

export default RenderModel;
