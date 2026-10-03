export const PHONE = '(720) 794-0714';
export const PHONE_DISPLAY = '(720) 794-0714';
export const PHONE_TEL = '+17207940714';
export const BUSINESS_NAME = 'Qualified Electric';
export const MAIN_LOCATION = 'Denver, CO';
export const MAPS_URL = 'https://maps.app.goo.gl/Qz1jfL2PwGpk6dLe9';

export type ServicePage = {
  slug: string;
  title: string;
  h1: string;
  shortTitle: string;
  description: string;
  metaDescription: string;
  icon: string;
  heroImage: string;
  heroAlt: string;
  intro: string[];
  whatWeDo: { title: string; description: string }[];
  whyItMatters: string[];
  faqs: { q: string; a: string }[];
};

export const services: ServicePage[] = [
  {
    slug: 'residential-electrician-denver-co',
    title: 'Residential Electrician in Denver, CO | Qualified Electric',
    h1: 'Residential Electrician in Denver, CO',
    shortTitle: 'Residential Electrician',
    description: 'Specialized residential electrician serving Denver homeowners — dedicated home electrical repairs, outlet upgrades, home rewiring, ceiling fan installs, safety inspections, and residential panel upgrades.',
    metaDescription: 'Specialized residential electrician in Denver, CO. Safe home wiring, panel upgrades, outlet repairs, fixture installation & electrical safety inspections for Denver homeowners. Call (720) 794-0714.',
    icon: 'Home',
    heroImage: 'https://images.pexels.com/photos/4981793/pexels-photo-4981793.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Residential electrician inspecting home wiring in Denver',
    intro: [
      'As a dedicated residential electrician in Denver, CO, Qualified Electric specializes exclusively in protecting your family, home, and property. Single-family homes, townhomes, and condos have unique electrical demands — from high-amperage kitchen appliances to home charging and whole-house surge defense.',
      'Whether you are moving into a historic Denver home that needs knob-and-tube remediation, remodeling a kitchen, or fixing persistent GFCI outlet trips, our residential specialists deliver clean, code-compliant workmanship tailored to Denver County housing codes.',
    ],
    whatWeDo: [
      { title: 'Single-Family Home Rewiring', description: 'Complete safety rewiring, rough-in, and circuit expansion for Denver homes and remodels.' },
      { title: 'Home Outlet & Switch Upgrades', description: 'Replace worn outlets with child-safe tamper-resistant and GFCI/AFCI protected receptacles.' },
      { title: 'Residential Panel Safety Changes', description: 'Upgrade outdated residential panels to modern 200A service for today\'s home appliances.' },
      { title: 'Custom Home Interior Lighting', description: 'Design and install recessed LEDs, pendant lighting, ceiling fans, and smart home switches.' },
      { title: 'Pre-Purchase Home Electrical Audits', description: 'Comprehensive electrical safety inspections tailored for Denver home buyers and sellers.' },
      { title: 'Home Circuit Troubleshooting', description: 'Trace mystery tripping breakers, flickering home lights, and dead living area circuits.' },
    ],
    whyItMatters: [
      'A properly wired home protects your family from electrical fire hazards and shock risks.',
      'Upgrading older home panels eliminates overloaded circuits caused by modern appliances.',
      'Denver-compliant electrical work ensures your home passes safety inspections and retains value.',
      'Dedicated residential expertise keeps your home\'s electrical system reliable for decades.',
    ],
    faqs: [
      { q: 'How does a residential electrician differ from a commercial electrician?', a: 'Residential electricians specialize in single-family homes, townhomes, and condos. We focus on home safety, residential electrical codes (NEC), family lifestyle needs, and protecting your living space with minimal disruption.' },
      { q: 'Do you offer same-day residential electrical service in Denver?', a: 'Yes, we reserve daily schedule slots for urgent residential electrical issues throughout Denver. Call us at (720) 794-0714 for fast dispatch.' },
      { q: 'Are your residential electricians licensed and insured in Colorado?', a: 'Absolutely. All of our electricians are fully licensed master and journeyman electricians in Colorado, fully insured for residential work.' },
      { q: 'Can you inspect the electrical system in a home I am buying in Denver?', a: 'Yes! We perform detailed pre-purchase home electrical inspections, examining panels, grounding, wiring type, and outlets to give home buyers total peace of mind.' },
    ],
  },
  {
    slug: 'electrical-repair-denver-co',
    title: 'Electrical Repair in Denver, CO | Qualified Electric',
    h1: 'Electrical Repair in Denver, CO',
    shortTitle: 'Electrical Repair',
    description: 'Fast, reliable electrical repair services in Denver, CO. Flickering lights, dead outlets, tripping breakers — we fix it all.',
    metaDescription: 'Need electrical repair in Denver, CO? Qualified Electric fixes outlets, breakers, wiring, and more. Fast, reliable service. Call (720) 794-0714 today.',
    icon: 'Wrench',
    heroImage: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Electrician repairing a circuit breaker panel in Denver',
    intro: [
      'Electrical problems don\'t wait for a convenient time. When you need electrical repair in Denver, CO, Qualified Electric responds quickly to diagnose and fix the issue before it becomes a safety hazard. From flickering lights to sparking outlets, our electricians have seen it all and can fix it all.',
      'Ignoring electrical issues is dangerous — a flickering light or warm outlet can signal a serious underlying problem. Our repair team uses professional diagnostic equipment to find the root cause, not just the symptom, so the fix lasts.',
    ],
    whatWeDo: [
      { title: 'Outlet Repair & Replacement', description: 'Fix dead, loose, or sparking outlets and install new ones where you need them.' },
      { title: 'Breaker & Panel Repair', description: 'Repair tripping breakers, replace faulty breakers, and address panel issues.' },
      { title: 'Wiring Repair', description: 'Repair damaged, frayed, or outdated wiring throughout your home.' },
      { title: 'Switch Repair', description: 'Fix unresponsive, warm, or sparking light switches and dimmers.' },
      { title: 'Lighting Repair', description: 'Repair flickering lights, recessed lighting, and fixture issues.' },
      { title: 'Emergency Repairs', description: 'Fast response for urgent electrical problems that pose safety risks.' },
    ],
    whyItMatters: [
      'Prompt repair prevents small issues from becoming dangerous electrical fires.',
      'Professional diagnosis ensures the root cause is fixed, not just the symptom.',
      'Code-compliant repairs protect your home\'s value and insurability.',
      'Reliable electrical service restores comfort and convenience to your daily life.',
    ],
    faqs: [
      { q: 'How do I know if I need electrical repair?', a: 'Common signs include flickering lights, outlets that don\'t work, breakers that trip frequently, warm switch plates, burning smells, or sparking. If you notice any of these, call us right away.' },
      { q: 'Is electrical repair dangerous to do myself?', a: 'Yes. Electrical work should always be done by a licensed electrician. DIY electrical repair risks shock, fire, and code violations that can affect your home insurance.' },
      { q: 'How much does electrical repair cost in Denver?', a: 'Costs vary depending on the issue. We provide upfront pricing after diagnosis, so you\'ll know the exact cost before we begin any repair work.' },
      { q: 'Do you offer emergency electrical repair?', a: 'Yes. For urgent safety issues, call us at (720) 794-0714 and we\'ll prioritize your repair.' },
    ],
  },
  {
    slug: 'electrical-panel-upgrade-denver-co',
    title: 'Electrical Panel Upgrade Denver, CO',
    h1: 'Electrical Panel Upgrade Denver, CO',
    shortTitle: 'Panel Upgrade',
    description: 'Upgrade your electrical panel in Denver, CO. Replace outdated 100-amp panels with safe, modern 200-amp service.',
    metaDescription: 'Upgrade your electrical panel in Denver, CO with Qualified Electric. Replace outdated breakers, add capacity, improve safety. Call (720) 794-0714.',
    icon: 'Zap',
    heroImage: 'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Electrician upgrading an electrical panel in Denver',
    intro: [
      'Your electrical panel is the heart of your home\'s electrical system. If your panel is outdated, overloaded, or frequently tripping breakers, it\'s time for an electrical panel upgrade. Qualified Electric specializes in panel upgrades throughout Denver, CO, helping homeowners power modern lifestyles safely.',
      'Many Denver homes still have 100-amp or even 60-amp panels that were never designed for today\'s electrical demands — EV chargers, central air, home offices, and smart home devices all draw significant power. We upgrade your panel to 200 amps or more, giving you the capacity you need and the safety you deserve.',
    ],
    whatWeDo: [
      { title: '100A to 200A Upgrades', description: 'Replace undersized panels with 200-amp service to support modern household power needs.' },
      { title: 'Subpanel Installation', description: 'Add subpanels to expand capacity for additions, garages, or ADUs.' },
      { title: 'Breaker Replacement', description: 'Replace faulty, recalled, or outdated breakers with modern, safe alternatives.' },
      { title: 'Panel Relocation', description: 'Move your panel to a more accessible or safer location during remodels.' },
      { title: 'Meter Base Upgrade', description: 'Upgrade your meter base and service entrance to match your new panel capacity.' },
      { title: 'Code Compliance Upgrades', description: 'Bring older panels up to current Denver electrical code requirements.' },
    ],
    whyItMatters: [
      'Modern panels prevent overloaded circuits, reducing fire risk significantly.',
      'Higher amperage supports EV chargers, air conditioning, and modern appliances.',
      'New panels eliminate the danger of recalled or obsolete breaker brands like Federal Pacific or Zinsco.',
      'An upgraded panel increases your home\'s value and is often required for major renovations.',
    ],
    faqs: [
      { q: 'How long does an electrical panel upgrade take?', a: 'Most panel upgrades are completed in a single day. We\'ll give you a precise timeline during your estimate.' },
      { q: 'How much does a panel upgrade cost in Denver?', a: 'Panel upgrade costs vary based on amperage and whether your service entrance needs updating. We provide free, detailed estimates — call (720) 794-0714.' },
      { q: 'Do I need a permit for a panel upgrade?', a: 'Yes, panel upgrades require permits and inspections in Denver. We handle all permitting and coordinate inspections for you.' },
      { q: 'How do I know if my panel needs upgrading?', a: 'Signs include frequent breaker trips, flickering lights when appliances run, a panel that feels warm, or a panel rated under 150 amps. If your home is over 25 years old, it likely needs an assessment.' },
    ],
  },
  {
    slug: 'residential-wiring-denver-co',
    title: 'Home Electrical Wiring in Denver, CO',
    h1: 'Home Electrical Wiring in Denver, CO',
    shortTitle: 'Residential Wiring',
    description: 'Professional residential wiring installation in Denver, CO — new construction, remodels, additions, and rewiring.',
    metaDescription: 'Expert residential wiring services in Denver, CO. New construction, remodels, rewiring, and more. Code-compliant, safe, professional. Call (720) 794-0714.',
    icon: 'Cable',
    heroImage: 'https://images.pexels.com/photos/3615735/pexels-photo-3615735.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Residential electrical wiring installation in a Denver home',
    intro: [
      'Whether you\'re building a new home, remodeling, or replacing outdated wiring, Qualified Electric provides professional residential wiring in Denver, CO that meets all current building codes. Our electricians handle everything from rough-in wiring to final device installation with meticulous attention to detail.',
      'Older Denver homes — especially those built before 1980 — may have aluminum wiring, knob-and-tube wiring, or degraded insulation that poses a fire risk. We specialize in whole-home rewiring that brings your electrical system up to modern safety standards while preserving your home\'s character.',
    ],
    whatWeDo: [
      { title: 'New Construction Wiring', description: 'Complete electrical rough-in and finish wiring for new homes in Denver.' },
      { title: 'Remodel & Addition Wiring', description: 'Wire kitchen remodels, bathroom updates, home additions, and basement finishes.' },
      { title: 'Whole-Home Rewiring', description: 'Replace outdated or dangerous wiring throughout older Denver homes.' },
      { title: 'Knob & Tube Replacement', description: 'Remove and replace legacy knob-and-tube wiring with modern, safe alternatives.' },
      { title: 'Aluminum Wiring Remediation', description: 'Address fire risks from 1960s-70s aluminum wiring with pigtailing or rewiring.' },
      { title: 'Smart Home Pre-Wiring', description: 'Pre-wire for smart home systems, networking, and home automation.' },
    ],
    whyItMatters: [
      'Modern wiring dramatically reduces the risk of electrical fires in older homes.',
      'Proper wiring supports today\'s power-hungry devices and appliances without overloading.',
      'Code-compliant wiring is required to pass inspections and maintain home insurance.',
      'Updated wiring increases property value and makes your home more attractive to buyers.',
    ],
    faqs: [
      { q: 'How long does whole-home rewiring take?', a: 'Depending on the size of your home, rewiring typically takes 3 to 10 days. We work efficiently to minimize disruption and keep your home powered where possible.' },
      { q: 'Do you have to cut into my walls to rewire?', a: 'Some wall access is typically needed, but we use strategic access points and can coordinate with a drywall contractor for seamless repairs. We discuss all access needs during your estimate.' },
      { q: 'Is rewiring worth it for an older home?', a: 'Yes. If your home has knob-and-tube, aluminum, or degraded wiring, rewiring is one of the most important safety investments you can make. It also increases resale value.' },
      { q: 'Can you wire for smart home features?', a: 'Absolutely. We can pre-wire for smart switches, networking, security cameras, and home automation systems during any wiring project.' },
    ],
  },
  {
    slug: 'outlet-repair-denver-co',
    title: 'Outlet Repair in Denver, CO | Qualified Electric',
    h1: 'Outlet Repair in Denver, CO',
    shortTitle: 'Outlet Repair',
    description: 'Outlet repair and installation in Denver, CO. Fix dead, loose, or sparking outlets. Install GFCI and standard outlets.',
    metaDescription: 'Outlet repair and installation in Denver, CO. Fix dead, loose, or sparking outlets. GFCI installation, tamper-resistant outlets. Call (720) 794-0714.',
    icon: 'Plug',
    heroImage: 'https://images.pexels.com/photos/7937307/pexels-photo-7937307.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Electrician repairing an electrical outlet in Denver',
    intro: [
      'A dead or sparking outlet is more than an inconvenience — it\'s a safety hazard. Qualified Electric provides fast, professional outlet repair in Denver, CO, fixing everything from outlets that have stopped working to GFCI outlets that won\'t reset. We also install new outlets wherever you need them.',
      'Modern electrical code requires GFCI protection in kitchens, bathrooms, garages, and outdoor areas. If your home still has standard outlets in these locations, we\'ll upgrade them to GFCI outlets that protect your family from electrical shock. We also install tamper-resistant outlets for homes with children.',
    ],
    whatWeDo: [
      { title: 'Dead Outlet Repair', description: 'Diagnose and fix outlets that have stopped working, including hidden wiring issues.' },
      { title: 'GFCI Installation', description: 'Install ground-fault circuit interrupter outlets in kitchens, baths, and outdoor areas.' },
      { title: 'Outlet Replacement', description: 'Replace damaged, loose, or discolored outlets with new, safe receptacles.' },
      { title: 'New Outlet Installation', description: 'Add outlets where you need them — behind TVs, in islands, or anywhere power is missing.' },
      { title: 'USB Outlet Installation', description: 'Install outlets with built-in USB charging ports for modern convenience.' },
      { title: 'Outdoor Outlet Installation', description: 'Install weatherproof outdoor outlets for lighting, tools, and EV charging.' },
    ],
    whyItMatters: [
      'Loose or damaged outlets can cause arcing, which is a leading cause of electrical fires.',
      'GFCI outlets prevent fatal shocks in wet areas like kitchens, bathrooms, and outdoors.',
      'Tamper-resistant outlets protect children from inserting objects into receptacles.',
      'Having enough outlets in the right places eliminates the need for unsafe daisy-chained power strips.',
    ],
    faqs: [
      { q: 'Why did my outlet stop working?', a: 'Common causes include a tripped GFCI, a tripped breaker, a loose wire connection, or a failed outlet. We diagnose the exact cause and fix it properly.' },
      { q: 'What is a GFCI outlet and do I need one?', a: 'A GFCI (ground-fault circuit interrupter) outlet shuts off power if it detects a shock hazard. They\'re required by code in kitchens, bathrooms, garages, and outdoor areas.' },
      { q: 'Can you install an outlet anywhere in my home?', a: 'In most cases, yes. We can fish wire through walls and ceilings to add outlets wherever you need them, including floors and islands.' },
      { q: 'How long does outlet repair take?', a: 'Most outlet repairs and replacements take 30 to 60 minutes. We\'ll give you a time estimate when you call.' },
    ],
  },
  {
    slug: 'switch-repair-denver-co',
    title: 'Switch Repair in Denver, CO',
    h1: 'Switch Repair in Denver, CO',
    shortTitle: 'Switch Repair',
    description: 'Switch repair and installation in Denver, CO. Fix unresponsive, warm, or sparking switches. Install dimmers and smart switches.',
    metaDescription: 'Switch repair and installation in Denver, CO. Fix unresponsive or sparking switches. Install dimmers, smart switches, and 3-way switches. Call (720) 794-0714.',
    icon: 'ToggleLeft',
    heroImage: 'https://images.pexels.com/photos/8488059/pexels-photo-8488059.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Electrician repairing a light switch in Denver',
    intro: [
      'A light switch that feels warm, makes a crackling sound, or doesn\'t work at all is a sign of a problem that needs professional attention. Qualified Electric provides expert switch repair in Denver, CO, fixing all types of switches — from standard toggles to three-way switches, dimmers, and smart switches.',
      'Switches wear out over time, and loose connections inside the switch box can cause arcing and heat buildup. Our electricians don\'t just replace the switch — we inspect the wiring behind it to make sure everything is safe and up to code.',
    ],
    whatWeDo: [
      { title: 'Switch Replacement', description: 'Replace worn, broken, or unresponsive light switches with new, reliable ones.' },
      { title: 'Dimmer Switch Installation', description: 'Install LED-compatible dimmer switches for adjustable lighting in any room.' },
      { title: '3-Way & 4-Way Switches', description: 'Repair or install multi-location switches for stairways, hallways, and large rooms.' },
      { title: 'Smart Switch Installation', description: 'Install Wi-Fi and smart-home-compatible switches for app and voice control.' },
      { title: 'Switch Troubleshooting', description: 'Diagnose switches that work intermittently or control the wrong lights.' },
      { title: 'GFCI Switch Combos', description: 'Install combination GFCI outlet and switch units for bathrooms and garages.' },
    ],
    whyItMatters: [
      'A warm or crackling switch can indicate arcing — a fire hazard that needs immediate attention.',
      'Properly rated dimmer switches prevent flickering and extend LED bulb life.',
      'Smart switches add convenience, security, and energy savings to your home.',
      'Correct 3-way and 4-way switch wiring ensures safe, predictable lighting control.',
    ],
    faqs: [
      { q: 'Why is my light switch warm?', a: 'A warm switch is a sign of a loose connection or an overloaded circuit. This is a safety hazard — turn off the breaker and call us right away.' },
      { q: 'Can any light be put on a dimmer?', a: 'Most modern LED lights can be dimmed, but you need a dimmer rated for LED use and dimmable bulbs. We\'ll make sure your dimmer and lights are compatible.' },
      { q: 'Do you install smart switches?', a: 'Yes, we install all major smart switch brands including those that work with Alexa, Google Home, and Apple HomeKit.' },
      { q: 'Why does my switch control the wrong light?', a: 'This usually means the wiring was done incorrectly or a previous DIY attempt mixed up the travelers. We\'ll diagnose and rewire it correctly.' },
    ],
  },
  {
    slug: 'lighting-installation-denver-co',
    title: 'Lighting Installation in Denver, CO',
    h1: 'Lighting Installation in Denver, CO',
    shortTitle: 'Lighting Installation',
    description: 'Professional lighting installation in Denver, CO — recessed lighting, fixtures, outdoor lighting, and more.',
    metaDescription: 'Lighting installation in Denver, CO. Recessed lighting, chandeliers, outdoor lighting, under-cabinet lights. Professional, safe, beautiful. Call (720) 794-0714.',
    icon: 'Lightbulb',
    heroImage: 'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Beautiful lighting installation in a Denver home',
    intro: [
      'The right lighting transforms a space — making it more functional, more beautiful, and more energy-efficient. Qualified Electric provides professional lighting installation in Denver, CO, handling everything from recessed lighting to chandeliers, outdoor fixtures to under-cabinet LEDs.',
      'Whether you\'re upgrading a single room or re-lighting your entire home, our electricians ensure every fixture is installed safely, wired correctly, and positioned for maximum impact. We also help you choose energy-efficient LED options that save on your electric bill while providing superior light quality.',
    ],
    whatWeDo: [
      { title: 'Recessed Lighting', description: 'Install canless and can-style recessed lights for clean, modern ceilings.' },
      { title: 'Fixture Installation', description: 'Hang chandeliers, pendant lights, flush mounts, and ceiling fixtures of all sizes.' },
      { title: 'Outdoor Lighting', description: 'Install landscape lighting, pathway lights, security lights, and exterior fixtures.' },
      { title: 'Under-Cabinet Lighting', description: 'Install LED under-cabinet and toe-kick lighting for kitchens and bathrooms.' },
      { title: 'Track & Rail Lighting', description: 'Install adjustable track lighting for galleries, kitchens, and living spaces.' },
      { title: 'Smart Lighting', description: 'Install smart bulbs, switches, and lighting systems for app and voice control.' },
    ],
    whyItMatters: [
      'Properly installed lighting enhances your home\'s beauty, comfort, and resale value.',
      'LED lighting uses up to 80% less energy than incandescent and lasts 25 times longer.',
      'Outdoor lighting improves security and curb appeal while extending usable outdoor time.',
      'Professional installation ensures fixtures are safely supported and wired to code.',
    ],
    faqs: [
      { q: 'Can you install recessed lighting in an existing ceiling?', a: 'Yes. We can retrofit recessed lights into existing ceilings with minimal disruption using remodel housing that doesn\'t require access from above.' },
      { q: 'Do you install outdoor and landscape lighting?', a: 'Absolutely. We install pathway lights, spotlights, deck lighting, and security lighting — all with proper weatherproofing and GFCI protection.' },
      { q: 'Can you help me choose the right lighting for my space?', a: 'Yes. We\'ll advise on fixture types, color temperature, brightness levels, and placement to achieve the look and function you want.' },
      { q: 'Do you install smart lighting systems?', a: 'Yes, we install smart bulbs, smart switches, and whole-home lighting control systems from major brands.' },
    ],
  },
  {
    slug: 'ceiling-fan-installation-denver-co',
    title: 'Ceiling Fan Installation in Denver, CO',
    h1: 'Ceiling Fan Installation in Denver, CO',
    shortTitle: 'Ceiling Fan Installation',
    description: 'Ceiling fan installation in Denver, CO. Safe mounting, proper wiring, and support for fans of all sizes.',
    metaDescription: 'Ceiling fan installation in Denver, CO. Safe mounting, proper wiring, support box installation. Indoor and outdoor fans. Call (720) 794-0714.',
    icon: 'Fan',
    heroImage: 'https://images.pexels.com/photos/6835109/pexels-photo-6835109.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Ceiling fan installed in a Denver home',
    intro: [
      'A ceiling fan keeps your home comfortable year-round and can lower your energy bills by supplementing your HVAC system. Qualified Electric provides professional ceiling fan installation in Denver, CO, ensuring every fan is safely mounted, properly wired, and securely supported.',
      'Many homes don\'t have the right support box for a ceiling fan — a standard light fixture box can\'t hold the weight and vibration of a fan. We install fan-rated support boxes and bracing to make sure your ceiling fan is safe, wobble-free, and built to last.',
    ],
    whatWeDo: [
      { title: 'Indoor Fan Installation', description: 'Install ceiling fans in bedrooms, living rooms, kitchens, and home offices.' },
      { title: 'Outdoor Fan Installation', description: 'Install wet-rated and damp-rated fans on covered patios and porches.' },
      { title: 'Fan Support Box Installation', description: 'Install fan-rated support boxes and bracing for safe, wobble-free mounting.' },
      { title: 'Fan Replacement', description: 'Remove old fans and install new ones, including remote-controlled and smart fans.' },
      { title: 'Light Kit Installation', description: 'Add or replace light kits on existing ceiling fans.' },
      { title: 'Fan Switch & Remote Setup', description: 'Install wall controls, remotes, and smart fan controllers.' },
    ],
    whyItMatters: [
      'Proper support prevents ceiling fans from falling — a critical safety concern.',
      'Correctly installed fans reduce energy costs by improving heating and cooling efficiency.',
      'Outdoor-rated fans extend comfortable outdoor living through Denver\'s warm months.',
      'Professional wiring ensures safe operation of fan motors, lights, and controls.',
    ],
    faqs: [
      { q: 'Can you install a ceiling fan where there was only a light fixture?', a: 'Yes, but we\'ll need to install a fan-rated support box. Standard light boxes aren\'t strong enough for the weight and vibration of a ceiling fan.' },
      { q: 'How long does ceiling fan installation take?', a: 'Most installations take 1 to 2 hours. If we need to install a support box or run new wiring, it may take longer.' },
      { q: 'Can you install a ceiling fan outdoors?', a: 'Yes, we install outdoor-rated ceiling fans on covered patios and porches. We ensure the fan and wiring are rated for outdoor use.' },
      { q: 'Do you install smart ceiling fans?', a: 'Yes, we install smart fans with Wi-Fi controls, remote systems, and smart home integration.' },
    ],
  },
  {
    slug: 'ev-charger-installation-denver-co',
    title: 'EV Charger Installation Denver, CO',
    h1: 'EV Charger Installation Denver, CO',
    shortTitle: 'EV Charger Installation',
    description: 'EV charger installation in Denver, CO. Level 2 home charging stations for all electric vehicle brands.',
    metaDescription: 'EV charger installation in Denver, CO. Level 2 home charging stations for Tesla, Chevy, Ford, and all EVs. Fast, professional. Call (720) 794-0714.',
    icon: 'BatteryCharging',
    heroImage: 'https://images.pexels.com/photos/5391509/pexels-photo-5391509.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'EV charger installation in Denver, CO',
    intro: [
      'As more Denver homeowners switch to electric vehicles, a Level 2 home charging station is becoming an essential upgrade. Qualified Electric provides professional EV charger installation in Denver, CO, giving you the convenience of a full charge overnight without relying on public charging stations.',
      'We install Level 2 chargers for all EV brands — Tesla, Chevy Bolt, Ford Mustang Mach-E, Rivian, and more. Our electricians assess your panel capacity, install a dedicated 240V circuit, and mount your charger in the optimal location for your garage or driveway.',
    ],
    whatWeDo: [
      { title: 'Level 2 Charger Installation', description: 'Install 240V Level 2 home charging stations for all EV brands and models.' },
      { title: 'Tesla Wall Connector', description: 'Install Tesla Wall Connectors for Tesla owners in Denver.' },
      { title: 'Universal EV Chargers', description: 'Install J1772 and NACS-compatible chargers that work with any EV.' },
      { title: 'Panel Assessment & Upgrades', description: 'Assess your panel\'s capacity and upgrade if needed to support EV charging.' },
      { title: 'Outdoor Charger Installation', description: 'Install weatherproof chargers for driveway and carport charging.' },
      { title: 'Smart Charger Setup', description: 'Configure Wi-Fi-enabled chargers with apps for scheduling and energy tracking.' },
    ],
    whyItMatters: [
      'A Level 2 charger charges your EV 5-10 times faster than a standard outlet.',
      'Home charging costs a fraction of public charging and is far more convenient.',
      'Proper installation with a dedicated circuit prevents overloading your electrical panel.',
      'An installed EV charger adds property value as EV adoption continues to grow in Colorado.',
    ],
    faqs: [
      { q: 'How much does EV charger installation cost in Denver?', a: 'Costs vary based on your panel capacity, charger brand, and installation location. We provide free estimates — call (720) 794-0714.' },
      { q: 'Do I need a panel upgrade for an EV charger?', a: 'It depends on your panel\'s capacity and current load. We assess your panel during the estimate and let you know if an upgrade is needed.' },
      { q: 'What charger should I buy?', a: 'We can recommend chargers based on your EV model, charging needs, and budget. We install all major brands including Tesla, ChargePoint, and JuiceBox.' },
      { q: 'How long does installation take?', a: 'Most EV charger installations take 2 to 4 hours. If a panel upgrade is needed, it may take longer.' },
    ],
  },
  {
    slug: 'electrical-inspection-denver-co',
    title: 'Electrical Inspection in Denver, CO',
    h1: 'Electrical Inspection in Denver, CO',
    shortTitle: 'Electrical Inspection',
    description: 'Comprehensive electrical inspection in Denver, CO. Safety inspections for home buyers, sellers, and homeowners.',
    metaDescription: 'Electrical inspection in Denver, CO. Comprehensive safety inspections for home buyers, sellers, and homeowners. Detailed reports. Call (720) 794-0714.',
    icon: 'ClipboardCheck',
    heroImage: 'https://images.pexels.com/photos/32497160/pexels-photo-32497160.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Electrician performing an electrical inspection in Denver',
    intro: [
      'An electrical inspection gives you a clear picture of your home\'s electrical system — what\'s safe, what needs attention, and what should be replaced. Qualified Electric provides thorough electrical inspections in Denver, CO for home buyers, sellers, and homeowners who want peace of mind.',
      'Whether you\'re buying an older Denver home, planning a renovation, or just want to make sure your electrical system is safe, our detailed inspection covers every component — from your panel and wiring to outlets, switches, grounding, and surge protection. You\'ll receive a clear report with findings and recommendations.',
    ],
    whatWeDo: [
      { title: 'Pre-Purchase Inspections', description: 'Comprehensive electrical inspections for home buyers in Denver.' },
      { title: 'Safety Inspections', description: 'Full safety assessment of panels, wiring, outlets, switches, and grounding.' },
      { title: 'Insurance Inspections', description: 'Inspections required by insurance companies for older homes.' },
      { title: 'Remodel Inspections', description: 'Assess your electrical system before renovations to plan for upgrades.' },
      { title: 'Code Compliance Audits', description: 'Identify wiring and components that don\'t meet current Denver electrical code.' },
      { title: 'Detailed Reports', description: 'Receive a written report with photos, findings, and prioritized recommendations.' },
    ],
    whyItMatters: [
      'An inspection identifies hidden hazards before they cause fires or shocks.',
      'Pre-purchase inspections help you negotiate repairs and make informed buying decisions.',
      'Code compliance findings protect your home\'s value and insurability.',
      'Knowing your system\'s condition helps you plan and budget for future upgrades.',
    ],
    faqs: [
      { q: 'How long does an electrical inspection take?', a: 'A thorough inspection typically takes 1 to 3 hours depending on the size and age of your home. You\'ll receive a detailed report afterward.' },
      { q: 'Do I need an inspection if my home passed a general home inspection?', a: 'General home inspectors are not required to be electricians. An electrical inspection by a licensed electrician goes much deeper and can catch issues general inspections miss.' },
      { q: 'What if the inspection finds problems?', a: 'We provide a prioritized list of findings and recommendations. You\'ll know exactly what needs immediate attention and what can wait. We can also provide estimates for any recommended repairs.' },
      { q: 'How often should I have my electrical system inspected?', a: 'For homes over 30 years old, we recommend an inspection every 5 years. Newer homes can typically go 10 years between inspections.' },
    ],
  },
  {
    slug: 'surge-protection-denver-co',
    title: 'Surge Protection Denver, CO | Qualified Electric',
    h1: 'Surge Protection in Denver, CO',
    shortTitle: 'Surge Protection',
    description: 'Whole-home surge protection in Denver, CO. Protect your electronics and appliances from power surges.',
    metaDescription: 'Whole-home surge protection in Denver, CO. Protect electronics, appliances, and HVAC from power surges. Professional installation. Call (720) 794-0714.',
    icon: 'ShieldCheck',
    heroImage: 'https://images.pexels.com/photos/28950842/pexels-photo-28950842.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Surge protection installation in Denver',
    intro: [
      'A power surge can destroy thousands of dollars of electronics and appliances in an instant. Qualified Electric installs whole-home surge protection in Denver, CO that guards your entire electrical system — from your HVAC and refrigerator to your TV, computer, and phone charger.',
      'Surges come from more than just lightning. They\'re caused by grid switching, downed power lines, and even large appliances cycling on and off inside your home. Over time, these small surges degrade your electronics. A whole-home surge protector installed at your panel stops surges before they reach your devices.',
    ],
    whatWeDo: [
      { title: 'Whole-Home Surge Protectors', description: 'Install panel-mounted surge protectors that guard your entire home.' },
      { title: 'Point-of-Use Protection', description: 'Install surge-protected outlets for sensitive electronics and home theaters.' },
      { title: 'Surge Protector Replacement', description: 'Replace old or expired surge protectors that no longer provide protection.' },
      { title: 'Lightning Protection', description: 'Install lightning protection systems for homes in storm-prone areas.' },
      { title: 'Surge Assessment', description: 'Evaluate your home\'s surge risk and recommend the right level of protection.' },
      { title: 'Smart Home Protection', description: 'Protect smart home systems, networking equipment, and automation controllers.' },
    ],
    whyItMatters: [
      'A single surge can destroy TVs, computers, appliances, and HVAC equipment worth tens of thousands of dollars.',
      'Whole-home protection covers devices that plug-in strips can\'t — like your refrigerator and HVAC.',
      'Many homeowners insurance policies don\'t fully cover surge damage, making prevention essential.',
      'Surge protection extends the lifespan of all your electronic devices and appliances.',
    ],
    faqs: [
      { q: 'What\'s the difference between a power strip and whole-home surge protection?', a: 'Power strips only protect what\'s plugged into them and don\'t cover large appliances. Whole-home surge protection is installed at your panel and protects everything in your home, including your HVAC and refrigerator.' },
      { q: 'Does whole-home surge protection replace power strips?', a: 'For maximum protection, use both. Whole-home protection handles large surges at the panel, while point-of-use strips protect sensitive electronics from smaller, residual surges.' },
      { q: 'How long does a whole-home surge protector last?', a: 'Most whole-home surge protectors last 3 to 5 years, depending on how many surges they absorb. We can check and replace them when they expire.' },
      { q: 'Will surge protection protect against lightning?', a: 'Whole-home surge protection significantly reduces lightning damage, but no system can guarantee 100% protection from a direct strike. For full protection, we recommend combining surge protection with a lightning protection system.' },
    ],
  },
  {
    slug: 'generator-installation-denver-co',
    title: 'Generator Installation Denver, CO',
    h1: 'Generator Installation Denver, CO',
    shortTitle: 'Generator Installation',
    description: 'Home generator installation in Denver, CO. Standby generators that keep your home powered during outages.',
    metaDescription: 'Generator installation in Denver, CO. Standby home generators that automatically power your home during outages. Professional installation. Call (720) 794-0714.',
    icon: 'Zap',
    heroImage: 'https://images.pexels.com/photos/18816918/pexels-photo-18816918.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Home generator installation in Denver, CO',
    intro: [
      'Denver\'s winter storms and high winds can knock out power for hours or even days. A standby generator keeps your home running — heat, lights, refrigeration, and medical equipment — automatically. Qualified Electric provides professional generator installation in Denver, CO, from sizing and selection to electrical connection and startup.',
      'Unlike portable generators that require fueling and manual setup in the dark, a standby generator kicks in automatically within seconds of a power outage. We handle the electrical installation, transfer switch, and integration with your home\'s system, so you\'re protected before the next storm hits.',
    ],
    whatWeDo: [
      { title: 'Standby Generator Installation', description: 'Install automatic standby generators that power your home during outages.' },
      { title: 'Generator Sizing', description: 'Help you choose the right generator size for your home\'s power needs.' },
      { title: 'Transfer Switch Installation', description: 'Install automatic transfer switches that switch to generator power seamlessly.' },
      { title: 'Generator Electrical Hookup', description: 'Connect your generator to your home\'s electrical panel safely and to code.' },
      { title: 'Portable Generator Hookups', description: 'Install manual transfer switches for portable generator use.' },
      { title: 'Generator Maintenance Wiring', description: 'Wire generator maintenance systems and monitoring controls.' },
    ],
    whyItMatters: [
      'Automatic standby power keeps your heating, refrigeration, and medical equipment running during outages.',
      'Standby generators run on natural gas or propane — no refueling in dangerous weather.',
      'Automatic transfer switches mean power is restored in seconds, even when you\'re not home.',
      'A permanently installed generator increases your home\'s value and resale appeal.',
    ],
    faqs: [
      { q: 'How big of a generator do I need for my home?', a: 'It depends on what you want to power. We can size a generator to run your whole home or just essential circuits. We\'ll help you choose during your estimate.' },
      { q: 'How long does generator installation take?', a: 'Generator installation typically takes 1 to 2 days, depending on the complexity of the electrical hookup and any gas line work needed.' },
      { q: 'Do I need a permit for a generator?', a: 'Yes, generator installation requires permits and inspections in Denver. We handle all permitting and coordinate inspections for you.' },
      { q: 'Can a generator power my whole house?', a: 'Yes. With a properly sized standby generator and automatic transfer switch, your entire home can run on generator power during an outage.' },
    ],
  },
  {
    slug: 'electrical-troubleshooting-denver-co',
    title: 'Electrical Troubleshooting in Denver, CO',
    h1: 'Electrical Troubleshooting in Denver, CO',
    shortTitle: 'Electrical Troubleshooting',
    description: 'Expert electrical troubleshooting in Denver, CO. Diagnose and fix flickering lights, tripping breakers, and mystery issues.',
    metaDescription: 'Electrical troubleshooting in Denver, CO. Diagnose and fix flickering lights, tripping breakers, dead circuits, and more. Expert electricians. Call (720) 794-0714.',
    icon: 'Search',
    heroImage: 'https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Electrician troubleshooting an electrical issue in Denver',
    intro: [
      'Electrical problems can be frustrating and dangerous — especially when you can\'t figure out what\'s causing them. Qualified Electric provides expert electrical troubleshooting in Denver, CO, using professional diagnostic tools and years of experience to find the root cause of any electrical issue.',
      'From breakers that trip for no apparent reason to lights that flicker when the AC kicks on, from outlets that work intermittently to circuits that have gone completely dead, our electricians have the tools and expertise to diagnose the problem accurately and fix it right the first time.',
    ],
    whatWeDo: [
      { title: 'Breaker Trip Diagnosis', description: 'Find out why your breakers keep tripping and fix the underlying cause.' },
      { title: 'Flickering Light Diagnosis', description: 'Identify why your lights flicker or dim and resolve the issue.' },
      { title: 'Dead Circuit Repair', description: 'Trace and repair circuits that have lost power completely.' },
      { title: 'Grounding Issues', description: 'Diagnose and fix grounding problems that cause shocks or equipment damage.' },
      { title: 'Voltage Drop Analysis', description: 'Identify voltage drops that cause dimming lights and appliance issues.' },
      { title: 'Mystery Issue Diagnosis', description: 'Track down and fix electrical problems other electricians couldn\'t find.' },
    ],
    whyItMatters: [
      'Accurate diagnosis prevents unnecessary repairs and saves you money.',
      'Hidden electrical issues can cause fires, shocks, and equipment damage if left unfixed.',
      'Professional troubleshooting identifies root causes, not just symptoms.',
      'Fixing underlying issues restores safety and reliability to your electrical system.',
    ],
    faqs: [
      { q: 'Why do my breakers keep tripping?', a: 'Breakers trip due to overloaded circuits, short circuits, or ground faults. We use diagnostic tools to identify the exact cause and fix it — whether that\'s redistributing loads, repairing wiring, or replacing a faulty breaker.' },
      { q: 'Why do my lights flicker when I turn on an appliance?', a: 'This usually indicates a voltage drop caused by a loose connection, an undersized circuit, or a failing neutral. We can diagnose and fix the underlying issue.' },
      { q: 'How much does electrical troubleshooting cost?', a: 'Troubleshooting costs vary based on the complexity of the issue. We provide upfront pricing after our initial diagnosis. Call (720) 794-0714 for details.' },
      { q: 'Can you find problems other electricians couldn\'t?', a: 'We specialize in difficult-to-diagnose electrical issues. Our electricians use advanced diagnostic equipment and have extensive experience tracking down problems others miss.' },
    ],
  },
];

