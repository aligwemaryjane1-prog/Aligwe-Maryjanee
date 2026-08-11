import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/dentalData';
import { Sparkles, Clock, ArrowRight, Search, BookOpen, User } from 'lucide-react';

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Educational Articles' },
    { id: 'Cosmetic Dentistry', label: 'Cosmetic Dentistry' },
    { id: 'Dental Implants', label: 'Dental Implants' },
    { id: 'Preventive Care', label: 'Preventive Care' }
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-16 space-y-16">
      {/* Blog Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-900/60 border border-sky-700/50 text-sky-300 text-xs font-mono uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5 text-sky-400" />
            <span>PATIENT EDUCATION &amp; RESOURCE HUB</span>
          </div>
          <h1 className="font-serif-title text-4xl sm:text-5xl font-semibold tracking-tight">
            The Aura Dental <span className="italic font-normal text-sky-300">Journal</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg font-sans leading-relaxed">
            Evidence-based clinical insights, oral care guides, and smile enhancement advice authored by our clinical team.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
          
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'bg-slate-100/80 text-slate-700 hover:bg-slate-200/70'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative shrink-0 w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
            />
          </div>

        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 space-y-4">
            <p className="text-slate-500 font-medium">No articles found matching your criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-sky-600 text-white text-xs font-semibold rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-mono tracking-wider uppercase">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                      <span>{post.date}</span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-sky-600" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-xl text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100/80 mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <User className="w-3.5 h-3.5 text-sky-600" />
                    <span>{post.author}</span>
                  </div>

                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-1 text-sky-700 font-semibold text-xs hover:text-sky-800"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
