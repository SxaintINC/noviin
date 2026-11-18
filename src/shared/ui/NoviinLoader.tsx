import React from "react";

// ── NOVIIN LOADER ─────────────────────────────────────────────────────────────
// The slatted-sphere mark assembles itself slat by slat while a ring draws
// once around the disc. Pure CSS/SVG so it runs before React hydrates heavy
// pages and costs nothing after it finishes.

export function NoviinLoader({
  size = 160,
  color = "#ECECEA",
  label = "Loading Noviin",
}: {
  size?: number;
  color?: string;
  label?: string;
}) {
  const clip = `noviin-loader-${React.useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;

  return (
    <svg
      viewBox="190 201 558 558"
      width={size}
      height={size}
      role="img"
      aria-label={label}
      style={{ color, overflow: "visible" }}
    >
      <defs>
        <clipPath id={clip}>
          <circle cx="469" cy="480" r="259" />
        </clipPath>
      </defs>

      <style>{`
        .nv-b {
          fill: currentColor;
          stroke: currentColor;
          stroke-width: 6;
          stroke-linejoin: round;
          animation: nv-in 1.3s cubic-bezier(.16,1,.3,1) both;
          animation-delay: calc(var(--i) * .13s);
        }
        .nv-pop { animation: nv-pop 3s cubic-bezier(.16,1,.3,1) both; }
        .nv-ring {
          fill: none;
          stroke: currentColor;
          stroke-width: 1.5;
          stroke-linecap: round;
          opacity: 0;
          animation: nv-ring 3s cubic-bezier(.65,0,.35,1) both;
        }
        @keyframes nv-in {
          from { transform: translateX(var(--d)); opacity: 0; }
          55% { opacity: 1; }
          to { transform: none; opacity: 1; }
        }
        @keyframes nv-pop {
          from { transform: scale(.88); }
          to { transform: scale(1); }
        }
        @keyframes nv-ring {
          from { stroke-dashoffset: 100; opacity: 1; }
          70% { stroke-dashoffset: 0; opacity: 1; }
          to { stroke-dashoffset: 0; opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .nv-b, .nv-pop, .nv-ring { animation: none; }
        }
      `}</style>

      <g transform="translate(469 480)">
        <circle
          className="nv-ring"
          r="272"
          pathLength="100"
          strokeDasharray="100"
          transform="rotate(-90)"
        />
        <g className="nv-pop">
          <g transform="translate(-469 -480)">
            <g clipPath={`url(#${clip})`}>
              <rect className="nv-b" style={{ "--i": 0, "--d": "-520px" } as React.CSSProperties} x="340" y="190" width="245" height="70" rx="14" />
              <rect className="nv-b" style={{ "--i": 1, "--d": "520px" } as React.CSSProperties} x="200" y="295" width="275" height="26" rx="12" />
              <rect className="nv-b" style={{ "--i": 2, "--d": "-520px" } as React.CSSProperties} x="553" y="295" width="150" height="22" rx="11" />
              <path className="nv-b" style={{ "--i": 3, "--d": "520px" } as React.CSSProperties} d="M100 351H388Q394 351 394 357V367Q394 373 400 373H585Q591 373 591 367V357Q591 351 597 351H840V391H100Z" />
              <path className="nv-b" style={{ "--i": 4, "--d": "-520px" } as React.CSSProperties} d="M100 424H343Q349 424 349 430V437Q349 443 355 443H655Q661 443 661 437V430Q661 424 667 424H840V460H100Z" />
              <path className="nv-b" style={{ "--i": 5, "--d": "520px" } as React.CSSProperties} d="M100 508H360Q368 508 372 514L378 520H678Q684 520 684 514V502Q684 496 690 496H840V532H100Z" />
              <path className="nv-b" style={{ "--i": 6, "--d": "-520px" } as React.CSSProperties} d="M100 566H288Q294 566 294 572V576Q294 582 300 582H404Q410 582 410 588V593Q410 599 416 599H590Q596 599 596 593V572Q596 566 602 566H840V607H100Z" />
              <rect className="nv-b" style={{ "--i": 7, "--d": "520px" } as React.CSSProperties} x="561" y="630" width="150" height="22" rx="11" />
              <path className="nv-b" style={{ "--i": 8, "--d": "-520px" } as React.CSSProperties} d="M100 648H368Q374 648 374 654V662Q374 668 380 668H508A6 6 0 0 1 508 680H100Z" />
              <rect className="nv-b" style={{ "--i": 9, "--d": "520px" } as React.CSSProperties} x="355" y="713" width="235" height="80" rx="14" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