export type LocalProject = {
  title: string;
  neighborhood: string;
  description: string;
  serviceType: string;
};

export type CityService = {
  title: string;
  description: string;
  linkSlug: string;
};

export type NearbyCity = {
  name: string;
  slug: string;
};

export type ServiceArea = {
  slug: string;
  city: string;
  state: string;
  title: string;
  h1: string;
  description: string;
  metaDescription: string;
  tagline: string;
  introParagraphs: string[];
  neighborhoods: string[];
  zipCodes: string[];
  landmarks: string[];
  localUtility: string;
  buildingDept: string;
  topServices: CityService[];
  localProjects: LocalProject[];
  faqs: { q: string; a: string }[];
  review: Testimonial;
  nearbyCities: NearbyCity[];
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'electrician-aurora-co',
    city: 'Aurora',
    state: 'CO',
    title: 'Licensed Electrician in Aurora, CO | Qualified Electric',
    h1: 'Top-Rated Electricians in Aurora, CO',
    description: 'Trusted residential electrician services in Aurora, CO — 200A panel upgrades, Level 2 EV charging stations, whole-home rewiring, and emergency repairs.',
    metaDescription: 'Qualified Electric provides licensed electrician services in Aurora, CO. Panel upgrades, EV chargers, wiring, surge protection & fast repairs in Aurora. Call (720) 794-0714.',
    tagline: 'Fast, reliable electrical services for Aurora\'s growing master-planned neighborhoods and established homes.',
    introParagraphs: [
      'Aurora\'s rapid growth and diverse housing stock — from established neighborhoods near Cherry Creek State Park to modern master-planned communities in Southshore and Tallyn\'s Reach — demand versatile electrical expertise. Qualified Electric provides code-compliant residential electrical solutions engineered for Aurora\'s specific power demands.',
      'Whether your Aurora home requires a 200A panel upgrade to support high-efficiency heat pumps and EV charging, or emergency diagnostic repair for flickering lights, our licensed electricians arrive equipped with modern diagnostic tools and clear, upfront estimates.',
    ],
    neighborhoods: ['Southshore', 'Tallyn\'s Reach', 'Saddle Rock', 'Heather Gardens', 'Meadow Hills', 'Seven Hills', 'Murphy Creek'],
    zipCodes: ['80013', '80014', '80015', '80016', '80017', '80018'],
    landmarks: ['Cherry Creek State Park', 'Aurora Reservoir', 'Southlands Shopping Center', 'Buckley Space Force Base area'],
    localUtility: 'Xcel Energy (Denver Metro East)',
    buildingDept: 'City of Aurora Building Division',
    topServices: [
      { title: 'Panel Upgrades in Aurora', description: 'Upgrade undersized 100A main breaker panels to 200A service to handle modern household power loads safely.', linkSlug: 'electrical-panel-upgrade-denver-co' },
      { title: 'Level 2 EV Charger Install', description: 'Dedicated 240V circuit installations for Tesla, Chevy, Ford, and all electric vehicles in Aurora garages.', linkSlug: 'ev-charger-installation-denver-co' },
      { title: 'Whole-Home Rewiring', description: 'Complete electrical rough-in, device replacement, and safety rewiring for Aurora home remodels.', linkSlug: 'residential-wiring-denver-co' },
      { title: 'Whole-House Surge Suppression', description: 'Protect high-end kitchen appliances and home electronics from severe eastern plains lightning surges.', linkSlug: 'surge-protection-denver-co' },
    ],
    localProjects: [
      { title: '200A Panel Upgrade & EV Charger', neighborhood: 'Tallyn\'s Reach', description: 'Upgraded an undersized 100A panel to 200A main breaker service and installed a 50A dedicated Tesla Wall Connector.', serviceType: 'Panel Upgrade & EV Charger' },
      { title: 'Whole-House Surge Protector & Circuit', neighborhood: 'Southshore', description: 'Installed main-panel surge protection and ran a 50A dedicated subterranean circuit for an outdoor hot tub.', serviceType: 'Surge & Outdoor Wiring' },
      { title: 'Recessed LED Lighting Suite', neighborhood: 'Saddle Rock', description: 'Replaced outdated surface fixtures with 14 ultra-slim LED recessed lights and smart dimmers in open living area.', serviceType: 'Lighting Installation' },
    ],
    faqs: [
      { q: 'Do panel upgrades in Aurora require City of Aurora electrical permits?', a: 'Yes. All electrical panel upgrades and service changes in Aurora require permits from the City of Aurora Building Division. Qualified Electric pulls all required permits and handles the city inspection.' },
      { q: 'How quickly can an electrician respond to an urgent issue in Aurora?', a: 'We reserve daily schedule slots specifically for Aurora service calls and offer same-day or next-day appointments for urgent safety issues.' },
      { q: 'Does Xcel Energy need to disconnect power during an Aurora panel upgrade?', a: 'Yes. We coordinate directly with Xcel Energy for meter disconnect and reconnect so your panel upgrade is completed safely and efficiently in one day.' },
    ],
    review: { name: 'James T.', location: 'Aurora, CO', rating: 5, text: 'We had a flickering light issue that two other electricians couldn\'t figure out. Qualified Electric found the problem in 20 minutes — a loose neutral wire in the panel. Fixed it the same day. Highly recommend.' },
    nearbyCities: [
      { name: 'Centennial', slug: 'electrician-centennial-co' },
      { name: 'Parker', slug: 'electrician-parker-co' },
      { name: 'Englewood', slug: 'electrician-englewood-co' },
    ],
  },
  {
    slug: 'electrician-lakewood-co',
    city: 'Lakewood',
    state: 'CO',
    title: 'Trusted Electrician in Lakewood, CO | Qualified Electric',
    h1: 'Local Electrician Services in Lakewood, CO',
    description: 'Licensed electrician serving Lakewood, CO — mid-century home rewiring, aluminum wiring remediation, 200A panel upgrades, and recessed lighting.',
    metaDescription: 'Qualified Electric offers expert electrician services in Lakewood, CO. Aluminum wiring repair, panel upgrades, lighting, and code compliance. Call (720) 794-0714.',
    tagline: 'Specialized electrical repair, aluminum wiring remediation, and upgrades for Lakewood ranches and foothills homes.',
    introParagraphs: [
      'Lakewood\'s charming mid-century ranches around Belmar, Applewood, and Green Mountain often feature original 1960s-1970s electrical panels and aluminum branch wiring. Qualified Electric brings deep local experience in diagnosing and safely upgrading Lakewood residential electrical systems to current National Electrical Code (NEC) standards.',
      'From installing safe AlumiConn/COPALUM aluminum wiring remediation to replacing outdated Zinsco or Federal Pacific panels, our certified electricians protect Lakewood homes while expanding power capacity for modern appliances and EV charging.',
    ],
    neighborhoods: ['Belmar', 'Applewood', 'Green Mountain', 'Solterra', 'Eiber', 'Kendallvue', 'Southern Gables'],
    zipCodes: ['80215', '80226', '80227', '80228', '80232'],
    landmarks: ['Belmar Downtown', 'Bear Creek Lake Park', 'Green Mountain Park', 'William F. Hayden Park'],
    localUtility: 'Xcel Energy (West Metro Division)',
    buildingDept: 'City of Lakewood Building Inspections',
    topServices: [
      { title: 'Aluminum Wiring Remediation', description: 'Safely remediate 1960s-70s aluminum branch wiring with code-approved connectors to eliminate fire hazards.', linkSlug: 'residential-wiring-denver-co' },
      { title: 'Lakewood Panel Upgrades', description: 'Replace outdated breaker boxes with modern 200A panels to prevent breaker trips and support modern power.', linkSlug: 'electrical-panel-upgrade-denver-co' },
      { title: 'Recessed Can Lighting', description: 'Transform mid-century Lakewood interiors with energy-efficient LED recessed lighting and dimmer controls.', linkSlug: 'lighting-installation-denver-co' },
      { title: 'Electrical Safety Inspection', description: 'Comprehensive pre-purchase and safety audits for Lakewood homebuyers and sellers.', linkSlug: 'electrical-inspection-denver-co' },
    ],
    localProjects: [
      { title: 'Aluminum Wiring Remediation', neighborhood: 'Applewood', description: 'Remediated branch wiring using code-compliant AlumiConn connectors and installed tamper-resistant outlets in a 1968 ranch.', serviceType: 'Wiring Remediation' },
      { title: '200A Heavy Up & Garage Subpanel', neighborhood: 'Green Mountain', description: 'Replaced an obsolete panel with a 200A main service panel and added a 60A subpanel for a garage woodworking shop.', serviceType: 'Panel & Subpanel' },
      { title: 'EV Charger & Landscape Lighting', neighborhood: 'Solterra', description: 'Installed Level 2 EV charger in garage and low-voltage LED architectural landscape lighting on stone terrace.', serviceType: 'EV & Lighting' },
    ],
    faqs: [
      { q: 'Is aluminum wiring common in older Lakewood homes?', a: 'Yes. Many Lakewood homes built between 1965 and 1973 contain aluminum branch circuit wiring. We specialize in COPALUM and AlumiConn remediation to make aluminum wiring completely safe.' },
      { q: 'Do you inspect panels for recalled brands in Lakewood?', a: 'Yes. We inspect for dangerous recalled panel brands like Federal Pacific Electric (FPE) and Zinsco, which are frequently found in Lakewood homes built prior to 1980.' },
      { q: 'How long does a panel replacement take in Lakewood?', a: 'Most residential panel upgrades in Lakewood are completed in 6 to 8 hours, with power restored by the end of the day.' },
    ],
    review: { name: 'Patricia L.', location: 'Lakewood, CO', rating: 5, text: 'They installed recessed lighting throughout our living room and kitchen. The work was clean, the lights look amazing, and they even patched the small drywall cuts. True professionals.' },
    nearbyCities: [
      { name: 'Arvada', slug: 'electrician-arvada-co' },
      { name: 'Englewood', slug: 'electrician-englewood-co' },
      { name: 'Littleton', slug: 'electrician-littleton-co' },
    ],
  },
  {
    slug: 'electrician-littleton-co',
    city: 'Littleton',
    state: 'CO',
    title: 'Licensed Electrician in Littleton, CO | Qualified Electric',
    h1: 'Professional Electricians in Littleton, CO',
    description: 'Expert residential electricians in Littleton, CO — historic home rewiring, standby generator installation, surge protection, and panel upgrades.',
    metaDescription: 'Need a licensed electrician in Littleton, CO? Qualified Electric provides standby generators, panel upgrades, rewiring, and safety inspections. Call (720) 794-0714.',
    tagline: 'Preserving historic Littleton homes and powering modern foothill residences with precision electrical work.',
    introParagraphs: [
      'Littleton blends historic downtown charm with sprawling suburban developments and foothill properties near Chatfield Reservoir. Qualified Electric brings tailored electrical solutions — from preserving historic fixtures in Downtown Littleton to installing heavy-duty standby generators in Ken Caryl Valley.',
      'Weather conditions along the Littleton foothills can cause localized power outages and lightning surges. Our master electricians specialize in installing automatic standby generators, whole-home surge suppressors, and modern 200A service panels designed to keep your family safe and continuously powered.',
    ],
    neighborhoods: ['Downtown Littleton', 'Ken Caryl Valley', 'Roxborough', 'Columbine', 'TrailMark', 'Heritage Hills', 'Highland Ranch border'],
    zipCodes: ['80120', '80123', '80127', '80128', '80130'],
    landmarks: ['Historic Main Street Littleton', 'Hudson Gardens', 'Chatfield Reservoir', 'Ken Caryl Ranch'],
    localUtility: 'Xcel Energy / CORE Electric Cooperative',
    buildingDept: 'City of Littleton Building & Safety Division',
    topServices: [
      { title: 'Standby Generator Installation', description: 'Automatic standby generators with transfer switches to keep heat, lights, and appliances running during foothill outages.', linkSlug: 'generator-installation-denver-co' },
      { title: 'Knob & Tube Rewiring', description: 'Safely replace legacy knob-and-tube wiring in historic Littleton homes with grounded Romex wiring.', linkSlug: 'residential-wiring-denver-co' },
      { title: 'Whole-Home Surge Protection', description: 'Panel-mounted surge protectors to shield HVAC systems and appliances from grid spikes.', linkSlug: 'surge-protection-denver-co' },
      { title: 'Electrical Safety Audits', description: 'Thorough electrical safety audits for Littleton home buyers, sellers, and historic homeowners.', linkSlug: 'electrical-inspection-denver-co' },
    ],
    localProjects: [
      { title: '22kW Standby Generator Setup', neighborhood: 'Ken Caryl Valley', description: 'Installed automatic standby generator with transfer switch to safeguard home during foothill storm outages.', serviceType: 'Standby Generator' },
      { title: 'Knob & Tube Removal & Whole-Home Rewire', neighborhood: 'Downtown Littleton', description: 'Safely deactivated historic knob-and-tube wiring and rewired a 1920s craftsman home to modern code.', serviceType: 'Rewiring' },
      { title: 'Whole-Home Surge Protection & Panel Tune-Up', neighborhood: 'Columbine', description: 'Installed main panel surge suppressor and tightened bus bar connections for comprehensive surge defense.', serviceType: 'Surge Protection' },
    ],
    faqs: [
      { q: 'Can a standby generator power my entire Littleton home during an outage?', a: 'Yes! A properly sized 20kW to 24kW standby generator with an automatic transfer switch will seamlessly power your HVAC, refrigerator, lights, and outlets when utility power fails.' },
      { q: 'How do I know if my older Littleton home has knob & tube wiring?', a: 'If your home was built before 1950, it may have knob-and-tube wiring in attic spaces or walls. We can perform a non-invasive inspection to verify and recommend safe upgrade options.' },
      { q: 'Do you service homes in CORE Electric Cooperative areas around Littleton?', a: 'Yes. We work seamlessly with both Xcel Energy and CORE Electric Cooperative utility specifications across Arapahoe and Jefferson counties.' },
    ],
    review: { name: 'Jennifer K.', location: 'Littleton, CO', rating: 5, text: 'After a power surge fried our TV and microwave, we called Qualified Electric to install whole-home surge protection. Fast, knowledgeable, and reasonably priced. Wish we\'d done it sooner.' },
    nearbyCities: [
      { name: 'Highlands Ranch', slug: 'electrician-highlands-ranch-co' },
      { name: 'Englewood', slug: 'electrician-englewood-co' },
      { name: 'Centennial', slug: 'electrician-centennial-co' },
    ],
  },
  {
    slug: 'electrician-englewood-co',
    city: 'Englewood',
    state: 'CO',
    title: 'Expert Electrician in Englewood, CO | Qualified Electric',
    h1: 'Reliable Electricians Serving Englewood, CO',
    description: 'Englewood electrician services — mid-century bungalow rewiring, kitchen remodel electrical, panel relocations, and EV charging.',
    metaDescription: 'Qualified Electric provides licensed electrician services in Englewood, CO. Rewiring, panel upgrades, kitchen electrical, and EV chargers. Call (720) 794-0714.',
    tagline: 'Dependable electrical repairs, panel service relocations, and remodel wiring for Englewood residential properties.',
    introParagraphs: [
      'Englewood\'s residential streets feature a mix of classic brick bungalows, mid-century homes, and modern infill construction near Swedish Medical Center and South Broadway. Qualified Electric specializes in updating Englewood\'s electrical infrastructure to meet the demands of modern living.',
      'From upgrading undersized electrical service entrances to wiring complex kitchen renovations and relocating outdated breaker panels, our team delivers clean, code-compliant electrical work backed by transparent upfront pricing.',
    ],
    neighborhoods: ['Cherrelyn', 'Arapahoe Acres', 'Biscayne', 'Irontha', 'Cushing Park', 'South Broadway Corridor', 'Oxford Station area'],
    zipCodes: ['80110', '80112', '80113'],
    landmarks: ['Gothic Theatre', 'Englewood Civic Center', 'Swedish Medical Center area', 'Cushing Park'],
    localUtility: 'Xcel Energy (Central South Metro)',
    buildingDept: 'City of Englewood Building Division',
    topServices: [
      { title: 'Englewood Bungalow Rewiring', description: 'Whole-home rewiring, device upgrades, and grounded circuit extensions for classic Englewood brick homes.', linkSlug: 'residential-wiring-denver-co' },
      { title: 'Kitchen & Bath Remodel Wiring', description: 'Dedicated appliance circuits, island pop-up outlets, and undercabinet LED lighting for home remodels.', linkSlug: 'lighting-installation-denver-co' },
      { title: 'Panel Service Relocation & Heavy Up', description: 'Move breaker panels out of closets/bathrooms to code-approved exterior or utility room locations.', linkSlug: 'electrical-panel-upgrade-denver-co' },
      { title: 'Electrical Troubleshooting', description: 'Rapid diagnostic troubleshooting for flickering lights, tripped breakers, and ungrounded outlets.', linkSlug: 'electrical-troubleshooting-denver-co' },
    ],
    localProjects: [
      { title: 'Bungalow Rewiring & Main Breaker Upgrade', neighborhood: 'Cherrelyn', description: 'Complete electrical overhaul for a 1940s brick bungalow including 200A main service upgrade and AFCI breakers.', serviceType: 'Rewiring & Panel' },
      { title: 'Kitchen Remodel Wiring & Dedicated Circuits', neighborhood: 'South Broadway area', description: 'Wired modern kitchen renovation with dedicated appliance circuits, island outlets, and undercabinet LEDs.', serviceType: 'Kitchen Remodel' },
      { title: 'Panel Service Relocation', neighborhood: 'Arapahoe Acres', description: 'Relocated exterior main panel from bedroom wall to code-compliant outdoor utility location.', serviceType: 'Panel Relocation' },
    ],
    faqs: [
      { q: 'Why do many Englewood homes need panel relocations?', a: 'Older Englewood homes often have panels located in unapproved areas (like closets or bathrooms) or low-clearance spots. During remodels or upgrades, code requires relocating panels to accessible locations.' },
      { q: 'Can you fix ungrounded 2-prong outlets in Englewood homes?', a: 'Yes. We can convert 2-prong ungrounded outlets to modern 3-prong grounded outlets using GFCI protection or by running new equipment grounding conductors.' },
      { q: 'Do Englewood kitchen remodels require dedicated circuits?', a: 'Yes. Current electrical code requires dedicated 20A circuits for small appliances, refrigerator, microwave, and dishwasher in Englewood home remodels.' },
    ],
    review: { name: 'David S.', location: 'Englewood, CO', rating: 5, text: 'Our older home had aluminum wiring that was a fire risk. Qualified Electric rewired the whole house with minimal wall damage and coordinated the drywall repairs. Excellent work from start to finish.' },
    nearbyCities: [
      { name: 'Littleton', slug: 'electrician-littleton-co' },
      { name: 'Centennial', slug: 'electrician-centennial-co' },
      { name: 'Denver', slug: 'residential-electrician-denver-co' },
    ],
  },
  {
    slug: 'electrician-castle-rock-co',
    city: 'Castle Rock',
    state: 'CO',
    title: 'Licensed Electrician in Castle Rock, CO | Qualified Electric',
    h1: 'Premier Electrician Services in Castle Rock, CO',
    description: 'Premier electrician in Castle Rock, CO — standby generators, outbuilding subpanels, surge protection, and Level 2 EV charging.',
    metaDescription: 'Qualified Electric provides licensed electrician services in Castle Rock, CO. Standby generators, EV chargers, subpanels, and surge protection. Call (720) 794-0714.',
    tagline: 'High-capacity electrical installations, outbuilding wiring, and generator backup systems for Castle Rock homeowners.',
    introParagraphs: [
      'Castle Rock\'s scenic terrain and custom home developments in Castle Pines, The Meadows, and Founders Village require high-performance electrical systems capable of supporting large square footage, outbuildings, and high-elevation weather swings.',
      'Qualified Electric delivers expert electrical installations tailored to Castle Rock properties — including heavy-duty standby generator backups, subpanel feeds for workshops or detached garages, and Level 2 EV charging stations built to code.',
    ],
    neighborhoods: ['Castle Pines', 'The Meadows', 'Founders Village', 'Terrain', 'Montaine', 'Plum Creek', 'Crystal Valley'],
    zipCodes: ['80104', '80108', '80109'],
    landmarks: ['Rock Park', 'Philip S. Miller Park', 'Outlets at Castle Rock', 'Castle Pines Golf Club'],
    localUtility: 'CORE Electric Cooperative (Intermountain Rural Electric)',
    buildingDept: 'Town of Castle Rock Development Services',
    topServices: [
      { title: 'Standby Generator Installation', description: 'Keep heat, well pumps, and refrigeration running automatically during winter storms in Douglas County.', linkSlug: 'generator-installation-denver-co' },
      { title: 'Workshop & Outbuilding Subpanels', description: 'Run feeder lines and subpanels to detached shops, barns, RV hookups, and outbuildings.', linkSlug: 'residential-wiring-denver-co' },
      { title: 'Surge Protection for Thunderstorms', description: 'High-capacity surge suppressors to shield sensitive electronics from mountain thunderstorm strikes.', linkSlug: 'surge-protection-denver-co' },
      { title: 'Level 2 Dual EV Charger Setup', description: 'High-speed 240V charging station installations for Tesla, Rivian, and all EV models.', linkSlug: 'ev-charger-installation-denver-co' },
    ],
    localProjects: [
      { title: '24kW Standby Generator Installation', neighborhood: 'Castle Pines', description: 'Installed natural gas standby generator with automatic transfer switch to handle winter foothill blizzards.', serviceType: 'Standby Generator' },
      { title: '100A Workshop Subpanel & 240V Outlets', neighborhood: 'Founders Village', description: 'Ran underground feeder conduit to detached garage workshop for heavy woodworking machinery.', serviceType: 'Subpanel & Wiring' },
      { title: 'Level 2 Dual EV Charging Station', neighborhood: 'The Meadows', description: 'Installed 50A dedicated dual-head EV charging system for two electric vehicles.', serviceType: 'EV Charger' },
    ],
    faqs: [
      { q: 'Who provides power in Castle Rock — Xcel or CORE Electric?', a: 'Most of Castle Rock is served by CORE Electric Cooperative. We work directly with CORE utility inspectors to ensure fast connection approvals.' },
      { q: 'Can you wire detached shops or barns in Castle Rock?', a: 'Yes. We specialize in underground trenching, feeder conduit, and subpanel installations for detached shops, barns, and outbuildings.' },
      { q: 'Do standby generators in Castle Rock require permits?', a: 'Yes, standby generator installations require permits from the Town of Castle Rock Development Services. We manage all permitting and inspection scheduling.' },
    ],
    review: { name: 'Marcus G.', location: 'Castle Rock, CO', rating: 5, text: 'Qualified Electric installed a 22kW Kohler standby generator in Castle Pines. Flawless execution and passed Town of Castle Rock inspection on the first try!' },
    nearbyCities: [
      { name: 'Parker', slug: 'electrician-parker-co' },
      { name: 'Highlands Ranch', slug: 'electrician-highlands-ranch-co' },
      { name: 'Littleton', slug: 'electrician-littleton-co' },
    ],
  },
  {
    slug: 'electrician-arvada-co',
    city: 'Arvada',
    state: 'CO',
    title: 'Licensed Electrician in Arvada, CO | Qualified Electric',
    h1: 'Dependable Electricians in Arvada, CO',
    description: 'Trusted Arvada electrician services — 200A panel upgrades, 240V hot tub disconnects, basement electrical finishing, and ceiling fan installs.',
    metaDescription: 'Qualified Electric provides licensed electrician services in Arvada, CO. Panel upgrades, hot tub wiring, basement electrical & ceiling fans. Call (720) 794-0714.',
    tagline: 'Quality electrical repairs, hot tub disconnects, and service upgrades across historic and modern Arvada neighborhoods.',
    introParagraphs: [
      'Arvada spans historic charm in Olde Town Arvada to modern master-planned communities in Candelas and Leyden Rock. Qualified Electric provides full-service residential electrical solutions designed for Arvada\'s varied residential architecture.',
      'Whether you need a 200A panel upgrade to support a new outdoor spa, basement rough-in electrical wiring, or quick repair for tripping breakers, our licensed team delivers fast service and code-compliant craftsmanship.',
    ],
    neighborhoods: ['Olde Town Arvada', 'Ralston Valley', 'Leyden Rock', 'Candelas', 'Whisper Creek', 'Lake Arbor', 'Arvada West'],
    zipCodes: ['80002', '80003', '80004', '80005', '80007'],
    landmarks: ['Olde Town Arvada Square', 'Apex Park & Recreation Center', 'Ralston Creek Trail', 'Arvada Center'],
    localUtility: 'Xcel Energy (North West Division)',
    buildingDept: 'City of Arvada Building Inspection Division',
    topServices: [
      { title: 'Arvada Panel Upgrades', description: 'Replace outdated breaker panels with 200A main service panels to support modern home additions and appliances.', linkSlug: 'electrical-panel-upgrade-denver-co' },
      { title: '240V Hot Tub & Spa Hookups', description: 'Install code-required 50A GFCI spa disconnect boxes and subterranean conduit feeds for hot tubs.', linkSlug: 'residential-wiring-denver-co' },
      { title: 'Basement Finish Electrical', description: 'Complete basement electrical rough-in, subpanels, recessed lighting, and media room circuits.', linkSlug: 'lighting-installation-denver-co' },
      { title: 'Ceiling Fan & Light Installation', description: 'Install fan-rated junction boxes, ceiling fans, and smart dimmers throughout Arvada homes.', linkSlug: 'ceiling-fan-installation-denver-co' },
    ],
    localProjects: [
      { title: '240V Hot Tub Disconnect & Subpanel', neighborhood: 'Candelas', description: 'Installed 50A GFCI protected spa panel and subterranean conduit hookup for luxury outdoor hot tub.', serviceType: 'Hot Tub Wiring' },
      { title: '200A Electrical Panel Upgrade', neighborhood: 'Olde Town Arvada', description: 'Replaced an old 100A Federal Pacific panel with a code-compliant 200A main service panel.', serviceType: 'Panel Upgrade' },
      { title: 'Basement Subpanel & Recessed Lights', neighborhood: 'Leyden Rock', description: 'Wired finished basement with 60A subpanel, 18 recessed LED lights, and home theater circuits.', serviceType: 'Basement Wiring' },
    ],
    faqs: [
      { q: 'Does installing a hot tub in Arvada require an electrical permit?', a: 'Yes. Hot tubs require a dedicated 240V GFCI-protected circuit and a emergency shutoff disconnect located within sight of the spa, per Arvada building code.' },
      { q: 'Can you add a subpanel for a finished basement in Arvada?', a: 'Absolutely. A basement subpanel provides clean circuit distribution for lighting, outlets, wet bar appliances, and home theater gear.' },
      { q: 'Are Federal Pacific panels common in older Arvada homes?', a: 'Yes, many homes built in Arvada between 1960 and 1985 contain Federal Pacific Stab-Lok panels, which we strongly recommend replacing due to fire risk.' },
    ],
    review: { name: 'Karen & Tom S.', location: 'Arvada, CO', rating: 5, text: 'Had Qualified Electric install a hot tub disconnect and upgrade our panel in Leyden Rock. Super clean work and very friendly crew!' },
    nearbyCities: [
      { name: 'Westminster', slug: 'electrician-westminster-co' },
      { name: 'Lakewood', slug: 'electrician-lakewood-co' },
      { name: 'Denver', slug: 'residential-electrician-denver-co' },
    ],
  },
  {
    slug: 'electrician-westminster-co',
    city: 'Westminster',
    state: 'CO',
    title: 'Top Electrician in Westminster, CO | Qualified Electric',
    h1: 'Expert Electrical Contractor in Westminster, CO',
    description: 'Licensed electrician in Westminster, CO — smart home switches, EV charger installation, emergency breaker repairs, and lighting retrofits.',
    metaDescription: 'Qualified Electric provides licensed electrician services in Westminster, CO. Smart lighting, EV chargers, breaker repairs, and panel upgrades. Call (720) 794-0714.',
    tagline: 'Smart home lighting, EV charger installations, and rapid breaker repair across Westminster.',
    introParagraphs: [
      'Westminster\'s vibrant residential communities around Standley Lake, Bradburn Village, and Countryside feature a blend of classic single-family homes and contemporary tech-connected residences. Qualified Electric delivers forward-thinking electrical services tailored for Westminster homeowners.',
      'From retrofitting smart switches and Lutron dimmers to troubleshooting sudden breaker trips and installing Level 2 EV chargers, our certified electricians focus on safety, efficiency, and flawless execution.',
    ],
    neighborhoods: ['Bradburn Village', 'Standley Lake', 'Hyland Village', 'Countryside', 'Savory Farm', 'Sunset Ridge', 'Westminster Promenade area'],
    zipCodes: ['80020', '80021', '80030', '80031', '80234'],
    landmarks: ['Standley Lake Regional Park', 'Westminster Bell Tower', 'The Orchard Town Center', 'Westminster Promenade'],
    localUtility: 'Xcel Energy (North Metro Division)',
    buildingDept: 'City of Westminster Building Division',
    topServices: [
      { title: 'Smart Switch & Dimmer Setup', description: 'Upgrade standard switches to Lutron Caséta or Wi-Fi smart dimmers for automated lighting control.', linkSlug: 'lighting-installation-denver-co' },
      { title: 'Level 2 EV Charging Stations', description: 'Fast 240V EV charger installations for Tesla, Hyundai, Ford, and all electric vehicle models.', linkSlug: 'ev-charger-installation-denver-co' },
      { title: 'Emergency Breaker & Panel Repair', description: 'Diagnose and repair tripping main breakers, buzzing panels, and dead residential circuits.', linkSlug: 'electrical-troubleshooting-denver-co' },
      { title: 'Whole-Home Surge Protection', description: 'Protect smart home electronics and appliances from power surges and grid fluctuations.', linkSlug: 'surge-protection-denver-co' },
    ],
    localProjects: [
      { title: 'Lutron Smart Dimmer & Automation', neighborhood: 'Bradburn Village', description: 'Converted 32 switches to Lutron Caséta smart dimmers with scene programming and mobile control.', serviceType: 'Smart Lighting' },
      { title: 'Level 2 EV Wall Connector', neighborhood: 'Standley Lake', description: 'Installed dedicated 60A circuit for high-speed Level 2 home charging station in a 3-car garage.', serviceType: 'EV Charger' },
      { title: 'Main Breaker Diagnostic & Repair', neighborhood: 'Hyland Village', description: 'Diagnosed intermittent main breaker tripping caused by degraded lug connection and replaced main breaker.', serviceType: 'Troubleshooting' },
    ],
    faqs: [
      { q: 'Can you convert standard switches to smart switches in older Westminster homes?', a: 'Yes! Even if your switch boxes lack neutral wires, we install smart dimmers designed for legacy wiring or pull new neutral conductors where needed.' },
      { q: 'What causes main breakers to buzz in Westminster homes?', a: 'A buzzing main breaker can indicate an overloaded circuit, loose bus bar connection, or internal breaker failure. It should be inspected immediately by a licensed electrician.' },
      { q: 'Do EV charger installs require a panel upgrade in Westminster?', a: 'It depends on your panel\'s current load calculation. We measure your electrical load before installation to confirm if your existing panel has available capacity.' },
    ],
    review: { name: 'Brian K.', location: 'Westminster, CO', rating: 5, text: 'Fast diagnostic and repair on our main breaker that kept tripping in Westminster. Arrived within 2 hours of calling!' },
    nearbyCities: [
      { name: 'Broomfield', slug: 'electrician-broomfield-co' },
      { name: 'Thornton', slug: 'electrician-thornton-co' },
      { name: 'Arvada', slug: 'electrician-arvada-co' },
    ],
  },
  {
    slug: 'electrician-thornton-co',
    city: 'Thornton',
    state: 'CO',
    title: 'Licensed Electrician in Thornton, CO | Qualified Electric',
    h1: 'Reliable Residential Electricians in Thornton, CO',
    description: 'Thornton electrician services — EV charger installation, ceiling fans, dedicated HVAC circuits, and panel capacity expansions.',
    metaDescription: 'Qualified Electric provides licensed electrician services in Thornton, CO. EV chargers, ceiling fans, HVAC circuits & panel upgrades. Call (720) 794-0714.',
    tagline: 'Fast dispatch, EV charger hookups, and dedicated circuit additions for Thornton families.',
    introParagraphs: [
      'Thornton is one of the Denver metro\'s fastest-growing residential hubs, featuring modern subdivisions in Fallbrook, Eastlake, and Signal Creek. Qualified Electric provides dependable electrical installation and repair services suited for Thornton\'s expanding family homes.',
      'From installing high-capacity Level 2 EV charging stations to adding dedicated 240V circuits for new central air conditioning or heat pumps, our electricians deliver prompt, courteous service backed by code-compliant craftsmanship.',
    ],
    neighborhoods: ['Fallbrook', 'Eastlake', 'Thorncreek', 'Signal Creek', 'Hunter\'s Glen', 'Woodglen', 'Riverdale'],
    zipCodes: ['80229', '80233', '80241', '80602'],
    landmarks: ['Margaret W. Carpenter Recreation Center', 'Trail Winds Park', 'Eastlake N-Line Station'],
    localUtility: 'United Power / Xcel Energy',
    buildingDept: 'City of Thornton City Development Building Division',
    topServices: [
      { title: 'Thornton EV Charger Install', description: 'Install dedicated 240V garage circuits and EV wall chargers for all electric vehicle models.', linkSlug: 'ev-charger-installation-denver-co' },
      { title: 'Ceiling Fan Suite Installation', description: 'Install fan-rated mounting boxes and ceiling fans with wall-control switches in bedrooms and living rooms.', linkSlug: 'ceiling-fan-installation-denver-co' },
      { title: 'Dedicated HVAC & AC Circuits', description: 'Heavy-gauge dedicated branch circuits for central AC units, heat pumps, and tankless water heaters.', linkSlug: 'electrical-repair-denver-co' },
      { title: 'Panel Capacity Expansion', description: 'Upgrade breaker boxes to 200A service to eliminate overloaded circuits in expanding Thornton homes.', linkSlug: 'electrical-panel-upgrade-denver-co' },
    ],
    localProjects: [
      { title: 'Tesla Wall Connector Installation', neighborhood: 'Fallbrook', description: 'Installed Tesla Wall Connector with custom surface conduit routing in garage with 60A breaker.', serviceType: 'EV Charger' },
      { title: 'Dedicated 50A Heat Pump & AC Circuit', neighborhood: 'Eastlake', description: 'Ran dedicated heavy-gauge circuit from panel to exterior condenser pad for high-efficiency HVAC install.', serviceType: 'Dedicated Circuit' },
      { title: 'Ceiling Fan Suite & Support Boxes', neighborhood: 'Signal Creek', description: 'Installed 5 heavy-duty ceiling fan fan-rated junction boxes and high-efficiency ceiling fans.', serviceType: 'Ceiling Fans' },
    ],
    faqs: [
      { q: 'Who provides power in Thornton — United Power or Xcel Energy?', a: 'Depending on your neighborhood location in Thornton, utility service is provided by either United Power or Xcel Energy. We comply with both utility service standards.' },
      { q: 'Can I replace a light fixture with a ceiling fan in Thornton?', a: 'Only if the existing ceiling electrical box is fan-rated. Standard fixture boxes cannot safely hold fan weight. We install certified fan-rated support boxes on all fan installations.' },
      { q: 'Are free estimates available for Thornton electrical projects?', a: 'Yes! We provide free upfront estimates before any electrical work begins.' },
    ],
    review: { name: 'Rachel W.', location: 'Thornton, CO', rating: 5, text: 'Qualified Electric installed 4 ceiling fans and a Tesla Wall Connector in our new Thornton home. Flawless work!' },
    nearbyCities: [
      { name: 'Westminster', slug: 'electrician-westminster-co' },
      { name: 'Broomfield', slug: 'electrician-broomfield-co' },
      { name: 'Aurora', slug: 'electrician-aurora-co' },
    ],
  },
  {
    slug: 'electrician-centennial-co',
    city: 'Centennial',
    state: 'CO',
    title: 'Licensed Electrician in Centennial, CO | Qualified Electric',
    h1: 'Top-Rated Electricians in Centennial, CO',
    description: 'Premier electrician in Centennial, CO — kitchen recessed lighting, 200A panel upgrades, EV chargers, and safety audits.',
    metaDescription: 'Qualified Electric provides top-rated electrician services in Centennial, CO. Recessed lighting, panel upgrades, EV chargers, and safety inspections. Call (720) 794-0714.',
    tagline: 'High-end interior lighting, panel upgrades, and EV charger installations across Centennial communities.',
    introParagraphs: [
      'Centennial\'s master-planned neighborhoods adjacent to the Denver Tech Center — including Willow Creek, Walnut Hills, and Heritage Place — represent some of the metro area\'s finest family residences. Qualified Electric delivers premium residential electrical services tailored for Centennial homeowners.',
      'From custom kitchen recessed LED lighting designs to upgrading 125A panels to 200A service for EV charging and modern appliances, our electricians combine technical precision with immaculate property care.',
    ],
    neighborhoods: ['Willow Creek', 'Walnut Hills', 'Foxfield border', 'Smoky Hill', 'Heritage Place', 'Piney Creek', 'Centennial Urban Center'],
    zipCodes: ['80111', '80112', '80121', '80122', '80015'],
    landmarks: ['Centennial Center Park', 'The Streets at SouthGlenn', 'DTC Tech Corridor border', 'Topgolf Centennial'],
    localUtility: 'Xcel Energy / CORE Electric Cooperative',
    buildingDept: 'City of Centennial Community Development Dept',
    topServices: [
      { title: 'Recessed Can & Undercabinet Lighting', description: 'Design and install ultra-thin LED recessed lighting, accent fixtures, and undercabinet LEDs in Centennial kitchens.', linkSlug: 'lighting-installation-denver-co' },
      { title: 'Centennial Panel Upgrades', description: 'Upgrade outdated 100A-125A breaker boxes to 200A service to meet high modern household power demands.', linkSlug: 'electrical-panel-upgrade-denver-co' },
      { title: 'Level 2 EV Charging Setup', description: 'Dedicated 240V EV charger installations with smart load management for Tesla and all EV brands.', linkSlug: 'ev-charger-installation-denver-co' },
      { title: 'Pre-Purchase Safety Inspection', description: 'Detailed electrical system safety inspections for Centennial homebuyers and sellers.', linkSlug: 'electrical-inspection-denver-co' },
    ],
    localProjects: [
      { title: 'Recessed Can Lighting & Undercabinet LED', neighborhood: 'Willow Creek', description: 'Installed 12 ultra-thin LED recessed lights and custom undercabinet task lighting in a remodeled kitchen.', serviceType: 'Lighting' },
      { title: '200A Electrical Panel Upgrade', neighborhood: 'Walnut Hills', description: 'Upgraded outdated 125A panel to 200A service to accommodate central AC and modern appliances.', serviceType: 'Panel Upgrade' },
      { title: 'Dedicated NEMA 14-50 EV Plug', neighborhood: 'Heritage Place', description: 'Installed 50A heavy-duty industrial receptacle for plug-in EV charger in a 2-car garage.', serviceType: 'EV Charging' },
    ],
    faqs: [
      { q: 'How long does a kitchen recessed lighting installation take in Centennial?', a: 'Most residential kitchen recessed lighting installations take 1 day, complete with clean drywall cuts and dimmer switch setup.' },
      { q: 'Do Centennial panel upgrades require city inspections?', a: 'Yes. Panel upgrades in Centennial require a permit and inspection from the City of Centennial Community Development Department. We handle all paperwork.' },
      { q: 'Can you install EV chargers in Centennial homes near DTC?', a: 'Yes! We install Level 2 chargers across all Centennial neighborhoods with clean conduit work and code compliance.' },
    ],
    review: { name: 'Amanda B.', location: 'Centennial, CO', rating: 5, text: 'Installed a ceiling fan in our bedroom where there was just a light before. They added the proper support box so it\'s rock solid — no wobble at all. Will definitely use them again.' },
    nearbyCities: [
      { name: 'Englewood', slug: 'electrician-englewood-co' },
      { name: 'Highlands Ranch', slug: 'electrician-highlands-ranch-co' },
      { name: 'Aurora', slug: 'electrician-aurora-co' },
    ],
  },
  {
    slug: 'electrician-parker-co',
    city: 'Parker',
    state: 'CO',
    title: 'Licensed Electrician in Parker, CO | Qualified Electric',
    h1: 'Experienced Local Electricians in Parker, CO',
    description: 'Experienced Parker electrician services — barn/shop subpanels, standby generators, whole-home surge protection, and security lighting.',
    metaDescription: 'Qualified Electric offers licensed electrician services in Parker, CO. Barn subpanels, standby generators, surge protection, and security lighting. Call (720) 794-0714.',
    tagline: 'Powering acreage properties, outbuildings, and suburban family homes across Parker.',
    introParagraphs: [
      'Parker\'s landscape includes custom acreage homes in The Pinery and Canterberry Crossing as well as popular family subdivisions in Stonegate and Cottonwood. Qualified Electric brings specialized electrical solutions designed for Parker\'s unique residential property layouts.',
      'From trenching underground feeds for barn/workshop subpanels to installing automatic standby generators and perimeter security floodlights, our master electricians handle complex acreage electrical projects with ease.',
    ],
    neighborhoods: ['Stonegate', 'Canterberry Crossing', 'The Pinery', 'Cottonwood', 'Stepping Stone', 'Idyllwilde', 'Parker Homestead'],
    zipCodes: ['80134', '80138'],
    landmarks: ['Parker Arts Center (PACE)', 'O\'Brien Park', 'Rueter-Hess Reservoir', 'Historic Downtown Parker'],
    localUtility: 'CORE Electric Cooperative',
    buildingDept: 'Town of Parker Building Department',
    topServices: [
      { title: 'Barn & Workshop Subpanels', description: 'Run underground feeder conduit and install subpanels for workshop equipment, welders, and barn lighting.', linkSlug: 'residential-wiring-denver-co' },
      { title: 'Standby Generator Backup', description: 'Automatic standby generators to maintain full home power during rural weather-related outages in Parker.', linkSlug: 'generator-installation-denver-co' },
      { title: 'Whole-Home Surge Protection', description: 'Heavy-duty surge suppressors installed at the main panel to protect against high-plains voltage spikes.', linkSlug: 'surge-protection-denver-co' },
      { title: 'Exterior & Security Lighting', description: 'Motion-activated LED floodlights, barn lighting, and landscape entrance lighting.', linkSlug: 'lighting-installation-denver-co' },
    ],
    localProjects: [
      { title: '100A Barn Subpanel & Workshop Wiring', neighborhood: 'The Pinery', description: 'Installed 100A subpanel in detached barn/shop with overhead LED lighting and 240V welder outlets.', serviceType: 'Barn Subpanel' },
      { title: '20kW Standby Generator', neighborhood: 'Canterberry Crossing', description: 'Installed automatic propane standby generator for acreage property prone to winter storm power outages.', serviceType: 'Standby Generator' },
      { title: 'Exterior LED Flood & Security Lights', neighborhood: 'Stonegate', description: 'Installed motion-activated LED security floodlights around perimeter and illuminated entry pathways.', serviceType: 'Outdoor Lighting' },
    ],
    faqs: [
      { q: 'Can you run power underground to a detached barn or garage in Parker?', a: 'Yes. We handle underground trenching, conduit installation, wire sizing, and subpanel mounting for detached structures.' },
      { q: 'Is CORE Electric the utility provider in Parker?', a: 'Yes. CORE Electric Cooperative serves Parker. We coordinate directly with CORE service technicians for utility disconnects and meter approvals.' },
      { q: 'What size generator do I need for an acreage home in Parker?', a: 'Most Parker acreage homes require a 20kW to 24kW generator to run well pumps, HVAC systems, refrigeration, and lighting seamlessly.' },
    ],
    review: { name: 'Greg & Linda M.', location: 'Parker, CO', rating: 5, text: 'We live in The Pinery and had constant power blinks during storms. Qualified Electric installed whole-house surge protection and a subpanel for our workshop. Top tier service!' },
    nearbyCities: [
      { name: 'Castle Rock', slug: 'electrician-castle-rock-co' },
      { name: 'Centennial', slug: 'electrician-centennial-co' },
      { name: 'Aurora', slug: 'electrician-aurora-co' },
    ],
  },
  {
    slug: 'electrician-highlands-ranch-co',
    city: 'Highlands Ranch',
    state: 'CO',
    title: 'Licensed Electrician in Highlands Ranch, CO | Qualified Electric',
    h1: 'Expert Electricians in Highlands Ranch, CO',
    description: 'Expert Highlands Ranch electrician — dual Level 2 EV charging, kitchen electrical remodels, smart dimmers, and HOA-compliant exterior lighting.',
    metaDescription: 'Qualified Electric provides expert electrician services in Highlands Ranch, CO. EV chargers, kitchen lighting, panel upgrades, and smart switches. Call (720) 794-0714.',
    tagline: 'Clean, professional EV charging installations and modern electrical upgrades for Highlands Ranch HOA communities.',
    introParagraphs: [
      'Highlands Ranch master-planned communities — Westridge, Eastridge, Northridge, and Southridge — feature high-demand electrical systems. Qualified Electric provides white-glove residential electrical services tailored for Highlands Ranch residents.',
      'Our electricians specialize in dual EV Level 2 charger setups, modern kitchen lighting remodels, and smart home automation, ensuring all work complies with both Douglas County building codes and Highlands Ranch Community Association (HRCA) standards.',
    ],
    neighborhoods: ['Westridge', 'Eastridge', 'Northridge', 'Southridge', 'Firelight', 'Indigo Hill', 'Kentley Hills'],
    zipCodes: ['80126', '80129', '80130', '80163'],
    landmarks: ['Highlands Ranch Mansion', 'Chatfield State Park East entrance', 'Backcountry Wilderness Area', 'Town Center'],
    localUtility: 'Xcel Energy / CORE Electric',
    buildingDept: 'Douglas County Building Division & HRCA Rules',
    topServices: [
      { title: 'Highlands Ranch EV Charger Install', description: 'Dedicated Level 2 charger installations for Tesla, Rivian, BMW, and all EV models in Highlands Ranch garages.', linkSlug: 'ev-charger-installation-denver-co' },
      { title: 'Kitchen Electrical Remodeling', description: 'Island pendant lighting, undercabinet LEDs, GFCI backsplash outlets, and high-amp appliance circuits.', linkSlug: 'lighting-installation-denver-co' },
      { title: 'Whole-Home Smart Dimmers', description: 'Upgrade toggle switches to Lutron Caséta smart dimmers with smartphone and voice integration.', linkSlug: 'lighting-installation-denver-co' },
      { title: 'Electrical System Safety Inspection', description: 'Comprehensive electrical audits for home buyers and HRCA property sellers.', linkSlug: 'electrical-inspection-denver-co' },
    ],
    localProjects: [
      { title: 'Dual EV Level 2 Charging Station', neighborhood: 'Westridge', description: 'Installed 50A dedicated dual EV charging setup in 3-car garage with smart power sharing.', serviceType: 'EV Charging' },
      { title: 'Kitchen Remodel & Island Pendants', neighborhood: 'Southridge', description: 'Wired modern kitchen renovation with island pendant lights, GFCI backsplash outlets, and undercabinet LEDs.', serviceType: 'Kitchen Remodel' },
      { title: 'Whole-Home Smart Switch Retrofit', neighborhood: 'Northridge', description: 'Replaced 28 toggle switches with smart Wi-Fi dimmers integrated with smartphone controls.', serviceType: 'Smart Switches' },
    ],
    faqs: [
      { q: 'Do outdoor lighting upgrades in Highlands Ranch require HRCA approval?', a: 'Exterior light fixture replacements that match existing aesthetics usually do not require HRCA submittal, but major exterior additions might. We ensure all exterior work complies with HRCA architectural guidelines.' },
      { q: 'Can my Highlands Ranch panel support a Level 2 EV charger?', a: 'Most Highlands Ranch homes built after 1990 have 150A or 200A panels that can easily support a 40A or 50A EV charger circuit. We perform a quick load calculation during your estimate.' },
      { q: 'How clean is the installation process in Highlands Ranch homes?', a: 'We use drop cloths, shoe covers, and dust-containment equipment to protect your floors and walls during every service call.' },
    ],
    review: { name: 'Danielle C.', location: 'Highlands Ranch, CO', rating: 5, text: 'Super clean installation of our EV charger in Southridge. They respected our home, wore shoe covers, and explained everything clearly.' },
    nearbyCities: [
      { name: 'Littleton', slug: 'electrician-littleton-co' },
      { name: 'Centennial', slug: 'electrician-centennial-co' },
      { name: 'Castle Rock', slug: 'electrician-castle-rock-co' },
    ],
  },
  {
    slug: 'electrician-broomfield-co',
    city: 'Broomfield',
    state: 'CO',
    title: 'Licensed Electrician in Broomfield, CO | Qualified Electric',
    h1: 'Professional Electricians in Broomfield, CO',
    description: 'Licensed Broomfield electrician — 200A panel upgrades, basement electrical finishes, surge protection, and tech-corridor smart lighting.',
    metaDescription: 'Qualified Electric provides licensed electrician services in Broomfield, CO. Panel upgrades, basement wiring, surge protection, and smart lighting. Call (720) 794-0714.',
    tagline: 'High-capacity panel upgrades and modern electrical solutions across Broomfield tech-corridor neighborhoods.',
    introParagraphs: [
      'Broomfield\'s tech corridor and residential communities in Broadlands, Anthem, and McKay Landing feature modern homes with high electrical consumption. Qualified Electric provides top-tier electrical installation and repair services tailored for Broomfield homeowners.',
      'From upgrading 100A panels to 200A service for finished basements and EV charging to mounting panel-level surge suppressors, our certified electricians deliver prompt, reliable craftsmanship.',
    ],
    neighborhoods: ['Broadlands', 'Anthem', 'McKay Landing', 'Broomfield Town Center', 'Red Leaf', 'Miramonte', 'Wildgrass'],
    zipCodes: ['80020', '80021', '80023', '80038'],
    landmarks: ['FlatIron Crossing', 'Broomfield County Commons Park', '1STBANK Center area', 'Paul Derda Recreation Center'],
    localUtility: 'Xcel Energy (North Metro)',
    buildingDept: 'City & County of Broomfield Building Division',
    topServices: [
      { title: 'Broomfield Panel Upgrades', description: 'Upgrade outdated panels to 200A service to handle modern home additions, EV charging, and finished basements.', linkSlug: 'electrical-panel-upgrade-denver-co' },
      { title: 'Basement Finish Electrical Wiring', description: 'Complete electrical rough-in, subpanels, recessed lighting, and home theater circuits for finished basements.', linkSlug: 'residential-wiring-denver-co' },
      { title: 'Panel Surge Protection', description: 'Panel-mounted surge suppressors to shield sensitive electronics and home tech from voltage spikes.', linkSlug: 'surge-protection-denver-co' },
      { title: 'Interior Recessed LED Lighting', description: 'Energy-efficient recessed lighting installations for high ceilings and open floor plans.', linkSlug: 'lighting-installation-denver-co' },
    ],
    localProjects: [
      { title: '200A Electrical Panel Upgrade', neighborhood: 'Broadlands', description: 'Replaced outdated 100A electrical panel with 200A service, adding capacity for home office and future EV charger.', serviceType: 'Panel Upgrade' },
      { title: 'Finished Basement Electrical Wiring', neighborhood: 'Anthem', description: 'Wired 1,200 sq ft basement finish with subpanel, wet bar outlets, media room recessed lights, and smoke detectors.', serviceType: 'Basement Wiring' },
      { title: 'Whole-House Surge Protector Install', neighborhood: 'McKay Landing', description: 'Mounted panel-level surge protector to shield sensitive electronics and high-end appliances.', serviceType: 'Surge Protection' },
    ],
    faqs: [
      { q: 'Do basement electrical finishes in Broomfield require permits?', a: 'Yes. The City & County of Broomfield Building Division requires electrical permits and rough-in/final inspections for basement finishing.' },
      { q: 'How long does a 200A panel upgrade take in Broomfield?', a: 'Most panel upgrades are completed in a single day, with power restored by late afternoon.' },
      { q: 'Can you install surge protection at the panel in Broomfield homes?', a: 'Yes! We install Type 2 panel-mounted surge suppressors that protect every device in your home.' },
    ],
    review: { name: 'Steven P.', location: 'Broomfield, CO', rating: 5, text: 'Upgraded our electrical panel from 100 to 200 amps in Broadlands. The city inspection passed with zero issues. Highly recommend Qualified Electric!' },
    nearbyCities: [
      { name: 'Westminster', slug: 'electrician-westminster-co' },
      { name: 'Arvada', slug: 'electrician-arvada-co' },
      { name: 'Thornton', slug: 'electrician-thornton-co' },
    ],
  },
];

