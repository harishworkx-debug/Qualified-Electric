import SEO from '@/components/SEO';
import { Phone, Star, Zap } from 'lucide-react';
import { PHONE_TEL } from '@/data/site-data';
import CTASection from '@/components/CTASection';

export default function AboutPage() {
  return (
    <>
      <SEO 
        title="About Us | Qualified Electric" 
        description="Learn more about Qualified Electric, your trusted residential electrician serving Denver, CO. Quality electrical work performed with care and expertise." 
      />
      
      <div className="pt-24 lg:pt-32 pb-20 lg:pb-28 bg-ink-950">
        <div className="container-pad">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-[1.05] text-balance">
              About <span className="text-electric-400">Qualified Electric</span>
            </h1>
            <p className="text-xl text-ink-200 mt-6 leading-relaxed">
              We are a local Denver electrical company built on a simple idea: homeowners should be able to call an electrician they can trust.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 lg:py-28 bg-white">
        <div className="container-pad">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img src="https://images.pexels.com/photos/17843269/pexels-photo-17843269.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Professional electrician inspecting electrical panels" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <p className="text-white font-display font-bold text-xl">Qualified Electric</p>
                    <p className="text-ink-300 text-sm mt-1">Serving Denver since day one</p>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-electric-500 flex items-center justify-center">
                    <Zap className="w-7 h-7 text-ink-950" fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-ink-900 rounded-2xl p-5 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {['https://images.pexels.com/photos/4981802/pexels-photo-4981802.jpeg?auto=compress&cs=tinysrgb&w=100', 'https://images.pexels.com/photos/10871737/pexels-photo-10871737.jpeg?auto=compress&cs=tinysrgb&w=100', 'https://images.pexels.com/photos/21812146/pexels-photo-21812146.jpeg?auto=compress&cs=tinysrgb&w=100'].map((src) => <img key={src} src={src} alt="Qualified Electric team member" className="w-9 h-9 rounded-full object-cover border-2 border-ink-900" />)}
                  </div>
                  <div>
                    <div className="flex items-center gap-1"><Star className="w-4 h-4 text-electric-400" fill="currentColor" /><span className="text-white font-bold">5.0</span></div>
                    <p className="text-ink-400 text-xs">Homeowners trust us</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:pl-4">
              <div className="max-w-3xl mb-8">
                <span className="eyebrow">
                  <span className="w-8 h-px bg-current" />
                  The Qualified Difference
                </span>
                <h2 className="section-title mt-4 text-balance text-ink-900">Electrical work done right. Every time.</h2>
              </div>
              <div className="space-y-5 text-ink-500 leading-relaxed">
                <p>Qualified Electric is a local Denver electrical company built on a simple idea: homeowners should be able to call an electrician they can trust. We bring professional expertise, honest communication, and meticulous workmanship to every home we enter.</p>
                <p>Whether you need a quick repair, a panel upgrade, or a complete home rewiring, we take the time to understand your needs and give you clear options. No confusing jargon. No surprise charges. Just quality electrical work that keeps your family safe.</p>
                <p>Our commitment to safety and excellence means that every job is performed to the highest standards, meeting or exceeding local codes. We don't cut corners because we know that your family's safety depends on our work.</p>
              </div>
              <div className="grid grid-cols-2 gap-5 mt-8 pt-8 border-t border-ink-100">
                <div><p className="text-3xl font-extrabold text-ink-900 font-display">100%</p><p className="text-sm text-ink-500 mt-1">Safety-focused work</p></div>
                <div><p className="text-3xl font-extrabold text-ink-900 font-display">24/7</p><p className="text-sm text-ink-500 mt-1">Emergency support</p></div>
              </div>
              <a href={`tel:${PHONE_TEL}`} className="btn-dark mt-8"><Phone className="w-4 h-4" /> Speak With an Electrician</a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
