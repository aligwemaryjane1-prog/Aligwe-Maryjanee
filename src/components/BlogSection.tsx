import React, { useState } from 'react';
import { BookOpen, Search, Clock, ArrowRight, X, User, Calendar, Tag, Sparkles } from 'lucide-react';
import { BLOG_POSTS } from '../data/dentalData';
import { BlogPost } from '../types/dental';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeTag, setActiveTag] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const tags = ['all', 'Cosmetic Dentistry', 'Dental Implants', 'Preventive Care', 'Invisalign'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesTag = activeTag === 'all' || post.category === activeTag || post.tags.includes(activeTag);
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <section id="blog" className="py-20 bg-[#FAF9F6] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-mono uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-sky-400" />
            <span>DENTAL EDUCATION &amp; RESOURCES</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-semibold tracking-tight">
            Oral Health Guides &amp; Insights
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Evidence-based advice from our dental specialists on maintaining healthy enamel, navigating cosmetic options, and caring for restorations.
          </p>

          {/* Search & Tag Filter */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 max-w-xl mx-auto">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
              />
            </div>
            <div className="flex items-center gap-1 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium shrink-0 transition-colors cursor-pointer ${
                    activeTag === tag
                      ? 'bg-sky-600 text-white'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {tag === 'all' ? 'All Guides' : tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden clinical-shadow hover:clinical-shadow-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 text-white text-[10px] font-mono">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-slate-500 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-sky-600" />
                      {post.date}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-sky-600" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-sky-700 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-600">
                <div className="text-[11px] font-medium text-slate-500">By {post.author}</div>
                <button
                  onClick={() => setSelectedPost(post)}
                  className="inline-flex items-center gap-1 hover:text-sky-700 cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-3xl overflow-hidden relative my-8">
            
            <div className="relative h-64 overflow-hidden">
              <img src={selectedPost.imageUrl} alt={selectedPost.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-mono">
                  {selectedPost.category}
                </span>
                <h2 className="font-heading font-bold text-xl sm:text-2xl">{selectedPost.title}</h2>
                <div className="text-xs text-slate-300 font-mono">
                  By {selectedPost.author} ({selectedPost.authorRole}) &bull; {selectedPost.date}
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4 max-h-[60vh] overflow-y-auto text-slate-800 text-xs sm:text-sm leading-relaxed">
              <div className="whitespace-pre-line leading-relaxed space-y-4">
                {selectedPost.content}
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-1.5">
                {selectedPost.tags.map(t => (
                  <span key={t} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-[11px]">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 text-right">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-5 py-2 rounded-xl bg-slate-900 text-white font-semibold text-xs cursor-pointer"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
