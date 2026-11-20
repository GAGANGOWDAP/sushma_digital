import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Scroll progress bar in Signature Red */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#D92F26] origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#E2E6EC] shadow-sm py-3'
            : 'bg-white/90 backdrop-blur-sm border-b border-[#E2E6EC]/70 py-4'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" onClick={handleLogoClick} className="group flex items-center gap-3 cursor-pointer">
            <img
              src="/logo.png"
              alt="Sushma Digital Studio"
              className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wide text-[#142C45] group-hover:text-[#D92F26] transition-colors">
                Sushma
              </span>
              <span className="text-[#D92F26] text-[10px] font-bold tracking-[0.22em] uppercase">
                Digital Studio
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = location === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative text-[12px] xl:text-[13px] tracking-[0.16em] uppercase transition-colors py-1 ${
                    isActive
                      ? 'text-[#142C45] font-bold'
                      : 'text-[#64748B] hover:text-[#142C45]'
                  }`}
                  data-testid={`nav-link-${link.name.toLowerCase()}`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D92F26]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="btn-primary ml-2 shadow-sm"
              data-testid="nav-book-button"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 -mr-2 text-[#142C45] hover:text-[#D92F26] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            data-testid="nav-mobile-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white/98 backdrop-blur-xl z-30 transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-between ${
          mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-[#E2E6EC]">
          <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2.5">
            <img src="/logo.png" alt="Sushma Digital Studio" className="h-9 w-auto object-contain" />
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-lg font-bold text-[#142C45]">Sushma</span>
              <span className="text-[#D92F26] text-[9px] font-bold tracking-[0.2em] uppercase">Digital Studio</span>
            </div>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#64748B] hover:text-[#142C45] p-2"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center flex-1 gap-6 p-6">
          {navLinks.map((link) => {
            const isActive = location === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`font-serif text-2xl tracking-wide transition-colors ${
                  isActive ? 'text-[#D92F26] font-bold' : 'text-[#142C45] hover:text-[#D92F26]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="p-6 border-t border-[#E2E6EC] flex flex-col items-center gap-3">
          <Link
            href="/contact"
            className="btn-primary w-full max-w-xs text-center"
            data-testid="nav-mobile-book"
          >
            Book Now
          </Link>
          <p className="text-[11px] text-[#64748B] uppercase tracking-widest text-center mt-2">
            Bangalore &bull; 21+ Years Experience
          </p>
        </div>
      </div>
    </>
  );
};
