import React from 'react';

export const Logo = ({ className = 'w-12 h-12' }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Fruity Pop Boba Logo"
    role="img"
  >
    <defs>
      <linearGradient id="cupGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 0.7 }} />
        <stop offset="100%" style={{ stopColor: '#E0E6F1', stopOpacity: 0.8 }} />
      </linearGradient>
      <linearGradient id="drinkGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#FFC3A0' }} /> {/* Light Orange */}
        <stop offset="100%" style={{ stopColor: '#FFAFBD' }} /> {/* Light Pink */}
      </linearGradient>
      {/* Clip path to contain liquid within the cup */}
      <clipPath id="cup-clip">
        <path d="M30,95 L20,15 H80 L70,95 Z" />
      </clipPath>
    </defs>
    
    {/* Cup */}
    <path
      d="M30,95 L20,15 H80 L70,95 Z"
      fill="url(#cupGradient)"
      stroke="#B0B8C5"
      strokeWidth="2"
    />

    {/* Liquid inside the cup, clipped */}
    <g clipPath="url(#cup-clip)">
        <path
            d="M15,55 C40,50 60,50 85,55 L85,95 L15,95 Z"
            fill="url(#drinkGradient)"
        />
    </g>
    
    {/* Boba Pearls floating on top */}
    <circle cx="40" cy="58" r="5" fill="#333333" />
    <circle cx="53" cy="62" r="5.5" fill="#333333" />
    <circle cx="65" cy="57" r="4.5" fill="#333333" />
    <circle cx="50" cy="54" r="4" fill="#333333" />

    {/* Lid */}
    <path
      d="M25,5 H75 Q80,5 80,10 V15 H20 V10 Q20,5 25,5 Z"
      fill="#FFFFFF"
      stroke="#B0B8C5"
      strokeWidth="2"
    />
    
    {/* Lemon Slice */}
    <g transform="translate(68, -2) rotate(20)">
      {/* Lemon Peel */}
      <path d="M0,15 A15,15 0 0,1 30,15" fill="#F5A623" />
      {/* Lemon Flesh */}
      <path d="M0,15 A15,15 0 0,1 30,15 L15,15 Z" fill="#F9D776" />
      {/* Lemon Segments */}
      <line x1="15" y1="15" x2="3" y2="13" stroke="white" strokeWidth="1.5" />
      <line x1="15" y1="15" x2="27" y2="13" stroke="white" strokeWidth="1.5" />
      <line x1="15" y1="15" x2="15" y2="2" stroke="white" strokeWidth="1.5" />
    </g>
    
    {/* Straw */}
    <rect
      x="46"
      y="0"
      width="8"
      height="65"
      rx="4"
      fill="#4A90E2"
      stroke="#336CB1"
      strokeWidth="1"
      transform="rotate(10 50 20)"
    />
  </svg>
);