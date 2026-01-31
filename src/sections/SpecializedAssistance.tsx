export default function SpecializedAssistance() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="font-heading font-black text-[#1a1a1a] text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight mb-6">
          Assistenza specializzata
        </h2>

        {/* Stats */}
        <div className="mb-8">
          <p className="font-heading font-black text-[#f7941d] text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight">
            1200+ interventi di assistenza<br />
            effettuati nell'ultimo anno
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
          Siamo manutentori specializzati Ferroli, i nostri tecnici qualificati seguono corsi di aggiornamento costanti per garantire la miglior preparazione ed efficienza.
        </p>
      </div>
    </section>
  );
}
