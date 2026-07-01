"use client";

import { ShootingStars } from "@/components/ui/shooting-stars";

/**
 * Fixed page background: a subtle twinkling starfield with monochrome
 * shooting stars streaking across, sitting behind all content.
 */
export default function StarsBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_70%)]" />
      <div className="stars-bg absolute inset-0" />
      <ShootingStars
        starColor="#FFFFFF"
        trailColor="#FFFFFF"
        minSpeed={12}
        maxSpeed={28}
        minDelay={1500}
        maxDelay={3800}
      />
      <ShootingStars
        starColor="#FFFFFF"
        trailColor="#9CA3AF"
        minSpeed={18}
        maxSpeed={38}
        minDelay={2400}
        maxDelay={4200}
      />
    </div>
  );
}
