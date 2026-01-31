import { Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-white py-4 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Ferroli */}
        <a href="/" className="flex items-center">
          <svg 
            viewBox="0 0 200 60" 
            className="h-10 sm:h-12 w-auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Ferroli Logo */}
            <text 
              x="0" 
              y="45" 
              fontFamily="Arial, sans-serif" 
              fontSize="42" 
              fontWeight="bold" 
              fill="#1a1a1a"
            >
              ferroli
            </text>
            {/* Orange arc above 'i' */}
            <path 
              d="M 165 12 Q 175 5 185 12" 
              stroke="#f7941d" 
              strokeWidth="4" 
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </a>

        {/* Phone Button */}
        <a 
          href="tel:0280032415"
          className="flex items-center gap-2 bg-[#008f39] hover:bg-[#007a30] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-colors duration-200 shadow-md"
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
          <div className="flex flex-col items-start">
            <span className="text-sm sm:text-lg font-bold leading-tight">02 80032415</span>
            <span className="text-[10px] sm:text-xs uppercase tracking-wide hidden sm:block">Rispondiamo 24/7</span>
          </div>
        </a>
      </div>
    </header>
  );
}
