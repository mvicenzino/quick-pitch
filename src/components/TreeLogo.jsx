export default function TreeLogo({ className = 'h-8 w-8' }) {
  return (
    <svg
      viewBox="0 0 44 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Trunk - thick, slightly curved */}
      <path d="M22 50 C22 50 21 40 22 34 C23 30 23 27 22 24" stroke="url(#nl-trunk)" strokeWidth="3.5" strokeLinecap="round" />
      {/* Main left arm */}
      <path d="M22 24 C19 20 15 18 13 13" stroke="url(#nl-left)" strokeWidth="2.8" strokeLinecap="round" />
      {/* Left forks */}
      <path d="M13 13 C11 9 8 7 6 3" stroke="url(#nl-left)" strokeWidth="2" strokeLinecap="round" />
      <path d="M13 13 C15 9 16 6 15 3" stroke="url(#nl-left)" strokeWidth="1.8" strokeLinecap="round" />
      {/* Left twig */}
      <path d="M17 19 C15 17 11 17 9 15" stroke="url(#nl-left)" strokeWidth="1.3" strokeLinecap="round" />
      {/* Main right arm */}
      <path d="M22 27 C26 22 30 18 34 13" stroke="url(#nl-right)" strokeWidth="2.6" strokeLinecap="round" />
      {/* Right forks */}
      <path d="M34 13 C36 9 39 6 41 2" stroke="url(#nl-right)" strokeWidth="2" strokeLinecap="round" />
      <path d="M34 13 C32 8 30 5 29 2" stroke="url(#nl-right)" strokeWidth="1.8" strokeLinecap="round" />
      {/* Right twig */}
      <path d="M28 19 C31 17 34 18 36 16" stroke="url(#nl-right)" strokeWidth="1.3" strokeLinecap="round" />
      {/* Branch tips */}
      <circle cx="6" cy="3" r="1.4" fill="#06b6d4" opacity="0.9" />
      <circle cx="15" cy="3" r="1.2" fill="#3b82f6" opacity="0.9" />
      <circle cx="9" cy="15" r="1" fill="#6366f1" opacity="0.8" />
      <circle cx="41" cy="2" r="1.4" fill="#06b6d4" opacity="0.9" />
      <circle cx="29" cy="2" r="1.2" fill="#3b82f6" opacity="0.9" />
      <circle cx="36" cy="16" r="1" fill="#6366f1" opacity="0.8" />
      <defs>
        <linearGradient id="nl-trunk" x1="22" y1="50" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4338ca" />
          <stop offset="1" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="nl-left" x1="18" y1="24" x2="6" y2="3" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366f1" />
          <stop offset="0.6" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#06b6d4" />
        </linearGradient>
        <linearGradient id="nl-right" x1="24" y1="27" x2="41" y2="2" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366f1" />
          <stop offset="0.6" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
    </svg>
  )
}
