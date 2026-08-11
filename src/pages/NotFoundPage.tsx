import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="pt-36 pb-24 max-w-xl mx-auto px-4 text-center space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center mx-auto font-mono text-2xl font-bold">
        404
      </div>
      <h1 className="font-serif-title text-3xl font-bold text-slate-900">Page Not Found</h1>
      <p className="text-slate-600 text-sm leading-relaxed">
        The dental page or resource you are searching for does not exist or may have been relocated.
      </p>
      <div className="pt-2">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Return to Home Page</span>
        </Link>
      </div>
    </div>
  );
};
