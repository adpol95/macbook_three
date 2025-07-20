import { Canvas } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export const ThreeScene = () => {
  const cubeRef = useRef<THREE.Mesh>(null);
  const scroll = useScroll();

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y = scroll.offset * Math.PI * 2; // Rotate based on scroll position
    }
  });

  return (
    <Canvas style={{ height: '400px', width: '100%' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={cubeRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color='hotpink' />
      </mesh>
    </Canvas>
  );
};

export default ThreeScene; 