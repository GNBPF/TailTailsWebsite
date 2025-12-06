import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import PhoneMockup from './PhoneMockup';
import { StoryStep } from '../types';

const StorySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState<StoryStep>(StoryStep.QUEST);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform background color based on scroll
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#E76F51", "#2A9D8F", "#F4A261"]
  );

  // Update step based on scroll position
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.35) {
      setCurrentStep(StoryStep.QUEST);
    } else if (latest < 0.7) {
      setCurrentStep(StoryStep.JOURNEY);
    } else {
      setCurrentStep(StoryStep.GRATITUDE);
    }
  });

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <motion.div 
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
        style={{ backgroundColor }}
      >
        {/* Decorative Background Patterns */}
        <motion.div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ 
                backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)', 
                backgroundSize: '40px 40px',
                y: useTransform(scrollYProgress, [0, 1], [0, -100]) 
            }}
        />

        <div className="container mx-auto px-4 h-full relative z-10">
          {/* Layout: Stacked on Mobile/Tablet (< lg), Split on Desktop (>= lg) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 h-full items-center">
            
            {/* TEXT CONTENT - Scrolls over phone on mobile/tablet */}
            <div className="order-2 lg:order-1 relative z-20 pointer-events-none lg:pointer-events-auto flex flex-col justify-center h-full">
               {/* Spacer for mobile scroll interactions */}
               <div className="relative w-full max-w-lg mx-auto lg:mx-0">
                 
                 {/* Block 1: Quest */}
                 <motion.div 
                    className={`transition-all duration-700 absolute lg:relative top-0 left-0 w-full p-6 lg:p-0 rounded-2xl lg:rounded-none bg-white/10 lg:bg-transparent backdrop-blur-lg lg:backdrop-blur-none border border-white/20 lg:border-none shadow-xl lg:shadow-none ${
                        currentStep === StoryStep.QUEST 
                        ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
                        : 'opacity-0 lg:opacity-30 blur-sm -translate-y-8 lg:translate-y-0 scale-95 pointer-events-none'
                    }`}
                 >
                    <h2 className="text-3xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md">Turn Walks into Quests.</h2>
                    <p className="text-lg lg:text-xl font-sans text-white/95 leading-relaxed drop-shadow-sm font-medium">Every pee-break is a mission. Every sniff is a clue. Gamify the daily grind and earn rewards for every step.</p>
                 </motion.div>

                 {/* Block 2: Journey */}
                 <motion.div 
                    className={`transition-all duration-700 absolute lg:relative top-0 left-0 w-full p-6 lg:p-0 rounded-2xl lg:rounded-none bg-white/10 lg:bg-transparent backdrop-blur-lg lg:backdrop-blur-none border border-white/20 lg:border-none shadow-xl lg:shadow-none ${
                        currentStep === StoryStep.JOURNEY 
                        ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
                        : 'opacity-0 lg:opacity-30 blur-sm translate-y-8 lg:translate-y-0 scale-95 pointer-events-none'
                    }`}
                    style={{ marginTop: '0px' /* Handled by absolute/opacity on mobile */ }}
                 >
                    {/* Desktop spacer to prevent overlap if we want distinct vertical positions, but here we use opacity fading for cleaner UX */}
                    <div className="hidden lg:block h-32"></div> 
                    <h2 className="text-3xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md">No Maps. Just Memories.</h2>
                    <p className="text-lg lg:text-xl font-sans text-white/95 leading-relaxed drop-shadow-sm font-medium">We don't just show you a blue line. We tell you the story of the squirrel encounter and the friend made at the park.</p>
                 </motion.div>

                 {/* Block 3: Gratitude */}
                 <motion.div 
                    className={`transition-all duration-700 absolute lg:relative top-0 left-0 w-full p-6 lg:p-0 rounded-2xl lg:rounded-none bg-white/10 lg:bg-transparent backdrop-blur-lg lg:backdrop-blur-none border border-white/20 lg:border-none shadow-xl lg:shadow-none ${
                        currentStep === StoryStep.GRATITUDE 
                        ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
                        : 'opacity-0 lg:opacity-30 blur-sm translate-y-16 lg:translate-y-0 scale-95 pointer-events-none'
                    }`}
                 >
                    <div className="hidden lg:block h-32"></div>
                    <h2 className="text-3xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md">Buy them a Chai.</h2>
                    <p className="text-lg lg:text-xl font-sans text-white/95 leading-relaxed drop-shadow-sm font-medium">Direct, heartfelt tipping. Connect instantly with the human who loves your human's best friend.</p>
                 </motion.div>
               </div>
            </div>

            {/* STICKY PHONE - Background on mobile/tablet, Right side on Desktop */}
            <div className="order-1 lg:order-2 flex justify-center items-center absolute inset-0 lg:relative z-10 lg:z-auto pointer-events-none">
               {/* Mobile/Tablet Background Dimmer */}
               <div className="lg:hidden absolute inset-0 bg-black/10 backdrop-blur-[2px]"></div>
               
               <motion.div 
                  className="relative z-20 origin-center"
                  style={{ 
                      rotate: useTransform(scrollYProgress, [0, 1], [0, 5]),
                      scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 0.95, 0.9])
                  }}
               >
                  <PhoneMockup step={currentStep} />
               </motion.div>
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default StorySection;