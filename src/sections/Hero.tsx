import { Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="w-full bg-[#f7941d] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Boiler Image */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <img 
              src="/caldaia-ferroli.png" 
              alt="Caldaia Ferroli" 
              className="w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[400px] h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <h1 className="font-heading font-black text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight uppercase tracking-tight mb-6">
              Assistenza e riparazione immediata<br />
              <span className="text-[#1a1a1a]">caldaie Ferroli</span>
            </h1>
            
            <p className="text-white text-base sm:text-lg lg:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
              Chiama ora e fissa un appuntamento con un nostro tecnico qualificato.
            </p>

            {/* CTA Button */}
            <a 
              href="tel:0280032415"
              className="inline-flex items-center gap-3 bg-[#008f39] hover:bg-[#007a30] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              <div className="flex flex-col items-start">
                <span className="text-xl sm:text-2xl font-bold leading-tight">02 80032415</span>
                <span className="text-xs sm:text-sm uppercase tracking-wider">Pronto intervento • Rispondiamo 24/7</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
