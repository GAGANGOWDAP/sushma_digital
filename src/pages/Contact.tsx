import { SEO } from '@/components/common/SEO';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import React, { useState } from 'react';
import { PageTransition, FadeIn } from '../components/ui/motion';
import { MapPin, Mail, Instagram, Facebook, ArrowRight, Camera } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { FAQSection } from '@/components/common/FAQSection';

const bookingSchema = z.object({
  bName: z.string().min(2, 'Name is required'),
  bEmail: z.string().email('Invalid email'),
  bPhone: z.string().min(6, 'Phone is required'),
  bService: z.string().min(1, 'Please select a service'),
  bEventType: z.string().min(1, 'Please select an event type'),
  bDate: z.string().min(1, 'Date is required'),
  bLocation: z.string().min(2, 'Location is required'),
  bGuests: z.string().optional(),
  bBudget: z.string().optional(),
  bNotes: z.string().optional(),
});

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  subject: z.string().min(2, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type BookingFormValues = z.infer<typeof bookingSchema>;
type ContactFormValues = z.infer<typeof contactSchema>;

const SERVICES = [
  'Pre-Wedding Photography & Videography',
  'Photography, Videography & Candid Photography',
  'Baby Photo Shoot & Portfolios',
  'Matrimony Photography',
  'Webcast Live Streaming',
  'HD Live Video Mixing',
  '360 Degree VR Videos',
  'LED Wall Live Display',
  'Drone Camera Aerial Videography'
];

export default function Contact() {
  const { toast } = useToast();
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const bookingForm = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      bName: '', bEmail: '', bPhone: '', bService: '', bEventType: '',
      bDate: '', bLocation: '', bGuests: '', bBudget: '', bNotes: ''
    }
  });

  const contactForm = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', phone: '', subject: '', message: '' }
  });

  const onBookingSubmit = (data: BookingFormValues) => {
    console.log('Booking data:', data);
    setBookingSubmitted(true);
    bookingForm.reset();
  };

  const onContactSubmit = (data: ContactFormValues) => {
    console.log('Contact data:', data);
    toast({ title: 'Message Sent', description: 'We will get back to you within 24 hours.' });
    contactForm.reset();
  };

  return (
    <PageTransition>
      <SEO
        title="Contact & Studio Location Bangalore"
        description="Contact Prabhu and the Sushma Digital Studio team in RPC Layout, Vijaynagar, Bangalore. Schedule an in-person heirloom album consultation, verify event date availability, or request custom event production quotes."
        canonical="https://sushmadigitalstudio.com/contact"
      />
      {/* ===== 1. CONTACT HERO SECTION ===== */}
      <section className="pt-36 sm:pt-40 pb-16 sm:pb-20 hero-triangular-pattern text-[#142C45] border-b border-[#E2E6EC] relative overflow-hidden text-center">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl relative z-10">
          <FadeIn>
            <div className="flex justify-center mb-4">
              <Breadcrumbs />
            </div>
            <span className="text-[#D92F26] text-xs uppercase tracking-[0.22em] font-semibold mb-3 block">
              Reserve Your Date
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif text-[#142C45] mb-4 tracking-tight">
              Contact Sushma Digital Studio in Bangalore
            </h1>
            <h2 className="sr-only">Date Availability &amp; Booking Inquiry</h2>
            <p className="text-[#64748B] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Our calendar fills several months in advance for weddings and major productions. Secure your date with Prabhu and our master photography team in Bangalore.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===== 2. BOOKING FORM SECTION ===== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-b border-[#E2E6EC] relative">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-4xl relative z-10">
          <FadeIn className="text-center mb-10 sm:mb-12 max-w-2xl mx-auto">
            <span className="text-[#D92F26] text-xs uppercase tracking-[0.22em] font-semibold mb-2 block">
              Reservation Questionnaire
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#142C45] mb-3">
              Plan Your Photography Booking
            </h2>
            <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
              Tell us about your celebration, wedding dates, and vision. We will review availability and craft a tailored proposal for your consideration.
            </p>
          </FadeIn>

          {bookingSubmitted ? (
            <FadeIn>
              <div className="bg-white border border-[#E2E6EC] rounded-2xl p-8 sm:p-14 text-center max-w-lg mx-auto shadow-sm">
                <div className="w-16 h-16 rounded-full bg-[#F5F6F8] border border-[#258FEA] text-[#258FEA] flex items-center justify-center mx-auto mb-5 shadow-sm">
                  <Camera size={30} />
                </div>
                <h3 className="text-2xl font-serif text-[#142C45] mb-2 font-bold">Booking Request Received</h3>
                <p className="text-[#475569] text-sm mb-6 leading-relaxed">
                  Thank you for reaching out. Prabhu and the studio team will review your requirements and connect with you within 24 hours to confirm date availability and package details.
                </p>
                <button
                  onClick={() => setBookingSubmitted(false)}
                  className="btn-primary"
                >
                  Book Another Session
                </button>
              </div>
            </FadeIn>
          ) : (
            <FadeIn delay={0.15}>
              <div className="bg-white border border-[#E2E6EC] rounded-2xl p-6 sm:p-10 md:p-12 shadow-[0_4px_20px_rgba(20,44,69,0.04)]">
                <Form {...bookingForm}>
                  <form onSubmit={bookingForm.handleSubmit(onBookingSubmit)} className="space-y-6">
                    {/* Row 1: Name + Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                      <FormField control={bookingForm.control} name="bName" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#142C45] font-semibold text-xs uppercase tracking-wider">Full Name *</FormLabel>
                          <FormControl>
                            <input
                              {...field}
                              className="w-full rounded-md border border-[#E2E6EC] bg-white px-4 py-3 text-[#142C45] placeholder-[#94A3B8] focus:outline-none focus:border-[#258FEA] transition-colors text-sm"
                              placeholder="Your full name"
                              data-testid="booking-name"
                            />
                          </FormControl>
                          <FormMessage className="text-[#D92F26] text-xs font-semibold" />
                        </FormItem>
                      )} />
                      <FormField control={bookingForm.control} name="bEmail" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#142C45] font-semibold text-xs uppercase tracking-wider">Email Address *</FormLabel>
                          <FormControl>
                            <input
                              type="email"
                              {...field}
                              className="w-full rounded-md border border-[#E2E6EC] bg-white px-4 py-3 text-[#142C45] placeholder-[#94A3B8] focus:outline-none focus:border-[#258FEA] transition-colors text-sm"
                              placeholder="you@example.com"
                              data-testid="booking-email"
                            />
                          </FormControl>
                          <FormMessage className="text-[#D92F26] text-xs font-semibold" />
                        </FormItem>
                      )} />
                    </div>

                    {/* Row 2: Phone + Service */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                      <FormField control={bookingForm.control} name="bPhone" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#142C45] font-semibold text-xs uppercase tracking-wider">Phone Number *</FormLabel>
                          <FormControl>
                            <input
                              {...field}
                              className="w-full rounded-md border border-[#E2E6EC] bg-white px-4 py-3 text-[#142C45] placeholder-[#94A3B8] focus:outline-none focus:border-[#258FEA] transition-colors text-sm"
                              placeholder="+91 98000 00000"
                              data-testid="booking-phone"
                            />
                          </FormControl>
                          <FormMessage className="text-[#D92F26] text-xs font-semibold" />
                        </FormItem>
                      )} />
                      <FormField control={bookingForm.control} name="bService" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#142C45] font-semibold text-xs uppercase tracking-wider">Service *</FormLabel>
                          <FormControl>
                            <select
                              {...field}
                              className="w-full rounded-md border border-[#E2E6EC] bg-white px-4 py-3 text-[#142C45] focus:outline-none focus:border-[#258FEA] transition-colors text-sm"
                              data-testid="booking-service"
                            >
                              <option value="" className="text-[#64748B]">Select photography service...</option>
                              {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                          </FormControl>
                          <FormMessage className="text-[#D92F26] text-xs font-semibold" />
                        </FormItem>
                      )} />
                    </div>

                    {/* Row 3: Event Type + Date */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                      <FormField control={bookingForm.control} name="bEventType" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#142C45] font-semibold text-xs uppercase tracking-wider">Event Type *</FormLabel>
                          <FormControl>
                            <select
                              {...field}
                              className="w-full rounded-md border border-[#E2E6EC] bg-white px-4 py-3 text-[#142C45] focus:outline-none focus:border-[#258FEA] transition-colors text-sm"
                              data-testid="booking-event-type"
                            >
                              <option value="" className="text-[#64748B]">Select event category...</option>
                              {['Pre-Wedding', 'Wedding Ceremony', 'Reception', 'Baby Shoot', 'Matrimony', 'Corporate / Live Stream', 'VIP Event', 'Other'].map(t => (
                                <option key={t} value={t}>{t}</option>
                              ))}
                            </select>
                          </FormControl>
                          <FormMessage className="text-[#D92F26] text-xs font-semibold" />
                        </FormItem>
                      )} />
                      <FormField control={bookingForm.control} name="bDate" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#142C45] font-semibold text-xs uppercase tracking-wider">Event Date *</FormLabel>
                          <FormControl>
                            <input
                              type="date"
                              {...field}
                              className="w-full rounded-md border border-[#E2E6EC] bg-white px-4 py-3 text-[#142C45] focus:outline-none focus:border-[#258FEA] transition-colors text-sm [color-scheme:light]"
                              data-testid="booking-date"
                            />
                          </FormControl>
                          <FormMessage className="text-[#D92F26] text-xs font-semibold" />
                        </FormItem>
                      )} />
                    </div>

                    {/* Row 4: Location + Guests */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                      <FormField control={bookingForm.control} name="bLocation" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#142C45] font-semibold text-xs uppercase tracking-wider">Event Location / Venue *</FormLabel>
                          <FormControl>
                            <input
                              {...field}
                              className="w-full rounded-md border border-[#E2E6EC] bg-white px-4 py-3 text-[#142C45] placeholder-[#94A3B8] focus:outline-none focus:border-[#258FEA] transition-colors text-sm"
                              placeholder="City, Hall, or Studio"
                              data-testid="booking-location"
                            />
                          </FormControl>
                          <FormMessage className="text-[#D92F26] text-xs font-semibold" />
                        </FormItem>
                      )} />
                      <FormField control={bookingForm.control} name="bGuests" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#142C45] font-semibold text-xs uppercase tracking-wider">Expected Guests</FormLabel>
                          <FormControl>
                            <input
                              {...field}
                              className="w-full rounded-md border border-[#E2E6EC] bg-white px-4 py-3 text-[#142C45] placeholder-[#94A3B8] focus:outline-none focus:border-[#258FEA] transition-colors text-sm"
                              placeholder="e.g. 500"
                              data-testid="booking-guests"
                            />
                          </FormControl>
                        </FormItem>
                      )} />
                    </div>

                    {/* Budget */}
                    <FormField control={bookingForm.control} name="bBudget" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#142C45] font-semibold text-xs uppercase tracking-wider">Package Preference</FormLabel>
                        <FormControl>
                          <select
                            {...field}
                            className="w-full rounded-md border border-[#E2E6EC] bg-white px-4 py-3 text-[#142C45] focus:outline-none focus:border-[#258FEA] transition-colors text-sm"
                            data-testid="booking-budget"
                          >
                            <option value="" className="text-[#64748B]">Select preference...</option>
                            {['Custom Quote / Discussion', 'Essential Coverage', 'Full Day Wedding Package', 'VIP Live Stream & LED Wall Package'].map(b => (
                              <option key={b} value={b}>{b}</option>
                            ))}
                          </select>
                        </FormControl>
                      </FormItem>
                    )} />

                    {/* Notes */}
                    <FormField control={bookingForm.control} name="bNotes" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#142C45] font-semibold text-xs uppercase tracking-wider">Special Requests / Notes</FormLabel>
                        <FormControl>
                          <textarea
                            {...field}
                            rows={3}
                            className="w-full rounded-md border border-[#E2E6EC] bg-white px-4 py-3 text-[#142C45] placeholder-[#94A3B8] focus:outline-none focus:border-[#258FEA] transition-colors text-sm resize-none"
                            placeholder="Share any special preferences, timings, or vision..."
                            data-testid="booking-notes"
                          />
                        </FormControl>
                      </FormItem>
                    )} />

                    <button
                      type="submit"
                      className="btn-primary w-full text-center py-4 text-sm"
                      data-testid="booking-submit"
                    >
                      Confirm Booking Request <ArrowRight size={16} />
                    </button>
                  </form>
                </Form>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* ===== 3. STUDIO HEADQUARTERS & DIRECT MESSAGE SECTION ===== */}
      <section className="py-20 bg-[#FFFFFF] text-[#142C45]">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <FadeIn className="mb-12 text-center md:text-left">
            <span className="text-[#D92F26] text-xs uppercase tracking-[0.2em] font-bold block mb-2">Direct Inquiry</span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#142C45] mb-2">Send a Message</h2>
            <p className="text-[#64748B] text-sm sm:text-base">Have a question? We would love to discuss your vision.</p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Info */}
            <FadeIn delay={0.1}>
              <div className="bg-[#F5F6F8] border border-[#E2E6EC] rounded-xl p-8 sm:p-10 h-full flex flex-col justify-between shadow-sm">
                <div>
                  <h3 className="font-serif text-2xl mb-6 text-[#142C45] border-b border-[#E2E6EC] pb-4">
                    Studio Headquarters
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white border border-[#E2E6EC] flex items-center justify-center text-[#D92F26] shrink-0 mt-0.5 shadow-sm">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#142C45] text-sm mb-1">Vijayanagar Studio</h4>
                        <p className="text-[#475569] text-xs sm:text-sm leading-relaxed">
                          No 540. 8th main, 4th cross,<br />
                          R.P.C layout, Vijaynagar 2nd stage,<br />
                          Bangalore 560040
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white border border-[#E2E6EC] flex items-center justify-center text-[#258FEA] shrink-0 mt-0.5 shadow-sm">
                        <Mail size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#142C45] text-sm mb-1">Email Inquiry</h4>
                        <a href="mailto:sushmadigistudio1989@gmail.com" className="text-[#475569] text-xs sm:text-sm hover:text-[#D92F26] transition-colors">
                          sushmadigistudio1989@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E2E6EC] space-y-3">
                  <p className="text-xs text-[#64748B] font-bold uppercase tracking-wider">Social Channels</p>
                  <div className="flex flex-col gap-2">
                    <a href="https://instagram.com/Prabhus_phtography" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 text-xs sm:text-sm text-[#142C45] hover:text-[#D92F26] transition-colors">
                      <Instagram size={16} className="text-[#D92F26]" /> Instagram: <span className="font-semibold">@Prabhus_phtography</span>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 text-xs sm:text-sm text-[#142C45] hover:text-[#258FEA] transition-colors">
                      <Facebook size={16} className="text-[#258FEA]" /> Facebook: <span className="font-semibold">Prabhu's photography</span>
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn delay={0.2}>
              <div className="bg-[#F5F6F8] border border-[#E2E6EC] rounded-xl p-8 sm:p-10 shadow-sm">
                <Form {...contactForm}>
                  <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField control={contactForm.control} name="name" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-bold uppercase tracking-wider text-[#142C45]">Full Name *</FormLabel>
                          <FormControl>
                            <input
                              {...field}
                              className="w-full rounded-md border border-[#E2E6EC] bg-white px-4 py-3 text-[#142C45] placeholder-[#94A3B8] focus:outline-none focus:border-[#D92F26] transition-colors text-sm"
                              placeholder="Your name"
                              data-testid="contact-name"
                            />
                          </FormControl>
                          <FormMessage className="text-[#D92F26] text-xs font-semibold" />
                        </FormItem>
                      )} />
                      <FormField control={contactForm.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-bold uppercase tracking-wider text-[#142C45]">Email Address *</FormLabel>
                          <FormControl>
                            <input
                              type="email"
                              {...field}
                              className="w-full rounded-md border border-[#E2E6EC] bg-white px-4 py-3 text-[#142C45] placeholder-[#94A3B8] focus:outline-none focus:border-[#D92F26] transition-colors text-sm"
                              placeholder="you@email.com"
                              data-testid="contact-email"
                            />
                          </FormControl>
                          <FormMessage className="text-[#D92F26] text-xs font-semibold" />
                        </FormItem>
                      )} />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField control={contactForm.control} name="phone" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-bold uppercase tracking-wider text-[#142C45]">Phone (Optional)</FormLabel>
                          <FormControl>
                            <input
                              {...field}
                              className="w-full rounded-md border border-[#E2E6EC] bg-white px-4 py-3 text-[#142C45] placeholder-[#94A3B8] focus:outline-none focus:border-[#D92F26] transition-colors text-sm"
                              placeholder="+91..."
                              data-testid="contact-phone"
                            />
                          </FormControl>
                        </FormItem>
                      )} />
                      <FormField control={contactForm.control} name="subject" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-bold uppercase tracking-wider text-[#142C45]">Inquiry Type *</FormLabel>
                          <FormControl>
                            <select
                              {...field}
                              className="w-full rounded-md border border-[#E2E6EC] bg-white px-4 py-3 text-[#142C45] focus:outline-none focus:border-[#D92F26] transition-colors text-sm"
                              data-testid="contact-subject"
                            >
                              <option value="">Select subject...</option>
                              <option value="wedding">Wedding Shoot</option>
                              <option value="portrait">Portrait &amp; Modelling</option>
                              <option value="commercial">Commercial / Live Stream</option>
                              <option value="other">General Inquiry</option>
                            </select>
                          </FormControl>
                          <FormMessage className="text-[#D92F26] text-xs font-semibold" />
                        </FormItem>
                      )} />
                    </div>

                    <FormField control={contactForm.control} name="message" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-bold uppercase tracking-wider text-[#142C45]">Your Message *</FormLabel>
                        <FormControl>
                          <textarea
                            {...field}
                            rows={4}
                            className="w-full rounded-md border border-[#E2E6EC] bg-white px-4 py-3 text-[#142C45] placeholder-[#94A3B8] focus:outline-none focus:border-[#D92F26] transition-colors text-sm resize-none"
                            placeholder="Tell us about your project or event..."
                            data-testid="contact-message"
                          />
                        </FormControl>
                        <FormMessage className="text-[#D92F26] text-xs font-semibold" />
                      </FormItem>
                    )} />

                    <button
                      type="submit"
                      className="btn-primary w-full text-center py-3.5"
                      data-testid="contact-submit"
                    >
                      Send Message <ArrowRight size={15} />
                    </button>
                  </form>
                </Form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact & Studio Visit FAQ */}
      <FAQSection
        subtitle="Inquiries & Studio Visits"
        title="Contact & Location FAQ"
        description="Helpful details regarding visiting our Bangalore studio, response timelines, meeting appointments, and virtual consultations."
        items={[
          {
            q: 'Where is the Sushma Digital Studio physical studio located in Bangalore?',
            a: 'Our studio is located at No 540, 8th Main, 4th Cross, R.P.C Layout, 2nd Stage, Vijaynagar, Bangalore - 560040. You are welcome to visit by prior appointment to review our archival print samples.',
          },
          {
            q: 'How quickly will the studio respond to an online booking or contact inquiry?',
            a: 'We review all inquiries promptly and typically respond within 12 to 24 hours with date availability, brochure options, and next steps.',
          },
          {
            q: 'Can we schedule a virtual video consultation if we live outside Bangalore or abroad?',
            a: 'Yes. We regularly host video calls via Google Meet or Zoom for NRI couples and outstation families to review portfolios and align on event itineraries.',
          },
          {
            q: 'What information should we prepare before our introductory consultation?',
            a: 'Sharing your event dates, venue locations, estimated guest count, and whether you require live streaming or LED walls helps us provide an accurate, tailored proposal immediately.',
          },
        ]}
      />
    </PageTransition>
  );
}
