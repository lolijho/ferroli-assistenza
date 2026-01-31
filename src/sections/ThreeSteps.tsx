import { PhoneCall, Lightbulb, Wrench } from 'lucide-react';

const steps = [
  {
    icon: PhoneCall,
    title: 'Riceviamo la chiamata',
    description: 'Il nostro centralino è attivo 24 ore su 24, 7 giorni su 7. Gestiamo tutte le richieste di assistenza in entrata.',
  },
  {
    icon: Lightbulb,
    title: 'Capiamo il problema',
    description: 'Cerchiamo di identificare il problema dalla prima chiamata, così da intervenire in maniera mirata.',
  },
  {
    icon: Wrench,
    title: 'Risolviamo il problema',
    description: 'Un nostro tecnico qualificato verrà a casa tua per intervenire di persona e risolvere il guasto.',
  },
];

export default function ThreeSteps() {
  return (
    <section className="w-full bg-[#f5f5f5] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-heading font-black text-[#1a1a1a] text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight mb-4">
            Tre semplici step
          </h2>
          <p className="font-heading font-black text-[#f7941d] text-xl sm:text-2xl lg:text-3xl uppercase tracking-tight">
            Come gestiamo la tua richiesta di assistenza
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center md:text-left">
              {/* Icon */}
              <div className="flex justify-center md:justify-start mb-4">
                <step.icon className="w-12 h-12 sm:w-14 sm:h-14 text-[#f7941d] stroke-[1.5]" />
              </div>
              
              {/* Title */}
              <h3 className="font-heading font-black text-[#1a1a1a] text-lg sm:text-xl uppercase tracking-tight mb-3">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
