"use client";

import { useMemo, useState, useEffect } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";

import { useTheme } from "next-themes";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

export default function WorldMap({
  dots = [],
  lineColor = "#232323",
}: MapProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use a stable default for SSR, only use theme after mount
  const theme = mounted ? resolvedTheme : "light";

  const svgMap = useMemo(() => {
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    return map.getSVG({
      radius: 0.22,
      color: theme === "dark" ? "#FFFFFF40" : "#00000040",
      shape: "circle",
      backgroundColor: theme === "dark" ? "black" : "white",
    });
  }, [theme]);

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // Collect unique points to avoid duplicate tooltips
  const uniquePoints = useMemo(() => {
    const pointMap = new Map<string, { x: number; y: number; label: string }>();
    dots.forEach((dot) => {
      if (dot.start.label) {
        const key = `${dot.start.lat}-${dot.start.lng}`;
        if (!pointMap.has(key)) {
          const projected = projectPoint(dot.start.lat, dot.start.lng);
          pointMap.set(key, { ...projected, label: dot.start.label });
        }
      }
      if (dot.end.label) {
        const key = `${dot.end.lat}-${dot.end.lng}`;
        if (!pointMap.has(key)) {
          const projected = projectPoint(dot.end.lat, dot.end.lng);
          pointMap.set(key, { ...projected, label: dot.end.label });
        }
      }
    });
    return Array.from(pointMap.values());
  }, [dots]);

  return (
    <div className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg relative font-sans">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      <svg
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0"
      >
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.5 * i,
                  ease: "easeOut",
                }}
                key={`start-upper-${i}`}
              ></motion.path>
            </g>
          );
        })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`points-group-${i}`}>
              <g key={`start-${i}`}>
                <circle
                  cx={startPoint.x}
                  cy={startPoint.y}
                  r="2"
                  fill={lineColor}
                />
                <circle
                  cx={startPoint.x}
                  cy={startPoint.y}
                  r="2"
                  fill={lineColor}
                  opacity="0.5"
                >
                  <animate
                    attributeName="r"
                    from="2"
                    to="8"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
              <g key={`end-${i}`}>
                <circle
                  cx={endPoint.x}
                  cy={endPoint.y}
                  r="2"
                  fill={lineColor}
                />
                <circle
                  cx={endPoint.x}
                  cy={endPoint.y}
                  r="2"
                  fill={lineColor}
                  opacity="0.5"
                >
                  <animate
                    attributeName="r"
                    from="2"
                    to="8"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            </g>
          );
        })}

        {/* Hoverable points with tooltips - rendered last to be on top */}
        {uniquePoints.map((point, i) => (
          <g key={`tooltip-point-${i}`} className="group cursor-pointer">
            <circle
              cx={point.x}
              cy={point.y}
              r="12"
              fill="transparent"
            />
            <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none">
              <rect
                x={point.x - (point.label.length * 4 + 12)}
                y={point.y - 32}
                width={point.label.length * 8 + 24}
                height="24"
                rx="4"
                fill={theme === "dark" ? "white" : "#1f2937"}
              />
              <polygon
                points={`${point.x - 5},${point.y - 8} ${point.x + 5},${point.y - 8} ${point.x},${point.y - 2}`}
                fill={theme === "dark" ? "white" : "#1f2937"}
              />
              <text
                x={point.x}
                y={point.y - 16}
                textAnchor="middle"
                fontSize="11"
                fontWeight="500"
                fill={theme === "dark" ? "#1f2937" : "white"}
              >
                {point.label}
              </text>
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}
