import { useState } from 'react';
import SplashPage from './components/SplashPage';
import BioPage from './components/BioPage';
import GalleryPage from './components/GalleryPage';
import CoursePage from './components/CoursePage';
import ContactsPage from './components/ContactsPage';
import Footer from './components/Footer';

type Page = 'splash' | 'bio' | 'gallery' | 'course' | 'contacts';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('splash');

  const navigateToPage = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5]">
      {currentPage === 'splash' && <SplashPage onNavigate={navigateToPage} />}
      {currentPage === 'bio' && <BioPage onNavigate={navigateToPage} />}
      {currentPage === 'gallery' && <GalleryPage onNavigate={navigateToPage} />}
      {currentPage === 'course' && <CoursePage onNavigate={navigateToPage} />}
      {currentPage === 'contacts' && <ContactsPage onNavigate={navigateToPage} />}
      
      {currentPage !== 'splash' && <Footer />}
    </div>
  );
}
