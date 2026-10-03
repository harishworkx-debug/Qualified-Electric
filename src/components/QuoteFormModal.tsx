import { useState } from 'react';
import { Phone, X, CheckCircle2, ShieldCheck, Send, Zap } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL } from '@/data/site-data';

type QuoteModalProps = {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
};

export default function QuoteFormModal({ isOpen, onClose, defaultService }: QuoteModalProps) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [selectedService, setSelectedService] = useState(defaultService || 'Electrical Repair');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `QE-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(ref);
    setSubmitted(true);

    // Google Analytics lead event measurement trigger
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'generate_lead', {
        event_category: 'Lead',
        event_label: selectedService,
        value: 1,
      });
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setPhone('');
    setZipCode('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-ink-900 border border-ink-700 shadow-2xl overflow-hidden text-white p-7">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-ink-800 text-ink-300 hover:text-white hover:bg-ink-700 flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-5 border border-emerald-500/30">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="font-display font-bold text-2xl text-white">Quote Request Received!</h3>
            <p className="text-sm text-ink-300 mt-2 leading-relaxed">
              Thank you, <span className="font-semibold text-white">{fullName}</span>. Your request for <span className="text-electric-400 font-semibold">{selectedService}</span> (Ref #{referenceId}) has been registered.
            </p>

            <div className="my-6 p-4 rounded-2xl bg-ink-800/80 border border-ink-700 text-left space-y-2 text-xs text-ink-300">
              <p className="flex justify-between"><span>Service:</span> <span className="font-bold text-white">{selectedService}</span></p>
              <p className="flex justify-between"><span>ZIP Code:</span> <span className="font-bold text-white">{zipCode}</span></p>
              <p className="flex justify-between"><span>Promised Response:</span> <span className="font-bold text-electric-400">Within 15-30 Minutes</span></p>
            </div>

            <div className="space-y-3">
              <a href={`tel:${PHONE_TEL}`} className="btn-primary w-full py-3.5 text-base">
                <Phone className="w-5 h-5" /> Need Immediate Help? Call {PHONE_DISPLAY}
              </a>
              <button onClick={handleReset} className="btn-ghost-light w-full py-2.5 text-sm">
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-electric-400 font-bold text-xs uppercase tracking-wider mb-2">
              <Zap className="w-4 h-4" /> Free Upfront Estimate
            </div>
            <h3 className="font-display font-bold text-2xl text-white">Get an Electrical Quote</h3>
            <p className="text-ink-300 text-xs mt-1">Select your service and Denver ZIP code for fast dispatch.</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-ink-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Sarah Mitchell"
                  className="w-full px-4 py-3 rounded-xl bg-ink-800 border border-ink-700 text-white placeholder:text-ink-500 focus:outline-none focus:border-electric-400 text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-ink-300 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(720) 000-0000"
                    className="w-full px-4 py-3 rounded-xl bg-ink-800 border border-ink-700 text-white placeholder:text-ink-500 focus:outline-none focus:border-electric-400 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ink-300 mb-1">Denver ZIP Code *</label>
                  <input
                    type="text"
                    required
                    maxLength={5}
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value.replace(/\D/g, ''))}
                    placeholder="e.g. 80202"
                    className="w-full px-4 py-3 rounded-xl bg-ink-800 border border-ink-700 text-white placeholder:text-ink-500 focus:outline-none focus:border-electric-400 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-ink-300 mb-1">Select Needed Service *</label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-ink-800 border border-ink-700 text-white focus:outline-none focus:border-electric-400 text-sm"
                >
                  <option value="Electrical Repair & Troubleshooting">Electrical Repair & Troubleshooting</option>
                  <option value="Electrical Panel Upgrade (100A to 200A)">Electrical Panel Upgrade (100A to 200A)</option>
                  <option value="EV Charger Installation (Level 2)">EV Charger Installation (Level 2)</option>
                  <option value="Whole-Home Rewiring & Safety">Whole-Home Rewiring & Safety</option>
                  <option value="Lighting & Ceiling Fan Installation">Lighting & Ceiling Fan Installation</option>
                  <option value="Outlet & Switch Repair">Outlet & Switch Repair</option>
                  <option value="Electrical Inspection">Electrical Inspection</option>
                  <option value="Surge Protection & Standby Generator">Surge Protection & Standby Generator</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-ink-300 mb-1">Project Details (Optional)</label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Describe your electrical issue or project requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-ink-800 border border-ink-700 text-white placeholder:text-ink-500 focus:outline-none focus:border-electric-400 text-sm resize-none"
                />
              </div>

              <div className="pt-2">
                <button type="submit" className="btn-primary w-full py-3.5 text-base">
                  <Send className="w-4 h-4" /> Submit Quote Request
                </button>
              </div>
            </form>

            <div className="mt-5 pt-4 border-t border-ink-800 text-center flex items-center justify-between text-xs text-ink-400">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-electric-400" /> No Obligation</span>
              <a href={`tel:${PHONE_TEL}`} className="text-electric-400 font-bold hover:underline">Or Call {PHONE_DISPLAY}</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
