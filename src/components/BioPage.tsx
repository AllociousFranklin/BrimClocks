import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, BookOpen, Palette, Users } from 'lucide-react';
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

  const credentials = [
    {
      icon: Award,
      title: 'International Recognition',
      description: 'Featured in prestigious galleries and exhibitions worldwide, with works in permanent museum collections.',
    },
    {
      icon: BookOpen,
      title: 'Educational Excellence',
      description: 'Master of Fine Arts from renowned institutions with a focus on classical and contemporary techniques.',
    },
    {
      icon: Palette,
      title: 'Professional Practice',
      description: 'Over a decade of dedicated artistic practice combining traditional mastery with innovative expression.',
    },
    {
      icon: Users,
      title: 'Mentorship & Teaching',
      description: 'Committed to nurturing the next generation of artists through comprehensive educational programs.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Navigation Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[#CC9933]/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => onNavigate('splash')}
            className="text-xl md:text-2xl text-[#CC9933] tracking-wider hover:opacity-80 transition-opacity"
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
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]" />
        </div>
        
        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-2xl md:text-4xl lg:text-5xl text-[#CC9933] italic leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
            "Art is not what you see, but what you make others see."
          </p>
          <p className="text-[#8A8A8A] mt-6 text-base md:text-lg tracking-wider">— Edgar Degas</p>
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
              <h2 className="text-4xl md:text-6xl text-[#CC9933] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                Philosophy
              </h2>
              
              <div className="space-y-6 text-[#F5F5F5] leading-relaxed">
                <p>
                  Throughout my artistic journey, I have dedicated myself to exploring the intersection of classical 
                  technique and contemporary expression. My work is rooted in the belief that true mastery comes not 
                  from innovation alone, but from a deep understanding of tradition.
                </p>
                
                <p>
                  Every brushstroke is a meditation, every canvas a conversation between the artist and the infinite. 
                  I seek to capture not merely what is visible, but the essence that lies beneath—the emotion, the 
                  energy, the eternal dialogue between light and shadow.
                </p>
                
                <p>
                  My practice is one of discipline and devotion. I believe that art is a language that transcends 
                  words, a universal expression of the human experience. Through my work, I aim to create portals 
                  into moments of beauty, introspection, and profound connection.
                </p>
                
                <p className="text-[#8A8A8A] italic">
                  The Theory of Arts is more than a portfolio—it is a philosophy, a way of seeing, and an invitation 
                  to experience the world through the transformative power of artistic vision.
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
              <div className="border-2 border-[#CC9933]/30 p-4 transition-all duration-500 group-hover:border-[#CC9933] group-hover:shadow-[0_0_30px_rgba(204,153,51,0.3)]">
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

      {/* Professional Credentials */}
      <section className="py-24 px-6 bg-[#1C1C1C]/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl text-[#CC9933] mb-16 text-center"
            style={{ fontFamily: 'Playfair Display, serif' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Professional Excellence
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {credentials.map((credential, index) => {
              const Icon = credential.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-8 bg-[#0A0A0A] border-2 border-[#CC9933]/20 hover:border-[#CC9933] transition-all duration-300 hover:shadow-[0_0_30px_rgba(204,153,51,0.2)]"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="inline-block p-4 bg-[#CC9933]/10 rounded-full mb-6">
                    <Icon className="w-8 h-8 text-[#CC9933]" />
                  </div>
                  <h3 className="text-xl text-[#CC9933] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {credential.title}
                  </h3>
                  <p className="text-[#8A8A8A] leading-relaxed">
                    {credential.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
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
              className="px-10 py-4 bg-[#CC9933] text-[#0A0A0A] hover:bg-[#CC9933]/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(204,153,51,0.4)]"
            >
              View Gallery
            </button>
            <button
              onClick={() => onNavigate('course')}
              className="px-10 py-4 border-2 border-[#CC9933] text-[#CC9933] hover:bg-[#CC9933]/10 transition-all duration-300 hover:scale-105"
            >
              Explore Masterclass
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}