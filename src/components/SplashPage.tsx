import { motion } from 'motion/react';

type Page = 'splash' | 'bio' | 'gallery' | 'course' | 'contacts';

interface SplashPageProps {
  onNavigate: (page: Page) => void;
}

export default function SplashPage({ onNavigate }: SplashPageProps) {
  const navItems = [
    { label: 'BIO', page: 'bio' as Page },
    { label: 'GALLERY', page: 'gallery' as Page },
    { label: 'COURSE', page: 'course' as Page },
    { label: 'CONTACTS', page: 'contacts' as Page },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#000100] relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #B6B6B4 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center space-y-12 px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Main Title */}
        <motion.h1 
          className="text-6xl md:text-8xl text-[#F5F5F5] tracking-wider text-center"
          style={{ fontFamily: 'Playfair Display, serif' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Theory of Arts
        </motion.h1>

        {/* Artist Signature */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <svg
            width="300"
            height="120"
            viewBox="0 0 300 120"
            className="text-[#B6B6B4]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 60 Q 50 20, 80 60 T 140 60 M 140 40 L 140 80 M 160 60 L 200 40 L 200 80 M 220 40 Q 240 20, 260 60 T 280 60"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(182, 182, 180, 0.5))'
              }}
            />
          </svg>
        </motion.div>

        {/* Navigation Menu */}
        <motion.nav
          className="flex flex-col items-center space-y-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {navItems.map((item, index) => (
            <div key={item.page} className="flex items-center">
              <motion.button
                onClick={() => onNavigate(item.page)}
                className="text-[#F5F5F5] text-lg md:text-xl tracking-widest hover:text-[#B6B6B4] transition-all duration-300 relative group px-6 py-2"
                style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.2em' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#B6B6B4] group-hover:w-full transition-all duration-300" />
              </motion.button>
              
              {/* Gold divider between items */}
              {index < navItems.length - 1 && (
                <motion.div
                  className="w-px h-6 bg-[#B6B6B4] opacity-30 mt-6"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                />
              )}
            </div>
          ))}
        </motion.nav>
      </motion.div>
    </div>
  );
}