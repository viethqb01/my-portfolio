"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";

interface SkillItem {
    title: string;
    image: string;
}

interface Props {
    skills: SkillItem[];
}

const SkillSphere = ({ skills }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const rotX = useRef(0.3);
    const rotY = useRef(0);
    const velX = useRef(0.0003);
    const velY = useRef(0.0008);
    const lastPointer = useRef<{ x: number; y: number } | null>(null);
    const rafId = useRef<number>(0);
    const radiusRef = useRef(210);

    // Unit sphere positions (fibonacci distribution)
    const basePoints = useRef<{ x: number; y: number; z: number }[]>([]);

    useEffect(() => {
        const updateRadius = () => {
            const w = window.innerWidth;
            if (w < 480) radiusRef.current = 120;
            else if (w < 640) radiusRef.current = 145;
            else if (w < 1024) radiusRef.current = 175;
            else radiusRef.current = 210;
        };
        updateRadius();
        window.addEventListener("resize", updateRadius);
        return () => window.removeEventListener("resize", updateRadius);
    }, []);

    useEffect(() => {
        const n = skills.length;
        basePoints.current = Array.from({ length: n }, (_, i) => {
            const phi = Math.acos(1 - (2 * (i + 0.5)) / n);
            const theta = Math.PI * (1 + Math.sqrt(5)) * i;
            return {
                x: Math.sin(phi) * Math.cos(theta),
                y: Math.sin(phi) * Math.sin(theta),
                z: Math.cos(phi),
            };
        });
    }, [skills]);

    useEffect(() => {
        const animate = () => {
            rotX.current += velX.current;
            rotY.current += velY.current;

            const cosX = Math.cos(rotX.current);
            const sinX = Math.sin(rotX.current);
            const cosY = Math.cos(rotY.current);
            const sinY = Math.sin(rotY.current);

            const r = radiusRef.current;

            basePoints.current.forEach((p, i) => {
                const x1 = p.x * cosY + p.z * sinY;
                const z1 = -p.x * sinY + p.z * cosY;
                const y2 = p.y * cosX - z1 * sinX;
                const z2 = p.y * sinX + z1 * cosX;

                const depth = (z2 + 1) / 2;
                const scale = 0.45 + depth * 0.75;
                const opacity = 0.15 + depth * 0.85;

                const el = itemRefs.current[i];
                if (el) {
                    el.style.transform = `translate(${x1 * r}px, ${y2 * r}px) scale(${scale})`;
                    el.style.opacity = String(opacity.toFixed(3));
                    el.style.zIndex = String(Math.round(depth * 100));
                }
            });

            rafId.current = requestAnimationFrame(animate);
        };

        rafId.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafId.current);
    }, [skills.length]);

    const onMouseMove = (e: React.MouseEvent) => {
        const prev = lastPointer.current;
        if (prev) {
            velY.current = (e.clientX - prev.x) * 0.003;
            velX.current = (e.clientY - prev.y) * 0.003;
        }
        lastPointer.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseLeave = () => {
        lastPointer.current = null;
        velX.current = 0.0003;
        velY.current = 0.0008;
    };

    const onTouchMove = (e: React.TouchEvent) => {
        const touch = e.touches[0];
        const prev = lastPointer.current;
        if (prev) {
            velY.current = (touch.clientX - prev.x) * 0.004;
            velX.current = (touch.clientY - prev.y) * 0.004;
        }
        lastPointer.current = { x: touch.clientX, y: touch.clientY };
    };

    const onTouchEnd = () => {
        lastPointer.current = null;
        velX.current = 0.0003;
        velY.current = 0.0008;
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className="relative flex h-[320px] w-full cursor-pointer items-center justify-center sm:h-[420px] lg:h-[520px]"
        >
            {/* Subtle glow center */}
            <div className="pointer-events-none absolute h-40 w-40 rounded-full bg-yellow-300/5 blur-3xl" />

            {skills.map((skill, i) => (
                <div
                    key={skill.title}
                    ref={el => {
                        itemRefs.current[i] = el;
                    }}
                    className="group absolute flex flex-col items-center gap-1"
                    style={{ willChange: "transform, opacity" }}
                >
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-yellow-300/20 bg-yellow-300/5 p-1 backdrop-blur-sm transition-colors duration-200 active:border-yellow-300/60 active:bg-yellow-300/15 group-hover:border-yellow-300/60 group-hover:bg-yellow-300/15 sm:h-10 sm:w-10 sm:p-1.5">
                        <Image
                            src={skill.image}
                            alt={skill.title}
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                    </div>
                    {/* Label: always visible on mobile, hover-only on desktop */}
                    <span className="pointer-events-none absolute -bottom-6 whitespace-nowrap rounded-md bg-[#1a1b26] px-2 py-0.5 text-[10px] font-semibold text-yellow-300 opacity-100 shadow sm:opacity-0 sm:transition-opacity sm:duration-200 sm:group-hover:opacity-100">
                        {skill.title}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default SkillSphere;
