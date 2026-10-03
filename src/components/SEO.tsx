import { useEffect } from 'react';
import { PHONE_DISPLAY, BUSINESS_NAME, MAIN_LOCATION, MAPS_URL, services, serviceAreas } from '@/data/site-data';

type SEOProps = {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  schema?: object | object[];
};

const SITE_URL = 'https://qualifiedelectricdenver.com';

export default function SEO({ title, description, canonical, ogImage, schema }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:image', ogImage || 'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&w=1200', 'property');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage || 'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&w=1200');

    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonical ? `${SITE_URL}${canonical}` : SITE_URL);

    const existingSchema = document.querySelectorAll('script[data-seo-schema]');
    existingSchema.forEach((s) => s.remove());

    if (schema) {
      const schemas = Array.isArray(schema) ? schema : [schema];
      schemas.forEach((s) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo-schema', 'true');
        script.textContent = JSON.stringify(s);
        document.head.appendChild(script);
      });
    }

    window.scrollTo(0, 0);
  }, [title, description, canonical, ogImage, schema]);

  return null;
}

export { SITE_URL };

/**
 * Rich LocalBusiness / ElectricalContractor Schema
 * Implements all requested properties:
 * - name, url, telephone
 * - address (eligible business location in Denver, CO)
 * - areaServed (Array of Denver metro cities)
 * - openingHoursSpecification (24/7 emergency response)
 * - sameAs (Google Maps Business Link)
 * - hasOfferCatalog (Full 13-service offer catalog)
 */
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ElectricalContractor',
  '@id': `${SITE_URL}/#organization`,
  name: BUSINESS_NAME,
  url: SITE_URL,
  telephone: PHONE_DISPLAY,
  image: 'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&w=1200',
  priceRange: '$$',
  description: `Licensed residential electrician serving ${MAIN_LOCATION} and surrounding metro communities. 200A panel upgrades, home rewiring, EV charger installation, outlet repairs, and emergency electrical service.`,
  sameAs: [MAPS_URL],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Denver',
    addressRegion: 'CO',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 39.7392,
    longitude: -104.9903,
  },
  areaServed: serviceAreas.map((area) => ({
    '@type': 'City',
    name: area.name,
    state: 'CO',
  })),
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Residential Electrical Services Catalog',
    itemListElement: services.map((service, index) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.h1,
        description: service.description,
        url: `${SITE_URL}/${service.slug}`,
      },
      position: index + 1,
    })),
  },
};

/**
 * Service Schema for individual service pages
 */
export const serviceSchema = (serviceName: string, description: string, slug: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: serviceName,
  description,
  provider: {
    '@type': 'ElectricalContractor',
    name: BUSINESS_NAME,
    telephone: PHONE_DISPLAY,
    url: SITE_URL,
  },
  areaServed: serviceAreas.map((area) => ({
    '@type': 'City',
    name: area.name,
    state: 'CO',
  })),
  url: `${SITE_URL}/${slug}`,
});

/**
 * FAQ Schema for rich search snippet FAQ dropdowns
 */
export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

/**
 * Breadcrumb Schema for search result path navigation
 */
export const breadcrumbSchema = (items: { name: string; item: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: it.name,
    item: it.item.startsWith('http') ? it.item : `${SITE_URL}${it.item}`,
  })),
});

/**
 * Article Schema for Blog & Educational guides
 */
export const articleSchema = (title: string, description: string, slug: string, datePublished: string = '2026-01-15') => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: title,
  description,
  url: `${SITE_URL}/blog/${slug}`,
  datePublished,
  author: {
    '@type': 'Organization',
    name: BUSINESS_NAME,
    url: SITE_URL,
  },
  publisher: {
    '@type': 'Organization',
    name: BUSINESS_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/favicon.svg`,
    },
  },
});
