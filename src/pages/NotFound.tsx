import React from 'react';
import { Link } from 'wouter';
import { Camera, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/common/SEO';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F5F6F8] text-[#142C45] px-4">
      <SEO
        title="Page Not Found (404)"
        description="The requested page could not be found. Return to Sushma Digital Studio homepage."
      />
      <div className="text-center p-8 sm:p-12 rounded-xl bg-white border border-[#E2E6EC] max-w-md shadow-xl">
        <div className="w-16 h-16 rounded-full bg-[#F5F6F8] border border-[#D92F26] flex items-center justify-center mx-auto mb-5 text-[#D92F26]">
          <Camera size={28} />
        </div>
        <span className="text-[#D92F26] text-xs uppercase tracking-widest font-semibold block mb-1">
          Error 404
        </span>
        <h1 className="text-3xl font-serif font-bold text-[#142C45] mb-3">
          Frame Not Found (404) &mdash; Sushma Digital Studio
        </h1>
        <p className="text-[#475569] text-sm mb-6 leading-relaxed">
          The photograph or page you were seeking has moved or does not exist in our studio archive.
        </p>
        <Link href="/" className="btn-primary">
          Return to Studio Home <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
