import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, Award, BadgeDollarSign, Battery, Check,
  ChevronRight, Clock, MapPin, Phone, ShieldCheck, Star, Zap,
  AlertTriangle, Plug, Thermometer, Lightbulb, Home, Wrench,
  Cable, ToggleLeft, Fan, BatteryCharging, ClipboardCheck, Search,
  CheckCircle2, DollarSign, FileCheck, Layers, HelpCircle, AlertCircle
} from 'lucide-react';
import SEO, { faqSchema, localBusinessSchema } from '@/components/SEO';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import {
  PHONE_DISPLAY, PHONE_TEL, MAPS_URL, services, serviceAreas,
  testimonials, homepageFaqs, whyChooseUs, projectGallery
} from '@/data/site-data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home, Wrench, Zap, Cable, Plug, ToggleLeft, Lightbulb, Fan,
  BatteryCharging, ClipboardCheck, ShieldCheck, Search, AlertTriangle,
  Thermometer, Battery, Clock, BadgeDollarSign, Award, MapPin,
};

function SectionHeader({ eyebrow, title, subtitle, light = false }: { eyebrow: string; title: string; subtitle?: string; light?: boolean }) {
  return (
    <div className="max-w-3xl mb-12 lg:mb-16">
      <span className={light ? 'eyebrow-light' : 'eyebrow'}>
        <span className="w-8 h-px bg-current" />
        {eyebrow}
      </span>
      <h2 className={`section-title mt-4 text-balance ${light ? 'text-white' : 'text-ink-900'}`}>{title}</h2>
      {subtitle && <p className={`section-subtitle ${light ? 'text-ink-300' : ''}`}>{subtitle}</p>}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <SEO
        title="Electrician in Denver, CO | Qualified Electric"
        description="Qualified Electric is your trusted residential electrician in Denver, CO. Professional electrical repairs, 200A panel upgrades, home rewiring, lighting, EV chargers, and safety inspections. Call (720) 794-0714."
        schema={[localBusinessSchema, faqSchema(homepageFaqs)]}
      />

      <Hero />
      <TrustBar />
      <About />
      <Services />
      <CommonDenverProblems />
      <ServiceProcess />
      <WhyChooseUs />
      <ProjectWorkShowcase />
      <PricingFactorsAndFAQs />
      <ServiceAreasSection />
      <Testimonials />
      <Contact />
      <CTASection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[720px] lg:min-h-[820px] flex items-center bg-ink-950 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&w=2000"
          alt="Trusted Residential Electrician performing panel inspection in Denver, CO"
          className="w-full h-full object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/30" />
      </div>
      <div className="absolute inset-0 bg-grid-dark bg-grid opacity-30" />
      <div className="absolute right-10 top-1/4 w-72 h-72 bg-electric-500/10 rounded-full blur-3xl" />

      <div className="container-pad relative pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="eyebrow-light mb-6">
            <span className="w-10 h-px bg-electric-400" />
            Licensed Electrical Contractor in Denver, CO
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] text-balance">
            Trusted <span className="text-electric-400">Residential Electrician</span> in Denver, CO
          </h1>
          <p className="text-xl lg:text-2xl text-ink-200 mt-7 max-w-2xl leading-relaxed">
            Full-service electrical company serving Denver, CO and surrounding metro communities. From fast repairs and 200A panel upgrades to EV charger installations and whole-home safety inspections.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-9">
            <a href={`tel:${PHONE_TEL}`} className="btn-primary text-lg px-8 py-4">
              <Phone className="w-5 h-5" />
              Call (720) 794-0714
            </a>
            <a href="#services" className="btn-ghost-light text-lg px-8 py-4">
              Explore Electrical Services
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-10 text-sm text-ink-300">
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-electric-400" /> Licensed Master Electricians</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-electric-400" /> Upfront Transparent Pricing</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-electric-400" /> Same-Day Service Available</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 hidden xl:block w-[38%] h-36 bg-electric-500/10 backdrop-blur-sm border-t border-l border-white/10 p-6">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-electric-500 flex items-center justify-center">
            <Zap className="w-7 h-7 text-ink-950" fill="currentColor" />
          </div>
          <div>
            <p className="text-white font-bold text-lg">Powering Denver With Confidence</p>
            <p className="text-ink-300 text-sm mt-1">Code-compliant work. Clear communication. Every time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="bg-electric-500 py-5">
      <div className="container-pad">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-5 lg:gap-8">
          {[
            { icon: ShieldCheck, text: 'Licensed & Insured' },
            { icon: Clock, text: 'Fast Local Response' },
            { icon: BadgeDollarSign, text: 'Upfront Pricing' },
            { icon: Award, text: 'Quality Workmanship' },
            { icon: Phone, text: PHONE_DISPLAY },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2.5 text-ink-950 font-bold text-sm">
              <Icon className="w-5 h-5" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="container-pad">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src="https://images.pexels.com/photos/17843269/pexels-photo-17843269.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Licensed Denver electrician inspecting electrical panels"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="text-white font-display font-bold text-xl">Qualified Electric</p>
                  <p className="text-ink-300 text-sm mt-1">Denver's Trusted Electrical Team</p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-electric-500 flex items-center justify-center">
                  <Zap className="w-7 h-7 text-ink-950" fill="currentColor" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-ink-900 rounded-2xl p-5 shadow-2xl border border-ink-700">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {['https://images.pexels.com/photos/4981802/pexels-photo-4981802.jpeg?auto=compress&cs=tinysrgb&w=100', 'https://images.pexels.com/photos/10871737/pexels-photo-10871737.jpeg?auto=compress&cs=tinysrgb&w=100', 'https://images.pexels.com/photos/21812146/pexels-photo-21812146.jpeg?auto=compress&cs=tinysrgb&w=100'].map((src) => (
                    <img key={src} src={src} alt="Qualified Electric team member" className="w-9 h-9 rounded-full object-cover border-2 border-ink-900" />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-electric-400" fill="currentColor" />
                    <span className="text-white font-bold">5.0 Rating</span>
                  </div>
                  <p className="text-ink-400 text-xs">Denver homeowners trust us</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:pl-4">
            <SectionHeader
              eyebrow="The Qualified Difference"
              title="Denver electrical work done right. Every time."
              subtitle="Your home deserves electrical work performed with technical expertise, safety rigor, and complete transparency."
            />
            <div className="space-y-5 text-ink-600 leading-relaxed">
              <p>Qualified Electric is a local Denver electrical contractor built on straightforward principles: homeowners deserve an electrician who shows up on time, explains options clearly, and executes code-compliant work.</p>
              <p>Whether you are upgrading an outdated 100A panel in a historic Park Hill home, installing a Level 2 EV charger in Highlands Ranch, or troubleshooting flickering lights, our certified team handles every detail safely.</p>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-8 pt-8 border-t border-ink-100">
              <div><p className="text-3xl font-extrabold text-ink-900 font-display">100%</p><p className="text-sm text-ink-500 mt-1">Code-compliant work</p></div>
              <div><p className="text-3xl font-extrabold text-ink-900 font-display">24/7</p><p className="text-sm text-ink-500 mt-1">Emergency support</p></div>
            </div>
            <a href={`tel:${PHONE_TEL}`} className="btn-dark mt-8"><Phone className="w-4 h-4" /> Speak With an Electrician</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-ink-50">
      <div className="container-pad">
        <SectionHeader
          eyebrow="What We Do"
          title="Complete electrical services for your Denver home."
          subtitle="From quick repairs to whole-house rewiring, our master electricians handle all residential electrical needs."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.slice(0, 8).map((service) => {
            const Icon = iconMap[service.icon] || Zap;
            return (
              <Link key={service.slug} to={`/${service.slug}`} className="group bg-white rounded-2xl p-6 border border-ink-100 card-hover">
                <div className="w-12 h-12 rounded-xl bg-electric-100 text-electric-700 flex items-center justify-center mb-5 group-hover:bg-electric-500 group-hover:text-ink-950 transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-ink-900 group-hover:text-electric-700 transition-colors">{service.shortTitle}</h3>
                <p className="text-sm text-ink-500 leading-relaxed mt-2 line-clamp-3">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-electric-600 font-bold text-sm mt-4 group-hover:gap-2 transition-all">{service.shortTitle} <ArrowRight className="w-4 h-4" /></span>
              </Link>
            );
          })}
        </div>
        <div className="text-center mt-10"><Link to="/residential-electrician-denver-co" className="btn-outline">View All Electrical Services <ArrowRight className="w-4 h-4" /></Link></div>
      </div>
    </section>
  );
}

