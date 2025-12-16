import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: 'home' | 'contact';
  onNavigate: (page: 'home' | 'contact') => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: 'home' | 'contact', section?: string) => {
    setMobileMenuOpen(false);
    onNavigate(page);
    
    // If navigating to home with a section, scroll to it after a brief delay
    if (page === 'home' && section) {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#000100]/95 backdrop-blur-sm border-b border-[#B6B6B4]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <button
            onClick={() => handleNavClick('home')}
            className="transition-opacity hover:opacity-80"
            style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}
          >
            <span className="text-2xl text-[#B6B6B4]">Brim Clocks</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick('home', 'about')}
              className="text-[#F5F5F5] hover:text-[#B6B6B4] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('home', 'products')}
              className="text-[#F5F5F5] hover:text-[#B6B6B4] transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="px-6 py-2 bg-[#B6B6B4] text-[#000100] rounded hover:bg-[#F5F5F5] transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#B6B6B4] p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t border-[#B6B6B4]/20">
            <button
              onClick={() => handleNavClick('home', 'about')}
              className="block w-full text-left text-[#F5F5F5] hover:text-[#B6B6B4] transition-colors py-2"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('home', 'products')}
              className="block w-full text-left text-[#F5F5F5] hover:text-[#B6B6B4] transition-colors py-2"
            >
              Products
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="block w-full text-left px-6 py-2 bg-[#B6B6B4] text-[#000100] rounded hover:bg-[#F5F5F5] transition-colors"
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