export type Testimonial = {
  name: string;
  location: string;
  rating: number;
  text: string;
  badge?: string;
  date?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Amanda Hart',
    location: 'Denver, CO',
    rating: 5,
    text: 'Very knowledgeable, on time, trustworthy and did an amazing job hanging up all our lights and bedroom fan! I would recommend Qualified Electric for any electric job moving forward!',
    badge: 'Local Guide · Verified Google Review',
    date: '1 year ago',
  },
  {
    name: 'Deborah Vela',
    location: 'Denver, CO',
    rating: 5,
    text: 'Colton and his team wired our very large home and did a great job. We were impressed with his experience, knowledge and professionalism as well as completing the job in a timely fashion. We would recommend his services.',
    badge: 'Local Guide · Verified Google Review',
    date: '1 year ago',
  },
  {
    name: 'Barb Edwards',
    location: 'Denver, CO',
    rating: 5,
    text: 'Colton was a pleasure to work with. He was able to answer all of my questions. He showed up when he said he was going to be here. He had some very good suggestions.',
    badge: 'Verified Google Review',
    date: '1 year ago',
  },
  {
    name: 'Austin Chipman',
    location: 'Denver, CO',
    rating: 5,
    text: 'Randy and Colton are awesome! Did a great job upgrading some lights in my house and reasonably priced.',
    badge: 'Verified Google Review',
    date: '1 year ago',
  },
  {
    name: 'Joey Olson',
    location: 'Denver, CO',
    rating: 5,
    text: 'Randy did a great job with my electrical needs! Clean, efficient and on time! I highly recommend.',
    badge: 'Verified Google Review',
    date: '1 year ago',
  },
  {
    name: 'Robert Berglund',
    location: 'Denver, CO',
    rating: 5,
    text: 'Great company! Colton and Randy were knowledgeable and professional. Would definitely recommend them to anyone who asked.',
    badge: 'Verified Google Review',
    date: '1 year ago',
  },
  {
    name: 'Ryan Edwards',
    location: 'Denver, CO',
    rating: 5,
    text: "I've worked with Qualified Electric on several projects and they're always professional. They're a great team to work with.",
    badge: 'Verified Google Review',
    date: '1 year ago',
  },
  {
    name: 'Anthony SanFilippo',
    location: 'Denver, CO',
    rating: 5,
    text: 'Qualified Electric is very professional and I was very happy with the work! I would recommend them to anyone looking for an electrician!!',
    badge: 'Verified Google Review',
    date: '1 year ago',
  },
  {
    name: 'Dylan Stanton',
    location: 'Denver, CO',
    rating: 5,
    text: 'Great guy to work with has a great attitude and knows what he is doing great pricing highly recommend.',
    badge: 'Verified Google Review',
    date: '1 year ago',
  },
  {
    name: 'Marsh Gillespie',
    location: 'Denver, CO',
    rating: 5,
    text: 'Veteran owned and operated great service! Very reasonable and on time! The price was very affordable as well!!!',
    badge: 'Verified Google Review',
    date: '1 year ago',
  },
  {
    name: 'Colin Knox',
    location: 'Denver, CO',
    rating: 5,
    text: 'Detail oriented. Great work would highly recommend these professionals.',
    badge: 'Verified Google Review',
    date: '1 year ago',
  },
  {
    name: 'Alex Panger',
    location: 'Denver, CO',
    rating: 5,
    text: 'Randy was timely, and very professional.',
    badge: 'Verified Google Review',
    date: '1 year ago',
  },
  {
    name: 'Brandon Kemper',
    location: 'Denver, CO',
    rating: 5,
    text: 'Great work and great people!!',
    badge: 'Verified Google Review',
    date: '1 year ago',
  },
  {
    name: 'Terri Lentz',
    location: 'Denver, CO',
    rating: 5,
    text: 'Prompt, professional, and reliable electrical service for our home. Highly recommended team!',
    badge: 'Verified Google Review',
    date: '1 year ago',
  },
  {
    name: 'Adam Kastning',
    location: 'Denver, CO',
    rating: 5,
    text: 'Top quality electrical work, great pricing, and excellent communication throughout the job!',
    badge: 'Verified Google Review',
    date: '1 year ago',
  },
];

