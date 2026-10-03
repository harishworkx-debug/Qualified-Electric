import { Link } from 'react-router-dom';
import {
  ArrowRight, Check, ChevronRight, MapPin, Phone, ShieldCheck, Star, Zap,
  Building2, CheckCircle2, Layers
} from 'lucide-react';
import { serviceAreas, PHONE_DISPLAY, PHONE_TEL, ServiceArea } from '@/data/site-data';
import SEO, { faqSchema, localBusinessSchema } from '@/components/SEO';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';

export default function LocationPage({ slug }: { slug: string }) {
  const area: ServiceArea = serviceAreas.find((item) => item.slug === slug) || serviceAreas[0];

  return (
    <>
      <SEO
        title={area.title}
        description={area.metaDescription}
        canonical={`/${area.slug}`}
        schema={[
          localBusinessSchema,
          faqSchema(area.faqs)
        ]}
      />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 lg:pt-40 lg:pb-28 bg-ink-950 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/13633732/pexels-photo-13633732.jpeg?auto=compress&cs=tinysrgb&w=2000"
            alt={`${area.city}, Colorado local electrician services`}
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 to-transparent" />
        </div>
        <div className="absolute inset-0 bg-grid-dark bg-grid opacity-20" />

        <div className="container-pad relative">
          <nav className="flex items-center gap-2 text-sm text-ink-400 mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-electric-400 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-ink-200">{area.city}, {area.state}</span>
          </nav>

          <div className="max-w-3xl">
            <span className="eyebrow-light">
              <span className="w-8 h-px bg-electric-400" />
              Serving {area.city}, {area.state} & Metro Area
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mt-5 text-balance">
              {area.h1}
            </h1>
            <p className="text-xl text-ink-200 leading-relaxed mt-6 max-w-2xl">
              {area.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href={`tel:${PHONE_TEL}`} className="btn-primary text-lg px-7 py-3.5">
                <Phone className="w-5 h-5" /> Call {PHONE_DISPLAY}
              </a>
              <a href="#city-services" className="btn-ghost-light text-lg px-7 py-3.5">
                Explore Services in {area.city} <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-10 text-sm text-ink-300">
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-electric-400" /> Licensed & Insured</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-electric-400" /> {area.localUtility}</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-electric-400" /> Upfront Pricing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage & Neighborhoods Summary Bar */}
      <section className="bg-ink-900 border-b border-ink-800 py-6">
        <div className="container-pad">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-electric-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-xs font-bold text-electric-400 uppercase tracking-wider">Neighborhood Coverage</p>
                <p className="text-sm text-ink-200 mt-1 font-medium">{area.neighborhoods.slice(0, 5).join(', ')} & more</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Building2 className="w-5 h-5 text-electric-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-xs font-bold text-electric-400 uppercase tracking-wider">Municipal & Utility Info</p>
                <p className="text-sm text-ink-200 mt-1 font-medium">{area.buildingDept} | {area.localUtility}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Layers className="w-5 h-5 text-electric-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-xs font-bold text-electric-400 uppercase tracking-wider">Zip Codes Served</p>
                <p className="text-sm text-ink-200 mt-1 font-medium">{area.zipCodes.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City Overview & Local Electrical Context */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-pad">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
            <div>
              <span className="eyebrow"><span className="w-8 h-px bg-electric-600" /> Local Service Authority</span>
              <h2 className="section-title mt-4">Professional electrical work for {area.city} homeowners.</h2>
              <div className="space-y-5 mt-6 text-ink-600 text-lg leading-relaxed">
                {area.introParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-4">
                <a href={`tel:${PHONE_TEL}`} className="btn-dark">
                  <Phone className="w-4 h-4" /> Schedule Service in {area.city}
                </a>
              </div>
            </div>

            <div className="rounded-3xl bg-ink-900 p-7 lg:p-9 text-white relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-electric-500 flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-ink-950" fill="currentColor" />
              </div>
              <h3 className="font-display font-bold text-2xl">Service Coverage in {area.city}</h3>
              <p className="text-ink-300 leading-relaxed mt-3">{area.description}</p>

              <div className="mt-6 pt-6 border-t border-ink-700">
                <p className="text-xs font-bold text-electric-400 uppercase tracking-wider mb-3">Key Subdivisions & Neighborhoods</p>
                <div className="flex flex-wrap gap-2">
                  {area.neighborhoods.map((n) => (
                    <span key={n} className="px-3 py-1 rounded-full bg-ink-800 text-ink-200 text-xs font-semibold border border-ink-700">
                      {n}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-ink-700">
                <p className="text-xs font-bold text-electric-400 uppercase tracking-wider mb-2">Local Landmarks & Service Hubs</p>
                <p className="text-xs text-ink-300 leading-relaxed">{area.landmarks.join(' • ')}</p>
              </div>

              <div className="space-y-3 mt-7 pt-6 border-t border-ink-700">
                <p className="flex items-center gap-3 text-sm text-ink-300"><ShieldCheck className="w-4 h-4 text-electric-400" /> Fully licensed in Colorado</p>
                <p className="flex items-center gap-3 text-sm text-ink-300"><Check className="w-4 h-4 text-electric-400" /> Permitted & inspected per {area.buildingDept}</p>
                <p className="flex items-center gap-3 text-sm text-ink-300"><Star className="w-4 h-4 text-electric-400" fill="currentColor" /> 5-star customer ratings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured City Services with Internal Links */}
      <section id="city-services" className="py-20 lg:py-28 bg-ink-50">
        <div className="container-pad">
          <div className="max-w-3xl mb-12">
            <span className="eyebrow"><span className="w-8 h-px bg-electric-600" /> Targeted Solutions</span>
            <h2 className="section-title mt-4">Top electrical services in {area.city}, {area.state}.</h2>
            <p className="section-subtitle">Tailored electrical installations and repairs engineered for {area.city} homes.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {area.topServices.map((service) => (
              <div key={service.title} className="bg-white rounded-2xl p-6 border border-ink-100 shadow-sm hover:shadow-xl hover:border-electric-300 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-electric-100 text-electric-700 flex items-center justify-center mb-5">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-ink-900">{service.title}</h3>
                  <p className="text-sm text-ink-500 leading-relaxed mt-2">{service.description}</p>
                </div>
                <Link
                  to={`/${service.linkSlug}`}
                  className="inline-flex items-center gap-1.5 text-electric-600 font-bold text-sm mt-5 hover:gap-2.5 transition-all"
                >
                  Explore Service Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Local Projects */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-pad">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <span className="eyebrow"><span className="w-8 h-px bg-electric-600" /> Recent Local Work</span>
            <h2 className="section-title mt-4">Recent electrical projects in {area.city}.</h2>
            <p className="section-subtitle">A look at real electrical repairs, panel upgrades, and installations completed across {area.city} neighborhoods.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {area.localProjects.map((project) => (
              <div key={project.title} className="rounded-2xl border border-ink-100 bg-ink-50/50 p-6 flex flex-col justify-between hover:border-electric-300 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-electric-100 text-electric-800 text-xs font-bold">
                      {project.serviceType}
                    </span>
                    <span className="text-xs font-semibold text-ink-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-electric-600" /> {project.neighborhood}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-ink-900 text-lg">{project.title}</h3>
                  <p className="text-sm text-ink-600 leading-relaxed mt-2">{project.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-ink-200/60 flex items-center justify-between text-xs text-ink-500 font-medium">
                  <span className="flex items-center gap-1 text-emerald-600"><CheckCircle2 className="w-3.5 h-3.5" /> Code Compliant</span>
                  <span>{area.city}, CO</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Genuine Local Customer Review */}
      <section className="py-16 bg-electric-50 border-y border-electric-100">
        <div className="container-pad max-w-4xl text-center">
          <div className="inline-flex items-center gap-1 mb-4">
            {Array.from({ length: area.review.rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-electric-500" fill="currentColor" />
            ))}
          </div>
          <blockquote className="text-xl sm:text-2xl font-display font-bold text-ink-900 leading-snug">
            “{area.review.text}”
          </blockquote>
          <div className="mt-4 text-sm font-semibold text-ink-600">
            — {area.review.name} <span className="text-electric-700">({area.review.location})</span>
          </div>
        </div>
      </section>

      {/* City FAQs */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-pad">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
            <div>
              <span className="eyebrow"><span className="w-8 h-px bg-electric-600" /> Local FAQs</span>
              <h2 className="section-title mt-4">Questions about electrical service in {area.city}.</h2>
              <p className="section-subtitle">Answers to common local permit, utility, and code questions for {area.city} residents.</p>
              <a href={`tel:${PHONE_TEL}`} className="btn-dark mt-8 inline-flex">
                <Phone className="w-4 h-4" /> Ask an Electrician
              </a>
            </div>
            <FAQAccordion faqs={area.faqs} />
          </div>
        </div>
      </section>

      {/* Nearby Cities & Cross Links */}
      <section className="py-16 bg-ink-900 text-white">
        <div className="container-pad">
          <h3 className="font-display font-bold text-xl mb-4 text-white">Also Serving Communities Near {area.city}</h3>
          <p className="text-sm text-ink-300 mb-6 max-w-2xl">Looking for electrical services in adjacent metro areas? We also provide full residential electrical dispatch to surrounding cities:</p>
          <div className="flex flex-wrap gap-3">
            {area.nearbyCities.map((city) => (
              <Link
                key={city.slug}
                to={`/${city.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-ink-800 hover:bg-electric-500 hover:text-ink-950 text-ink-200 font-semibold text-sm transition-all"
              >
                <MapPin className="w-3.5 h-3.5" /> Electrician in {city.name}, CO <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-ink-800 flex flex-wrap gap-x-8 gap-y-3 text-xs text-ink-400">
            <span className="font-bold text-ink-200">Denver Service Categories:</span>
            <Link to="/electrical-panel-upgrade-denver-co" className="hover:text-electric-400 transition-colors">Denver Panel Upgrades</Link>
            <Link to="/ev-charger-installation-denver-co" className="hover:text-electric-400 transition-colors">Denver EV Charging</Link>
            <Link to="/residential-wiring-denver-co" className="hover:text-electric-400 transition-colors">Denver Whole-Home Rewiring</Link>
            <Link to="/surge-protection-denver-co" className="hover:text-electric-400 transition-colors">Denver Surge Suppressors</Link>
            <Link to="/generator-installation-denver-co" className="hover:text-electric-400 transition-colors">Denver Standby Generators</Link>
          </div>
        </div>
      </section>

      {/* Localized CTA Section */}
      <CTASection
        title={`Need a licensed electrician in ${area.city}, CO?`}
        subtitle={`Call Qualified Electric today for fast local service, upfront pricing, and code-compliant electrical work in ${area.city}.`}
      />
    </>
  );
}
