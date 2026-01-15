'use client';

import { useRef, Suspense, useEffect } from 'react';
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';
import dynamic from 'next/dynamic';
import NarrativeOverlay from './NarrativeOverlay';
import ScrollProgress from './ScrollProgress';

// Dynamically import Spline to avoid SSR issues
const Spline = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
    loading: () => (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#0a0a0a] to-[#000000]">
            <div className="text-center">
                <div className="mb-4 text-2xl font-light tracking-tight text-[#e8e8e8]">
                    MolVerse Tech
                </div>
                <div className="mb-6 text-sm text-[#b8b8b8]">
                    Loading molecular visualization...
                </div>
                <div className="mx-auto h-1 w-64 overflow-hidden rounded-full bg-[#222222]">
                    <motion.div
                        className="h-full bg-gradient-to-r from-[#666666] to-[#999999]"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
            </div>
        </div>
    ),
});

export default function MoleculeScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const splineRef = useRef<any>(null);
    const sceneObjectRef = useRef<any>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Scientific rotation control based on scroll
    // Y-axis rotation: Full 360° examination over scroll journey
    const rotationY = useTransform(
        scrollYProgress,
        [0, 1],
        [0, Math.PI * 2] // 0 to 360° in radians
    );

    // X-axis: Very subtle tilt (±5°)
    const rotationX = useTransform(
        scrollYProgress,
        [0, 0.25, 0.5, 0.75, 1],
        [0, 0.087, -0.052, 0.087, 0] // ~5° in radians
    );

    // Add gentle spring for scientific controlled feel
    const smoothRotationY = useSpring(rotationY, {
        stiffness: 30,
        damping: 20,
        mass: 1,
    });

    const smoothRotationX = useSpring(rotationX, {
        stiffness: 30,
        damping: 20,
        mass: 1,
    });

    // Subtle depth zoom during scroll
    const scale = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [1, 1.15, 1] // Slight zoom in during middle, return to normal
    );

    const smoothScale = useSpring(scale, {
        stiffness: 20,
        damping: 15,
        mass: 1,
    });

    // Handle Spline scene load
    const onSplineLoad = (spline: any) => {
        console.log('✅ Spline loaded', spline);
        splineRef.current = spline;

        // Disable mouse orbit controls so users can scroll
        try {
            if (spline.setOrbitType) spline.setOrbitType('none');
        } catch (e) {
            console.warn('Could not disable orbit');
        }

        // Try to find the root scene object
        let sceneObject = null;

        // Method 1: Find by name
        if (spline.findObjectByName) {
            sceneObject = spline.findObjectByName('Scene');
        }

        // Method 2: Access directly from _scene
        if (!sceneObject && spline._scene?.children?.length > 0) {
            sceneObject = spline._scene.children[0];
        }

        if (sceneObject) {
            console.log('✅ Found scene object:', sceneObject);
            sceneObjectRef.current = sceneObject;
        } else {
            console.warn('⚠️ Could not find scene object');
        }
    };

    // Apply scroll-linked rotation and scale to Spline object
    useEffect(() => {
        if (!sceneObjectRef.current) return;

        const unsub1 = smoothRotationY.on('change', (latest) => {
            if (sceneObjectRef.current?.rotation) {
                sceneObjectRef.current.rotation.y = latest;
            }
        });

        const unsub2 = smoothRotationX.on('change', (latest) => {
            if (sceneObjectRef.current?.rotation) {
                sceneObjectRef.current.rotation.x = latest;
            }
        });

        const unsub3 = smoothScale.on('change', (latest) => {
            if (sceneObjectRef.current?.scale) {
                sceneObjectRef.current.scale.set(latest, latest, latest);
            }
        });

        return () => {
            unsub1();
            unsub2();
            unsub3();
        };
    }, [smoothRotationY, smoothRotationX, smoothScale]);

    return (
        <>
            {/* Scroll Progress Indicator */}
            <ScrollProgress scrollProgress={scrollYProgress} />

            {/* Fixed Spline 3D background */}
            <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#0a0a0a] to-[#000000]">
                <Suspense fallback={null}>
                    <Spline
                        scene="https://prod.spline.design/tmYny83K5pEICTRl/scene.splinecode"
                        onLoad={onSplineLoad}
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </Suspense>
            </div>

            {/* Scroll container - creates the scrollable height */}
            <div ref={containerRef} className="relative z-10 h-[400vh]">
                {/* Narrative overlays */}
                <NarrativeOverlay scrollProgress={scrollYProgress} />

                {/* Footer */}
                <div className="pointer-events-auto absolute bottom-0 left-0 right-0 flex items-center justify-center pb-8 text-xs text-[#888888]">
                    <div className="text-center">
                        <div className="mb-2">© MolVerse Tech</div>
                        <div className="opacity-60">Structural Biology · Molecular Intelligence · Drug Discovery</div>
                    </div>
                </div>
            </div>
        </>
    );
}
