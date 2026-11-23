import { SEO } from '@/components/common/SEO';
import React from 'react';
import { PageTransition, FadeIn } from '../components/ui/motion';

export default function Privacy() {
  return (
    <PageTransition>
      <SEO
        title="Privacy Policy"
        description="Privacy policy and data protection protocols of Sushma Digital Studio Bangalore, outlining client confidential event handling, secure gallery hosting, and communication guidelines."
        canonical="https://sushmadigitalstudio.com/privacy"
      />
      <section className="pt-36 sm:pt-40 pb-24 bg-[#FFFFFF] text-[#142C45]">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn>
            <span className="text-[#D92F26] text-xs uppercase tracking-[0.22em] font-semibold mb-2 block">
              Legal &amp; Policy
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif text-[#142C45] mb-8">
              Privacy Policy &mdash; Sushma Digital Studio
            </h1>
            <div className="max-w-none text-[#475569] space-y-6 text-sm sm:text-base leading-relaxed">
              <p className="text-xs text-[#64748B]">Last Updated: November 2024</p>
              
              <h2 className="text-[#142C45] font-serif text-2xl font-bold border-b border-[#E2E6EC] pb-2 mt-8">
                1. Information We Collect
              </h2>
              <p>
                Sushma Digital Studio ("we", "our", or "us") respects your privacy. We collect information you provide directly to us when you fill out an inquiry form, request a quotation, or reserve event photography and videography services. This includes your name, email address, phone number, event dates, and venue location.
              </p>

              <h2 className="text-[#142C45] font-serif text-2xl font-bold border-b border-[#E2E6EC] pb-2 mt-8">
                2. How We Use Your Information
              </h2>
              <p>
                We use the information we collect strictly to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#475569]">
                <li>Respond to your booking inquiries and coordinate photography schedules</li>
                <li>Process session retainers, deliver digital proofs, and dispatch handcrafted photo albums</li>
                <li>Send technical notices, service updates, and wedding schedule confirmations</li>
                <li>Communicate seasonal photography offers and studio updates</li>
              </ul>

              <h2 className="text-[#142C45] font-serif text-2xl font-bold border-b border-[#E2E6EC] pb-2 mt-8">
                3. Image Rights &amp; Privacy
              </h2>
              <p>
                As a professional photography studio, client portraiture and event photography represent our core artistic body of work. We maintain copyright to images captured by Prabhu and the studio team. Client images may be featured in our portfolio or cultural archives, unless an explicit confidential assignment agreement is requested prior to the event.
              </p>

              <h2 className="text-[#142C45] font-serif text-2xl font-bold border-b border-[#E2E6EC] pb-2 mt-8">
                4. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:sushmadigistudio1989@gmail.com" className="text-[#258FEA] hover:underline">
                  sushmadigistudio1989@gmail.com
                </a>{' '}
                or visit our studio at RPC Layout, Vijayanagar 2nd Stage, Bangalore.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
