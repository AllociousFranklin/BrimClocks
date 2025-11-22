import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import MobileNav from './MobileNav';

type Page = 'splash' | 'bio' | 'gallery' | 'course' | 'contacts';

interface BioPageProps {
  onNavigate: (page: Page) => void;
}

export default function BioPage({ onNavigate }: BioPageProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#000100]">
      {/* Navigation Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-[#000100]/95 backdrop-blur-sm border-b border-[#B6B6B4]/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => onNavigate('splash')}
            className="text-xl md:text-2xl text-[#B6B6B4] tracking-wider hover:opacity-80 transition-opacity"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Theory of Arts
          </button>
          <MobileNav currentPage="bio" onNavigate={onNavigate} />
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-end justify-center overflow-hidden mt-16 pb-32">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1735027424220-2697560dc9f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3QlMjBwb3J0cmFpdCUyMG1vbm9jaHJvbWV8ZW58MXx8fHwxNzYzODA2MTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Artist Portrait"
            className="w-full h-full object-cover grayscale opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000100]/60 via-transparent to-[#000100]" />
        </div>
        
        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-2xl md:text-4xl lg:text-5xl text-[#B6B6B4] italic leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
            "Emotion holds no true colors—it merely disguises itself as the way we see the world."
          </p>
          <p className="text-[#8A8A8A] mt-6 text-base md:text-lg tracking-wider">— tanish</p>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Left Column - Text */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl text-[#B6B6B4] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                Philosophy
              </h2>
              
              <div className="space-y-6 text-[#F5F5F5] leading-relaxed">
                <p>
                  Through my journey, I've learned to see the world not for its colors, but for its emotions. 
                  I move through a space that may look plain, but it's filled with feeling, depth, and meaning.
                </p>
                
                <p>
                  Each mark I make is like a quiet moment of thought, each surface a conversation with silence. 
                  My art isn't meant to decorate—it's meant to something to understand the emotion and balance 
                  between darkness and light.
                </p>
                
                <p>
                  I'm guided by discipline and passion. To me, art isn't just something you see—it's something 
                  you feel. It speaks when words can't, connecting people through shared human experience.
                </p>
                
                <p className="text-[#8A8A8A] italic">
                  The Theory of Arts isn't just a collection of my work—it's my way of seeing the world. It's a 
                  belief that true vision comes from feeling, not color, and an invitation to step into the calm 
                  and transformation that silence can bring.
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="border-2 border-[#B6B6B4]/30 p-4 transition-all duration-500 group-hover:border-[#B6B6B4] group-hover:shadow-[0_0_30px_rgba(182,182,180,0.3)]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1748791945355-4e20f188377d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3QlMjBoYW5kcyUyMHBhaW50aW5nfGVufDF8fHx8MTc2MzgwNjEyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Artist at Work"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl text-[#F5F5F5] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
            Explore My Work
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => onNavigate('gallery')}
              className="px-10 py-4 bg-[#B6B6B4] text-[#000100] hover:bg-[#B6B6B4]/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(182,182,180,0.4)]"
            >
              View Gallery
            </button>
            <button
              onClick={() => onNavigate('course')}
              className="px-10 py-4 border-2 border-[#B6B6B4] text-[#B6B6B4] hover:bg-[#B6B6B4]/10 transition-all duration-300 hover:scale-105"
            >
              Explore Masterclass
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
