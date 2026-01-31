import { Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section className="w-full bg-[#f7941d] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="font-heading font-black text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl uppercase tracking-tight mb-6">
          Hai bisogno di assistenza<br />
          per la tua caldaia Ferroli?
        </h2>

        {/* Subtitle */}
        <p className="text-white text-base sm:text-lg lg:text-xl mb-8">
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
    </section>
  );
}
