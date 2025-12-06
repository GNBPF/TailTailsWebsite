import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Twitter, Instagram, X, Mail, Smartphone, ArrowRight, ChefHat } from 'lucide-react';

const Footer: React.FC = () => {
  const [treats, setTreats] = useState<number[]>([]);
  const [activeModal, setActiveModal] = useState<'none' | 'subscribe' | 'download'>('none');
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const addTreat = () => {
    // Limit visible treats for performance
    if (treats.length > 15) return;
    setTreats(prev => [...prev, Date.now()]);
  };

  const handleSubscribeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      // Reset after a delay
      setTimeout(() => {
        setIsSubscribed(false);
        setActiveModal('none');
        setEmail('');
      }, 3000);
    }, 1000);
  };

  const openSubscribe = () => setActiveModal('subscribe');
  const openDownload = () => setActiveModal('download');
  const closeModal = () => setActiveModal('none');

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
                onClick={openSubscribe}
                className="w-full md:w-auto bg-sunset text-white px-8 py-4 rounded-full text-lg md:text-xl font-bold shadow-lg shadow-sunset/30 relative overflow-hidden"
            >
                <span className="relative z-10">Subscribe to Updates</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-transform duration-300" />
            </motion.button>

            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={addTreat}
                onClick={openDownload}
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

      {/* MODALS */}
      <AnimatePresence>
        {activeModal !== 'none' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-offwhite w-full max-w-md rounded-3xl p-6 md:p-8 relative z-10 shadow-2xl"
            >
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-sunset transition-colors rounded-full hover:bg-orange-50"
              >
                <X size={24} />
              </button>

              {activeModal === 'subscribe' && (
                <div className="text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-orange-100 text-sunset rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail size={28} className="md:w-8 md:h-8" />
                  </div>
                  
                  {!isSubscribed ? (
                    <>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-2">Join the Pack</h3>
                      <p className="text-sm md:text-base text-gray-500 mb-6 md:mb-8">
                        We are putting the final touches on the app. Join the waitlist to get early access!
                      </p>
                      
                      <form onSubmit={handleSubscribeSubmit} className="space-y-4">
                        <input 
                          type="email" 
                          placeholder="yourname@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full px-4 py-3 md:px-6 md:py-4 rounded-xl border border-gray-200 focus:border-sunset focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                        />
                        <button 
                          type="submit"
                          className="w-full bg-sunset text-white font-bold py-3 md:py-4 rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-sunset/20"
                        >
                          Join Waitlist
                        </button>
                      </form>
                    </>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-8"
                    >
                      <h3 className="text-2xl font-serif font-bold text-teal mb-2">You're on the list! 🎉</h3>
                      <p className="text-gray-500">Keep an eye on your inbox. We'll bark when we're ready.</p>
                    </motion.div>
                  )}
                </div>
              )}

              {activeModal === 'download' && (
                <div className="text-center">
                   <div className="w-14 h-14 md:w-16 md:h-16 bg-teal/10 text-teal rounded-full flex items-center justify-center mx-auto mb-6">
                    <Smartphone size={28} className="md:w-8 md:h-8" />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-2">Almost There!</h3>
                  <p className="text-sm md:text-base text-gray-500 mb-6 md:mb-8">
                    TailTales is currently in development.
                  </p>

                  <div className="space-y-3 mb-8">
                    <button className="w-full flex items-center justify-center gap-3 bg-gray-900 text-white py-3 rounded-xl hover:bg-black transition-colors opacity-50 cursor-not-allowed">
                       <span className="font-bold">App Store</span>
                    </button>
                    <button className="w-full flex items-center justify-center gap-3 bg-teal text-white py-3 rounded-xl hover:bg-teal-700 transition-colors opacity-50 cursor-not-allowed">
                       <span className="font-bold">Google Play</span>
                    </button>
                    <p className="text-xs text-orange-500 font-bold mt-2">⚠️ App is not live right now. Coming Soon.</p>
                  </div>

                  <div 
                    onClick={openSubscribe}
                    className="cursor-pointer group flex items-center justify-center gap-2 text-charcoal hover:text-sunset transition-colors"
                  >
                    <span className="font-bold underline decoration-2 decoration-orange-200 underline-offset-4 group-hover:decoration-sunset text-sm md:text-base">
                      Join the Waitlist instead
                    </span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;