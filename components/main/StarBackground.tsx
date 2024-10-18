"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import * as THREE from "three";
import { Points, PointMaterial } from "@react-three/drei";
import { inSphere } from "maath/random/dist/maath-random.esm";

interface StarsCanvasProps {
  className?: string;
}

const StarBackground: React.FC<React.ComponentPropsWithoutRef<typeof Points>> = (props) => {
  const ref: React.RefObject<THREE.Points> = useRef(null);
  const [sphere, setSphere] = useState<Float32Array | null>(null);

  React.useEffect(() => {
    setSphere(inSphere(new Float32Array(5001), { radius: 1.2 }));
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  if (!sphere) return null;

  return (
    <>
      {window.location.pathname === "/Exp" ? (
      <>
        <color attach="background" args={["#0a001e"]} />
        <group rotation={[0, 0, Math.PI / 4]}>
        <Points
          ref={ref}
          positions={sphere}
          stride={3}
          frustumCulled
          {...props}
        >
          <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          />
        </Points>
        </group>
      </>
      ) : (
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
        transparent
        color="#fff"
        size={0.002}
        sizeAttenuation={true}
        depthWrite={false}
        />
      </Points>
      )}
    </>
  );
};

const StarsCanvas: React.FC<StarsCanvasProps> = ({ className }) => (
  <div className={`w-full h-auto fixed inset-0 z-[20] ${className}`}>
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
