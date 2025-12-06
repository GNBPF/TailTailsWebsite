import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Check } from 'lucide-react';

const TrustSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-teal/10 text-teal px-4 py-2 rounded-full font-bold mb-4 text-sm md:text-base">
            <ShieldCheck size={20} />
            <span>Human Verified</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal">
            The Safety Vault
          </h2>
          <p className="text-lg md:text-xl text-gray-500 mt-4 max-w-2xl mx-auto">
            We don't just rely on algorithms. We personally verify every volunteer's identity before they step out.
          </p>
        </div>

        {/* SCANNER ANIMATION */}
        <div className="relative w-full max-w-md mx-auto h-64 md:h-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100 bg-gray-50">
           
           {/* Background: Blurry & Hidden */}
           <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8 filter blur-md grayscale opacity-50">
              <div className="w-full h-full bg-white rounded-xl border border-gray-200 p-4 md:p-6 flex gap-4 items-center">
                 <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-300 rounded-full flex-shrink-0"></div>
                 <div className="space-y-3 flex-1">
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                 </div>
              </div>
           </div>

           {/* Foreground: Clear & Verified (Revealed by clip-path) */}
           <motion.div 
             initial={{ clipPath: "inset(0 100% 0 0)" }}
             whileInView={{ clipPath: "inset(0 0% 0 0)" }}
             transition={{ duration: 2, ease: "easeInOut" }}
             viewport={{ once: false, amount: 0.5 }}
             className="absolute inset-0 bg-white flex items-center justify-center p-6 md:p-8"
           >
              <div className="w-full h-full bg-white rounded-xl border border-teal/20 p-4 md:p-6 flex gap-4 items-center shadow-inner relative overflow-hidden">
                 <div className="absolute top-2 right-2 text-teal">
                    <Check size={24} />
                 </div>
                 <img 
                    src="https://randomuser.me/api/portraits/women/44.jpg" 
                    alt="Verified Walker" 
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-teal flex-shrink-0"
                 />
                 <div className="flex-1">
                    <div className="h-4 bg-gray-800 rounded w-3/4 mb-2 font-bold text-base md:text-lg">Sarah Jenkins</div>
                    <div className="h-4 text-xs md:text-sm text-teal font-bold">ID Verified • Student</div>
                 </div>
              </div>
           </motion.div>

           {/* The Scanner Bar */}
           <motion.div 
             initial={{ left: "0%" }}
             whileInView={{ left: "100%" }}
             transition={{ duration: 2, ease: "easeInOut" }}
             viewport={{ once: false, amount: 0.5 }}
             className="absolute top-0 bottom-0 w-1 bg-teal shadow-[0_0_20px_rgba(42,157,143,0.8)] z-20"
           />

        </div>

        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center">
           {[
             { title: "ID Check", desc: "Government ID verification" },
             { title: "Student Status", desc: "College enrollment proof" },
             { title: "Vetting Call", desc: "1-on-1 Safety Briefing" }
           ].map((item, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5 + (i * 0.1) }}
               className="p-4 rounded-xl bg-gray-50 border border-gray-100"
             >
                <h4 className="font-bold text-charcoal">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
             </motion.div>
           ))}
        </div>

      </div>
    </section>
  );
};

export default TrustSection;