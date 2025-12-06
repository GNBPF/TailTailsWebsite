import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, PawPrint } from 'lucide-react';

interface NavbarProps {
  onOpenWaitlist: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenWaitlist }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="bg-sunset text-white p-1.5 rounded-lg transform group-hover:rotate-12 transition-transform">
            <PawPrint size={20} fill="currentColor" />
          </div>
          <span className={`text-xl font-serif font-black tracking-tight ${isScrolled ? 'text-charcoal' : 'text-charcoal md:text-white'}`}>
            TailTales
          </span>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {['Mission', 'How it Works', 'Safety', 'Stories'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
              className={`text-sm font-bold uppercase tracking-wider hover:text-sunset transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-white/90 hover:text-white'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <button
            onClick={onOpenWaitlist}
            className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 ${
              isScrolled
                ? 'bg-sunset text-white shadow-lg shadow-sunset/30'
                : 'bg-white text-sunset hover:bg-gray-100'
            }`}
          >
            Join Waitlist
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-lg ${isScrolled ? 'text-charcoal' : 'text-charcoal'}`} // Always dark on mobile for visibility against complex backgrounds or white header
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white border-t border-gray-100 shadow-xl"
        >
          <div className="flex flex-col p-6 gap-4">
            {['Mission', 'How it Works', 'Safety', 'Stories'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                className="text-left text-lg font-bold text-charcoal py-2 border-b border-gray-50"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => {
                onOpenWaitlist();
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-sunset text-white font-bold py-3 rounded-xl mt-2"
            >
              Join Waitlist
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;