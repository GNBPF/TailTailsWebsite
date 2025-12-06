import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Home, PawPrint } from 'lucide-react';

const PrivacySection: React.FC = () => {
  return (
    <section className="bg-slate-900 py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
        
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-6xl font-serif font-bold text-white mb-6 md:mb-8"
        >
          We don't track you.<br/>
          <span className="text-teal">You share the path.</span>
        </motion.h2>

        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-16 md:mb-20">
            Unlike other apps, we don't broadcast your dog's exact GPS location in real-time. 
            We share specific "Moments" — keeping your home location private.
        </p>

        {/* The Animation Area */}
        <div className="h-64 relative flex items-center justify-center">
            
            {/* The Old Way (Exploding) */}
            <motion.div 
                initial={{ scale: 1, opacity: 1 }}
                whileInView={{ scale: 3, opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ margin: "-100px" }}
                className="absolute text-red-500"
            >
                <MapPin size={64} />
            </motion.div>

            {/* The New Way (Paw Prints) */}
            <div className="absolute inset-0 flex items-center justify-center">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                        whileInView={{ 
                            opacity: [0, 1, 0], 
                            scale: 1,
                            x: (i % 2 === 0 ? 40 : -40) + (Math.random() * 20),
                            y: (i - 2.5) * 60 
                        }}
                        transition={{ 
                            delay: 1.5 + (i * 0.3), 
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 1
                        }}
                        className="absolute text-teal"
                    >
                        <PawPrint size={32} className={i % 2 === 0 ? "rotate-12" : "-rotate-12"} />
                    </motion.div>
                ))}
            </div>

            {/* Home Base */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-0 text-white bg-slate-800 p-4 rounded-full border-2 border-teal"
            >
                <Home size={32} />
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PrivacySection;