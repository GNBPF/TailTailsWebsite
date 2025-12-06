import React from 'react';
import { motion } from 'framer-motion';
import { Camera, PenTool } from 'lucide-react';

const CreativeSection: React.FC = () => {
  const text = "Today, Bruno chased a butterfly into the neighbor's garden...";
  
  return (
    <section className="py-20 md:py-32 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-cream relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
           
           {/* LEFT: TEXT */}
           <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 order-1">
              <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg shadow-sm">
                 <PenTool size={18} className="text-sunset md:w-5 md:h-5" />
                 <span className="font-bold text-gray-800 text-sm md:text-base">The Creative Studio</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-charcoal leading-tight">
                Every walk is a <span className="text-sunset decoration-wavy underline">blank page</span>.
              </h2>
              
              <p className="text-lg md:text-xl text-gray-700">
                Our volunteers turn 45 minutes of exercise into a story you'll keep forever. 
                It's not just a report; it's a memory.
              </p>

              {/* Typewriter Effect */}
              <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border-l-4 border-sunset max-w-full lg:max-w-md font-mono text-gray-600 text-base md:text-lg min-h-[100px] md:min-h-[120px]">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: { transition: { staggerChildren: 0.05 } }
                  }}
                >
                  {text.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 }
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                  <motion.span
                     animate={{ opacity: [0, 1, 0] }}
                     transition={{ repeat: Infinity, duration: 0.8 }}
                     className="inline-block w-2 h-5 bg-sunset ml-1 align-middle"
                  />
                </motion.div>
              </div>
           </div>

           {/* RIGHT: POLAROIDS */}
           <div className="w-full lg:w-1/2 relative h-[350px] md:h-[500px] perspective-1000 order-2 flex justify-center lg:block">
              
              {/* Background Camera Icon */}
              <div className="absolute top-10 right-0 lg:right-10 opacity-10 text-charcoal rotate-12">
                 <Camera size={150} className="md:w-[200px] md:h-[200px]" />
              </div>

              {/* Floating Photos - Adjusted positions for Mobile */}
              <motion.div 
                 className="absolute top-0 lg:left-10 bg-white p-2 pb-6 md:p-3 md:pb-8 shadow-xl rotate-[-6deg] w-40 md:w-64 z-10"
                 initial={{ y: 50, x: -20, opacity: 0, rotate: -15 }}
                 whileInView={{ y: 0, x: 0, opacity: 1, rotate: -6 }}
                 transition={{ duration: 0.8, type: "spring" }}
                 whileHover={{ scale: 1.1, rotate: 0, zIndex: 50 }}
                 style={{ left: '5%' }}
              >
                 <img src="https://images.unsplash.com/photo-1510771463146-e89e6e86560e?auto=format&fit=crop&q=80&w=400" className="w-full h-32 md:h-48 object-cover bg-gray-100" />
                 <p className="font-handwriting text-center mt-2 text-gray-500 font-serif italic text-xs md:text-base">Making friends!</p>
              </motion.div>

              <motion.div 
                 className="absolute top-20 lg:right-10 bg-white p-2 pb-6 md:p-3 md:pb-8 shadow-xl rotate-[6deg] w-40 md:w-64 z-20"
                 initial={{ y: 50, x: 20, opacity: 0, rotate: 15 }}
                 whileInView={{ y: 0, x: 0, opacity: 1, rotate: 6 }}
                 transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
                 whileHover={{ scale: 1.1, rotate: 0, zIndex: 50 }}
                 style={{ right: '5%' }}
              >
                 <img src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&q=80&w=400" className="w-full h-32 md:h-48 object-cover bg-gray-100" />
                 <p className="font-handwriting text-center mt-2 text-gray-500 font-serif italic text-xs md:text-base">So many sniffs.</p>
              </motion.div>

              <motion.div 
                 className="absolute bottom-4 lg:left-32 bg-white p-2 pb-6 md:p-3 md:pb-8 shadow-xl rotate-[-3deg] w-40 md:w-64 z-30"
                 initial={{ y: 50, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
                 whileHover={{ scale: 1.1, rotate: 0, zIndex: 50 }}
              >
                 <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=400" className="w-full h-32 md:h-48 object-cover bg-gray-100" />
                 <p className="font-handwriting text-center mt-2 text-gray-500 font-serif italic text-xs md:text-base">Treat time!</p>
              </motion.div>

           </div>

        </div>
      </div>
    </section>
  );
};

export default CreativeSection;