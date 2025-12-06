import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coins, PawPrint, Star } from 'lucide-react';
import { StoryStep } from '../types';

// Replace these with your uploaded image URLs
const SCREENSHOTS = {
    QUEST: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3Q8Xf-q1X8Z0kZ7P3W1j4o6Z9Y6K5Q3X7W2L8V4Y1Z6K9Q5X8W3L7Y2Z6K9Q5X8W3L7Y2Z6K9Q5X8W3L7Y2Z6K9Q5X8W3L7Y2", // Replace with actual URL
    JOURNEY: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9Y2L5Z8K3X6W1j4o6Z9Y6K5Q3X7W2L8V4Y1Z6K9Q5X8W3L7Y2Z6K9Q5X8W3L7Y2Z6K9Q5X8W3L7Y2Z6K9Q5X8W3L7Y2Z6K9Q5X8W3L7Y2", // Replace with actual URL
    GRATITUDE: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5X8W3L7Y2Z6K9Q5X8W3L7Y2Z6K9Q5X8W3L7Y2Z6K9Q5X8W3L7Y2Z6K9Q5X8W3L7Y2Z6K9Q5X8W3L7Y2Z6K9Q5X8W3L7Y2Z6K9Q5X8W3L7Y2" // Replace with actual URL
};

interface PhoneMockupProps {
  step: StoryStep;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ step }) => {
  return (
    <div className="relative group">
        {/* Hardware Buttons */}
        <div className="absolute top-24 -left-[2px] w-[3px] h-10 bg-gray-700 rounded-l-md opacity-90"></div>
        <div className="absolute top-36 -left-[2px] w-[3px] h-14 bg-gray-700 rounded-l-md opacity-90"></div>
        <div className="absolute top-28 -right-[2px] w-[3px] h-16 bg-gray-700 rounded-r-md opacity-90"></div>

        {/* Device Frame */}
        <div className="relative w-[300px] h-[620px] lg:w-[340px] lg:h-[700px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden ring-1 ring-white/20 transform transition-all duration-500">
        
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-black rounded-b-2xl z-40 flex justify-center items-center">
            <div className="w-16 h-1 bg-gray-800 rounded-full opacity-50"></div>
        </div>

        {/* Screen Content */}
        <div className="w-full h-full bg-offwhite flex flex-col relative overflow-hidden rounded-[2.5rem]">
            
            {/* Dynamic Content based on Step */}
            <AnimatePresence mode="wait">
            {step === StoryStep.QUEST && (
                <motion.div 
                key="quest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-10 bg-white"
                >
                    <img 
                        src={SCREENSHOTS.QUEST} 
                        alt="Daily Quests Interface" 
                        className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay: Falling Coins (Interactive element) */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden z-50">
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: -50, opacity: 0, rotate: 0 }}
                                animate={{ 
                                    y: 800, 
                                    opacity: [0, 1, 1, 0], 
                                    rotate: Math.random() * 360 
                                }}
                                transition={{ 
                                    duration: 2.5, 
                                    repeat: Infinity, 
                                    delay: Math.random() * 2,
                                    ease: "linear"
                                }}
                                className="absolute text-yellow-500 drop-shadow-md"
                                style={{ left: `${10 + Math.random() * 80}%` }}
                            >
                                <Coins size={28} fill="currentColor" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}

            {step === StoryStep.JOURNEY && (
                <motion.div 
                key="journey"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                className="absolute inset-0 z-10 bg-white"
                >
                    <img 
                        src={SCREENSHOTS.JOURNEY} 
                        alt="Story Timeline Interface" 
                        className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay: Subtle pop animation for photos */}
                    <div className="absolute top-1/4 left-0 w-full h-64 pointer-events-none">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5, type: 'spring' }}
                            className="absolute right-4 bottom-4 bg-white p-2 rounded-lg shadow-xl"
                        >
                            <div className="flex items-center gap-1 text-xs font-bold text-sunset">
                                <PawPrint size={12} />
                                <span>New Memory!</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}

            {step === StoryStep.GRATITUDE && (
                <motion.div 
                key="gratitude"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-10 bg-white"
                >
                    <img 
                        src={SCREENSHOTS.GRATITUDE} 
                        alt="Gratitude Payment Interface" 
                        className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay: Slider Highlight */}
                    <motion.div 
                        className="absolute bottom-[20%] left-[10%] right-[10%] h-12 bg-yellow-400/20 rounded-full border border-yellow-400 z-50 pointer-events-none"
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: [0, 1, 0], scaleX: [0.8, 1, 1.1] }}
                        transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
                    />
                </motion.div>
            )}
            </AnimatePresence>

            {/* Reflection Glare */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none z-50"></div>
        </div>
        </div>
    </div>
  );
};

export default PhoneMockup;