export type FAQ = {
  q: string;
  a: string;
};

export const homepageFaqs: FAQ[] = [
  { q: 'What electrical services do you offer in Denver, CO?', a: 'We offer a full range of residential electrical services in Denver, including electrical repair, panel upgrades, wiring, outlet and switch repair, lighting installation, ceiling fan installation, EV charger installation, electrical inspections, surge protection, generator installation, and troubleshooting.' },
  { q: 'How quickly can you come out to my home?', a: 'We strive to offer same-day and next-day appointments for most electrical service calls in Denver. For urgent safety issues, call us at (720) 794-0714 and we\'ll prioritize your call.' },
  { q: 'Are your electricians licensed and insured?', a: 'Yes. All of our electricians are fully licensed to perform electrical work in Colorado and carry comprehensive insurance for your protection and peace of mind.' },
  { q: 'Do you provide free estimates?', a: 'Yes, we provide free, upfront estimates for electrical projects. You\'ll know the full cost before any work begins — no surprises, no hidden fees.' },
  { q: 'What areas do you serve around Denver?', a: 'We serve Denver and all surrounding areas including Aurora, Lakewood, Littleton, Englewood, Castle Rock, Arvada, Westminster, Thornton, Centennial, Parker, Highlands Ranch, and Broomfield.' },
  { q: 'Do you handle emergency electrical repairs?', a: 'Yes. If you have an urgent electrical safety issue — sparking, burning smells, or a complete power loss — call us immediately at (720) 794-0714 and we\'ll respond as quickly as possible.' },
  { q: 'How much does an electrical panel upgrade cost?', a: 'Panel upgrade costs vary based on your current panel, desired amperage, and whether your service entrance needs updating. We provide free estimates with transparent pricing — call (720) 794-0714 to schedule yours.' },
  { q: 'Can you install an EV charger at my home?', a: 'Absolutely. We install Level 2 EV chargers for all electric vehicle brands, including Tesla, Chevy, Ford, and more. We\'ll assess your panel capacity and install a dedicated 240V circuit for safe, fast home charging.' },
];

