export default function Footer() {
  return (
    <footer className="w-full bg-[#1a1a1a] py-6 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center sm:text-left">
          {/* P.I./C.F. */}
          <span className="text-white text-sm">
            P.I./C.F. 10161370969
          </span>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a 
              href="https://www.iubenda.com/privacy-policy/65671328" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white text-sm hover:text-[#f7941d] transition-colors duration-200"
            >
              Privacy policy
            </a>
            <a 
              href="https://www.iubenda.com/privacy-policy/65671328/cookie-policy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white text-sm hover:text-[#f7941d] transition-colors duration-200"
            >
              Cookie policy
            </a>
            <button 
              className="text-white text-sm hover:text-[#f7941d] transition-colors duration-200"
              onClick={() => {
                // Open cookie preferences
                const event = new CustomEvent('openCookiePreferences');
                window.dispatchEvent(event);
              }}
            >
              Preferenze tracciamento
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
