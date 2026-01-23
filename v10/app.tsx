import { ArrowDown } from 'lucide-react';

export default function App() {
  return (
    <div className="relative w-[1440px] h-screen mx-auto overflow-hidden" style={{ backgroundColor: '#EAE6DF' }}>
      {/* Name - top left, small and quiet */}
      <div className="absolute top-12 left-12">
        <h1 
          style={{ 
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: '15px',
            fontWeight: '400',
            color: '#4A4642',
            letterSpacing: '0.02em'
          }}
        >
          Sonia Wadhwani
        </h1>
      </div>

      {/* Large abstract topographic field - right of center, bleeding off edges */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg 
          width="1600" 
          height="1400" 
          viewBox="0 0 1600 1400" 
          style={{ 
            marginLeft: '220px', 
            marginTop: '-50px'
          }}
          className="opacity-30"
        >
          {/* Large topographic contour system */}
          <path
            d="M -200 700 Q 100 200, 500 150 Q 900 200, 1200 500 Q 1300 900, 1100 1300 Q 700 1500, 300 1400 Q -100 1200, -200 700 Z"
            fill="none"
            stroke="#8B8883"
            strokeWidth="0.8"
          />
          <path
            d="M -150 700 Q 120 230, 500 180 Q 880 230, 1170 510 Q 1260 880, 1080 1270 Q 700 1460, 320 1370 Q -80 1180, -150 700 Z"
            fill="none"
            stroke="#8B8883"
            strokeWidth="0.8"
          />
          <path
            d="M -100 700 Q 140 260, 500 210 Q 860 260, 1140 520 Q 1220 860, 1060 1240 Q 700 1420, 340 1340 Q -60 1160, -100 700 Z"
            fill="none"
            stroke="#8B8883"
            strokeWidth="0.8"
          />
          <path
            d="M -50 700 Q 160 290, 500 240 Q 840 290, 1110 530 Q 1180 840, 1040 1210 Q 700 1380, 360 1310 Q -40 1140, -50 700 Z"
            fill="none"
            stroke="#8B8883"
            strokeWidth="0.8"
          />
          <path
            d="M 0 700 Q 180 320, 500 270 Q 820 320, 1080 540 Q 1140 820, 1020 1180 Q 700 1340, 380 1280 Q -20 1120, 0 700 Z"
            fill="none"
            stroke="#8B8883"
            strokeWidth="0.8"
          />
          <path
            d="M 50 700 Q 200 350, 500 300 Q 800 350, 1050 550 Q 1100 800, 1000 1150 Q 700 1300, 400 1250 Q 0 1100, 50 700 Z"
            fill="none"
            stroke="#8B8883"
            strokeWidth="0.8"
          />
          <path
            d="M 100 700 Q 220 380, 500 330 Q 780 380, 1020 560 Q 1060 780, 980 1120 Q 700 1260, 420 1220 Q 20 1080, 100 700 Z"
            fill="none"
            stroke="#8B8883"
            strokeWidth="0.8"
          />
          <path
            d="M 150 700 Q 240 410, 500 360 Q 760 410, 990 570 Q 1020 760, 960 1090 Q 700 1220, 440 1190 Q 40 1060, 150 700 Z"
            fill="none"
            stroke="#8B8883"
            strokeWidth="0.8"
          />
          <path
            d="M 200 700 Q 260 440, 500 390 Q 740 440, 960 580 Q 980 740, 940 1060 Q 700 1180, 460 1160 Q 60 1040, 200 700 Z"
            fill="none"
            stroke="#8B8883"
            strokeWidth="0.8"
          />
          <path
            d="M 250 700 Q 280 470, 500 420 Q 720 470, 930 590 Q 940 720, 920 1030 Q 700 1140, 480 1130 Q 80 1020, 250 700 Z"
            fill="none"
            stroke="#8B8883"
            strokeWidth="0.8"
          />
          <path
            d="M 300 700 Q 300 500, 500 450 Q 700 500, 900 600 Q 900 700, 900 1000 Q 700 1100, 500 1100 Q 100 1000, 300 700 Z"
            fill="none"
            stroke="#8B8883"
            strokeWidth="0.8"
          />
          <path
            d="M 350 700 Q 320 530, 500 480 Q 680 530, 870 610 Q 860 680, 880 970 Q 700 1060, 520 1070 Q 120 980, 350 700 Z"
            fill="none"
            stroke="#8B8883"
            strokeWidth="0.8"
          />
          <path
            d="M 400 700 Q 340 560, 500 510 Q 660 560, 840 620 Q 820 660, 860 940 Q 700 1020, 540 1040 Q 140 960, 400 700 Z"
            fill="none"
            stroke="#8B8883"
            strokeWidth="0.8"
          />
          <path
            d="M 450 700 Q 360 590, 500 540 Q 640 590, 810 630 Q 780 640, 840 910 Q 700 980, 560 1010 Q 160 940, 450 700 Z"
            fill="none"
            stroke="#8B8883"
            strokeWidth="0.8"
          />
          <path
            d="M 500 700 Q 380 620, 500 570 Q 620 620, 780 640 Q 740 620, 820 880 Q 700 940, 580 980 Q 180 920, 500 700 Z"
            fill="none"
            stroke="#8B8883"
            strokeWidth="0.8"
          />
          <path
            d="M 550 700 Q 400 650, 500 600 Q 600 650, 750 650 Q 700 600, 800 850 Q 700 900, 600 950 Q 200 900, 550 700 Z"
            fill="none"
            stroke="#8B8883"
            strokeWidth="0.8"
          />

          {/* Additional flowing contours */}
          <path
            d="M -300 400 Q 0 100, 400 50 Q 800 150, 1100 400"
            fill="none"
            stroke="#8B8883"
            strokeWidth="0.8"
          />
          <path
            d="M -280 420 Q 20 130, 400 80 Q 780 170, 1080 420"
            fill="none"
            stroke="#8B8883"
            strokeWidth="0.8"
          />
          <path
            d="M -260 440 Q 40 160, 400 110 Q 760 190, 1060 440"
            fill="none"
            stroke="#8B8883"
            strokeWidth="0.8"
          />
          <path
            d="M -240 460 Q 60 190, 400 140 Q 740 210, 1040 460"
            fill="none"
            stroke="#8B8883"
            strokeWidth="0.8"
          />

          <path
            d="M 500 1200 Q 800 1400, 1200 1300 Q 1600 1100, 1800 800"
            fill="none"
            stroke="#8B8883"
            strokeWidth="0.8"
          />
          <path
            d="M 520 1220 Q 820 1410, 1220 1310 Q 1580 1120, 1780 820"
            fill="none"
            stroke="#8B8883"
            strokeWidth="0.8"
          />
          <path
            d="M 540 1240 Q 840 1420, 1240 1320 Q 1560 1140, 1760 840"
            fill="none"
            stroke="#8B8883"
            strokeWidth="0.8"
          />
        </svg>
      </div>

      {/* Sentence - positioned as annotation near the system, not at bottom edge */}
      <div className="absolute" style={{ top: '58%', left: '420px', maxWidth: '380px' }}>
        <p 
          style={{ 
            fontFamily: 'ui-sans-serif, system-ui, sans-serif',
            fontSize: '18px',
            fontWeight: '400',
            color: '#4A4642',
            lineHeight: '1.6',
            letterSpacing: '0.003em'
          }}
        >
          Mapping the unseen architectures of tomorrow.
        </p>
      </div>

      {/* Enter indicator - bottom center, very subtle */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer group">
        <p 
          style={{ 
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: '11px',
            fontWeight: '400',
            color: '#79766F',
            letterSpacing: '0.1em',
            textTransform: 'lowercase'
          }}
        >
          enter
        </p>
        <ArrowDown 
          className="transition-transform group-hover:translate-y-0.5" 
          size={13} 
          strokeWidth={1.2}
          style={{ color: '#79766F' }}
        />
      </div>
    </div>
  );
}
