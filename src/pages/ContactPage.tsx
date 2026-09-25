import SEO from '@/components/SEO';
import { Phone, MapPin } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL, MAPS_URL } from '@/data/site-data';

export default function ContactPage() {
  return (
    <>
      <SEO 
        title="Contact Us | Qualified Electric" 
        description="Get in touch with Qualified Electric for all your residential electrical needs in Denver, CO. Call us at (720) 794-0714 or fill out our contact form." 
      />
      
      <div className="pt-24 lg:pt-32 pb-12 lg:pb-16 bg-ink-950">
        <div className="container-pad">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-[1.05] text-balance">
              Contact <span className="text-electric-400">Us</span>
            </h1>
            <p className="text-xl text-ink-200 mt-6 leading-relaxed">
              We're ready to help with your electrical needs. Call us directly or visit our office.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 lg:py-28 bg-ink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark bg-grid opacity-40" />
        <div className="container-pad relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="max-w-3xl mb-12">
                <span className="eyebrow-light">
                  <span className="w-8 h-px bg-current" />
                  Get In Touch
                </span>
                <h2 className="section-title mt-4 text-balance text-white">Let's get your home powered right.</h2>
                <p className="section-subtitle text-ink-300">Tell us what you need help with, or call us directly. Our team is ready to answer your questions and schedule your service.</p>
              </div>
              <div className="space-y-5">
                <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-electric-500 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5 text-ink-950" />
                  </div>
                  <div>
                    <p className="text-ink-400 text-sm">Call us directly</p>
                    <p className="text-white font-display font-bold text-xl group-hover:text-electric-400 transition-colors">{PHONE_DISPLAY}</p>
                  </div>
                </a>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-ink-800 border border-ink-700 flex items-center justify-center group-hover:border-electric-500 transition-colors">
                    <MapPin className="w-5 h-5 text-electric-400" />
                  </div>
                  <div>
                    <p className="text-ink-400 text-sm">Serving</p>
                    <p className="text-white font-bold group-hover:text-electric-400 transition-colors">Denver & the surrounding metro</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-2">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d392655.6285134665!2d-105.22681621631685!3d39.74813885622714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3207e73a23c2deb%3A0x86ba5d50ac28d4d4!2sQualified%20Electric!5e0!3m2!1sen!2sin!4v1790060395944!5m2!1sen!2sin" className="w-full h-[360px] lg:h-[420px] rounded-2xl border-0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
