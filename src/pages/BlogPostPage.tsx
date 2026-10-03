import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, Calendar, Check, ChevronRight, Clock, HelpCircle, Phone, Share2, ShieldCheck, User, Zap } from 'lucide-react';
import { blogPosts, BlogPost } from '@/data/blog-data';
import SEO, { faqSchema, localBusinessSchema } from '@/components/SEO';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post: BlogPost | undefined = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts.filter((p) => post.relatedSlugs.includes(p.slug));

  return (
    <>
      <SEO
        title={post.metaTitle}
        description={post.metaDescription}
        canonical={`/blog/${post.slug}`}
        ogImage={post.heroImage}
        schema={[
          localBusinessSchema,
          faqSchema(post.faqs),
        ]}
      />

      {/* Hero Header */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 bg-ink-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={post.heroImage}
            alt={post.heroAlt}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 to-transparent" />
        </div>
        <div className="absolute inset-0 bg-grid-dark bg-grid opacity-20" />

        <div className="container-pad relative">
          <nav className="flex items-center gap-2 text-sm text-ink-400 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-electric-400 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/blog" className="hover:text-electric-400 transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-ink-200 truncate max-w-xs sm:max-w-md">{post.title}</span>
          </nav>

          <div className="max-w-3xl">
            <span className="px-3.5 py-1.5 rounded-full bg-electric-500/20 text-electric-400 text-xs font-extrabold tracking-wide uppercase border border-electric-500/30">
              {post.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mt-5">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-ink-800 text-sm text-ink-300">
              <div className="flex items-center gap-2.5">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-8 h-8 rounded-full object-cover border border-electric-400"
                />
                <div>
                  <span className="font-semibold text-white block leading-none">{post.author.name}</span>
                  <span className="text-xs text-ink-400">{post.author.role}</span>
                </div>
              </div>

              <span className="flex items-center gap-1 text-ink-400">
                <Calendar className="w-4 h-4 text-electric-400" /> {post.publishDate}
              </span>

              <span className="flex items-center gap-1 text-ink-400">
                <Clock className="w-4 h-4 text-electric-400" /> {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Article Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-pad">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-start">
            <article className="prose prose-lg max-w-none">
              {/* Summary Lead */}
              <div className="p-6 rounded-2xl bg-electric-50 border border-electric-200 text-ink-800 font-medium text-lg leading-relaxed mb-10">
                {post.summary}
              </div>

              {/* Table of Contents */}
              {post.tableOfContents.length > 0 && (
                <div className="p-6 rounded-2xl bg-ink-50 border border-ink-200 mb-12">
                  <p className="font-display font-bold text-ink-900 text-base mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-electric-600" /> Table of Contents
                  </p>
                  <ul className="space-y-2 text-sm">
                    {post.tableOfContents.map((toc) => (
                      <li key={toc.id}>
                        <a
                          href={`#${toc.id}`}
                          className="text-ink-600 hover:text-electric-700 font-medium transition-colors flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-electric-500" />
                          {toc.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Sections */}
              {post.contentSections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-32 mb-12">
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-ink-900 mb-4 border-b border-ink-100 pb-3">
                    {section.heading}
                  </h2>

                  <div className="space-y-4 text-ink-700 leading-relaxed text-base lg:text-lg">
                    {section.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>

                  {section.bulletPoints && (
                    <ul className="my-6 space-y-2.5">
                      {section.bulletPoints.map((bp, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-ink-800 text-base font-medium">
                          <span className="w-5 h-5 rounded-full bg-electric-500 text-ink-950 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3" strokeWidth={3} />
                          </span>
                          <span>{bp}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.calloutBox && (
                    <div className="my-6 p-6 rounded-2xl bg-ink-900 text-white relative overflow-hidden">
                      <div className="w-10 h-10 rounded-xl bg-electric-500 text-ink-950 flex items-center justify-center mb-3">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <h4 className="font-display font-bold text-lg text-white mb-2">{section.calloutBox.title}</h4>
                      <p className="text-ink-300 text-sm leading-relaxed">{section.calloutBox.text}</p>
                    </div>
                  )}

                  {section.tableData && (
                    <div className="my-6 overflow-x-auto rounded-2xl border border-ink-200">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-ink-900 text-white font-display">
                          <tr>
                            {section.tableData.headers.map((h, idx) => (
                              <th key={idx} className="px-5 py-3.5 font-bold">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-ink-100 bg-white">
                          {section.tableData.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-ink-50 transition-colors">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="px-5 py-3.5 text-ink-700 font-medium">{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}
            </article>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 space-y-8">
              {/* Call Contractor Widget */}
              <div className="rounded-3xl bg-ink-900 p-7 text-white relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-electric-500 flex items-center justify-center mb-5">
                  <Phone className="w-6 h-6 text-ink-950" />
                </div>
                <h3 className="font-display font-bold text-xl text-white">Need Electrical Work in Denver?</h3>
                <p className="text-ink-300 text-sm mt-2 leading-relaxed">
                  Talk directly with a licensed master electrician. Free upfront estimates and fast local service.
                </p>
                <a href="tel:+17207940714" className="btn-primary w-full mt-6">
                  <Phone className="w-4 h-4" /> Call (720) 794-0714
                </a>
              </div>

              {/* Author Info */}
              <div className="rounded-3xl bg-ink-50 p-6 border border-ink-200">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-electric-500"
                  />
                  <div>
                    <h4 className="font-display font-bold text-ink-900 text-base">{post.author.name}</h4>
                    <p className="text-xs text-ink-500">{post.author.role}</p>
                  </div>
                </div>
                <p className="text-xs text-ink-600 leading-relaxed">
                  Qualified Electric is a licensed electrical contractor serving Denver, CO. All advice is verified against Colorado electrical codes (NEC).
                </p>
              </div>

              {/* Related Articles */}
              {relatedPosts.length > 0 && (
                <div className="rounded-3xl bg-white p-6 border border-ink-200 shadow-sm">
                  <h4 className="font-display font-bold text-ink-900 text-base mb-4 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-electric-600" /> Related Cost Guides
                  </h4>
                  <div className="space-y-4">
                    {relatedPosts.map((rel) => (
                      <Link
                        key={rel.slug}
                        to={`/blog/${rel.slug}`}
                        className="group block pb-3 border-b border-ink-100 last:border-0 last:pb-0"
                      >
                        <span className="text-xs font-bold text-electric-600 uppercase">{rel.category}</span>
                        <h5 className="font-bold text-sm text-ink-900 group-hover:text-electric-700 transition-colors mt-0.5 leading-snug">
                          {rel.title}
                        </h5>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* Article FAQs */}
      {post.faqs.length > 0 && (
        <section className="py-20 bg-ink-50 border-t border-ink-100">
          <div className="container-pad max-w-4xl">
            <div className="text-center mb-12">
              <span className="eyebrow"><span className="w-8 h-px bg-electric-600" /> Article FAQs</span>
              <h2 className="section-title mt-4">Frequently Asked Questions</h2>
            </div>
            <FAQAccordion faqs={post.faqs} />
          </div>
        </section>
      )}

      <CTASection
        title="Ready to discuss your Denver electrical project?"
        subtitle="Contact Qualified Electric today for expert advice, transparent pricing, and fast local service."
      />
    </>
  );
}
