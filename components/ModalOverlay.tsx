import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Smartphone, ArrowRight } from 'lucide-react';

interface ModalOverlayProps {
  activeModal: 'none' | 'subscribe' | 'download';
  closeModal: () => void;
  openSubscribe: () => void;
}

const ModalOverlay: React.FC<ModalOverlayProps> = ({ activeModal, closeModal, openSubscribe }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      // Reset after a delay
      setTimeout(() => {
        setIsSubscribed(false);
        closeModal();
        setEmail('');
      }, 3000);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {activeModal !== 'none' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
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
  );
};

export default ModalOverlay;