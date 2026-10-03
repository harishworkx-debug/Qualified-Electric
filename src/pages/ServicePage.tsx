import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Check, ChevronRight, Phone, ShieldCheck, Star, Zap,
  AlertCircle, DollarSign, CheckCircle2, MapPin, BookOpen
} from 'lucide-react';
import { services, serviceAreas, PHONE_DISPLAY, PHONE_TEL } from '@/data/site-data';
import { blogPosts } from '@/data/blog-data';
import SEO, { faqSchema, localBusinessSchema, serviceSchema, breadcrumbSchema } from '@/components/SEO';
import FAQAccordion from '@/components/FAQAccordion';
import QuoteFormModal from '@/components/QuoteFormModal';

export default function ServicePage({ slug }: { slug: string }) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const service = services.find((item) => item.slug === slug) || services[0];
  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 4);
  const featuredBlogs = blogPosts.slice(0, 3);

  const processSteps = [
    {
      num: '01',
      title: 'Initial Consultation & Diagnostic Inspection',
      description: `We evaluate your home's existing electrical panel, circuit capacity, and wiring to determine the safest approach for your ${service.shortTitle.toLowerCase()} in Denver.`
    },
    {
      num: '02',
      title: 'Transparent Upfront Quote',
      description: 'You receive a detailed, flat-rate quote before any work begins. No unexpected hourly charges or surprise add-ons.'
    },
    {
      num: '03',
      title: 'Code-Compliant Professional Execution',
      description: `Our licensed master electricians complete your ${service.shortTitle.toLowerCase()} adhering strictly to the National Electrical Code (NEC) and Denver County building codes.`
    },
    {
      num: '04',
      title: 'Full System Testing & Safety Sign-off',
      description: 'We test all circuits under load, coordinate any required City of Denver permits/inspections, and leave your workspace spotlessly clean.'
    }
  ];

  const costFactors = [
    {
      title: 'Electrical Panel & Circuit Capacity',
      description: 'System amperage upgrades (e.g. 100A to 200A), dedicated 240V lines, and subpanel requirements impact overall labor and component requirements.'
    },
    {
      title: 'Home Accessibility & Structural Layout',
      description: 'Accessibility behind finished drywall, attic or crawlspace access runs, and historic Denver home construction (e.g. plaster, brick).'
    },
    {
      title: 'City of Denver Permits & Utility Inspections',
      description: 'Denver County electrical permit fees and required Xcel Energy utility meter hookup coordination.'
    },
    {
      title: 'Material Specifications & Safety Hardware',
      description: 'Heavy-gauge copper wiring, AFCI/GFCI dual-function breakers, and heavy-duty outdoor or smart hardware options.'
    }
  ];

  return (
    <>
      <SEO
        title={service.title.includes('Qualified Electric') ? service.title : `${service.title} | Qualified Electric`}
        description={service.metaDescription}
        canonical={`/${service.slug}`}
        ogImage={service.heroImage}
        schema={[
          localBusinessSchema,
          serviceSchema(service.title, service.description, service.slug),
          faqSchema(service.faqs),
          breadcrumbSchema([
            { name: 'Home', item: '/' },
            { name: service.shortTitle, item: `/${service.slug}` }
          ])
        ]}
      />

      {/* Hero Section with H1 */}
      <section className="relative pt-28 pb-20 lg:pt-40 lg:pb-28 bg-ink-950 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.heroImage}
            alt={service.heroAlt}
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/40" />
        </div>
        <div className="absolute inset-0 bg-grid-dark bg-grid opacity-20" />
        <div className="container-pad relative">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-ink-400 mb-8" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-electric-400 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-ink-200">{service.shortTitle}</span>
            </nav>
            <span className="eyebrow-light">
              <span className="w-8 h-px bg-electric-400" /> Denver, Colorado
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mt-5 text-balance">
              {service.h1}
            </h1>
            <p className="text-xl text-ink-200 leading-relaxed mt-6 max-w-2xl">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href={`tel:${PHONE_TEL}`} className="btn-primary text-lg">
                <Phone className="w-5 h-5" /> Call {PHONE_DISPLAY}
              </a>
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="btn-ghost-light text-lg cursor-pointer"
              >
                Request Upfront Quote <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 1. H2: When Do You Need This Service? */}
      <section id="when-needed" className="py-20 lg:py-28 bg-white">
        <div className="container-pad">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20">
            <article>
              <span className="eyebrow">
                <span className="w-8 h-px bg-electric-600" /> Indications & Solutions
              </span>
              <h2 className="section-title mt-4">
                When Do You Need {service.shortTitle} in Denver?
              </h2>
              <div className="space-y-5 mt-7 text-ink-600 text-lg leading-relaxed">
                {service.intro.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-bold font-display text-ink-900 mb-6 flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-electric-600" />
                  Key Services & Common Use Cases Included:
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.whatWeDo.map((item) => (
                    <div key={item.title} className="p-5 rounded-2xl bg-ink-50 border border-ink-100 hover:border-electric-300 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full bg-electric-500 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-ink-950" strokeWidth={3} />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-ink-900">{item.title}</h4>
                          <p className="text-sm text-ink-500 leading-relaxed mt-1.5">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar Sticky Card */}
            <aside>
              <div className="lg:sticky lg:top-28 rounded-3xl bg-ink-900 p-7 lg:p-8 text-white overflow-hidden relative shadow-2xl">
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-electric-500/20 blur-2xl" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-electric-500 flex items-center justify-center mb-6">
                    <Zap className="w-7 h-7 text-ink-950" fill="currentColor" />
                  </div>
                  <h3 className="font-display font-bold text-2xl">
                    Need {service.shortTitle.toLowerCase()} in Denver?
                  </h3>
                  <p className="text-ink-300 leading-relaxed mt-3">
                    Speak directly with a licensed Denver electrician. We provide honest advice, upfront flat rates, and rapid response.
                  </p>
                  <a href={`tel:${PHONE_TEL}`} className="btn-primary w-full mt-6 text-center">
                    <Phone className="w-4 h-4" /> Call {PHONE_DISPLAY}
                  </a>
                  <button
                    onClick={() => setIsQuoteOpen(true)}
                    className="w-full mt-3 py-3 px-4 rounded-xl bg-ink-800 hover:bg-ink-700 text-white font-bold text-sm transition-colors border border-ink-700 cursor-pointer text-center"
                  >
                    Get Free Quote Online
                  </button>
                  <div className="space-y-3 mt-7 pt-6 border-t border-ink-700 text-sm text-ink-300">
                    <p className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-electric-400" /> Licensed Master Electricians</p>
                    <p className="flex items-center gap-3"><Check className="w-4 h-4 text-electric-400" /> Upfront, Transparent Rates</p>
                    <p className="flex items-center gap-3"><Star className="w-4 h-4 text-electric-400" fill="currentColor" /> 5-Star Service Guarantee</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 2. H2: Qualified Electric Service Process */}
      <section className="py-20 lg:py-28 bg-ink-50 border-y border-ink-100">
        <div className="container-pad">
          <div className="max-w-3xl mb-12">
            <span className="eyebrow">
              <span className="w-8 h-px bg-electric-600" /> Step-by-Step Excellence
            </span>
            <h2 className="section-title mt-4">
              Qualified Electric's {service.shortTitle} Process
            </h2>
            <p className="section-subtitle">
              How we deliver safe, code-compliant, hassle-free electrical service to your Denver home.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.num} className="bg-white p-7 rounded-2xl border border-ink-100 shadow-sm relative group hover:border-electric-300 transition-all">
                <span className="text-4xl font-extrabold text-electric-500/20 font-display group-hover:text-electric-500/40 transition-colors">
                  {step.num}
                </span>
                <h3 className="font-display font-bold text-ink-900 text-lg mt-3 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-ink-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. H2: Factors Affecting Service Cost */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-pad">
          <div className="max-w-3xl mb-12">
            <span className="eyebrow">
              <span className="w-8 h-px bg-electric-600" /> Transparent Pricing Guide
            </span>
            <h2 className="section-title mt-4">
              Factors Affecting {service.shortTitle} Cost in Denver
            </h2>
            <p className="section-subtitle">
              We believe in 100% pricing transparency. Here is what influences your overall estimate:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {costFactors.map((factor, idx) => (
              <div key={idx} className="p-7 rounded-2xl bg-electric-50/50 border border-electric-100 flex gap-5 items-start">
                <div className="w-12 h-12 rounded-xl bg-electric-500 flex items-center justify-center flex-shrink-0 text-ink-950 font-bold">
                  <DollarSign className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-ink-900 text-lg">{factor.title}</h3>
                  <p className="text-ink-600 leading-relaxed text-sm mt-2">{factor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. H2: Why Choose Qualified Electric? */}
      <section className="py-20 lg:py-28 bg-ink-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark bg-grid opacity-20" />
        <div className="container-pad relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="eyebrow-light">
                <span className="w-8 h-px bg-electric-400" /> Peace of Mind
              </span>
              <h2 className="section-title text-white mt-4">
                Why Choose Qualified Electric for {service.shortTitle}?
              </h2>
              <p className="text-lg text-ink-200 leading-relaxed mt-5">
                Electrical work in your home is not the place for shortcuts. We treat your property with the highest degree of safety, respect, and professional expertise.
              </p>
            </div>
            <div className="space-y-4">
              {service.whyItMatters.map((point, idx) => (
                <div key={idx} className="flex gap-4 items-start bg-ink-900/80 border border-ink-800 rounded-xl p-5 backdrop-blur-sm">
                  <div className="w-7 h-7 rounded-full bg-electric-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-ink-950" strokeWidth={3} />
                  </div>
                  <p className="text-ink-200 font-medium leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. H2: Frequently Asked Questions */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-pad">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
            <div>
              <span className="eyebrow">
                <span className="w-8 h-px bg-electric-600" /> Common Questions
              </span>
              <h2 className="section-title mt-4">
                Frequently Asked Questions About {service.shortTitle}
              </h2>
              <p className="section-subtitle">
                Get clear, expert answers before scheduling your Denver electrical service.
              </p>
            </div>
            <FAQAccordion faqs={service.faqs} />
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 lg:py-24 bg-ink-50 border-t border-ink-100">
        <div className="container-pad">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="eyebrow">
                <span className="w-8 h-px bg-electric-600" /> Comprehensive Electrical Care
              </span>
              <h2 className="section-title mt-4 text-3xl lg:text-4xl">
                Other Electrical Services in Denver
              </h2>
            </div>
            <Link to="/#services" className="hidden sm:flex items-center gap-2 text-electric-600 font-bold hover:gap-3 transition-all">
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {relatedServices.map((related) => (
              <Link
                key={related.slug}
                to={`/${related.slug}`}
                className="bg-white rounded-2xl p-5 border border-ink-100 hover:border-electric-300 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-display font-bold text-ink-900 group-hover:text-electric-700 transition-colors">
                    {related.shortTitle}
                  </h3>
                  <p className="text-sm text-ink-500 mt-2 line-clamp-2">
                    {related.description}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-electric-600 font-bold text-sm mt-4">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links: Educational Blog Guides & Service Areas */}
      <section className="py-20 lg:py-24 bg-white border-t border-ink-100">
        <div className="container-pad">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Educational Guides */}
            <div>
              <span className="eyebrow">
                <span className="w-8 h-px bg-electric-600" /> Educational Resources
              </span>
              <h3 className="font-display font-bold text-ink-900 text-2xl mt-3 mb-6">
                Helpful Electrical Guides & Pricing Articles
              </h3>
              <div className="space-y-4">
                {featuredBlogs.map((post) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="p-5 rounded-2xl bg-ink-50 border border-ink-100 hover:border-electric-300 hover:bg-electric-50/40 transition-all flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-electric-500 flex items-center justify-center flex-shrink-0 text-ink-950 font-bold">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-ink-900 group-hover:text-electric-700 transition-colors text-base">
                        {post.title}
                      </h4>
                      <p className="text-xs text-ink-500 mt-1 line-clamp-2">{post.summary}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Service Areas Link Matrix */}
            <div>
              <span className="eyebrow">
                <span className="w-8 h-px bg-electric-600" /> Local Coverage
              </span>
              <h3 className="font-display font-bold text-ink-900 text-2xl mt-3 mb-6">
                Providing {service.shortTitle} Across Denver Metro Cities
              </h3>
              <p className="text-ink-600 text-sm mb-6 leading-relaxed">
                Qualified Electric dispatches licensed master electricians to single-family homes and townhomes throughout all major Denver metro communities:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {serviceAreas.slice(0, 8).map((area) => (
                  <Link
                    key={area.slug}
                    to={`/${area.slug}`}
                    className="p-3.5 rounded-xl bg-ink-50 border border-ink-100 hover:border-electric-400 hover:bg-white text-ink-800 hover:text-electric-700 font-bold text-sm transition-all flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4 text-electric-600 flex-shrink-0" />
                    <span>{area.city}, CO Electrician</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. H2: Schedule Your Electrical Service */}
      <section id="schedule" className="relative py-20 lg:py-28 bg-ink-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark bg-grid opacity-25" />
        <div className="container-pad relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="eyebrow-light justify-center">
              <span className="w-8 h-px bg-electric-400" /> Schedule Your Service
            </span>
            <h2 className="section-title text-white text-4xl lg:text-5xl mt-4">
              Schedule Your {service.shortTitle} in Denver, CO
            </h2>
            <p className="text-xl text-ink-200 mt-5 max-w-2xl mx-auto leading-relaxed">
              Don't compromise on electrical safety. Contact Qualified Electric today for prompt dispatch, honest pricing, and master-level workmanship.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-9">
              <a href={`tel:${PHONE_TEL}`} className="btn-primary text-xl px-9 py-4 w-full sm:w-auto">
                <Phone className="w-6 h-6" /> Call {PHONE_DISPLAY} Now
              </a>
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="btn-ghost-light text-xl px-9 py-4 w-full sm:w-auto cursor-pointer"
              >
                Request Upfront Quote
              </button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-sm text-ink-300 border-t border-ink-800 pt-8">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-electric-400" /> Denver Metro Service</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-electric-400" /> Same-Day Availability</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-electric-400" /> No Hidden Fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Modal */}
      <QuoteFormModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} defaultService={service.shortTitle} />
    </>
  );
}
