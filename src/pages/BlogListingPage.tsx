import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Calendar, Clock, Search, ShieldCheck, Zap } from 'lucide-react';
import { blogPosts, BlogPost } from '@/data/blog-data';
import SEO, { localBusinessSchema } from '@/components/SEO';
import CTASection from '@/components/CTASection';

export default function BlogListingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Cost Guides', 'Home Safety', 'EV Charging', 'Wiring & Safety', "Buyer's Guide"];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO
        title="Denver Electrical Advice & Cost Guides | Qualified Electric Blog"
        description="Expert guides on electrician costs in Denver, CO, electrical panel upgrades, EV charger installation, rewiring signs, and choosing a licensed electrician."
        canonical="/blog"
        schema={localBusinessSchema}
      />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 lg:pt-40 lg:pb-24 bg-ink-950 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?auto=compress&cs=tinysrgb&w=2000"
            alt="Denver electrical guide and resources"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 to-transparent" />
        </div>
        <div className="absolute inset-0 bg-grid-dark bg-grid opacity-20" />

        <div className="container-pad relative">
          <div className="max-w-3xl">
            <span className="eyebrow-light">
              <span className="w-8 h-px bg-electric-400" /> Knowledge & Advice
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mt-5">
              Denver Electrical Advice & <span className="text-electric-400">Cost Guides</span>
            </h1>
            <p className="text-xl text-ink-200 leading-relaxed mt-6 max-w-2xl">
              Transparent price breakdowns, safety warning signs, EV charging installation advice, and homeowner tips written by licensed Denver master electricians.
            </p>

            {/* Search Input */}
            <div className="mt-8 max-w-xl relative">
              <Search className="w-5 h-5 text-ink-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics (e.g., panel upgrade cost, EV charger, rewiring)..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-ink-900/90 border border-ink-700 text-white placeholder:text-ink-400 focus:outline-none focus:border-electric-400 transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Bar */}
      <section className="bg-ink-900 border-b border-ink-800 py-4">
        <div className="container-pad overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-electric-500 text-ink-950 shadow-md'
                    : 'bg-ink-800 text-ink-300 hover:bg-ink-700 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Listing Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-pad">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-ink-50 rounded-3xl border border-ink-100 max-w-2xl mx-auto">
              <BookOpen className="w-12 h-12 text-ink-400 mx-auto mb-4" />
              <h3 className="font-display font-bold text-2xl text-ink-900">No articles found</h3>
              <p className="text-ink-500 mt-2">Try adjusting your search query or switching categories.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="btn-dark mt-6"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-3xl overflow-hidden border border-ink-100 shadow-sm hover:shadow-2xl hover:border-electric-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={post.heroImage}
                        alt={post.heroAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-ink-950/80 backdrop-blur-md text-electric-400 text-xs font-bold border border-white/10">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs text-ink-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" /> {post.publishDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> {post.readTime}
                        </span>
                      </div>

                      <h2 className="font-display font-bold text-xl text-ink-900 group-hover:text-electric-700 transition-colors leading-snug">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>

                      <p className="text-sm text-ink-500 leading-relaxed mt-3 line-clamp-3">
                        {post.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-ink-100/60 mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-7 h-7 rounded-full object-cover border border-ink-200"
                      />
                      <span className="text-xs font-medium text-ink-600">{post.author.name}</span>
                    </div>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-electric-600 font-bold text-sm group-hover:gap-2 transition-all"
                    >
                      Read Article <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Trust & Guarantee Callout */}
      <section className="py-16 bg-ink-50 border-t border-ink-100">
        <div className="container-pad">
          <div className="max-w-4xl mx-auto rounded-3xl bg-ink-900 p-8 lg:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 text-electric-400 font-bold text-sm mb-2">
                <ShieldCheck className="w-5 h-5" /> Written by Denver Master Electricians
              </div>
              <h3 className="font-display font-bold text-2xl">Have a specific electrical question?</h3>
              <p className="text-ink-300 text-sm mt-2 leading-relaxed">
                Our licensed electricians are available to inspect your electrical system and provide upfront quotes.
              </p>
            </div>
            <a href="tel:+17207940714" className="btn-primary whitespace-nowrap">
              <Zap className="w-4 h-4" /> Speak With an Electrician
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Need professional electrical work in Denver?"
        subtitle="Call Qualified Electric today for safe, reliable electrical repair, panel upgrades, and EV charging."
      />
    </>
  );
}
