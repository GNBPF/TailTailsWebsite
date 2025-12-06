import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Twitter, Instagram, ChefHat } from 'lucide-react';

interface FooterProps {
  onOpenWaitlist: () => void;
  onOpenDownload: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenWaitlist, onOpenDownload }) => {
  const [treats, setTreats] = useState<number[]>([]);

  const addTreat = () => {
    // Limit visible treats for performance
    if (treats.length > 15) return;
    setTreats(prev => [...prev, Date.now()]);
  };

  return (
    <footer className="bg-cream py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        
        <h2 className="text-3xl md:text-5xl font-serif font-black text-white mb-8 md:mb-12 drop-shadow-md">
           Ready to Wag?
        </h2>

        {/* The Treat Jar */}
        <div className="relative w-48 h-64 md:w-64 md:h-80 mx-auto mb-12 group">
            {/* Jar Glass Front (SVG) */}
            <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-2xl overflow-visible">
                 <path d="M20,10 L80,10 L90,30 L90,110 Q90,120 80,120 L20,120 Q10,120 10,110 L10,30 Z" 
                       fill="rgba(255,255,255,0.3)" stroke="white" strokeWidth="2" />
                 <path d="M20,10 L80,10 L90,30 L10,30 Z" fill="#e0e0e0" opacity="0.5" />
            </svg>

            {/* Treats Falling */}
            <AnimatePresence>
                {treats.map((id, index) => (
                    <motion.div
                        key={id}
                        initial={{ y: -50, x: (Math.random() - 0.5) * 40, rotate: 0 }}
                        animate={{ 
                            y: 180 - (index * 5), // Stack up visually roughly
                            rotate: Math.random() * 360 
                        }}
                        transition={{ 
                            type: "spring", 
                            damping: 10, 
                            stiffness: 100,
                            duration: 0.8 
                        }}
                        className="absolute top-10 left-1/2 w-6 h-3 md:w-8 md:h-4 bg-amber-800 rounded-full"
                        style={{ marginLeft: -16 }} // center
                    />
                ))}
            </AnimatePresence>

            {/* Jar Label */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 py-1 md:px-4 md:py-2 rotate-[-5deg] shadow-lg">
                <span className="font-serif font-bold text-sunset text-lg md:text-xl">Good Boys</span>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 items-center">
            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={addTreat}
                onClick={onOpenWaitlist}
                className="w-full md:w-auto bg-sunset text-white px-8 py-4 rounded-full text-lg md:text-xl font-bold shadow-lg shadow-sunset/30 relative overflow-hidden"
            >
                <span className="relative z-10">Subscribe to Updates</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-transform duration-300" />
            </motion.button>

            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={addTreat}
                onClick={onOpenDownload}
                className="w-full md:w-auto bg-white text-sunset px-8 py-4 rounded-full text-lg md:text-xl font-bold shadow-lg animate-pulse"
            >
                Join the Waitlist
            </motion.button>
        </div>

        {/* Development Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-8 md:mt-12 inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 md:px-6 md:py-3 rounded-2xl border border-white/20 text-left max-w-xs md:max-w-none"
        >
           <div className="p-2 bg-white rounded-full text-sunset flex-shrink-0">
              <ChefHat className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]" />
           </div>
           <div>
              <p className="text-[10px] md:text-xs text-white/70 font-bold uppercase tracking-wider">Status</p>
              <p className="text-white font-bold text-xs md:text-sm leading-tight">Cooking in the Kitchen... Launching Soon in Mumbai 🇮🇳</p>
           </div>
        </motion.div>

        <div className="mt-12 md:mt-16 flex justify-center gap-8 text-white/80">
            <Facebook className="hover:text-white cursor-pointer transition-colors" />
            <Twitter className="hover:text-white cursor-pointer transition-colors" />
            <Instagram className="hover:text-white cursor-pointer transition-colors" />
        </div>
        
        <p className="mt-8 text-white/60 font-sans text-xs md:text-sm">© 2024 TailTales. Made with 🦴 by Creative Devs.</p>

      </div>
    </footer>
  );
};

export default Footer;