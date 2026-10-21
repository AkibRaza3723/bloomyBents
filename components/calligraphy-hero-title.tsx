"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface CalligraphyStroke {
  id: string;
  d: string;
  label: string;
}

const STROKES: CalligraphyStroke[] = [
  // 1. Bloomy - B stem (top flourish, graceful downstem, base foot)
  {
    id: "b1_stem",
    d: "M 82 54 C 76 60, 72 74, 73 98 C 74 122, 80 148, 83 162 C 84 167, 78 168, 71 164 C 65 160, 68 153, 76 153",
    label: "Bloomy B Stem"
  },
  // 2. Bloomy - B lobes (crest over top, upper lobe, waist loop, lower lobe, inner flourish)
  {
    id: "b1_lobes",
    d: "M 78 58 C 92 44, 122 40, 146 52 C 164 62, 168 86, 150 100 C 140 106, 120 106, 110 108 C 128 108, 158 110, 174 124 C 188 138, 184 158, 166 168 C 144 178, 114 174, 102 160 C 94 150, 98 140, 108 138 C 118 136, 130 146, 122 154",
    label: "Bloomy B Lobes"
  },
  // 3. Bloomy - 'l' (ascends gracefully from base into high loop, descends to base)
  {
    id: "l_loop",
    d: "M 156 162 C 170 158, 186 134, 202 88 C 214 52, 222 36, 230 40 C 238 44, 230 76, 218 120 C 210 150, 214 162, 226 162 C 234 162, 242 150, 248 136",
    label: "Bloomy l"
  },
  // 4. Bloomy - first 'o' (counter-clockwise oval, loops top bridge)
  {
    id: "o1",
    d: "M 248 136 C 242 120, 234 124, 232 138 C 230 154, 242 162, 254 162 C 266 162, 274 146, 272 130 C 270 118, 260 118, 252 128 C 248 134, 252 140, 258 140 C 266 140, 276 130, 286 126",
    label: "Bloomy o1"
  },
  // 5. Bloomy - second 'o' (counter-clockwise oval, loops top bridge to 'm')
  {
    id: "o2",
    d: "M 286 126 C 280 120, 272 124, 270 138 C 268 154, 280 162, 292 162 C 304 162, 312 146, 310 130 C 308 118, 298 118, 290 128 C 286 134, 290 140, 296 140 C 304 140, 314 130, 324 126",
    label: "Bloomy o2"
  },
  // 6. Bloomy - 'm' (flowing triple arches)
  {
    id: "m",
    d: "M 324 126 C 326 136, 328 150, 330 162 C 330 150, 338 128, 350 128 C 360 128, 360 148, 362 162 C 364 150, 372 128, 384 128 C 394 128, 396 148, 400 162 C 404 162, 412 150, 420 132",
    label: "Bloomy m"
  },
  // 7. Bloomy - 'y' (under-curve, descender loop, graceful cross flourish)
  {
    id: "y",
    d: "M 420 132 C 424 144, 430 162, 440 162 C 448 162, 454 148, 460 132 C 460 146, 452 178, 446 196 C 440 212, 430 224, 418 222 C 408 220, 406 210, 412 198 C 420 182, 440 170, 474 158",
    label: "Bloomy y"
  },
  // 8. Bents - B stem
  {
    id: "b2_stem",
    d: "M 534 54 C 528 60, 524 74, 525 98 C 526 122, 532 148, 535 162 C 536 167, 530 168, 523 164 C 517 160, 520 153, 528 153",
    label: "Bents B Stem"
  },
  // 9. Bents - B lobes
  {
    id: "b2_lobes",
    d: "M 530 58 C 544 44, 574 40, 598 52 C 616 62, 620 86, 602 100 C 592 106, 572 106, 562 108 C 580 108, 610 110, 626 124 C 640 138, 636 158, 618 168 C 596 178, 566 174, 554 160 C 546 150, 550 140, 560 138 C 570 136, 582 146, 574 154",
    label: "Bents B Lobes"
  },
  // 10. Bents - 'e' (loop curving up, crossing and sweeping baseline)
  {
    id: "e",
    d: "M 606 162 C 616 158, 626 142, 634 124 C 640 112, 644 114, 640 122 C 634 134, 624 144, 620 154 C 618 160, 624 162, 634 162 C 644 162, 652 150, 658 136",
    label: "Bents e"
  },
  // 11. Bents - 'n' (first leg, arch over, second leg, connector)
  {
    id: "n",
    d: "M 658 136 C 660 144, 662 154, 664 162 C 666 150, 674 128, 686 128 C 696 128, 696 148, 700 162 C 704 162, 712 150, 720 136",
    label: "Bents n"
  },
  // 12. Bents - 't' stem (reaches up high, returns down to baseline, exits)
  {
    id: "t_stem",
    d: "M 720 136 C 728 118, 736 88, 740 74 C 742 68, 744 72, 744 80 C 742 104, 742 142, 744 162 C 746 162, 754 152, 762 138",
    label: "Bents t Stem"
  },
  // 13. Bents - 's' (refined classic cursive s: ascending curve, top apex, rounded right belly, baseline, graceful exit flick)
  {
    id: "s",
    d: "M 762 138 C 768 126, 774 115, 780 113 C 785 111, 787 116, 786 124 C 783 138, 794 146, 788 158 C 784 164, 774 164, 770 158 C 767 153, 772 149, 776 150 C 784 152, 792 146, 802 136",
    label: "Bents s"
  },
  // 14. Bents - cross 't' (swift horizontal flick from left to right)
  {
    id: "t_cross",
    d: "M 726 100 C 736 98, 748 96, 760 95",
    label: "Bents t Crossbar"
  }
];

