// components/ui/BackgroundBurst.tsx
"use client";

import dynamic from "next/dynamic";
import * as THREE from "three";
import { useMemo, useRef } from "react";
import { shaderMaterial } from "@react-three/drei";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";

/* ---------- GLSL: irregular radial lines with chromatic edges ---------- */
const frag = /* glsl */ `
precision highp float;

varying vec2 vUv;
uniform float uTime;
uniform vec2  uRes;
uniform vec2  uCenter;    // 0..1, vanishing point (anchor to "Welcome!")
uniform float uBins;      // many tiny angular bins -> irregular placement
uniform float uSpeed;     // subtle outward drift
uniform float uSpacing;   // dash spacing along radius
uniform float uMinW;      // min angular width
uniform float uMaxW;      // max angular width
uniform float uHeroBoost; // brightness multiplier for rare hero lines
uniform vec3  uCool;      // base bluish
uniform vec3  uWarm;      // warm fringe
uniform float uVignette;

const float PI  = 3.14159265359;
const float TAU = 6.28318530718;

float hash12(vec2 p){
  p = fract(p*vec2(233.34, 851.73));
  p += dot(p, p+23.45);
  return fract(p.x*p.y);
}

float angDist(float a, float b){ // shortest angular distance
  float d = abs(a-b);
  return min(d, TAU-d);
}

// Per-bin random center and width -> thin irregular lines
float lineMask(float ang, float r){
  // map (-PI..PI) -> (0..bins)
  float idx = floor((ang + PI) / TAU * uBins);
  float rndC = hash12(vec2(idx, 91.7));
  float rndW = hash12(vec2(idx, 17.3));
  // center angle of this bin (jittered)
  float c = ((idx + rndC) / uBins) * TAU - PI;
  // width varies per line; also taper with radius so lines get sharper outward
  float w = mix(uMinW, uMaxW, rndW) * mix(1.0, 0.45, smoothstep(0.0, 1.0, r));
  float d = angDist(ang, c);
  float m = smoothstep(w, 0.0, d);

  // rare hero streaks (thicker & brighter)
  float hero = step(0.975, rndW); // ~2.5% bins
  m *= mix(1.0, uHeroBoost, hero);

  return m;
}

// dashed streaks moving outward (very subtle)
float dash(float r){
  // each line gets unique offset so dashes don't align
  float cell = floor(r*120.0);
  float rnd  = hash12(vec2(cell, 7.9));
  float t = fract((r - uSpeed * uTime + rnd*0.3) / uSpacing); // 0..1
  // bright head, quick falloff → long, tapered streaks
  return smoothstep(1.0, 0.8, 1.0 - t);
}

void main(){
  // coords relative to vanishing point
  vec2 uv = vUv;
  vec2 p  = uv - uCenter;

  // correct aspect so lines are truly straight
  float aspect = uRes.x / uRes.y;
  p.x *= aspect;

  float r   = length(p) + 1e-6;
  float ang = atan(p.y, p.x);

  // base intensity: irregular thin line mask × streak along radius
  float m = lineMask(ang, r) * dash(r);

  // center & far fading (depth)
  float nearFade = smoothstep(0.012, 0.08, r);
  float farFade  = 1.0 - smoothstep(0.88, 1.05, r);
  m *= nearFade * farFade;

  // chromatic aberration: evaluate slightly different angles per channel
  float off = 0.0025; // small angular offset
  float mR = lineMask(ang + off, r) * dash(r);
  float mB = lineMask(ang - off, r) * dash(r);

  // color mix: cool core + warm fringe (like the reference)
  vec3 base = uCool * m;
  base += uWarm * (mR - mB) * 0.35; // subtle warm/cool edge split
  base = clamp(base, 0.0, 1.0);

  // vignette + fine grain
  float vig = mix(1.0, 1.0 - smoothstep(0.2, 1.35, r), uVignette);
  float grain = (hash12(uv * uRes + uTime*60.0) - 0.5) * 0.035;

  gl_FragColor = vec4(base * vig + grain, 1.0);
}
`;

const vert = /* glsl */ `
varying vec2 vUv;
void main(){
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const BurstMaterial = shaderMaterial(
  {
    uTime: 0,
    uRes: new THREE.Vector2(1000, 1000),
    uCenter: new THREE.Vector2(0.5, 0.58), // slightly below center
    uBins: 320.0, // more bins = more lines
    uSpeed: 0.12, // subtle outward drift
    uSpacing: 0.085, // dash spacing
    uMinW: 0.004, // thinnest lines
    uMaxW: 0.012, // widest regular lines
    uHeroBoost: 1.8, // hero line brightness
    uCool: new THREE.Color("#9bb2ff").toArray(),
    uWarm: new THREE.Color("#ffb3a1").toArray(),
    uVignette: 0.65,
  },
  vert,
  frag
);
extend({ BurstMaterial });

function BurstPlane({ center }: { center: [number, number] }) {
  const mat = useRef<any>();
  const { size } = useThree();

  useFrame((_, dt) => {
    if (!mat.current) return;
    mat.current.uTime += dt;
    mat.current.uRes.set(size.width, size.height);
    mat.current.uCenter.set(center[0], center[1]);
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2, 1, 1]} />
      {/* @ts-ignore */}
      <burstMaterial ref={mat} attach="material" />
    </mesh>
  );
}

const R3FCanvas = dynamic(
  async () =>
    function CanvasWrap(props: any) {
      return (
        <Canvas
          gl={{ antialias: true, alpha: true }}
          camera={{ position: [0, 0, 1], fov: 45 }}
          dpr={[1, 2]}
        >
          <BurstPlane {...props} />
        </Canvas>
      );
    },
  { ssr: false }
);

export default function BackgroundBurst({
  center = [0.5, 0.58] as [number, number],
}) {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <R3FCanvas center={center} />
      {/* subtle dark tint like your reference */}
      <div className="absolute inset-0 bg-black/45" />
    </div>
  );
}
