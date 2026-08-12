interface OnshapeLogoProps {
  className?: string;
}

export default function OnshapeLogo({ className }: OnshapeLogoProps) {
  return (
    <svg
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Onshape"
    >
      {/* Hexagon icon */}
      <g>
        <path
          d="M20 2L35 10.5V27.5L20 36L5 27.5V10.5L20 2Z"
          fill="#00a651"
        />
        <path
          d="M20 8L28 12.5V25.5L20 30L12 25.5V12.5L20 8Z"
          fill="white"
        />
        <path
          d="M20 12L25 14.5V23.5L20 26L15 23.5V14.5L20 12Z"
          fill="#00a651"
        />
      </g>
      {/* onshape text */}
      <text
        x="46"
        y="27"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        fontSize="22"
        fontWeight="500"
        fill="currentColor"
        style={{ letterSpacing: '-0.5px' }}
      >
        onshape
      </text>
    </svg>
  );
}