export const problemsWeSolve = [
  { icon: 'Zap', title: 'Flickering Lights', description: 'Lights that flicker or dim when appliances turn on often indicate a loose connection or voltage issue. We diagnose and fix the root cause.' },
  { icon: 'AlertTriangle', title: 'Breakers That Keep Tripping', description: 'Frequently tripped breakers mean your circuit is overloaded or there\'s a short. We identify the problem and fix it safely.' },
  { icon: 'Plug', title: 'Dead Outlets', description: 'Outlets that have stopped working can be caused by tripped GFCIs, loose wires, or failed receptacles. We trace the issue and repair it.' },
  { icon: 'Thermometer', title: 'Warm Switches or Outlets', description: 'A warm switch or outlet is a fire hazard. We inspect the wiring and replace damaged components before they cause damage.' },
  { icon: 'Lightbulb', title: 'Old or Outdated Wiring', description: 'Homes with aluminum or knob-and-tube wiring are at higher risk for fires. We rewire homes to modern safety standards.' },
  { icon: 'Battery', title: 'Not Enough Outlets', description: 'Relying on power strips and extension cords is unsafe. We install new outlets exactly where you need them.' },
  { icon: 'Zap', title: 'No Power to Part of Your Home', description: 'When a circuit goes completely dead, our troubleshooting experts find the break or fault and restore power safely.' },
  { icon: 'ShieldCheck', title: 'No Surge Protection', description: 'Without whole-home surge protection, one power surge can destroy thousands in electronics. We install protection at your panel.' },
];

