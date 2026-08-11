import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS, CLINIC_INFO } from '../data/dentalData';
import { ArrowLeft, Clock, User, Calendar, BookOpen, Share2, Tag, ArrowRight } from 'lucide-react';

export const BlogArticlePage: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();

  const post = BLOG_POSTS.find((p) => p.id === articleId || p.slug === articleId);

  if (!post) {
    return (
      <div className="pt-32 pb-24 max-w-3xl mx-auto px-4 text-center space-y-6">
        <h1 className="font-serif-title text-3xl font-bold text-slate-900">Article Not Found</h1>
        <p className="text-slate-600">The requested blog post could not be located in our education journal.</p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-600 text-white font-semibold text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </Link>
      </div>
    );
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="pt-24 pb-16 space-y-12">
      {/* Article Header Banner */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sky-300 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Education Journal</span>
          </Link>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-900/80 border border-sky-700/60 text-sky-300 text-[11px] font-mono uppercase tracking-widest">
              <BookOpen className="w-3.5 h-3.5 text-sky-400" />
              <span>{post.category}</span>
            </div>

            <h1 className="font-serif-title text-3xl sm:text-5xl font-semibold tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-2 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-sky-400" />
                <span className="font-semibold text-white">{post.author}</span>
                <span className="text-slate-400">({post.authorRole})</span>
              </div>
              <span>&bull;</span>
              <div className="flex items-center gap-1.5 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                <span>{post.readTime}</span>
              </div>
              <span>&bull;</span>
              <span className="text-slate-400">{post.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Article Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Featured Image */}
        <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-[380px] sm:h-[460px] object-cover"
          />
        </div>

        {/* Article Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Column */}
          <main className="lg:col-span-8 space-y-8 text-slate-800 leading-relaxed font-sans">
            <div className="p-6 rounded-2xl bg-sky-50 border border-sky-100 text-sky-950 font-medium text-base italic leading-relaxed">
              "{post.excerpt}"
            </div>

            <div className="prose max-w-none space-y-6 text-slate-700 font-sans text-base">
              {post.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={idx} className="font-serif-title text-xl sm:text-2xl font-bold text-slate-900 pt-4">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('- ')) {
                  return (
                    <ul key={idx} className="space-y-2 pl-4 list-disc text-slate-700">
                      {paragraph.split('\n').map((li, lIdx) => (
                        <li key={lIdx}>{li.replace('- ', '')}</li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={idx} className="leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Tags */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-500 font-mono flex items-center gap-1 mr-2">
                <Tag className="w-3.5 h-3.5 text-sky-600" />
                Topic Tags:
              </span>
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </main>

          {/* Author & Sidebar Column */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Author Profile Box */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white font-serif-title font-bold text-lg flex items-center justify-center">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-base">{post.author}</h4>
                  <p className="text-xs text-slate-500">{post.authorRole}</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                Clinical specialist at Aura Dental Studio in San Francisco, committed to patient education and gentle digital care.
              </p>
            </div>

            {/* Book Appointment CTA Box */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-4 shadow-md">
              <h4 className="font-serif-title text-xl font-bold">Have Questions About Your Smile?</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Schedule a 1-on-1 consultation with {post.author} to discuss your personalized treatment options.
              </p>
              <Link
                to="/book-appointment"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs transition-all shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation</span>
              </Link>
            </div>
          </aside>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="pt-8 border-t border-slate-200 space-y-6">
            <h3 className="font-serif-title text-2xl font-bold text-slate-900">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <div key={rel.id} className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase bg-sky-100 text-sky-800 px-2 py-0.5 rounded-md">
                      {rel.category}
                    </span>
                    <h4 className="font-heading font-bold text-base text-slate-900 leading-snug">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2">{rel.excerpt}</p>
                  </div>
                  <Link
                    to={`/blog/${rel.id}`}
                    className="inline-flex items-center gap-1.5 text-xs text-sky-700 font-semibold hover:text-sky-800 pt-2"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
