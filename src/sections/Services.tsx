import { UserCog, Wrench, MapPin, Settings } from 'lucide-react';

const services = [
  {
    icon: UserCog,
    title: 'Assistenza',
    subtitle: 'Caldaie Ferroli',
    description: 'Cerchiamo di identificare il problema dalla prima chiamata, così da intervenire in maniera mirata.',
  },
  {
    icon: Wrench,
    title: 'Riparazione',
    subtitle: 'Caldaie Ferroli',
    description: 'Ripariamo la tua caldaia o il tuo scaldabagno in modo da garantirti alte prestazioni con una spesa contenuta.',
  },
  {
    icon: MapPin,
    title: 'Installazione',
    subtitle: 'Caldaie Ferroli',
    description: 'Offriamo un servizio completo di vendita e installazione di nuove caldaie. Ci preoccupiamo anche dello smaltimento del tuo impianto esistente.',
  },
  {
    icon: Settings,
    title: 'Manutenzione',
    subtitle: 'Caldaie Ferroli',
    description: 'Programmiamo insieme a te interventi periodici di manutenzione così da mantenere il tuo impianto sempre ai massimi livelli di efficienza.',
  },
];

export default function Services() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-heading font-black text-[#f7941d] text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight mb-4">
            I nostri servizi<br />
            per la tua caldaia Ferroli
          </h2>
          <p className="text-gray-700 text-base sm:text-lg">
            Hai una caldaia o uno scaldabagno Ferroli?<br />
            Ecco come possiamo aiutarti.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              {/* Icon */}
              <div className="flex justify-center mb-5">
                <service.icon className="w-14 h-14 sm:w-16 sm:h-16 text-[#1a1a1a] stroke-[1.2]" />
              </div>
              
              {/* Title */}
              <h3 className="font-heading font-black text-[#1a1a1a] text-lg sm:text-xl uppercase tracking-tight mb-1">
                {service.title}
              </h3>
              
              {/* Subtitle */}
              <p className="font-heading font-bold text-[#1a1a1a] text-base sm:text-lg uppercase tracking-tight mb-4">
                {service.subtitle}
              </p>
              
              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
