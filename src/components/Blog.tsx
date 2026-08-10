import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowUpRight, Clock, Calendar, BookOpen } from 'lucide-react';
import { BLOG_POSTS_DATA } from '../data/portfolioData';
import { BlogPost } from '../types/portfolio';

export const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticleModal, setActiveArticleModal] = useState<BlogPost | null>(null);

  const categories = ['All', 'Website Strategy', 'UX', 'SEO', 'WordPress', 'Shopify', 'Business Growth'];

  const filteredPosts = selectedCategory === 'All'
    ? BLOG_POSTS_DATA
    : BLOG_POSTS_DATA.filter((p) => p.category === selectedCategory);

  const featuredPost = BLOG_POSTS_DATA.find((p) => p.featured) || BLOG_POSTS_DATA[0];

  return (
    <section id="insights" className="py-16 md:py-24 bg-[#FAF8F5] relative border-t border-[#E9E9E9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10 md:space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111111]/[0.04] border border-[#E9E9E9] text-xs font-mono font-medium text-[#111111]">
              <Sparkles className="w-3.5 h-3.5 text-[#0A66FF]" />
              <span>THOUGHT LEADERSHIP &amp; STRATEGY</span>
            </div>

            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#111111] tracking-tight">
              Insights &amp; Strategy Articles
            </h2>

            <p className="text-base text-[#666666]">
              In-depth articles on website conversion design, SEO architecture, WordPress/Shopify engineering, and UX performance.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#111111] text-white shadow-sm'
                    : 'bg-white text-[#666666] border border-[#E9E9E9] hover:border-[#111111]/40 hover:text-[#111111]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Editorial Post (when All or Website Strategy selected) */}
        {selectedCategory === 'All' && featuredPost && (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl bg-white border border-[#E9E9E9] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 cursor-pointer hover:border-[#0A66FF]/40 transition-all duration-300"
            onClick={() => setActiveArticleModal(featuredPost)}
          >
            <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-[440px] overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs font-mono text-[#666666]">
                  <span className="px-3 py-1 rounded-full bg-[#0A66FF]/10 text-[#0A66FF] font-semibold">
                    {featuredPost.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-[#111111] leading-snug group-hover:text-[#0A66FF] transition-colors">
                  {featuredPost.title}
                </h3>

                <p className="text-sm text-[#666666] leading-relaxed">
                  {featuredPost.summary}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-[#E9E9E9]">
                <div className="flex items-center gap-3">
                  <img
                    src={featuredPost.author.avatar}
                    alt={featuredPost.author.name}
                    referrerPolicy="no-referrer"
                    className="w-9 h-9 rounded-full object-cover border border-[#111111]"
                  />
                  <div>
                    <div className="font-heading font-bold text-xs text-[#111111]">
                      {featuredPost.author.name}
                    </div>
                    <div className="text-[11px] text-[#666666] font-mono">
                      Website Developer &amp; Strategist
                    </div>
                  </div>
                </div>

                <div className="w-10 h-10 rounded-full bg-[#111111]/[0.05] group-hover:bg-[#0A66FF] group-hover:text-white transition-colors flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          </motion.article>
        )}

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group rounded-3xl bg-white border border-[#E9E9E9] shadow-md hover:shadow-xl hover:border-[#0A66FF]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer"
              onClick={() => setActiveArticleModal(post)}
            >
              <div className="space-y-5">
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="px-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs font-mono text-[#666666]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h4 className="font-heading font-bold text-xl text-[#111111] group-hover:text-[#0A66FF] transition-colors line-clamp-2">
                    {post.title}
                  </h4>

                  <p className="text-xs text-[#666666] leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-6 border-t border-[#E9E9E9] flex items-center justify-between mt-6">
                <span className="text-xs font-mono font-medium text-[#111111] group-hover:text-[#0A66FF] flex items-center gap-1">
                  <span>Read Essay</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>

                <BookOpen className="w-4 h-4 text-[#666666]" />
              </div>
            </motion.article>
          ))}
        </div>

      </div>

      {/* Reading Modal */}
      {activeArticleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#111111]/75 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-3xl bg-white rounded-3xl p-6 md:p-10 border border-[#E9E9E9] shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setActiveArticleModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#111111]/[0.05] hover:bg-[#111111] hover:text-white transition-colors"
            >
              ✕
            </button>

            <div className="space-y-3">
              <span className="px-3.5 py-1 rounded-full bg-[#0A66FF]/10 text-[#0A66FF] text-xs font-mono font-bold">
                {activeArticleModal.category}
              </span>

              <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-[#111111]">
                {activeArticleModal.title}
              </h3>

              <div className="flex items-center gap-4 text-xs font-mono text-[#666666]">
                <span>By {activeArticleModal.author.name}</span>
                <span>•</span>
                <span>{activeArticleModal.date}</span>
                <span>•</span>
                <span>{activeArticleModal.readTime}</span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-[16/9]">
              <img
                src={activeArticleModal.image}
                alt={activeArticleModal.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose text-sm text-[#333333] leading-relaxed space-y-4 font-sans border-t border-[#E9E9E9] pt-6">
              <p className="text-base font-medium text-[#111111]">
                {activeArticleModal.summary}
              </p>
              <p>
                When building modern high-ticket websites for enterprise clients or luxury e-commerce brands, speed and UX hierarchy are non-negotiable. Standard off-the-shelf page builder templates often introduce unnecessary DOM complexity, slow script execution, and unoptimized layout shifts.
              </p>
              <p>
                By engineering custom WordPress themes, tailored Elementor widgets, and lightweight Shopify Liquid code, we eliminate visual bloat while maintaining effortless drag-and-drop content controls for client marketing teams.
              </p>
              <blockquote className="p-4 rounded-xl bg-[#FAF8F5] border-l-4 border-[#0A66FF] italic font-heading text-[#111111]">
                "Design is not just what it looks like and feels like. Design is how it converts."
              </blockquote>
            </div>

            <div className="pt-4 border-t border-[#E9E9E9] flex justify-end">
              <button
                onClick={() => setActiveArticleModal(null)}
                className="px-6 py-2.5 rounded-full bg-[#111111] text-white text-xs font-medium hover:bg-[#0A66FF] transition-colors"
              >
                Close Article
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};
