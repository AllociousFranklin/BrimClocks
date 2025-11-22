import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

type Page = 'splash' | 'bio' | 'gallery' | 'course' | 'contacts';

interface MobileNavProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function MobileNav({ currentPage, onNavigate }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    { id: 'bio' as Page, label: 'Bio' },
    { id: 'gallery' as Page, label: 'Gallery' },
    { id: 'course' as Page, label: 'Course' },
    { id: 'contacts' as Page, label: 'Contacts' },
  ];

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-[#F5F5F5] hover:text-[#CC9933] transition-colors z-50 relative"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        {pages.map((page) => (
          <button
            key={page.id}
            onClick={() => onNavigate(page.id)}
            className={`text-sm tracking-widest uppercase transition-colors ${
              page.id === currentPage ? 'text-[#CC9933]' : 'text-[#F5F5F5] hover:text-[#CC9933]'
            }`}
          >
            {page.label}
          </button>
        ))}
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-[#0A0A0A]/98 backdrop-blur-md z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
              {pages.map((page, index) => (
                <motion.button
                  key={page.id}
                  onClick={() => handleNavigate(page.id)}
                  className={`text-2xl tracking-widest uppercase transition-colors ${
                    page.id === currentPage ? 'text-[#CC9933]' : 'text-[#F5F5F5]'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {page.label}
                  {page.id === currentPage && (
                    <motion.div
                      className="h-0.5 bg-[#CC9933] mt-2"
                      layoutId="underline"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
