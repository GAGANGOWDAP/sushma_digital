import React, { useState } from 'react';
import { PageTransition, FadeIn } from '../components/ui/motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle2, Calendar, MapPin, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

const SERVICES_LIST = [
  'Pre-Wedding Photography & Videography',
  'Photography, Videography & Candid Photography',
  'Baby Photo Shoot & Portfolios',
  'Matrimony Photography',
  'Webcast Live Streaming',
  'HD Live Video Mixing',
  '360 Degree VR Videos',
  'LED Wall Live Display',
  'Drone Camera Aerial Videography',
  'Custom Event Package'
];

const bookSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(5, 'Phone number is required'),
  service: z.string().min(2, 'Please select a service'),
  date: z.string().min(2, 'Date is required'),
  location: z.string().min(2, 'Location is required'),
  notes: z.string().optional(),
});

type BookFormValues = z.infer<typeof bookSchema>;

export default function Book() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<BookFormValues>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      firstName: '', lastName: '', email: '', phone: '',
      service: '', date: '', location: '', notes: ''
    }
  });

  const onSubmit = (data: BookFormValues) => {
    console.log('Booking request:', data);
    setIsSubmitted(true);
    toast({ title: 'Booking Received!', description: 'We will contact you shortly.' });
  };

  if (isSubmitted) {
    return (
      <PageTransition>
        <section className="min-h-screen flex items-center justify-center bg-[#F5F6F8] pt-28 pb-16 px-6">
          <div className="text-center px-8 py-12 bg-white border border-[#E2E6EC] rounded-xl max-w-lg shadow-xl">
            <div className="w-16 h-16 bg-[#F5F6F8] border border-[#D92F26] rounded-full flex items-center justify-center mx-auto mb-6 text-[#D92F26]">
              <CheckCircle2 size={32} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#142C45] mb-3 font-bold">Booking Request Received!</h2>
            <p className="text-[#475569] text-sm mb-8 leading-relaxed">
              Thank you for reaching out to <span className="text-[#142C45] font-semibold">Sushma Digital Studio</span>. Prabhu will review your request and contact you within 24 hours to confirm session details.
            </p>
            <Link href="/" className="btn-primary">
              Return Home
            </Link>
          </div>
        </section>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-36 sm:pt-40 pb-16 bg-[#F5F6F8] border-b border-[#E2E6EC] text-center relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <FadeIn>
            <span className="text-[#D92F26] text-xs uppercase tracking-[0.25em] font-semibold mb-3 block">Sushma Digital Studio &bull; Bangalore</span>
            <h1 className="text-4xl sm:text-6xl font-serif text-[#142C45] mb-4">Book a Session</h1>
            <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
              21+ years of photography &amp; live video mixing expertise. Reserve your event date by completing the form below.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Booking Section */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Left Info Panel */}
            <FadeIn delay={0.1} className="lg:col-span-1">
              <div className="bg-[#F5F6F8] border border-[#E2E6EC] rounded-xl p-8 h-full flex flex-col justify-between shadow-xs">
                <div>
                  <h3 className="font-serif text-2xl text-[#142C45] mb-6">Studio Info</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white border border-[#E2E6EC] flex items-center justify-center shrink-0 text-[#D92F26]">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#142C45] text-sm mb-1">Studio Address</h4>
                        <p className="text-[#475569] text-xs leading-relaxed">
                          No 540. 8th main, 4th cross,<br />
                          R.P.C layout, Vijaynagar 2nd stage,<br />
                          Bangalore - 560040
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white border border-[#E2E6EC] flex items-center justify-center shrink-0 text-[#258FEA]">
                        <Mail size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#142C45] text-sm mb-1">Email Inquiry</h4>
                        <a href="mailto:sushmadigistudio1989@gmail.com" className="text-[#475569] text-xs hover:text-[#258FEA] transition-colors">
                          sushmadigistudio1989@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white border border-[#E2E6EC] flex items-center justify-center shrink-0 text-[#258FEA]">
                        <Calendar size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#142C45] text-sm mb-1">Lead Photographer</h4>
                        <p className="text-[#475569] text-xs">
                          Prabhu (Karnataka Chayarathna Awardee)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#E2E6EC] mt-8">
                  <span className="text-[#258FEA] text-[10px] font-bold uppercase tracking-widest block mb-1">Instant Response</span>
                  <p className="text-[#475569] text-xs">We typically respond within 2 to 4 hours on business days.</p>
                </div>
              </div>
            </FadeIn>

            {/* Right Booking Form */}
            <FadeIn delay={0.2} className="lg:col-span-2">
              <div className="bg-white border border-[#E2E6EC] rounded-xl p-8 sm:p-10 shadow-sm">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    
                    {/* Personal Details */}
                    <div className="space-y-5">
                      <h3 className="font-serif text-xl text-[#142C45] border-b border-[#E2E6EC] pb-3 flex items-center justify-between">
                        1. Personal Details
                        <span className="text-[#258FEA] text-xs font-mono font-normal">Step 1 of 2</span>
                      </h3>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <FormField control={form.control} name="firstName" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="uppercase text-xs font-bold tracking-wider text-[#142C45]">First Name *</FormLabel>
                            <FormControl>
                              <input {...field} className="w-full rounded-md border border-[#E2E6EC] bg-white px-4 py-3 text-[#142C45] placeholder-[#64748B]/50 focus:outline-none focus:border-[#258FEA] transition-colors text-sm" placeholder="Your first name" data-testid="booking-first-name" />
                            </FormControl>
                            <FormMessage className="text-[#D92F26] text-xs font-semibold" />
                          </FormItem>
                        )}/>
                        <FormField control={form.control} name="lastName" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="uppercase text-xs font-bold tracking-wider text-[#142C45]">Last Name *</FormLabel>
                            <FormControl>
                              <input {...field} className="w-full rounded-md border border-[#E2E6EC] bg-white px-4 py-3 text-[#142C45] placeholder-[#64748B]/50 focus:outline-none focus:border-[#258FEA] transition-colors text-sm" placeholder="Your last name" data-testid="booking-last-name" />
                            </FormControl>
                            <FormMessage className="text-[#D92F26] text-xs font-semibold" />
                          </FormItem>
                        )}/>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <FormField control={form.control} name="email" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="uppercase text-xs font-bold tracking-wider text-[#142C45]">Email Address *</FormLabel>
                            <FormControl>
                              <input type="email" {...field} className="w-full rounded-md border border-[#E2E6EC] bg-white px-4 py-3 text-[#142C45] placeholder-[#64748B]/50 focus:outline-none focus:border-[#258FEA] transition-colors text-sm" placeholder="yourname@gmail.com" data-testid="booking-email" />
                            </FormControl>
                            <FormMessage className="text-[#D92F26] text-xs font-semibold" />
                          </FormItem>
                        )}/>
                        <FormField control={form.control} name="phone" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="uppercase text-xs font-bold tracking-wider text-[#142C45]">Phone Number *</FormLabel>
                            <FormControl>
                              <input type="tel" {...field} className="w-full rounded-md border border-[#E2E6EC] bg-white px-4 py-3 text-[#142C45] placeholder-[#64748B]/50 focus:outline-none focus:border-[#258FEA] transition-colors text-sm" placeholder="+91 98000 00000" data-testid="booking-phone" />
                            </FormControl>
                            <FormMessage className="text-[#D92F26] text-xs font-semibold" />
                          </FormItem>
                        )}/>
                      </div>
                    </div>

                    {/* Event & Service Details */}
                    <div className="space-y-5">
                      <h3 className="font-serif text-xl text-[#142C45] border-b border-[#E2E6EC] pb-3 flex items-center justify-between">
                        2. Event &amp; Service Details
                        <span className="text-[#258FEA] text-xs font-mono font-normal">Step 2 of 2</span>
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <FormField control={form.control} name="service" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="uppercase text-xs font-bold tracking-wider text-[#142C45]">Service Required *</FormLabel>
                            <FormControl>
                              <select {...field} className="w-full rounded-md border border-[#E2E6EC] bg-white px-4 py-3 text-[#142C45] focus:outline-none focus:border-[#258FEA] transition-colors text-sm" data-testid="booking-service">
                                <option value="" className="bg-white text-[#64748B]">Select a service...</option>
                                {SERVICES_LIST.map((svc) => (
                                   <option key={svc} value={svc} className="bg-white text-[#142C45]">
                                    {svc}
                                  </option>
                                ))}
                              </select>
                            </FormControl>
                            <FormMessage className="text-[#D92F26] text-xs font-semibold" />
                          </FormItem>
                        )}/>

                        <FormField control={form.control} name="date" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="uppercase text-xs font-bold tracking-wider text-[#142C45]">Event Date *</FormLabel>
                            <FormControl>
                              <input type="date" {...field} className="w-full rounded-md border border-[#E2E6EC] bg-white px-4 py-3 text-[#142C45] focus:outline-none focus:border-[#258FEA] transition-colors text-sm [color-scheme:light]" data-testid="booking-date" />
                            </FormControl>
                            <FormMessage className="text-[#D92F26] text-xs font-semibold" />
                          </FormItem>
                        )}/>
                      </div>

                      <FormField control={form.control} name="location" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase text-xs font-bold tracking-wider text-[#142C45]">Event Location / City *</FormLabel>
                          <FormControl>
                            <input placeholder="e.g. Vijayanagar, Bangalore / Mysore" {...field} className="w-full rounded-md border border-[#E2E6EC] bg-white px-4 py-3 text-[#142C45] placeholder-[#64748B]/50 focus:outline-none focus:border-[#258FEA] transition-colors text-sm" data-testid="booking-location" />
                          </FormControl>
                          <FormMessage className="text-[#D92F26] text-xs font-semibold" />
                        </FormItem>
                      )}/>

                      <FormField control={form.control} name="notes" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase text-xs font-bold tracking-wider text-[#142C45]">Additional Notes / Special Requirements</FormLabel>
                          <FormControl>
                            <textarea {...field} rows={3} className="w-full rounded-md border border-[#E2E6EC] bg-white px-4 py-3 text-[#142C45] placeholder-[#64748B]/50 focus:outline-none focus:border-[#258FEA] transition-colors text-sm resize-none" placeholder="Tell us about the event schedule, duration, or specific preferences..." data-testid="booking-notes" />
                          </FormControl>
                          <FormMessage className="text-[#D92F26] text-xs font-semibold" />
                        </FormItem>
                      )}/>
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full text-center py-4 text-sm"
                      data-testid="submit-booking"
                    >
                      Submit Booking Request <ArrowRight size={16} />
                    </button>
                  </form>
                </Form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
