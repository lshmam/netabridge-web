"use client";

import { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export function ParticlesBackground() {
  const [ready, setReady] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
    setReady(true);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <Particles
        id="hero-particles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          detectRetina: true,
          particles: {
            number: {
              value: 100,
              density: { enable: true, area: 800 },
            },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.6 },
            size: { value: 2 },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.05,
              width: 1,
              triangles: {
                enable: true,
                opacity: 0.01,
              },
            },
            move: {
              enable: true,
              speed: 0.8,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "bounce" },
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              onClick: {
                enable: false,
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 180,
                links: { opacity: 0.08 },
              },
            },
          },
        }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: ready ? 1 : 0,
          transition: "opacity 0.6s ease-in",
        }}
      />
    </div>
  );
}
