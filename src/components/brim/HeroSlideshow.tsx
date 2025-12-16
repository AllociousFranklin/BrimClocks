import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const products = [
  {
    name: 'Mini LED Clock',
    image: 'https://images.unsplash.com/photo-1756923163710-20000e50e872?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwTEVEJTIwY2xvY2slMjB3YWxsfGVufDF8fHx8MTc2NTg5ODk1OHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    name: 'Jumbo LED Clock',
    image: 'https://images.unsplash.com/photo-1761132304153-b1a74dca3b88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBMRUQlMjBjbG9ja3xlbnwxfHx8fDE3NjU4OTg5NTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    name: 'Calendar Clock',
    image: 'https://images.unsplash.com/photo-1641567535859-c58187ac4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwY2FsZW5kYXIlMjBjbG9ja3xlbnwxfHx8fDE3NjU4OTg5NTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[70vh] mt-20 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000100]/50 to-[#000100] z-10" />
          <img
            src={products[currentSlide].image}
            alt={products[currentSlide].name}
            className="w-full h-full object-cover"
          />
          
          <div className="absolute bottom-0 left-0 right-0 z-20 p-8 sm:p-12 lg:p-16">
            <div className="max-w-7xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl text-[#F5F5F5] mb-4"
              >
                Premium LED Clock Solutions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-xl sm:text-2xl text-[#B6B6B4]"
              >
                Trusted by Banks, Offices & Corporations Nationwide
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-[#B6B6B4] w-8'
                : 'bg-[#B6B6B4]/30 hover:bg-[#B6B6B4]/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
