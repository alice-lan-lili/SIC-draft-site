export default function MeteorsStorm({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <svg width="100%" height="100%" style={{ display: "block" }} viewBox="0 0 1600 700" preserveAspectRatio="xMidYMid slice">
  <defs>
    <filter id="filmGrain">
      <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="2" stitchTiles="stitch" seed="9024"/>
      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"/>
    </filter>

    <linearGradient id="sky" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#0a0824"/>
      <stop offset="40%" stopColor="#08081e"/>
      <stop offset="100%" stopColor="#02020c"/>
    </linearGradient>

    <radialGradient id="nebDeepPurple" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#5828a8" stopOpacity="0.40"/>
      <stop offset="50%" stopColor="#28104c" stopOpacity="0.22"/>
      <stop offset="100%" stopColor="#000" stopOpacity="0"/>
    </radialGradient>
    <radialGradient id="nebPink" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#d04880" stopOpacity="0.32"/>
      <stop offset="60%" stopColor="#582038" stopOpacity="0.16"/>
      <stop offset="100%" stopColor="#000" stopOpacity="0"/>
    </radialGradient>
    <radialGradient id="nebDeepBlue" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#2848a8" stopOpacity="0.40"/>
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
    <ellipse cx="280" cy="220" rx="420" ry="180" fill="url(#nebDeepPurple)">
      <animate attributeName="cx" values="280;320;280" dur="55s" repeatCount="indefinite"/>
    </ellipse>
    <ellipse cx="1200" cy="160" rx="380" ry="160" fill="url(#nebPink)">
      <animate attributeName="opacity" values="0.7;1;0.7" dur="22s" repeatCount="indefinite"/>
    </ellipse>
    <ellipse cx="1400" cy="500" rx="440" ry="200" fill="url(#nebDeepBlue)">
      <animate attributeName="cy" values="500;460;500" dur="60s" repeatCount="indefinite"/>
    </ellipse>
    <ellipse cx="500" cy="540" rx="380" ry="160" fill="url(#nebDeepPurple)" opacity="0.7">
      <animate attributeName="cx" values="500;560;500" dur="58s" repeatCount="indefinite"/>
    </ellipse>
    <ellipse cx="900" cy="380" rx="320" ry="140" fill="url(#nebPink)" opacity="0.6">
      <animate attributeName="opacity" values="0.5;0.8;0.5" dur="26s" repeatCount="indefinite"/>
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
      <ellipse cx="0" cy="0" rx="100" ry="1.2" fill="url(#meteor)"/>
      <circle cx="0" cy="0" r="1.0" fill="#e8eef8" opacity="0.6"/>
      <animateMotion dur="1.4s" repeatCount="indefinite" rotate="auto" begin="1s" keyPoints="0;1" keyTimes="0;1">
        <mpath href="#mpS1"/>
      </animateMotion>
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="1.4s" repeatCount="indefinite" begin="1s"/>
    </g>
    <path id="mpS1" d="M 1500 50 L 1100 450" fill="none"/>
  </g>
  <g>
    <g opacity="0">
      <ellipse cx="0" cy="0" rx="80" ry="1.1" fill="url(#meteorWarm)"/>
      <circle cx="0" cy="0" r="1.0" fill="#ffe8c8" opacity="0.55"/>
      <animateMotion dur="1.6s" repeatCount="indefinite" rotate="auto" begin="2.5s" keyPoints="0;1" keyTimes="0;1">
        <mpath href="#mpS2"/>
      </animateMotion>
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.13;0.87;1" dur="1.6s" repeatCount="indefinite" begin="2.5s"/>
    </g>
    <path id="mpS2" d="M 1300 0 L 980 320" fill="none"/>
  </g>
  <g>
    <g opacity="0">
      <ellipse cx="0" cy="0" rx="60" ry="0.9" fill="url(#meteor)"/>
      <circle cx="0" cy="0" r="0.85" fill="#e8eef8" opacity="0.5"/>
      <animateMotion dur="1.3s" repeatCount="indefinite" rotate="auto" begin="4s" keyPoints="0;1" keyTimes="0;1">
        <mpath href="#mpS3"/>
      </animateMotion>
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="1.3s" repeatCount="indefinite" begin="4s"/>
    </g>
    <path id="mpS3" d="M 800 100 L 580 320" fill="none"/>
  </g>
  <g>
    <g opacity="0">
      <ellipse cx="0" cy="0" rx="120" ry="1.4" fill="url(#meteor)"/>
      <circle cx="0" cy="0" r="1.2" fill="#e8eef8" opacity="0.65"/>
      <animateMotion dur="2s" repeatCount="indefinite" rotate="auto" begin="5.5s" keyPoints="0;1" keyTimes="0;1">
        <mpath href="#mpS4"/>
      </animateMotion>
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.10;0.90;1" dur="2s" repeatCount="indefinite" begin="5.5s"/>
    </g>
    <path id="mpS4" d="M 1700 100 L 1100 700" fill="none"/>
  </g>
  <g>
    <g opacity="0">
      <ellipse cx="0" cy="0" rx="70" ry="1" fill="url(#meteorWarm)"/>
      <circle cx="0" cy="0" r="0.9" fill="#ffe8c8" opacity="0.55"/>
      <animateMotion dur="1.5s" repeatCount="indefinite" rotate="auto" begin="7s" keyPoints="0;1" keyTimes="0;1">
        <mpath href="#mpS5"/>
      </animateMotion>
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.13;0.87;1" dur="1.5s" repeatCount="indefinite" begin="7s"/>
    </g>
    <path id="mpS5" d="M 600 30 L 320 310" fill="none"/>
  </g>
  <g>
    <g opacity="0">
      <ellipse cx="0" cy="0" rx="90" ry="1.2" fill="url(#meteor)"/>
      <circle cx="0" cy="0" r="1.0" fill="#e8eef8" opacity="0.55"/>
      <animateMotion dur="1.6s" repeatCount="indefinite" rotate="auto" begin="8.5s" keyPoints="0;1" keyTimes="0;1">
        <mpath href="#mpS6"/>
      </animateMotion>
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.14;0.86;1" dur="1.6s" repeatCount="indefinite" begin="8.5s"/>
    </g>
    <path id="mpS6" d="M 1100 200 L 740 560" fill="none"/>
  </g>
  <g>
    <g opacity="0">
      <ellipse cx="0" cy="0" rx="55" ry="0.85" fill="url(#meteor)"/>
      <circle cx="0" cy="0" r="0.85" fill="#e8eef8" opacity="0.5"/>
      <animateMotion dur="1.3s" repeatCount="indefinite" rotate="auto" begin="10s" keyPoints="0;1" keyTimes="0;1">
        <mpath href="#mpS7"/>
      </animateMotion>
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="1.3s" repeatCount="indefinite" begin="10s"/>
    </g>
    <path id="mpS7" d="M 320 60 L 100 280" fill="none"/>
  </g>
  <g>
    <g opacity="0">
      <ellipse cx="0" cy="0" rx="80" ry="1.1" fill="url(#meteorWarm)"/>
      <circle cx="0" cy="0" r="1.0" fill="#ffe8c8" opacity="0.55"/>
      <animateMotion dur="1.5s" repeatCount="indefinite" rotate="auto" begin="11.5s" keyPoints="0;1" keyTimes="0;1">
        <mpath href="#mpS8"/>
      </animateMotion>
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.13;0.87;1" dur="1.5s" repeatCount="indefinite" begin="11.5s"/>
    </g>
    <path id="mpS8" d="M 1480 380 L 1180 680" fill="none"/>
  </g>
  <g>
    <g opacity="0">
      <ellipse cx="0" cy="0" rx="70" ry="1" fill="url(#meteor)"/>
      <circle cx="0" cy="0" r="0.9" fill="#e8eef8" opacity="0.5"/>
      <animateMotion dur="1.4s" repeatCount="indefinite" rotate="auto" begin="13s" keyPoints="0;1" keyTimes="0;1">
        <mpath href="#mpS9"/>
      </animateMotion>
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.14;0.86;1" dur="1.4s" repeatCount="indefinite" begin="13s"/>
    </g>
    <path id="mpS9" d="M 900 350 L 660 590" fill="none"/>
  </g>

  <rect width="1600" height="700" filter="url(#filmGrain)" opacity="0.4" style={{mixBlendMode: 'overlay'}}/>
  <rect width="1600" height="700" fill="url(#vignette)" pointerEvents="none"/>
</svg>
    </div>
  );
}
