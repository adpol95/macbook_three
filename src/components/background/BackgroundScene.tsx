import { useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group, Mesh } from "three";

import earthTexture from "@/assets/textures/earthmap1k.jpg";
import jupiterTexture from "@/assets/textures/jup0vss1.jpg";
import marsTexture from "@/assets/textures/mars_1k_color.jpg";
import neptuneTexture from "@/assets/textures/neptunemap.jpg";
import saturnTexture from "@/assets/textures/saturnmap.jpg";
import sunTexture from "@/assets/textures/sunmap.jpg";

const FloatingShapes = () => {
    const shapesRefs = [
        useRef<Mesh>(null),
        useRef<Mesh>(null),
        useRef<Mesh>(null),
        useRef<Mesh>(null),
        useRef<Mesh>(null),
        useRef<Mesh>(null)
    ];
    const scrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            scrollY.current = window.scrollY;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        shapesRefs.forEach((ref, index) => {
            if (ref.current) {
                const yBase = index * 5 - 7.5;
                const yOffset = Math.sin(time * (index * 0.2 + 0.5) + index) * 4;
                ref.current.position.y = yBase + yOffset;
                if (index < 5) {
                    const radius = 30 + index * 15;
                    const speed = 0.1 / (index + 1);
                    ref.current.position.x = Math.cos(time * speed + index) * radius;
                } else {
                    ref.current.position.x = 1;
                }
                const baseZ =
                    Math.sin(time * (0.1 / (index + 1)) + index) *
                        (index < 5 ? 30 + index * 15 : 3.5) -
                    120;
                const zOffset = scrollY.current * 0.05;
                ref.current.position.z = baseZ + zOffset;
                ref.current.rotation.y += 0.01 * (index % 2 === 0 ? 1 : -1);
                const baseScale =
                    index === 0
                        ? 2.0
                        : index === 1
                          ? 1.8
                          : index === 2
                            ? 2.2
                            : index === 3
                              ? 1.5
                              : index === 4
                                ? 3.5
                                : 5;
                const scaleFactor = 1 + Math.sin(scrollY.current * 0.002 + index) * 0.2;
                ref.current.scale.set(
                    baseScale * scaleFactor,
                    baseScale * scaleFactor,
                    baseScale * scaleFactor
                );
            }
        });
    });

    const textures = useTexture({
        jupiter: jupiterTexture,
        earth: earthTexture,
        mars: marsTexture,
        saturn: saturnTexture,
        neptune: neptuneTexture,
        sun: sunTexture
    });

    return (
        <>
            <mesh ref={shapesRefs[5]} position={[1, -3, -15]}>
                <sphereGeometry args={[3.5, 32, 32]} />
                <meshStandardMaterial
                    map={textures.sun}
                    emissive="#700000"
                    emissiveIntensity={100}
                />
                <mesh ref={shapesRefs[0]} position={[0, 0, -10]}>
                    <sphereGeometry args={[2.0, 32, 32]} />
                    <meshStandardMaterial
                        map={textures.jupiter}
                        emissive="#666666"
                        emissiveIntensity={0.2}
                    />
                </mesh>
                <mesh ref={shapesRefs[1]} position={[3, 2, -8]}>
                    <sphereGeometry args={[1.8, 32, 32]} />
                    <meshStandardMaterial
                        map={textures.earth}
                        emissive="#666666"
                        emissiveIntensity={0.2}
                    />
                </mesh>
                <mesh ref={shapesRefs[2]} position={[-2, -1, -12]}>
                    <sphereGeometry args={[2.2, 32, 32]} />
                    <meshStandardMaterial
                        map={textures.mars}
                        emissive="#666666"
                        emissiveIntensity={0.2}
                    />
                </mesh>
                <mesh ref={shapesRefs[3]} position={[1, -3, -15]}>
                    <sphereGeometry args={[1.5, 32, 32]} />
                    <meshStandardMaterial
                        map={textures.saturn}
                        emissive="#666666"
                        emissiveIntensity={0.2}
                    />
                    <mesh position={[0, 0, 0]} scale={0.3}>
                        <ringGeometry args={[1.5, 2, 24]} />
                        <meshStandardMaterial
                            color="#ffeb3b"
                            emissive="#fbc02d"
                            emissiveIntensity={0.2}
                            side={2}
                        />
                    </mesh>
                </mesh>
                <mesh ref={shapesRefs[4]} position={[1, -3, -15]}>
                    <sphereGeometry args={[1.5, 32, 32]} />
                    <meshStandardMaterial
                        map={textures.neptune}
                        emissive="#666666"
                        emissiveIntensity={0.2}
                    />
                </mesh>
            </mesh>
        </>
    );
};

const Starfield = () => {
    const starsRef = useRef<Group>(null!);
    const scrollY = useRef(0);
    const lastScrollY = useRef(0);
    const scrollSpeed = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            scrollY.current = currentScrollY;
            scrollSpeed.current = Math.abs(currentScrollY - lastScrollY.current);
            lastScrollY.current = currentScrollY;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useFrame(() => {
        if (starsRef.current) {
            const baseSpeed = 0.0005;
            const scrollFactor = 1 + scrollSpeed.current * 0.005;
            starsRef.current.rotation.y += baseSpeed * scrollFactor;
        }
    });

    const starPositions: [number, number, number][] = Array.from({ length: 200 }, () => [
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
    ]);

    return (
        <group ref={starsRef}>
            {starPositions.map((pos, i) => (
                <mesh key={i} position={pos}>
                    <sphereGeometry args={[0.1, 8, 8]} />
                    <meshStandardMaterial
                        color="#ffffff"
                        emissive="#ffffff"
                        emissiveIntensity={1}
                    />
                </mesh>
            ))}
        </group>
    );
};

export const BackgroundScene = () => {
    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                zIndex: -1,
                background: "linear-gradient(to bottom, #000011, #000033)"
            }}
        >
            <Canvas>
                <ambientLight intensity={2} />
                <pointLight
                    position={[10, 10, -5]}
                    intensity={1.5}
                    decay={1.5}
                    distance={60}
                />
                <Starfield />
                <FloatingShapes />
            </Canvas>
        </div>
    );
};
