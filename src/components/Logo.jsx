import React from 'react'

export default function Logo({ size = 44, variant = 'white' }) {
  const circleColor = variant === 'green' ? '#2E7D57' : variant === 'dark' ? '#1A1A1A' : '#2E7D57'
  const strokeColor = '#ffffff'

  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Balance logo">
      <circle cx="22" cy="22" r="21" fill={circleColor} />
      <circle cx="22" cy="22" r="13" fill="none" stroke={`${strokeColor}30`} strokeWidth="0.6" />
      {/* Plate ellipse */}
      <ellipse cx="22" cy="25" rx="10.5" ry="1.6" fill="none" stroke={strokeColor} strokeWidth="1.3" strokeOpacity="0.65" />
      {/* Fork - left */}
      <line x1="14.5" y1="14" x2="14.5" y2="24" stroke={strokeColor} strokeWidth="1.4" strokeLinecap="round" />
      <line x1="13" y1="14" x2="13" y2="18.5" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" />
      <line x1="16" y1="14" x2="16" y2="18.5" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" />
      <path d="M13 18.5 Q14.5 20 16 18.5" fill="none" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" />
      {/* Knife - right */}
      <line x1="29.5" y1="14" x2="29.5" y2="25" stroke={strokeColor} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M29.5 14 Q33 17 29.5 20" fill="none" stroke={strokeColor} strokeWidth="1.3" strokeLinecap="round" />
      {/* Leaf accent on plate */}
      <path d="M18.5 22.5 Q22 20.5 25.5 22.5" fill="none" stroke={`${strokeColor}bb`} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}
