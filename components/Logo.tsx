"use client";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark" | "auto";
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({
  className = "",
  variant = "auto",
  showText = true,
  size = "md",
}: LogoProps) {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-8 h-8 sm:w-10 sm:h-10",
    lg: "w-12 h-12 sm:w-14 sm:h-14",
  };

  const textSizes = {
    sm: "text-sm sm:text-base tracking-[0.2em] sm:tracking-[0.25em]",
    md: "text-base sm:text-lg tracking-[0.22em] sm:tracking-[0.28em]",
    lg: "text-xl sm:text-2xl tracking-[0.25em] sm:tracking-[0.3em]",
  };

  const subtextSizes = {
    sm: "text-[8px] sm:text-[9px] tracking-[0.22em] sm:tracking-[0.28em]",
    md: "text-[8.5px] sm:text-[10px] tracking-[0.24em] sm:tracking-[0.32em]",
    lg: "text-[10px] sm:text-xs tracking-[0.28em] sm:tracking-[0.36em]",
  };

  return (
    <a
      href="/"
      className={`group inline-flex items-center gap-3 transition-opacity hover:opacity-95 ${className}`}
      aria-label="Miracle Photography Studio - Home"
    >
      {/* Precision Vector Lens Mark */}
      <div className={`relative flex-shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform transition-transform duration-700 group-hover:rotate-45"
        >
          <defs>
            {/* Outer Ring Gradient */}
            <linearGradient id="lensOuterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="45%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>

            {/* Inner Glass Element Radial Glow */}
            <radialGradient id="glassAperture" cx="42%" cy="38%" r="65%">
              <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#1d4ed8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="1" />
            </radialGradient>

            {/* Optical Reflection Flare */}
            <linearGradient id="lensReflection" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
              <stop offset="40%" stopColor="#ffffff" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            {/* Subtle Gold Rim Tint */}
            <linearGradient id="goldRim" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d4af37" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Outer Housing Ring */}
          <circle
            cx="50"
            cy="50"
            r="46"
            stroke="url(#lensOuterGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            className="opacity-90"
          />

          {/* Precision Aperture Notch Marks */}
          <circle
            cx="50"
            cy="50"
            r="41"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="2 6"
            className="text-blue-300/40"
          />

          {/* Deep Glass Chamber */}
          <circle
            cx="50"
            cy="50"
            r="36"
            fill="url(#glassAperture)"
            stroke="url(#goldRim)"
            strokeWidth="1.5"
          />

          {/* Aperture Diaphragm Geometric Blades */}
          <path
            d="M50 18 L64 36 L46 44 Z"
            fill="#1e40af"
            fillOpacity="0.4"
          />
          <path
            d="M78 38 L68 56 L54 44 Z"
            fill="#1e40af"
            fillOpacity="0.5"
          />
          <path
            d="M74 70 L52 72 L54 54 Z"
            fill="#1d4ed8"
            fillOpacity="0.45"
          />
          <path
            d="M42 82 L30 64 L46 56 Z"
            fill="#1e3a8a"
            fillOpacity="0.6"
          />
          <path
            d="M22 60 L32 42 L46 54 Z"
            fill="#2563eb"
            fillOpacity="0.4"
          />
          <path
            d="M28 28 L50 26 L46 46 Z"
            fill="#3b82f6"
            fillOpacity="0.35"
          />

          {/* Optical Glass Spherical Lens Curve */}
          <ellipse
            cx="44"
            cy="38"
            rx="22"
            ry="14"
            transform="rotate(-25 44 38)"
            fill="url(#lensReflection)"
          />

          {/* Secondary Micro-flare Highlight */}
          <circle cx="62" cy="60" r="3" fill="#ffffff" fillOpacity="0.6" />
          <circle cx="68" cy="65" r="1.5" fill="#38bdf8" fillOpacity="0.8" />

          {/* Central Iris Pinpoint */}
          <circle
            cx="50"
            cy="50"
            r="7"
            fill="#090d16"
            stroke="#60a5fa"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Editorial Studio Typography */}
      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-serif uppercase font-medium leading-none ${textSizes[size]} ${
              variant === "light"
                ? "text-white"
                : variant === "dark"
                ? "text-stone-900"
                : "text-white"
            }`}
          >
            Miracle
          </span>
          <span
            className={`font-sans uppercase font-light text-stone-400 mt-1 ${subtextSizes[size]} ${
              variant === "dark" ? "text-stone-500" : "text-stone-400"
            }`}
          >
            Photography Studio
          </span>
        </div>
      )}
    </a>
  );
}
