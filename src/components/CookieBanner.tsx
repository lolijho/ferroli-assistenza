import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface CookiePreferences {
  experience: boolean;
  measurement: boolean;
  marketing: boolean;
}

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    experience: false,
    measurement: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }

    // Listen for openCookiePreferences event
    const handleOpenPreferences = () => {
      setIsVisible(true);
      setShowDetails(true);
    };
    window.addEventListener('openCookiePreferences', handleOpenPreferences);

    return () => {
      window.removeEventListener('openCookiePreferences', handleOpenPreferences);
    };
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      experience: true,
      measurement: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const allRejected = {
      experience: false,
      measurement: false,
      marketing: false,
    };
    setPreferences(allRejected);
    localStorage.setItem('cookieConsent', JSON.stringify(allRejected));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setIsVisible(false);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-md w-[calc(100%-2rem)] sm:w-full bg-white rounded-lg shadow-2xl border border-gray-200 p-4 sm:p-6">
      {/* Close button */}
      <button
        onClick={handleRejectAll}
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Chiudi"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Content */}
      <div className="pr-6">
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          Noi e terze parti selezionate utilizziamo cookie o tecnologie simili per finalità tecniche e, con il tuo consenso, anche per le finalità di{' '}
          <strong>esperienza, misurazione e &quot;marketing (con annunci personalizzati)&quot;</strong> come specificato nella{' '}
          <a 
            href="https://www.iubenda.com/privacy-policy/65671328/cookie-policy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#f7941d] hover:underline"
          >
            cookie policy
          </a>.
        </p>
        
        <p className="text-gray-600 text-xs leading-relaxed mb-4">
          Puoi liberamente prestare, rifiutare o revocare il tuo consenso, in qualsiasi momento, accedendo al pannello delle preferenze. Il rifiuto del consenso può rendere non disponibili le relative funzioni.
        </p>

        <p className="text-gray-600 text-xs leading-relaxed mb-4">
          Usa il pulsante &quot;Accetta tutto&quot; per acconsentire. Usa il pulsante &quot;Rifiuta tutto&quot; per continuare senza accettare.
        </p>
      </div>

      {/* Preferences Details */}
      {showDetails && (
        <div className="mb-4 space-y-3 border-t border-gray-100 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700">Esperienza</span>
            <button
              onClick={() => togglePreference('experience')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                preferences.experience ? 'bg-[#f7941d]' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  preferences.experience ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700">Misurazione</span>
            <button
              onClick={() => togglePreference('measurement')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                preferences.measurement ? 'bg-[#f7941d]' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  preferences.measurement ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700">Marketing</span>
            <button
              onClick={() => togglePreference('marketing')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                preferences.marketing ? 'bg-[#f7941d]' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  preferences.marketing ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      )}

      {/* Buttons */}
      <div className="flex flex-col gap-2">
        {!showDetails ? (
          <>
            <button
              onClick={() => setShowDetails(true)}
              className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-md transition-colors"
            >
              Scopri di più
            </button>
            <div className="flex gap-2">
              <button
                onClick={handleRejectAll}
                className="flex-1 py-2 px-4 bg-[#f7941d] hover:bg-[#e0850f] text-white text-sm font-medium rounded-md transition-colors"
              >
                Rifiuta tutto
              </button>
              <button
                onClick={handleAcceptAll}
                className="flex-1 py-2 px-4 bg-[#f7941d] hover:bg-[#e0850f] text-white text-sm font-medium rounded-md transition-colors"
              >
                Accetta tutto
              </button>
            </div>
          </>
        ) : (
          <>
            <button
              onClick={handleSavePreferences}
              className="w-full py-2 px-4 bg-[#f7941d] hover:bg-[#e0850f] text-white text-sm font-medium rounded-md transition-colors"
            >
              Salva preferenze
            </button>
            <div className="flex gap-2">
              <button
                onClick={handleRejectAll}
                className="flex-1 py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-md transition-colors"
              >
                Rifiuta tutto
              </button>
              <button
                onClick={handleAcceptAll}
                className="flex-1 py-2 px-4 bg-[#f7941d] hover:bg-[#e0850f] text-white text-sm font-medium rounded-md transition-colors"
              >
                Accetta tutto
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