/* UNIQUE SECTION 1: Common Electrical Problems faced by Denver Homeowners */
function CommonDenverProblems() {
  const denverProblems = [
    {
      title: 'Knob & Tube or Cloth Wiring',
      location: 'Wash Park, Highlands, Capitol Hill',
      description: 'Pre-1950 historic Denver homes often have ungrounded knob-and-tube wiring that degrades under modern insulation and appliance loads.',
      badge: 'Historic Homes',
      icon: Cable,
    },
    {
      title: '1960s-70s Aluminum Branch Wiring',
      location: 'Lakewood, Englewood, Arvada Ranches',
      description: 'Mid-century homes with aluminum wiring risk loose overheating connections at switches and outlets. We provide COPALUM & AlumiConn remediation.',
      badge: 'Fire Safety Risk',
      icon: AlertTriangle,
    },
    {
      title: 'Recalled Panels (FPE & Zinsco)',
      location: 'Denver Metro Built 1960-1985',
      description: 'Federal Pacific Stab-Lok and Zinsco panels frequently fail to trip during overloads, creating fire hazards and insurance complications.',
      badge: 'Panel Replacement',
      icon: Zap,
    },
    {
      title: 'Flickering Lights & Overloaded 100A Panels',
      location: 'Expanding Suburban Homes',
      description: 'Adding central AC, heat pumps, or EV chargers to an undersized 100A main panel leads to constant breaker trips and voltage drops.',
      badge: '200A Upgrade Required',
      icon: Thermometer,
    },
    {
      title: 'Ungrounded 2-Prong Outlets',
      location: 'Older Residential Neighborhoods',
      description: 'Two-prong outlets leave sensitive computers, TVs, and smart devices vulnerable to electrical surges and shock hazards.',
      badge: 'GFCI Upgrade',
      icon: Plug,
    },
    {
      title: 'Foothill Power Surges & Storm Outages',
      location: 'Littleton, Castle Rock, Parker',
      description: 'High-elevation thunderstorms and winter blizzards cause severe power spikes and blackouts. We install panel surge suppressors & standby generators.',
      badge: 'Generator & Surge',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-ink-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark bg-grid opacity-30" />
      <div className="container-pad relative">
        <SectionHeader
          light
          eyebrow="Denver Housing Electrical Challenges"
          title="Common electrical problems in Denver homes."
          subtitle="Denver's rich architectural history means homes of different eras face specific electrical safety hazards. Here is what we fix daily:"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {denverProblems.map((prob) => {
            const Icon = prob.icon;
            return (
              <div key={prob.title} className="p-6 rounded-2xl border border-ink-700/80 bg-ink-800/60 hover:bg-ink-800 hover:border-electric-500/50 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-electric-500/20 text-electric-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-electric-400/10 text-electric-400 text-xs font-bold border border-electric-400/20">
                      {prob.badge}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-white text-lg">{prob.title}</h3>
                  <p className="text-xs font-semibold text-electric-300 mt-1">{prob.location}</p>
                  <p className="text-sm text-ink-300 leading-relaxed mt-3">{prob.description}</p>
                </div>
                <div className="mt-5 pt-4 border-t border-ink-700/60 flex items-center justify-between">
                  <span className="text-xs text-ink-400">Identified & Fixed by Qualified Electric</span>
                  <Link to="/electrical-troubleshooting-denver-co" className="text-electric-400 font-bold text-xs flex items-center gap-1 hover:gap-2 transition-all">
                    Fix This Issue <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a href={`tel:${PHONE_TEL}`} className="btn-primary inline-flex">
            <Phone className="w-4 h-4" /> Call (720) 794-0714 for Immediate Troubleshooting
          </a>
        </div>
      </div>
    </section>
  );
}

/* UNIQUE SECTION 2: Electrical Service Process (Step-by-Step Customer Journey) */
function ServiceProcess() {
  const steps = [
    {
      number: '01',
      title: 'Contact & Upfront Estimate',
      description: 'Call (720) 794-0714 or request service online. We discuss your electrical needs and provide clear, upfront flat-rate pricing before dispatching.',
    },
    {
      number: '02',
      title: 'On-Site Diagnostic & Safety Audit',
      description: 'Our licensed electrician arrives on time, inspects your panel, wiring, grounding, and circuits using professional diagnostic equipment.',
    },
    {
      number: '03',
      title: 'Code-Compliant Installation',
      description: 'We complete the electrical repair or installation adhering to National Electrical Code (NEC) and Denver County building standards.',
    },
    {
      number: '04',
      title: 'Testing, Permits & Clean-Up',
      description: 'We test all connections, handle city inspection permits where required, clean up thoroughly, and review the finished work with you.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-pad">
        <SectionHeader
          eyebrow="How We Work"
          title="Our 4-step electrical service process."
          subtitle="No guesswork. No hidden fees. Here is how we ensure a seamless, professional experience from start to finish."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="relative p-7 rounded-3xl bg-ink-50 border border-ink-100 flex flex-col justify-between group hover:border-electric-300 hover:shadow-xl transition-all duration-300">
              <div>
                <span className="text-4xl font-extrabold font-display text-electric-600 block mb-4">{step.number}</span>
                <h3 className="font-display font-bold text-xl text-ink-900 mb-3">{step.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{step.description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-ink-200/60 flex items-center gap-2 text-xs font-bold text-electric-700">
                <CheckCircle2 className="w-4 h-4 text-electric-600" /> Professional Guarantee
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-ink-50">
      <div className="container-pad">
        <SectionHeader eyebrow="Why Denver Homeowners Choose Us" title="The confidence that comes with qualified work." subtitle="We believe the best electrical service is built on trust. That's why we make every part of your experience straightforward and professional." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {whyChooseUs.map(({ icon, title, description }) => { const Icon = iconMap[icon] || ShieldCheck; return <div key={title} className="flex gap-4"><div className="flex-shrink-0 w-12 h-12 rounded-xl bg-ink-900 text-electric-400 flex items-center justify-center"><Icon className="w-6 h-6" /></div><div><h3 className="font-display font-bold text-lg text-ink-900">{title}</h3><p className="text-sm text-ink-500 leading-relaxed mt-2">{description}</p></div></div>; })}
        </div>
      </div>
    </section>
  );
}

/* UNIQUE SECTION 3: Project Work Showcase with Real Work Examples */
function ProjectWorkShowcase() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-pad">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12 lg:mb-16">
          <SectionHeader
            eyebrow="Recent Projects & Real Photos"
            title="Real electrical work completed in Denver."
            subtitle="Explore real electrical repairs, 200A panel upgrades, EV charger installations, and lighting projects completed across Denver neighborhoods."
          />
          <a href={`tel:${PHONE_TEL}`} className="hidden sm:inline-flex btn-dark mb-1">
            Schedule Your Project <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {projectGallery.map((project) => (
            <div key={project.title} className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-ink-900 shadow-md hover:shadow-2xl transition-all duration-500">
              <img src={project.image} alt={project.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />
              <div className="absolute left-5 bottom-5 right-5">
                <span className="text-electric-400 text-xs font-extrabold uppercase tracking-wider bg-ink-950/80 px-2.5 py-1 rounded-md backdrop-blur-sm border border-white/10 inline-block mb-2">
                  {project.category}
                </span>
                <h3 className="text-white font-display font-bold text-lg leading-snug">{project.title}</h3>
                <p className="text-xs text-ink-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Denver Code-Compliant Installation</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* UNIQUE SECTION 4: Pricing Factors & Service FAQs */
function PricingFactorsAndFAQs() {
  const pricingFactors = [
    { title: 'Electrical Load & Amperage', text: 'Upgrading from a 100A to 200A panel involves utility disconnects, heavy main breaker hardware, and service entrance cabling.' },
    { title: 'Home Age & Accessibility', text: 'Historic homes with plaster walls, narrow attics, or legacy wiring require specialized routing care compared to new construction.' },
    { title: 'Permitting & City Inspections', text: 'Official Denver electrical permits and final inspection coordination ensure work passes code and maintains insurance validity.' },
    { title: 'Distance from Main Panel', text: 'Running long conduit feeds for Level 2 EV chargers, hot tubs, or subpanels impacts heavy copper wiring requirements.' },
  ];

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-ink-50">
      <div className="container-pad">
        {/* Pricing Factors Grid */}
        <div className="mb-20">
          <SectionHeader
            eyebrow="Pricing Transparency"
            title="Key factors that influence electrical project costs."
            subtitle="We believe in complete pricing clarity. Here are the core factors that shape electrical repair and installation estimates in Denver:"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pricingFactors.map((pf) => (
              <div key={pf.title} className="p-6 rounded-2xl bg-white border border-ink-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-electric-100 text-electric-700 flex items-center justify-center mb-4">
                  <BadgeDollarSign className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-ink-900 text-base mb-2">{pf.title}</h3>
                <p className="text-xs text-ink-500 leading-relaxed">{pf.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
          <div>
            <SectionHeader
              eyebrow="Service FAQs"
              title="Frequently Asked Questions."
              subtitle="Get clear answers regarding electrician hourly rates, permits, estimates, and emergency callouts in Denver."
            />
            <a href={`tel:${PHONE_TEL}`} className="btn-dark">
              <Phone className="w-4 h-4" /> Call (720) 794-0714
            </a>
          </div>
          <FAQAccordion faqs={homepageFaqs} />
        </div>
      </div>
    </section>
  );
}

function ServiceAreasSection() {
  return (
    <section id="service-areas" className="py-20 lg:py-28 bg-white">
      <div className="container-pad">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <SectionHeader
              eyebrow="Where We Serve"
              title="Proudly powering homes across the Denver metro."
              subtitle="Qualified Electric provides trusted residential electrical services in Denver and communities throughout the surrounding metro area."
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {serviceAreas.map((area) => (
                <Link
                  key={area.slug}
                  to={`/${area.slug}`}
                  className="group flex items-center gap-2 p-3 rounded-xl bg-ink-50 hover:bg-electric-50 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-electric-600 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-semibold text-ink-700 group-hover:text-electric-700">{area.city}</span>
                  <ChevronRight className="w-3 h-3 text-ink-300 ml-auto group-hover:text-electric-500" />
                </Link>
              ))}
            </div>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-electric-600 font-bold text-sm mt-6 hover:gap-3 transition-all">
              View our Google Maps service area <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-ink-900">
            <img src="https://images.pexels.com/photos/16108565/pexels-photo-16108565.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Denver Colorado skyline at sunset" className="w-full h-full object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />
            <div className="absolute bottom-7 left-7 right-7">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-electric-500 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-ink-950" fill="currentColor" />
                </div>
                <div>
                  <p className="text-white font-display font-bold text-xl">Denver, Colorado</p>
                  <p className="text-ink-300 text-sm">Our home base. Your trusted local electrician.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const displayedReviews = showAll ? testimonials : testimonials.slice(0, 6);

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-ink-50">
      <div className="container-pad">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="eyebrow"><span className="w-8 h-px bg-electric-600" /> Real Google Customer Reviews</span>
            <h2 className="section-title mt-4">5.0 Star Rated on Google Business.</h2>
            <p className="section-subtitle">Read authentic feedback from 15 verified Denver homeowners and customers.</p>
          </div>

          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-ink-100 shadow-sm flex-shrink-0">
            <div className="w-12 h-12 rounded-xl bg-electric-500 text-ink-950 font-display font-extrabold text-xl flex items-center justify-center">
              5.0
            </div>
            <div>
              <div className="flex items-center gap-1 text-electric-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4" fill="currentColor" />
                ))}
              </div>
              <p className="text-xs font-bold text-ink-900 mt-1">15 Verified Google Reviews</p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View our Google Business Reviews on Google Maps"
                className="text-xs text-electric-600 font-bold hover:underline flex items-center gap-1 mt-0.5"
              >
                Verify on Google Maps <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedReviews.map((t) => (
            <div key={t.name + t.text} className="bg-white rounded-3xl p-6 border border-ink-100 shadow-sm hover:shadow-xl hover:border-electric-300 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-1 text-electric-500">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4" fill="currentColor" />
                    ))}
                  </div>
                  {t.date && <span className="text-xs text-ink-400 font-medium">{t.date}</span>}
                </div>

                <p className="text-ink-700 text-sm leading-relaxed font-normal">“{t.text}”</p>
              </div>

              <div className="border-t border-ink-100 mt-6 pt-4 flex items-center justify-between">
                <div>
                  <p className="font-bold text-ink-900 text-sm">{t.name}</p>
                  <p className="text-xs text-ink-400 mt-0.5">{t.location}</p>
                </div>
                {t.badge && (
                  <span className="px-2.5 py-1 rounded-full bg-electric-50 text-electric-800 text-[11px] font-bold border border-electric-200">
                    {t.badge}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn-outline px-8 py-3.5"
          >
            {showAll ? 'Show Less Reviews' : `View All 15 Google Reviews (${testimonials.length})`}
          </button>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-ink-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark bg-grid opacity-40" />
      <div className="container-pad relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <SectionHeader light eyebrow="Get In Touch" title="Let's get your home powered right." subtitle="Tell us what you need help with, or call us directly. Our team is ready to answer your questions and schedule your service." />
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
  );
}
