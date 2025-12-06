import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Briefcase, TreePine, ArrowRight, ArrowLeft } from 'lucide-react';

const SplitHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Default to center (0.5)
  const x = useMotionValue(0.5);
  
  // Smooth out the mouse movement
  const smoothX = useSpring(x, { damping: 30, stiffness: 200 });

  // Desktop Animations
  const leftWidth = useTransform(smoothX, [0, 1], ['70%', '30%']);
  const rightWidth = useTransform(smoothX, [0, 1], ['30%', '70%']);
  const leftOpacity = useTransform(smoothX, [0.3, 0.7], [1, 0]);
  const rightOpacity = useTransform(smoothX, [0.3, 0.7], [0, 1]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    x.set(relativeX);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden cursor-crosshair"
    >
      {/* LEFT SIDE: THE BUSY OWNER */}
      <motion.div 
        style={{ 
          width: isMobile ? '100%' : leftWidth,
          height: isMobile ? '50%' : '100%' 
        }}
        className="bg-slate-100 relative flex items-center justify-center overflow-hidden border-b-4 md:border-b-0 md:border-r-4 border-white"
      >
        <div className="absolute inset-0 bg-gray-900 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
        />
        
        <motion.div 
          style={{ opacity: isMobile ? 1 : leftOpacity }}
          className="relative z-10 text-center p-4 md:p-8 max-w-lg"
        >
          <div className="bg-white p-3 md:p-4 rounded-full inline-block mb-3 md:mb-6 shadow-xl text-sunset scale-75 md:scale-100">
            <Briefcase size={40} />
          </div>
          <h2 className="text-3xl md:text-7xl font-serif font-bold text-gray-800 mb-2 md:mb-4 leading-tight">
            The Busy Owner
          </h2>
          <p className="text-sm md:text-xl text-gray-800 font-sans font-bold bg-white/80 backdrop-blur-sm p-2 rounded-lg inline-block">
            Stuck in meetings? We've got the leash.
          </p>
          {!isMobile && (
            <div className="mt-8 flex justify-center text-sunset animate-pulse">
               <ArrowRight size={32} />
            </div>
          )}
        </motion.div>

        {/* Parallax Elements Left - Office/Work Image */}
        <motion.img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
          alt="Busy Office Desk"
          className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale mix-blend-multiply"
        />
      </motion.div>


      {/* RIGHT SIDE: THE STUDENT WALKER */}
      <motion.div 
        style={{ 
          width: isMobile ? '100%' : rightWidth,
          height: isMobile ? '50%' : '100%' 
        }}
        className="bg-teal relative flex items-center justify-center overflow-hidden"
      >
        <motion.div 
          style={{ opacity: isMobile ? 1 : rightOpacity }}
          className="relative z-10 text-center p-4 md:p-8 max-w-lg"
        >
          <div className="bg-cream p-3 md:p-4 rounded-full inline-block mb-3 md:mb-6 shadow-xl text-white scale-75 md:scale-100">
            <TreePine size={40} />
          </div>
          <h2 className="text-3xl md:text-7xl font-serif font-bold text-white mb-2 md:mb-4 leading-tight">
            Free in the evening?
          </h2>
          <p className="text-sm md:text-xl text-white font-sans font-bold bg-black/10 backdrop-blur-sm p-2 rounded-lg inline-block">
            Take a break. Earn smiles & coins.
          </p>
          {!isMobile && (
            <div className="mt-8 flex justify-center text-cream animate-pulse">
               <ArrowLeft size={32} />
            </div>
          )}
        </motion.div>

        {/* Parallax Elements Right - Park/Dog Image */}
        <motion.img 
          src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=1200"
          alt="Sunny Park Walk"
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
      </motion.div>

      {/* CENTER PORTAL */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none w-full flex justify-center">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="bg-white px-6 py-3 md:px-8 md:py-4 rounded-full shadow-2xl border-4 border-sunset flex items-center gap-3 whitespace-nowrap"
        >
          <span className="text-xl md:text-3xl font-serif font-black text-sunset tracking-tighter">TailTales</span>
        </motion.div>
      </div>

    </section>
  );
};

export default SplitHero;