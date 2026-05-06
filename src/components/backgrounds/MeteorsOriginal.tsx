export default function MeteorsOriginal({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <svg width="100%" height="100%" style={{ display: "block" }} viewBox="0 0 1600 700" preserveAspectRatio="xMidYMid slice">
  <defs>
    <filter id="filmGrain">
      <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="2" stitchTiles="stitch" seed="6987"/>
      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"/>
    </filter>
    <linearGradient id="sky" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#0a0824"/>
      <stop offset="40%" stopColor="#08081e"/>
      <stop offset="100%" stopColor="#02020c"/>
    </linearGradient>

    
    <radialGradient id="nebDeepPurple" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#5828a8" stopOpacity="0.50"/>
      <stop offset="50%" stopColor="#28104c" stopOpacity="0.25"/>
      <stop offset="100%" stopColor="#000" stopOpacity="0"/>
    </radialGradient>
    <radialGradient id="nebPink" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#d04880" stopOpacity="0.40"/>
      <stop offset="60%" stopColor="#582038" stopOpacity="0.18"/>
      <stop offset="100%" stopColor="#000" stopOpacity="0"/>
    </radialGradient>
    <radialGradient id="nebDeepBlue" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#2848a8" stopOpacity="0.45"/>
      <stop offset="100%" stopColor="#000" stopOpacity="0"/>
    </radialGradient>

    <pattern id="stars" x="0" y="0" width="220" height="220" patternUnits="userSpaceOnUse">
      <circle cx="22" cy="34" r="0.6" fill="#fff" opacity="0.7"/>
      <circle cx="78" cy="78" r="0.45" fill="#fff" opacity="0.6"/>
      <circle cx="138" cy="22" r="0.7" fill="#fff" opacity="0.8"/>
      <circle cx="192" cy="98" r="0.5" fill="#fff" opacity="0.65"/>
      <circle cx="42" cy="148" r="0.55" fill="#fff" opacity="0.7"/>
      <circle cx="102" cy="178" r="0.6" fill="#fff" opacity="0.75"/>
      <circle cx="208" cy="42" r="0.4" fill="#fff" opacity="0.55"/>
      <circle cx="158" cy="208" r="0.45" fill="#fff" opacity="0.6"/>
      <circle cx="8" cy="92" r="0.5" fill="#fff" opacity="0.6"/>
      <circle cx="62" cy="200" r="0.45" fill="#fff" opacity="0.55"/>
    </pattern>

    <linearGradient id="meteor" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stopColor="#fff" stopOpacity="0"/>
      <stop offset="80%" stopColor="#cce0ff" stopOpacity="0.30"/>
      <stop offset="100%" stopColor="#e8eef8" stopOpacity="0.55"/>
    </linearGradient>
    <linearGradient id="meteorWarm" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stopColor="#fff" stopOpacity="0"/>
      <stop offset="80%" stopColor="#ffd8a0" stopOpacity="0.28"/>
      <stop offset="100%" stopColor="#ffe8c8" stopOpacity="0.50"/>
    </linearGradient>

    <radialGradient id="vignette" cx="50%" cy="50%" r="80%">
      <stop offset="35%" stopColor="#000" stopOpacity="0"/>
      <stop offset="100%" stopColor="#000" stopOpacity="0.55"/>
    </radialGradient>
  </defs>

  <rect width="1600" height="700" fill="url(#sky)"/>

  
  <g>
    <ellipse cx="400" cy="200" rx="500" ry="220" fill="url(#nebDeepPurple)">
      <animate attributeName="cx" values="400;460;400" dur="50s" repeatCount="indefinite"/>
    </ellipse>
    <ellipse cx="1300" cy="500" rx="500" ry="220" fill="url(#nebDeepBlue)">
      <animate attributeName="cy" values="500;460;500" dur="55s" repeatCount="indefinite"/>
    </ellipse>
    <ellipse cx="1100" cy="280" rx="380" ry="160" fill="url(#nebPink)">
      <animate attributeName="opacity" values="0.7;1;0.7" dur="22s" repeatCount="indefinite"/>
    </ellipse>
    <ellipse cx="200" cy="480" rx="380" ry="180" fill="url(#nebDeepPurple)" opacity="0.7">
      <animate attributeName="cx" values="200;260;200" dur="60s" repeatCount="indefinite"/>
    </ellipse>
  </g>

  <rect width="1600" height="700" fill="url(#stars)"/>

  
  <g>
    <circle cx="160" cy="120" r="1.3" fill="#fff"><animate attributeName="opacity" values="0.4;1;0.4" dur="4s" repeatCount="indefinite"/></circle>
    <circle cx="380" cy="380" r="1.1" fill="#fff"><animate attributeName="opacity" values="1;0.4;1" dur="5s" repeatCount="indefinite"/></circle>
    <circle cx="620" cy="200" r="1.4" fill="#fff"><animate attributeName="opacity" values="0.4;1;0.4" dur="3.5s" repeatCount="indefinite"/></circle>
    <circle cx="820" cy="480" r="1.2" fill="#fff"><animate attributeName="opacity" values="0.5;1;0.5" dur="4.5s" repeatCount="indefinite"/></circle>
    <circle cx="1040" cy="160" r="1.1" fill="#fff"><animate attributeName="opacity" values="1;0.4;1" dur="5.5s" repeatCount="indefinite"/></circle>
    <circle cx="1220" cy="380" r="1.3" fill="#fff"><animate attributeName="opacity" values="0.4;1;0.4" dur="4.2s" repeatCount="indefinite"/></circle>
    <circle cx="1440" cy="100" r="1.2" fill="#fff"><animate attributeName="opacity" values="0.5;1;0.5" dur="3.8s" repeatCount="indefinite"/></circle>
    <circle cx="1500" cy="500" r="1.3" fill="#fff"><animate attributeName="opacity" values="1;0.4;1" dur="6s" repeatCount="indefinite"/></circle>
    <circle cx="280" cy="540" r="1.1" fill="#fff"><animate attributeName="opacity" values="0.3;1;0.3" dur="4.8s" repeatCount="indefinite"/></circle>
    <circle cx="900" cy="80" r="1.2" fill="#fff"><animate attributeName="opacity" values="1;0.4;1" dur="5.2s" repeatCount="indefinite"/></circle>
    <circle cx="80" cy="320" r="1" fill="#fff"><animate attributeName="opacity" values="0.4;1;0.4" dur="4.6s" repeatCount="indefinite"/></circle>
    
    <g transform="translate(720,140)">
      <path d="M0,-7 L1.5,-1.5 L7,0 L1.5,1.5 L0,7 L-1.5,1.5 L-7,0 L-1.5,-1.5 Z" fill="#fff">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="3.6s" repeatCount="indefinite"/>
      </path>
    </g>
    <g transform="translate(1340,260)">
      <path d="M0,-6 L1.3,-1.3 L6,0 L1.3,1.3 L0,6 L-1.3,1.3 L-6,0 L-1.3,-1.3 Z" fill="#fff">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="4.2s" repeatCount="indefinite"/>
      </path>
    </g>
  </g>

  
  <g>
    <g opacity="0">
      <ellipse cx="0" cy="0" rx="70" ry="1.2" fill="url(#meteor)"/>
      <circle cx="0" cy="0" r="1.0" fill="#e8eef8" opacity="0.6"/>
      <animateMotion dur="1.4s" repeatCount="indefinite" rotate="auto" begin="2s" keyPoints="0;1" keyTimes="0;1">
        <mpath href="#mp1"/>
      </animateMotion>
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="1.4s" repeatCount="indefinite" begin="2s"/>
    </g>
    
    <path id="mp1" d="M 1500 50 L 1220 330" fill="none"/>
  </g>
  <g>
    <g opacity="0">
      <ellipse cx="0" cy="0" rx="80" ry="1.3" fill="url(#meteorWarm)"/>
      <circle cx="0" cy="0" r="1.1" fill="#ffe8c8" opacity="0.6"/>
      <animateMotion dur="1.8s" repeatCount="indefinite" rotate="auto" begin="6s" keyPoints="0;1" keyTimes="0;1">
        <mpath href="#mp2"/>
      </animateMotion>
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="1.8s" repeatCount="indefinite" begin="6s"/>
    </g>
    
    <path id="mp2" d="M 1300 0 L 940 360" fill="none"/>
  </g>
  <g>
    <g opacity="0">
      <ellipse cx="0" cy="0" rx="60" ry="1" fill="url(#meteor)"/>
      <circle cx="0" cy="0" r="0.9" fill="#e8eef8" opacity="0.55"/>
      <animateMotion dur="1.2s" repeatCount="indefinite" rotate="auto" begin="11s" keyPoints="0;1" keyTimes="0;1">
        <mpath href="#mp3"/>
      </animateMotion>
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="1.2s" repeatCount="indefinite" begin="11s"/>
    </g>
    
    <path id="mp3" d="M 800 60 L 580 280" fill="none"/>
  </g>
  <g>
    <g opacity="0">
      <ellipse cx="0" cy="0" rx="100" ry="1.4" fill="url(#meteor)"/>
      <circle cx="0" cy="0" r="1.2" fill="#e8eef8" opacity="0.65"/>
      <animateMotion dur="2.5s" repeatCount="indefinite" rotate="auto" begin="16s" keyPoints="0;1" keyTimes="0;1">
        <mpath href="#mp4"/>
      </animateMotion>
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.10;0.90;1" dur="2.5s" repeatCount="indefinite" begin="16s"/>
    </g>
    
    <path id="mp4" d="M 1700 100 L 1200 600" fill="none"/>
  </g>
  <g>
    <g opacity="0">
      <ellipse cx="0" cy="0" rx="70" ry="1.2" fill="url(#meteorWarm)"/>
      <circle cx="0" cy="0" r="1.0" fill="#e8eef8" opacity="0.6"/>
      <animateMotion dur="1.5s" repeatCount="indefinite" rotate="auto" begin="22s" keyPoints="0;1" keyTimes="0;1">
        <mpath href="#mp5"/>
      </animateMotion>
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.13;0.87;1" dur="1.5s" repeatCount="indefinite" begin="22s"/>
    </g>
    
    <path id="mp5" d="M 1100 30 L 840 290" fill="none"/>
  </g>

  <rect width="1600" height="700" filter="url(#filmGrain)" opacity="0.4" style={{mixBlendMode: 'overlay'}}/>
  <rect width="1600" height="700" fill="url(#vignette)" pointerEvents="none"/>
</svg>
    </div>
  );
}