export type CalligraphyGradient =
  | "wine"
  | "burgundy"
  | "champagne"
  | "gold"
  | "rosegold"
  | "crimson"
  | "white"
  | string[];

interface CalligraphyHeroTitleProps {
  className?: string;
  /**
   * Speed multiplier:
   * - 1.017 speeds up writing by 1.7%
   * - 2 speeds up writing by 2x
   */
  speed?: number;
  /**
   * Custom solid color (e.g. "#4a0d1d", "#780606", "#ffffff")
   */
  color?: string;
  /**
   * Make the calligraphy lettering bold.
   * Increases stroke width for heavier presence.
   */
  bold?: boolean;
  /**
   * Exact stroke thickness in pixels (default: 5.2, bold: 7.2, heavy: 8.5).
   */
  strokeWidth?: number;
  /**
   * Apply a luxury gradient across the handwriting strokes:
   * - "wine" | "burgundy": Deep floral wine burgundy matching the hero artwork & brand palette
   * - "champagne": Warm metallic champagne gold matching the hero floral ring
   * - "rosegold": Elegant dusty rose gold
   * - "crimson": Rich crimson velvet
   * - "white": Pearlescent diamond white
   * - string[]: Custom array of hex colors
   */
  gradient?: CalligraphyGradient;
}

