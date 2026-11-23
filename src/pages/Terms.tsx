import { SEO } from '@/components/common/SEO';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import React from 'react';
import { PageTransition, FadeIn } from '../components/ui/motion';

export default function Terms() {
  return (
    <PageTransition>
      <SEO
        title="Terms of Service"
        description="Terms of service, booking retainer conditions, rescheduling guidelines, and service agreements for photography and media production with Sushma Digital Studio Bangalore."
        canonical="https://sushmadigitalstudio.com/terms"
      />
      <section className="pt-36 sm:pt-40 pb-24 bg-[#FFFFFF] text-[#142C45]">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn>
            <div className="mb-4">
              <Breadcrumbs />
            </div>
            <span className="text-[#D92F26] text-xs uppercase tracking-[0.22em] font-semibold mb-2 block">
              Legal Agreement
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif text-[#142C45] mb-8">
              Terms of Service | Sushma Digital Studio
            </h1>
            <div className="max-w-none text-[#475569] space-y-6 text-sm sm:text-base leading-relaxed">
              <p className="text-xs text-[#64748B]">Last Updated: November 2024</p>
              
              <h2 className="text-[#142C45] font-serif text-2xl font-bold border-b border-[#E2E6EC] pb-2 mt-8">
                1. Booking, Retainers &amp; Scheduling
              </h2>
              <p>
                An advance booking retainer and confirmation form are required to lock in your date exclusively on the calendar of Sushma Digital Studio. Because wedding dates and prime muhurtham windows are in high demand, sessions are reserved on a verified first-confirmed basis.
              </p>

              <h2 className="text-[#142C45] font-serif text-2xl font-bold border-b border-[#E2E6EC] pb-2 mt-8">
                2. Rescheduling &amp; Date Changes
              </h2>
              <p>
                In the event that an event date needs to be shifted due to unforeseen family or venue circumstances, the retainer may be transferred to a mutually agreeable alternate date subject to studio crew availability.
              </p>

              <h2 className="text-[#142C45] font-serif text-2xl font-bold border-b border-[#E2E6EC] pb-2 mt-8">
                3. Copyright &amp; Client Licensing
              </h2>
              <p>
                Sushma Digital Studio retains intellectual copyright to all original photography and videography masterworks. Clients are granted a personal, high-resolution reproduction license allowing unlimited private printing, digital sharing, and social archiving.
              </p>

              <h2 className="text-[#142C45] font-serif text-2xl font-bold border-b border-[#E2E6EC] pb-2 mt-8">
                4. Artistic Mastery &amp; Post-Production
              </h2>
              <p>
                Our signature aesthetic is developed through meticulous lighting calibration, composition, and post-production color grading. We deliver finished, color-graded high-resolution digital master files and custom-bound heirloom photo albums.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
