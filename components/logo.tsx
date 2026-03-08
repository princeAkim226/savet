"use client"

interface LogoProps {
  width?: number
  height?: number
  className?: string
  showText?: boolean
  variant?: 'horizontal' | 'vertical'
  showFlag?: boolean
}

export function Logo({ 
  className = "h-10 w-auto", 
  showText = false,
  variant = 'horizontal',
  showFlag = true
}: LogoProps) {
  // Drapeau du Burkina Faso
  const BurkinaFasoFlag = () => (
    <div className="flex-shrink-0">
      <svg 
        width={variant === 'vertical' ? 30 : 24} 
        height={variant === 'vertical' ? 20 : 16} 
        viewBox="0 0 30 20" 
        className="flex-shrink-0 rounded-sm shadow-sm"
      >
        {/* Bande rouge (haut) */}
        <rect x="0" y="0" width="30" height="10" fill="#EF2B2D" />
        {/* Bande verte (bas) */}
        <rect x="0" y="10" width="30" height="10" fill="#009E49" />
        {/* Étoile jaune au centre */}
        <g transform="translate(15, 10)">
          <path
            d="M 0,-4 L 1.2,-0.4 L 4.7,-0.4 L 1.9,1.5 L 3.1,5.1 L 0,3.2 L -3.1,5.1 L -1.9,1.5 L -4.7,-0.4 L -1.2,-0.4 Z"
            fill="#FCD116"
          />
        </g>
      </svg>
    </div>
  )

  // Logo SAVET personnalisé avec SVG basé sur le design
  return (
    <div className={`flex items-center ${variant === 'vertical' ? 'flex-col' : 'flex-row'} gap-2 ${className}`}>
      {/* Cercle avec tête de vache */}
      <div className="flex-shrink-0">
        <svg 
          width={variant === 'vertical' ? 50 : 40} 
          height={variant === 'vertical' ? 50 : 40} 
          viewBox="0 0 50 50" 
          className="flex-shrink-0"
        >
          {/* Cercle */}
          <circle 
            cx="25" 
            cy="25" 
            r="23" 
            fill="none" 
            stroke="#14b8a6" 
            strokeWidth="2"
          />
          {/* Tête de vache stylisée */}
          <g transform="translate(25, 25)">
            {/* Oreille gauche */}
            <path 
              d="M -8 -5 Q -10 -8 -8 -10 Q -6 -8 -8 -5" 
              fill="#14b8a6"
            />
            {/* Oreille droite */}
            <path 
              d="M 8 -5 Q 10 -8 8 -10 Q 6 -8 8 -5" 
              fill="#14b8a6"
            />
            {/* Corne gauche */}
            <path 
              d="M -6 -8 L -4 -12 L -2 -8" 
              fill="#14b8a6"
            />
            {/* Corne droite */}
            <path 
              d="M 6 -8 L 4 -12 L 2 -8" 
              fill="#14b8a6"
            />
            {/* Tête (ovale) */}
            <ellipse 
              cx="0" 
              cy="0" 
              rx="12" 
              ry="10" 
              fill="none" 
              stroke="#14b8a6" 
              strokeWidth="2"
            />
            {/* Museau */}
            <ellipse 
              cx="4" 
              cy="4" 
              rx="4" 
              ry="3" 
              fill="#14b8a6"
            />
          </g>
        </svg>
      </div>
      
      {/* Texte SAVET */}
      {showText && (
        <div className={`flex ${variant === 'vertical' ? 'flex-col' : 'flex-row'} items-center`}>
          <span className="text-xl font-bold text-gray-800">
            SA<span className="text-[#14b8a6]">V</span>ET
          </span>
          {variant === 'vertical' && (
            <span className="text-xs text-gray-600 mt-1 text-center">
              santé, nutrition<br />et bien-être animal
            </span>
          )}
        </div>
      )}

      {/* Drapeau du Burkina Faso */}
      {showFlag && (
        <BurkinaFasoFlag />
      )}
    </div>
  )
}

