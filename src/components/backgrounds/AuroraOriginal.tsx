export default function AuroraOriginal({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <svg width="100%" height="100%" style={{ display: "block" }} viewBox="0 0 1600 700" preserveAspectRatio="xMidYMid slice">
  <defs>
    <filter id="filmGrain">
      <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="2" stitchTiles="stitch" seed="560"/>
      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"/>
    </filter>
    
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#0a0820"/>
      <stop offset="50%" stopColor="#0c0a22"/>
      <stop offset="100%" stopColor="#04020e"/>
    </linearGradient>

    
    <radialGradient id="nebPurple" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#7a3ca8" stopOpacity="0.55"/>
      <stop offset="50%" stopColor="#3a1858" stopOpacity="0.28"/>
      <stop offset="100%" stopColor="#1a0828" stopOpacity="0"/>
    </radialGradient>
    <radialGradient id="nebMagenta" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#c83878" stopOpacity="0.45"/>
      <stop offset="60%" stopColor="#581838" stopOpacity="0.20"/>
      <stop offset="100%" stopColor="#000" stopOpacity="0"/>
    </radialGradient>
    <radialGradient id="nebBlue" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#3060a8" stopOpacity="0.50"/>
      <stop offset="60%" stopColor="#102844" stopOpacity="0.20"/>
      <stop offset="100%" stopColor="#000" stopOpacity="0"/>
    </radialGradient>
    <radialGradient id="nebTeal" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#208098" stopOpacity="0.40"/>
      <stop offset="100%" stopColor="#000" stopOpacity="0"/>
    </radialGradient>

    <pattern id="starsFar" x="0" y="0" width="220" height="220" patternUnits="userSpaceOnUse">
      <circle cx="22" cy="34" r="0.6" fill="#fff" opacity="0.65"/>
      <circle cx="78" cy="78" r="0.45" fill="#fff" opacity="0.55"/>
      <circle cx="138" cy="22" r="0.7" fill="#fff" opacity="0.8"/>
      <circle cx="192" cy="98" r="0.5" fill="#fff" opacity="0.6"/>
      <circle cx="42" cy="148" r="0.55" fill="#fff" opacity="0.65"/>
      <circle cx="102" cy="178" r="0.6" fill="#fff" opacity="0.7"/>
      <circle cx="208" cy="42" r="0.4" fill="#fff" opacity="0.55"/>
      <circle cx="158" cy="208" r="0.45" fill="#fff" opacity="0.6"/>
      <circle cx="218" cy="158" r="0.5" fill="#fff" opacity="0.65"/>
      <circle cx="8" cy="92" r="0.45" fill="#fff" opacity="0.55"/>
      <circle cx="62" cy="218" r="0.5" fill="#fff" opacity="0.6"/>
      <circle cx="122" cy="118" r="0.4" fill="#fff" opacity="0.5"/>
    </pattern>

    <linearGradient id="cometTail" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stopColor="#fff" stopOpacity="0"/>
      <stop offset="85%" stopColor="#dde4f0" stopOpacity="0.7"/>
      <stop offset="100%" stopColor="#fff" stopOpacity="1"/>
    </linearGradient>

    <path id="cometPath" d="M 1800 100 Q 800 400 -200 250" fill="none"/>

    
    <radialGradient id="vignette" cx="50%" cy="55%" r="80%">
      <stop offset="40%" stopColor="#000" stopOpacity="0"/>
      <stop offset="100%" stopColor="#000" stopOpacity="0.55"/>
    </radialGradient>
  </defs>

  <rect width="1600" height="700" fill="url(#sky)"/>

  
  <g>
    <ellipse cx="220" cy="200" rx="540" ry="240" fill="url(#nebPurple)">
      <animate attributeName="cx" values="220;300;220" dur="50s" repeatCount="indefinite"/>
      <animate attributeName="cy" values="200;160;200" dur="60s" repeatCount="indefinite"/>
    </ellipse>
    <ellipse cx="1100" cy="380" rx="640" ry="280" fill="url(#nebBlue)">
      <animate attributeName="cx" values="1100;1020;1100" dur="55s" repeatCount="indefinite"/>
      <animate attributeName="cy" values="380;430;380" dur="65s" repeatCount="indefinite"/>
    </ellipse>
    <ellipse cx="1400" cy="100" rx="440" ry="200" fill="url(#nebMagenta)">
      <animate attributeName="cx" values="1400;1340;1400" dur="45s" repeatCount="indefinite"/>
    </ellipse>
    <ellipse cx="700" cy="540" rx="540" ry="220" fill="url(#nebTeal)">
      <animate attributeName="cx" values="700;780;700" dur="58s" repeatCount="indefinite"/>
    </ellipse>
    <ellipse cx="900" cy="200" rx="320" ry="140" fill="url(#nebPurple)" opacity="0.85">
      <animate attributeName="opacity" values="0.6;1;0.6" dur="20s" repeatCount="indefinite"/>
    </ellipse>
  </g>

  <rect width="1600" height="700" fill="url(#starsFar)"/>

  
  <g>
    <circle cx="180" cy="100" r="1.3" fill="#fff"><animate attributeName="opacity" values="0.4;1;0.4" dur="4s" repeatCount="indefinite"/></circle>
    <circle cx="420" cy="320" r="1.1" fill="#fff"><animate attributeName="opacity" values="1;0.4;1" dur="5s" repeatCount="indefinite"/></circle>
    <circle cx="640" cy="160" r="1.4" fill="#fff"><animate attributeName="opacity" values="0.4;1;0.4" dur="3.5s" repeatCount="indefinite"/></circle>
    <circle cx="860" cy="440" r="1.2" fill="#fff"><animate attributeName="opacity" values="0.5;1;0.5" dur="4.5s" repeatCount="indefinite"/></circle>
    <circle cx="1080" cy="220" r="1.1" fill="#fff"><animate attributeName="opacity" values="1;0.4;1" dur="5.5s" repeatCount="indefinite"/></circle>
    <circle cx="1280" cy="540" r="1.3" fill="#fff"><animate attributeName="opacity" values="0.4;1;0.4" dur="4.2s" repeatCount="indefinite"/></circle>
    <circle cx="1480" cy="280" r="1.2" fill="#fff"><animate attributeName="opacity" values="0.5;1;0.5" dur="3.8s" repeatCount="indefinite"/></circle>
    <circle cx="320" cy="560" r="1" fill="#fff"><animate attributeName="opacity" values="1;0.4;1" dur="6s" repeatCount="indefinite"/></circle>
    <circle cx="1180" cy="80" r="1.2" fill="#fff"><animate attributeName="opacity" values="0.4;1;0.4" dur="4.8s" repeatCount="indefinite"/></circle>
    <circle cx="60" cy="340" r="1.1" fill="#fff"><animate attributeName="opacity" values="1;0.4;1" dur="5.2s" repeatCount="indefinite"/></circle>
    <circle cx="1540" cy="500" r="1" fill="#fff"><animate attributeName="opacity" values="0.4;1;0.4" dur="4.6s" repeatCount="indefinite"/></circle>
    
    <g transform="translate(540,230)">
      <path d="M0,-7 L1.5,-1.5 L7,0 L1.5,1.5 L0,7 L-1.5,1.5 L-7,0 L-1.5,-1.5 Z" fill="#fff">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="3.6s" repeatCount="indefinite"/>
      </path>
    </g>
    <g transform="translate(1340,180)">
      <path d="M0,-6 L1.3,-1.3 L6,0 L1.3,1.3 L0,6 L-1.3,1.3 L-6,0 L-1.3,-1.3 Z" fill="#fff">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="4.2s" repeatCount="indefinite"/>
      </path>
    </g>
  </g>

  
  <g className="comet" opacity="0.75">
    <animateMotion dur="22s" repeatCount="indefinite" rotate="auto" begin="5s">
      <mpath href="#cometPath"/>
    </animateMotion>
    <ellipse cx="-90" cy="0" rx="90" ry="1.5" fill="url(#cometTail)"/>
    <circle cx="0" cy="0" r="2" fill="#fff"/>
    <circle cx="0" cy="0" r="4" fill="#fff" opacity="0.4"/>
  </g>

  <rect width="1600" height="700" filter="url(#filmGrain)" opacity="0.4" style={{mixBlendMode: 'overlay'}}/>
  <rect width="1600" height="700" fill="url(#vignette)" pointerEvents="none"/>
</svg>
    </div>
  );
}
