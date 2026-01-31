import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=393273344139&text&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25d366] hover:bg-[#128c7e] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
      aria-label="Contattaci su WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-white" />
      <span className="font-medium text-sm">WhatsApp</span>
    </a>
  );
}