export function CalligraphyHeroTitle({
  className = "",
  speed = 1.017,
  color,
  bold = false,
  strokeWidth,
  gradient,
}: CalligraphyHeroTitleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const penRef = useRef<SVGGElement>(null);
  const penRotatorRef = useRef<SVGGElement>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  // Compute effective stroke width (bold sets default to 7.0)
  const effectiveStrokeWidth = strokeWidth ?? (bold ? 7.0 : 5.2);

  // Compute gradient stops if gradient is active
  const gradientStops = React.useMemo(() => {
    if (!gradient) return null;
    if (Array.isArray(gradient)) return gradient;
    switch (gradient) {
      case "wine":
      case "burgundy":
        // Harmonious lighter wine with soft berry and rose highlights
        return ["#541224", "#7b1c37", "#a63050", "#c24467", "#7b1c37"];
      case "champagne": 
        // Matches the circular gold ring in the hero illustration
        return ["#6b4914", "#a87d24", "#fef3c7", "#c29633", "#754f15"];
      case "gold":
        return ["#7a5214", "#c4982f", "#fef08a", "#b88722", "#66420c"];
      case "rosegold":
        return ["#400d1b", "#701c32", "#ba395a", "#701c32", "#3a0b18"];
      case "crimson":
        return ["#3b0811", "#681324", "#991b1b", "#681324", "#3b0811"];
      case "white":
      default:
        return ["#ffffff", "#fffdfa", "#ffffff"];
    }
  }, [gradient]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Grab all stroke path elements
    const pathElements: SVGPathElement[] = [];
    const strokeLengths: number[] = [];

    STROKES.forEach((stroke) => {
      const el = document.getElementById(`hero-stroke-${stroke.id}`) as SVGPathElement | null;
      if (el) {
        const len = el.getTotalLength();
        pathElements.push(el);
        strokeLengths.push(len);

        if (prefersReducedMotion) {
          // If reduced motion is requested, immediately display full strokes without animation
          el.style.strokeDasharray = `${len} ${len}`;
          el.style.strokeDashoffset = "0";
        } else {
          el.style.strokeDasharray = `${len} ${len}`;
          el.style.strokeDashoffset = `${len}`;
        }
      }
    });

    if (prefersReducedMotion) {
      setIsCompleted(true);
      return;
    }

    const pen = penRef.current;
    const penRotator = penRotatorRef.current;
    if (!pen || !penRotator || pathElements.length === 0) return;

    // Use gsap.context for clean lifecycle cleanup
    const ctx = gsap.context(() => {
      // Place pen at initial position of first stroke
      const startPt = pathElements[0].getPointAtLength(0);
      gsap.set(pen, {
        x: startPt.x,
        y: startPt.y,
        opacity: 0,
        display: "block"
      });

      const tl = gsap.timeline({
        delay: 0.35,
        onComplete: () => {
          setIsCompleted(true);
          // Graceful fountain pen departure: lifts up and fades out
          gsap.to(pen, {
            opacity: 0,
            y: "-=30",
            x: "+=24",
            duration: 0.75,
            ease: "power2.out",
            onComplete: () => {
              if (pen) pen.style.display = "none";
            }
          });
        }
      });

      // Pen glides onto the page
      tl.to(pen, {
        opacity: 0.6,
        duration: 0.45,
        ease: "power2.out"
      });

      // Sequence through each calligraphy stroke in natural handwriting order
      for (let i = 0; i < pathElements.length; i++) {
        const path = pathElements[i];
        const len = strokeLengths[i];
        // Dynamic duration based on stroke length, accelerated by the speed factor
        const strokeDuration = Math.max(0.14, ((len / 340) * 1.75) / speed);

        // Natural pen lift & repositioning between strokes
        if (i > 0) {
          const nextStart = path.getPointAtLength(0);
          // Longer pause when lifting between words (i=7) or moving back to cross 't' (i=13)
          const baseFlightTime = i === 7 ? 0.32 : i === 13 ? 0.26 : 0.12;
          const flightTime = baseFlightTime / speed;

          tl.to(pen, {
            x: nextStart.x,
            y: nextStart.y,
            duration: flightTime,
            ease: "power1.inOut"
          });
        }

        // Draw the stroke in real time with synchronized moving fountain pen tip
        const progress = { val: 0 };
        tl.to(progress, {
          val: 1,
          duration: strokeDuration,
          ease: "none",
          onUpdate: () => {
            const currentDist = progress.val * len;
            path.style.strokeDashoffset = `${len - currentDist}`;

            // Synchronize pen nib tip precisely at the head of the drawing stroke
            const pt = path.getPointAtLength(currentDist);
            pen.setAttribute("transform", `translate(${pt.x}, ${pt.y})`);

            // Subtle natural nib tilt following curve tangent
            if (currentDist + 2 <= len) {
              const ptNext = path.getPointAtLength(Math.min(len, currentDist + 3));
              const angleRad = Math.atan2(ptNext.y - pt.y, ptNext.x - pt.x);
              const tilt = -38 + Math.sin(angleRad) * 12;
              penRotator.setAttribute("transform", `rotate(${tilt})`);
            }
          }
        });
      }
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full select-none ${className}`}
      aria-label="Bloomy Bents"
    >
      {/* Accessible H1 for screen readers and SEO */}
      <h1 className="sr-only">Bloomy Bents</h1>

      <svg
        viewBox="0 0 900 240"
        className="w-full h-auto max-w-[720px] sm:max-w-[840px] md:max-w-[920px] lg:max-w-[1020px] overflow-visible drop-shadow-[0_2px_10px_rgba(45,8,18,0.22)]"
        aria-hidden="true"
        preserveAspectRatio="xMinYMid meet"
      >
        <defs>
          {/* Metallic Gold Gradient for Luxury Fountain Pen Nib */}
          <linearGradient id="heroNibGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff8db" />
            <stop offset="25%" stopColor="#f5d061" />
            <stop offset="60%" stopColor="#d4af37" />
            <stop offset="85%" stopColor="#9a7414" />
            <stop offset="100%" stopColor="#5a3f05" />
          </linearGradient>

          {/* Polished Rhodium/Silver Nib Inlay */}
          <linearGradient id="heroNibSilver" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d4d4d8" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#71717a" />
          </linearGradient>

          {/* Deep Piano Black / Charcoal Barrel Section */}
          <linearGradient id="heroPenBody" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#18181b" />
            <stop offset="45%" stopColor="#3f3f46" />
            <stop offset="70%" stopColor="#27272a" />
            <stop offset="100%" stopColor="#09090b" />
          </linearGradient>

          {/* Pen Nib Realistic Cast Shadow */}
          <filter id="heroNibShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="-3" dy="5" stdDeviation="4" floodColor="#000000" floodOpacity="0.65" />
          </filter>

          {/* Subtle Natural Ink Depth */}
          <filter id="heroInkGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1.2" stdDeviation="1.8" floodColor="#2e0610" floodOpacity="0.16" />
          </filter>

          {/* Active Calligraphy Stroke Gradient */}
          {gradientStops ? (
            <linearGradient id="heroActiveGradient" x1="0%" y1="0%" x2="100%" y2="20%">
              {gradientStops.map((stopColor, idx) => (
                <stop
                  key={idx}
                  offset={`${(idx / (gradientStops.length - 1)) * 100}%`}
                  stopColor={stopColor}
                />
              ))}
            </linearGradient>
          ) : (
            <linearGradient id="heroInkStroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#fffdfa" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          )}
        </defs>

        {/* Calligraphy Strokes Group */}
        <g filter="url(#heroInkGlow)">
          {STROKES.map((stroke) => (
            <path
              key={stroke.id}
              id={`hero-stroke-${stroke.id}`}
              d={stroke.d}
              fill="none"
              stroke={gradientStops ? "url(#heroActiveGradient)" : color || "url(#heroInkStroke)"}
              strokeWidth={effectiveStrokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transition: "none",
                willChange: "stroke-dashoffset"
              }}
            />
          ))}
        </g>

        {/* Master Fountain Pen Assembly */}
        {/* Tip of nib is at coordinate (0, 0) */}
        <g
          ref={penRef}
          className="pointer-events-none"
          opacity={0}
          style={{ transition: "none", willChange: "transform, opacity" }}
        >
          <g ref={penRotatorRef} transform="rotate(-38)">
            <g filter="url(#heroNibShadow)">
              {/* Pen Grip / Barrel */}
              <path d="M -11 -78 L 11 -78 L 8.5 -34 L -8.5 -34 Z" fill="url(#heroPenBody)" />
              
              {/* 24k Gold Trim Ring */}
              <rect x="-9.5" y="-36.5" width="19" height="3" rx="0.8" fill="url(#heroNibGold)" />
              
              {/* Nib Outer Body (Gold Flanges) */}
              <path
                d="M 0 0 C -2 -4 -6 -12 -9.5 -22 C -11.5 -26 -11.5 -30 -10.5 -34 L 10.5 -34 C 11.5 -30 11.5 -26 9.5 -22 C 6 -12 2 -4 0 0 Z"
                fill="url(#heroNibGold)"
              />
              
              {/* Rhodium Center Inlay */}
              <path
                d="M 0 0 C -1 -3 -3 -9 -4.8 -17 C -5.8 -21 -5.8 -27 -4.8 -32 L 4.8 -32 C 5.8 -27 5.8 -21 4.8 -17 C 3 -9 1 -3 0 0 Z"
                fill="url(#heroNibSilver)"
                opacity={0.95}
              />
              
              {/* Classic Heart/Round Breather Hole */}
              <circle cx="0" cy="-17" r="1.6" fill="#18181b" />
              
              {/* Center Nib Ink Slit */}
              <line x1="0" y1="0" x2="0" y2="-16" stroke="#18181b" strokeWidth="0.75" />
              
              {/* Fine Engraved Scrollwork on Wings */}
              <path
                d="M -6.5 -24 C -5 -20 -3.5 -15 -2 -11"
                fill="none"
                stroke="#805615"
                strokeWidth="0.45"
                opacity={0.75}
              />
              <path
                d="M 6.5 -24 C 5 -20 3.5 -15 2 -11"
                fill="none"
                stroke="#805615"
                strokeWidth="0.45"
                opacity={0.75}
              />
              
              {/* Glistening Wet Ink Droplet at Tip */}
              <circle cx="0" cy="0" r="1.4" fill="#ffffff" opacity={0.95} />
              <circle cx="0" cy="0" r="3.2" fill="#ffffff" opacity={0.28} />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
