import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Coffee } from 'lucide-react';

const ImpactSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-orange-50 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div 
          style={{ opacity }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="text-sunset font-bold uppercase tracking-widest text-xs md:text-sm">The Mission</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mt-2">
            Pocket Money for Them.<br />
            <span className="text-teal">Peace of Mind for You.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center relative gap-8 md:gap-0">
          
          {/* LEFT: THE OWNER */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative w-full md:w-1/3 text-center order-1"
          >
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-sunset rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <img 
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=400" 
                alt="Happy Dog Owner" 
                className="w-40 h-40 md:w-64 md:h-64 object-cover rounded-full border-4 border-white shadow-xl relative z-10"
              />
              <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-white p-2 md:p-3 rounded-full shadow-lg z-20 text-sunset">
                <Heart fill="currentColor" size={20} className="md:w-6 md:h-6" />
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-bold mt-4 md:mt-6 text-charcoal">The Owner</h3>
            <p className="text-sm md:text-base text-gray-600 mt-2 px-8">"I get to focus on work knowing Bruno is happy."</p>
          </motion.div>

          {/* CONNECTION LINES */}
          
          {/* Desktop Horizontal Thread */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full -translate-y-1/2 -z-0 pointer-events-none order-2">
             <svg className="w-full h-24" viewBox="0 0 800 100" preserveAspectRatio="none">
               <motion.path 
                 d="M 150 50 Q 400 50 650 50"
                 fill="none"
                 stroke="#E76F51"
                 strokeWidth="4"
                 strokeDasharray="10 10"
                 style={{ pathLength }}
               />
               <motion.circle 
                 cx="400" cy="50" r="8" fill="#2A9D8F" 
                 style={{ 
                    offsetDistance: useTransform(pathLength, [0, 1], ["0%", "100%"]),
                    opacity: pathLength
                 }}
               />
             </svg>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-1 rounded-full shadow-sm text-xs font-bold text-gray-400">
                Guilt-Free Exchange
             </div>
          </div>

          {/* Mobile Vertical Thread */}
          <div className="block md:hidden h-24 w-1 bg-transparent relative order-2">
              <motion.div 
                className="w-1 bg-sunset/50 h-full mx-auto"
                style={{ scaleY: pathLength, originY: 0 }}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-full shadow-sm text-[10px] font-bold text-gray-400 whitespace-nowrap border border-gray-100">
                Guilt-Free
              </div>
          </div>

          {/* RIGHT: THE STUDENT */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative w-full md:w-1/3 text-center order-3"
          >
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-teal rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400" 
                alt="Student Walker" 
                className="w-40 h-40 md:w-64 md:h-64 object-cover rounded-full border-4 border-white shadow-xl relative z-10"
              />
              <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 bg-white p-2 md:p-3 rounded-full shadow-lg z-20 text-teal">
                <Coffee size={20} className="md:w-6 md:h-6" />
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-bold mt-4 md:mt-6 text-charcoal">The Student</h3>
            <p className="text-sm md:text-base text-gray-600 mt-2 px-8">"This walk paid for my textbooks (and coffee)."</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ImpactSection;