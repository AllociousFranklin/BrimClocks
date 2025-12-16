import { useState } from 'react';
import { Header } from './components/brim/Header';
import { HeroSlideshow } from './components/brim/HeroSlideshow';
import { AboutSection } from './components/brim/AboutSection';
import { ProductsSection } from './components/brim/ProductsSection';
import { Footer } from './components/brim/Footer';
import { ContactPage } from './components/brim/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'contact'>('home');

  return (
    <div className="min-h-screen bg-[#000100]">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      
      {currentPage === 'home' ? (
        <>
          <HeroSlideshow />
          <AboutSection onNavigateToContact={() => setCurrentPage('contact')} />
          <ProductsSection />
          <Footer />
        </>
      ) : (
        <ContactPage />
      )}
    </div>
  );
}
