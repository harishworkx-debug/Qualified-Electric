import { useState } from 'react';
import { Phone, FileText } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL } from '@/data/site-data';
import QuoteFormModal from './QuoteFormModal';

export default function StickyCallButton() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCallClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_call', {
        event_category: 'Contact',
        event_label: 'Mobile Sticky Call Button',
        value: 1,
      });
    }
  };

  return (
    <>
      <div className="fixed bottom-4 left-4 right-4 z-40 lg:hidden flex items-center gap-3">
        <a
          href={`tel:${PHONE_TEL}`}
          onClick={handleCallClick}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-electric-500 text-ink-950 font-bold text-sm shadow-2xl shadow-electric-500/40 active:scale-95 transition-transform"
          aria-label={`Call ${PHONE_DISPLAY}`}
        >
          <Phone className="w-4 h-4" fill="currentColor" />
          <span>Call {PHONE_DISPLAY}</span>
        </a>

        <button
          onClick={() => setModalOpen(true)}
          className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-ink-900 border border-ink-700 text-white font-bold text-sm shadow-2xl active:scale-95 transition-transform"
        >
          <FileText className="w-4 h-4 text-electric-400" />
          <span>Get Quote</span>
        </button>
      </div>

      <QuoteFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
