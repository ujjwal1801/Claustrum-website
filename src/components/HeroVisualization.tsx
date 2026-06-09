"use client";

import { motion, useReducedMotion } from "framer-motion";

const nodes = [
  { cx: 200, cy: 120, r: 4, delay: 0 },
  { cx: 340, cy: 80, r: 6, delay: 0.2 },
  { cx: 420, cy: 200, r: 5, delay: 0.4 },
  { cx: 280, cy: 260, r: 7, delay: 0.6 },
  { cx: 160, cy: 220, r: 4, delay: 0.8 },
  { cx: 380, cy: 320, r: 5, delay: 1.0 },
  { cx: 260, cy: 170, r: 9, delay: 0.3 },
  { cx: 440, cy: 100, r: 3, delay: 1.2 },
  { cx: 100, cy: 300, r: 4, delay: 1.4 },
  { cx: 320, cy: 360, r: 3, delay: 0.7 },
  { cx: 480, cy: 280, r: 4, delay: 0.9 },
  { cx: 140, cy: 60, r: 3, delay: 1.1 },
];

const connections: [number, number][] = [
  [0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6],
  [0, 1], [1, 2], [2, 5], [3, 4], [4, 0], [5, 10],
  [1, 7], [4, 8], [5, 9], [0, 11],
];

export function HeroVisualization() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full h-full" aria-hidden="true">
      <svg
        viewBox="0 0 560 420"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Abstract technology network visualization"
      >
        <defs>
          <radialGradient id="heroNodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#369EEA" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#369EEA" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="heroCenterGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#369EEA" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#369EEA" stopOpacity="0" />
          </radialGradient>
        </defs>

        <motion.circle
          cx={260}
          cy={170}
          r={120}
          fill="url(#heroCenterGlow)"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 1.2, delay: 0.2 }}
        />

        {connections.map(([from, to], i) => (
          <motion.line
            key={`conn-${i}`}
            x1={nodes[from].cx}
            y1={nodes[from].cy}
            x2={nodes[to].cx}
            y2={nodes[to].cy}
            stroke="#369EEA"
            strokeOpacity="0.12"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 1.2,
              delay: shouldReduceMotion ? 0 : 0.5 + i * 0.08,
              ease: "easeOut",
            }}
          />
        ))}

        {nodes.map((node, i) => (
          <motion.circle
            key={`glow-${i}`}
            cx={node.cx}
            cy={node.cy}
            r={node.r * 5}
            fill="url(#heroNodeGlow)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : node.delay + 0.3,
            }}
          />
        ))}

        {nodes.map((node, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill={i === 6 ? "#369EEA" : "#2B7FBE"}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.5,
              delay: shouldReduceMotion ? 0 : node.delay,
              ease: "easeOut",
            }}
          />
        ))}

        {!shouldReduceMotion && (
          <>
            <motion.circle
              cx={260}
              cy={170}
              r={9}
              fill="none"
              stroke="#369EEA"
              strokeWidth="1"
              animate={{ opacity: [0.5, 0], scale: [1, 3] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.circle
              cx={260}
              cy={170}
              r={9}
              fill="none"
              stroke="#369EEA"
              strokeWidth="0.5"
              animate={{ opacity: [0.3, 0], scale: [1, 4] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeOut",
                delay: 1,
              }}
            />
            <motion.circle
              r={2.5}
              fill="#5BB2F0"
              animate={{
                cx: [200, 340, 420, 280, 160, 200],
                cy: [120, 80, 200, 260, 220, 120],
                opacity: [0.6, 0.8, 0.6, 0.8, 0.6, 0.6],
              }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle
              r={2}
              fill="#8ECAF5"
              animate={{
                cx: [380, 260, 100, 320, 480, 380],
                cy: [320, 170, 300, 360, 280, 320],
                opacity: [0.4, 0.6, 0.4, 0.6, 0.4, 0.4],
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
          </>
        )}
      </svg>
    </div>
  );
}
