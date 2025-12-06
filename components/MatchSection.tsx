import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Sparkles } from 'lucide-react';

const avatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/65.jpg",
  "https://randomuser.me/api/portraits/men/85.jpg",
  "https://randomuser.me/api/portraits/women/22.jpg",
  "https://randomuser.me/api/portraits/men/12.jpg",
  // The Winner
  "https://randomuser.me/api/portraits/women/44.jpg", 
];

const MatchSection: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-charcoal to-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-8 md:mb-12"
        >
          <div className="inline-block p-3 rounded-full bg-yellow-400 text-yellow-900 mb-4 md:mb-6">
            <Zap size={24} className="md:w-8 md:h-8" fill="currentColor" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">The Magic Match</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            No shopping. No fatigue. We instantly match you with the nearest storyteller ready to earn.
          </p>
        </motion.div>

        {/* SLOT MACHINE CONTAINER */}
        <div className="relative w-64 h-80 md:w-72 md:h-96 mx-auto bg-slate-800 rounded-3xl border-8 border-slate-700 shadow-2xl overflow-hidden ring-4 ring-yellow-400/50">
            
            {/* Overlay Gradient for depth */}
            <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-slate-900 via-transparent to-slate-900"></div>
            
            {/* Selection Highlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-28 md:w-56 md:h-32 border-4 border-yellow-400 rounded-xl z-30 shadow-[0_0_20px_rgba(250,204,21,0.5)]"></div>

            {/* Spinning Strip */}
            <motion.div
               className="flex flex-col items-center gap-6 md:gap-8 py-8"
               initial={{ y: 0 }}
               whileInView={{ y: -650 }} // Adjusted for mobile height approximation
               viewport={{ once: true }}
               transition={{ 
                 duration: 3, 
                 ease: [0.1, 0.9, 0.2, 1] 
               }}
            >
               {/* Tripling the list for loop illusion */}
               {[...avatars, ...avatars, ...avatars].map((src, i) => (
                  <div key={i} className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 bg-white p-1 rounded-full">
                     <img src={src} alt="Avatar" className="w-full h-full object-cover rounded-full" />
                  </div>
               ))}
            </motion.div>

            {/* Confetti Pop */}
            <motion.div 
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40"
               initial={{ opacity: 0, scale: 0 }}
               whileInView={{ opacity: 1, scale: 1.5 }}
               transition={{ delay: 2.8, duration: 0.3 }}
            >
               <Sparkles className="text-yellow-400 w-24 h-24 md:w-32 md:h-32 drop-shadow-lg" />
            </motion.div>

        </div>

        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ delay: 3 }}
           className="mt-8 text-yellow-400 font-bold text-lg md:text-xl"
        >
           It's a Match! 🎉
        </motion.div>

      </div>
    </section>
  );
};

export default MatchSection;