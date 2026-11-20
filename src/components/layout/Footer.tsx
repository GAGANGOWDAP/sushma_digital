import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Instagram, Facebook, Mail, MapPin, ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FadeIn } from '../ui/motion';

export const Footer = () => {
  const [location] = useLocation();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="footer-diamond-pattern text-white pt-16 sm:pt-20 pb-10 border-t border-[#1F3A59] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-8 mb-14">
          
          {/* Column 1: Brand & Bio */}
          <FadeIn delay={0.1}>
            <div className="flex flex-col h-full">
              <Link href="/" onClick={handleLogoClick} className="flex items-center gap-3 mb-5 cursor-pointer group w-fit">
                <img
                  src="/logo.png"
                  alt="Sushma Digital Studio"
                  className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="flex flex-col leading-tight">
                  <h3 className="font-serif text-xl font-bold text-white tracking-tight">Sushma</h3>
                  <span className="text-[#D92F26] text-[10px] font-bold tracking-[0.22em] uppercase">Digital Studio</span>
                </div>
              </Link>
              <p className="text-[#94A3B8] text-xs leading-relaxed mb-6 max-w-sm">
                21+ years of photography excellence in Bangalore. Specialising in pre-wedding, candid wedding photography, live streaming, LED wall &amp; 360° VR videos. Conferred with Karnataka Chayarathna &amp; Chhaya Ratna.
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <a
                  href="https://instagram.com/Prabhus_phtography"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Prabhus_phtography on Instagram"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-xl bg-[#0E2034] border border-[#2B4B70] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#258FEA] hover:bg-[#258FEA]/20 hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
                >
                  <Instagram size={17} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Prabhu's photography on Facebook"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-xl bg-[#0E2034] border border-[#2B4B70] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#258FEA] hover:bg-[#258FEA]/20 hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
                >
                  <Facebook size={17} />
                </a>
              </div>
            </div>
          </FadeIn>
          
          {/* Column 2: Quick Navigation */}
          <FadeIn delay={0.2}>
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1 h-4 bg-[#D92F26] rounded-full" />
                <h4 className="font-serif text-base tracking-wide text-white uppercase font-medium">
                  Quick Navigation
                </h4>
              </div>
              <ul className="space-y-3">
                {[
                  { name: 'About Studio', path: '/about' },
                  { name: 'Our Services', path: '/services' },
                  { name: 'Portfolio Gallery', path: '/portfolio' },
                  { name: 'Client FAQ', path: '/faq' },
                  { name: 'Contact & Booking', path: '/contact' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.path}
                      className="text-[#94A3B8] hover:text-white hover:translate-x-1.5 inline-flex items-center gap-2 transition-all duration-200 text-xs uppercase tracking-wider font-medium group"
                    >
                      <ArrowRight size={12} className="text-[#258FEA] transition-transform duration-200 group-hover:translate-x-0.5" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Column 3: Studio Location */}
          <FadeIn delay={0.3}>
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1 h-4 bg-[#258FEA] rounded-full" />
                <h4 className="font-serif text-base tracking-wide text-white uppercase font-medium">
                  Studio Location
                </h4>
              </div>
              <ul className="space-y-4 text-xs text-[#94A3B8]">
                <li className="flex items-start gap-3">
                  <MapPin size={17} className="text-[#D92F26] shrink-0 mt-0.5" />
                  <span className="leading-relaxed text-[#CBD5E1]">
                    No 540. 8th main, 4th cross,<br />
                    R.P.C layout, Vijaynagar 2nd stage,<br />
                    Bangalore - 560040, Karnataka
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={17} className="text-[#258FEA] shrink-0" />
                  <a 
                    href="mailto:sushmadigistudio1989@gmail.com" 
                    className="text-[#CBD5E1] hover:text-white hover:underline transition-colors break-all"
                  >
                    sushmadigistudio1989@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* Column 4: Stay Connected / Newsletter */}
          <FadeIn delay={0.4}>
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1 h-4 bg-[#D92F26] rounded-full" />
                <h4 className="font-serif text-base tracking-wide text-white uppercase font-medium">
                  Stay Connected
                </h4>
              </div>
              <p className="text-[#94A3B8] text-xs mb-4 leading-relaxed">
                Subscribe for upcoming studio sessions, seasonal packages &amp; wedding previews.
              </p>
              <form className="space-y-2.5" onSubmit={handleSubscribe}>
                <div className="relative">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address" 
                    className="w-full bg-[#0E2034] border border-[#2B4B70] focus:border-[#258FEA] focus:ring-2 focus:ring-[#258FEA]/20 px-3.5 py-2.5 rounded-lg text-xs text-white placeholder-[#64748B] transition-all outline-none"
                    required
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#D92F26] hover:bg-[#c22820] text-white font-semibold text-xs rounded-lg uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#D92F26]/20 active:scale-[0.99]"
                >
                  <span>Subscribe</span>
                  <ArrowRight size={13} />
                </button>
                {isSubscribed && (
                  <p className="text-[11px] text-emerald-400 font-medium flex items-center gap-1.5 pt-1 animate-in fade-in duration-300">
                    <CheckCircle2 size={13} /> Thank you for subscribing!
                  </p>
                )}
              </form>
            </div>
          </FadeIn>
        </div>

        {/* Compact Formatted Google Studio Map Container */}
        <div className="bg-[#0E2034]/80 p-2.5 sm:p-3.5 rounded-2xl border border-[#2B4B70]/80 shadow-2xl mb-12">
          <div className="relative w-full h-[200px] sm:h-[240px] rounded-xl overflow-hidden border border-[#1F3A59] shadow-inner">
            <a
              href="https://maps.google.com/?q=Sushma+digital+studio+prabhu's+photography+Vijayanagar+Bangalore"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3.5 left-3.5 z-10 bg-[#142C45]/90 backdrop-blur-md text-white font-semibold text-[11px] px-3.5 py-1.5 rounded-full border border-[#2B4B70] shadow-md hover:bg-[#142C45] hover:border-[#258FEA] transition-all flex items-center gap-1.5 group"
            >
              <span>Open in Google Maps</span>
              <ExternalLink size={13} className="text-[#258FEA] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.176567015934!2d77.5345199793457!3d12.9605509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e753ecf8693%3A0xd405d8f5de6c3d1!2sSushma%20digital%20studio%20(prabhu's%20photography)!5e0!3m2!1sen!2sin!4v1788005365215!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Sushma Digital Studio Location Map"
            />
          </div>
        </div>

        {/* Divider & Copyright Section */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#2B4B70] to-transparent mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#94A3B8] uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Sushma Digital Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-[#2B4B70]">&bull;</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
