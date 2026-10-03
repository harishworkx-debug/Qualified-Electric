import { useState } from 'react';
import { Phone, FileText } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL } from '@/data/site-data';
import QuoteFormModal from './QuoteFormModal';

type CTAProps = {
  title?: string;
  subtitle?: string;
  variant?: 'dark' | 'light';
  serviceName?: string;
};

export default function CTASection({
  title = 'Need an Electrician in Denver, CO?',
  subtitle = 'Call now to speak with a qualified electrician. We\'ll diagnose your issue and get your home\'s electrical system working safely.',
  variant = 'dark',
  serviceName,
}: CTAProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const isDark = variant === 'dark';

  const handleCallClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_call', {
        event_category: 'Contact',
        event_label: 'CTA Section Call Button',
        value: 1,
      });
    }
  };

  return (
    <>
      <section className={isDark ? 'py-20 lg:py-28 bg-gradient-dark relative overflow-hidden' : 'py-20 lg:py-28 bg-electric-50 relative overflow-hidden'}>
        {isDark && (
          <>
            <div className="absolute inset-0 bg-grid-dark bg-grid pointer-events-none opacity-40" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-electric-500/10 rounded-full blur-3xl pointer-events-none" />
          </>
        )}
        <div className="container-pad relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-500/10 text-electric-500 text-sm font-bold uppercase tracking-widest mb-6">
            <Phone className="w-4 h-4" />
            Available Now • Fast Denver Dispatch
          </div>
          <h2 className={`section-title text-balance max-w-3xl mx-auto ${isDark ? 'text-white' : 'text-ink-900'}`}>
            {title}
          </h2>
          <p className={`text-lg mt-5 max-w-2xl mx-auto ${isDark ? 'text-ink-300' : 'text-ink-600'}`}>
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href={`tel:${PHONE_TEL}`}
              onClick={handleCallClick}
              className="btn-primary text-lg px-8 py-4"
            >
              <Phone className="w-5 h-5" />
              Call {PHONE_DISPLAY}
            </a>
            <button
              onClick={() => setModalOpen(true)}
              className={isDark ? 'btn-ghost-light text-lg px-8 py-4' : 'btn-outline text-lg px-8 py-4'}
            >
              <FileText className="w-5 h-5" />
              Request Upfront Quote
            </button>
          </div>
        </div>
      </section>

      <QuoteFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={serviceName}
      />
    </>
  );
}
