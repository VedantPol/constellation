"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Full-page flowing-light WebGL shader (galaxy.com style).
 * Rendered as a fixed background behind all content.
 *
 * Tuning vs. the original streak shader:
 *  - a deep navy base (#0F172A-ish) is added so dark areas match the site
 *    palette instead of pure black;
 *  - channels are biased slightly toward teal/green to echo the brand accent;
 *  - honours prefers-reduced-motion (renders a single static frame);
 *  - pauses the render loop when the tab is hidden.
 */
export default function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const vertexShader = `
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float xScale;
      uniform float yScale;
      uniform float distortion;

      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

        float d = length(p) * distortion;

        float rx = p.x * (1.0 + d);
        float gx = p.x;
        float bx = p.x * (1.0 - d);

        float r = 0.045 / abs(p.y + sin((rx + time) * xScale) * yScale);
        float g = 0.050 / abs(p.y + sin((gx + time) * xScale) * yScale);
        float b = 0.048 / abs(p.y + sin((bx + time) * xScale) * yScale);

        // deep-navy base so empty space matches the site background (#0F172A)
        vec3 base = vec3(0.043, 0.063, 0.106);
        // bias the streaks toward teal/green to echo the brand accent
        vec3 streak = vec3(r * 0.65, g * 1.0, b * 0.85);

        gl_FragColor = vec4(base + streak, 1.0);
      }
    `;

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "low-power" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(new THREE.Color(0x0f172a));

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, -1);

    const uniforms = {
      resolution: { value: [window.innerWidth, window.innerHeight] as [number, number] },
      time: { value: 0.0 },
      xScale: { value: 1.0 },
      yScale: { value: 0.5 },
      distortion: { value: 0.05 },
    };

    const position = [
      -1.0, -1.0, 0.0, 1.0, -1.0, 0.0, -1.0, 1.0, 0.0,
      1.0, -1.0, 0.0, -1.0, 1.0, 0.0, 1.0, 1.0, 0.0,
    ];
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(position), 3));

    const material = new THREE.RawShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let animationId = 0;
    let running = true;

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h, false);
      uniforms.resolution.value = [w * renderer.getPixelRatio(), h * renderer.getPixelRatio()];
      renderer.render(scene, camera);
    };

    const animate = () => {
      uniforms.time.value += 0.01;
      renderer.render(scene, camera);
      if (running) animationId = requestAnimationFrame(animate);
    };

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(animationId);
      } else if (!reduced) {
        running = true;
        animationId = requestAnimationFrame(animate);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    if (reduced) {
      renderer.render(scene, camera); // static single frame
    } else {
      animationId = requestAnimationFrame(animate);
    }

    return () => {
      running = false;
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 block h-full w-full"
    />
  );
}