export const whyChooseUs = [
  { icon: 'ShieldCheck', title: 'Licensed & Insured', description: 'Every electrician on our team is fully licensed in Colorado and insured for your protection.' },
  { icon: 'Clock', title: 'Fast Response', description: 'Same-day and next-day appointments available. We respect your time and show up when we say we will.' },
  { icon: 'BadgeDollarSign', title: 'Upfront Pricing', description: 'Free estimates with transparent, upfront pricing. You know the full cost before any work begins.' },
  { icon: 'Award', title: 'Quality Workmanship', description: 'Every job — big or small — is done to the highest safety and quality standards, no shortcuts.' },
  { icon: 'MapPin', title: 'Local Denver Experts', description: 'We know Denver\'s building codes, neighborhoods, and homes inside and out. Local service you can trust.' },
  { icon: 'PhoneCall', title: 'Always Available', description: 'Call us anytime at (720) 794-0714. We\'re here when you need us, ready to help.' },
];

export const projectGallery = [
  { image: 'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Electrical panel upgrade in Denver', title: 'Panel Upgrade', category: 'Panel Upgrade' },
  { image: 'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Recessed lighting installation in Denver', title: 'Recessed Lighting', category: 'Lighting' },
  { image: 'https://images.pexels.com/photos/5391509/pexels-photo-5391509.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'EV charger installation in Denver', title: 'EV Charger Install', category: 'EV Charging' },
  { image: 'https://images.pexels.com/photos/3615735/pexels-photo-3615735.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Residential wiring project in Denver', title: 'Whole-Home Rewiring', category: 'Wiring' },
  { image: 'https://images.pexels.com/photos/6835109/pexels-photo-6835109.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Ceiling fan installation in Denver', title: 'Ceiling Fan Install', category: 'Fans' },
  { image: 'https://images.pexels.com/photos/18816918/pexels-photo-18816918.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Generator installation in Denver', title: 'Standby Generator', category: 'Generators' },
];
