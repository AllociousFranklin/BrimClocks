import { motion } from 'motion/react';
import { Mail, Instagram, Twitter } from 'lucide-react';

type Page = 'splash' | 'bio' | 'gallery' | 'course' | 'contacts';

interface ContactsPageProps {
  onNavigate: (page: Page) => void;
}

export default function ContactsPage({ onNavigate }: ContactsPageProps) {
  // Replace with actual WhatsApp business number
  const whatsappNumber = '+1234567890';
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=Hello,%20I'm%20interested%20in%20your%20art%20services`;

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
            className="text-2xl text-[#CC9933] tracking-wider hover:opacity-80 transition-opacity"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Theory of Arts
          </button>
          <nav className="flex space-x-8">
            {['bio', 'gallery', 'course', 'contacts'].map((page) => (
              <button
                key={page}
                onClick={() => onNavigate(page as Page)}
                className={`text-sm tracking-widest uppercase transition-colors ${
                  page === 'contacts' ? 'text-[#CC9933]' : 'text-[#F5F5F5] hover:text-[#CC9933]'
                }`}
              >
                {page === 'course' ? 'Video Course' : page}
              </button>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="pt-32 pb-24 px-6 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl w-full">
          {/* Page Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-5xl md:text-7xl text-[#CC9933] mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Begin Your Artistic Journey
            </h1>
            <p className="text-xl text-[#8A8A8A] max-w-2xl mx-auto leading-relaxed">
              Connect with us to discuss commissions, course enrollment, artwork purchases, or any inquiries about Theory of Arts.
            </p>
          </motion.div>

          {/* Primary WhatsApp CTA */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-[#1C1C1C] border-4 border-[#CC9933] p-12 text-center relative overflow-hidden">
              {/* Decorative background pattern */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, #CC9933 1px, transparent 0)',
                backgroundSize: '32px 32px'
              }} />

              <div className="relative z-10">
                <motion.div
                  className="inline-block mb-8"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <svg
                    className="w-24 h-24 mx-auto"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                      fill="#CC9933"
                    />
                  </svg>
                </motion.div>

                <h2
                  className="text-3xl md:text-4xl text-[#F5F5F5] mb-6"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Contact AI Agent on WhatsApp
                </h2>

                <p className="text-[#8A8A8A] mb-10 max-w-xl mx-auto leading-relaxed">
                  Get instant assistance with artwork inquiries, commission details, course enrollment, 
                  and personalized recommendations from our dedicated AI agent.
                </p>

                <motion.a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-16 py-6 bg-[#CC9933] text-[#0A0A0A] text-xl hover:bg-[#CC9933]/90 transition-all duration-300 gold-glow-animation"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                >
                  Start Conversation
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="h-px bg-gradient-to-r from-transparent via-[#CC9933] to-transparent" />
          </motion.div>

          {/* Supporting Contact Information */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3
              className="text-2xl md:text-3xl text-[#CC9933] mb-8"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Alternative Contact Methods
            </h3>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
              {/* Email */}
              <a
                href="mailto:contact@theoryofarts.com"
                className="flex items-center gap-3 text-[#F5F5F5] hover:text-[#CC9933] transition-colors"
              >
                <Mail className="w-6 h-6" />
                <span>contact@theoryofarts.com</span>
              </a>
            </div>

            {/* Social Media */}
            <div className="flex items-center justify-center gap-8">
              <a
                href="https://instagram.com/theoryofarts"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-[#1C1C1C] border-2 border-[#CC9933]/30 hover:border-[#CC9933] transition-all duration-300 hover:shadow-[0_0_20px_rgba(204,153,51,0.3)]"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-[#CC9933]" />
              </a>

              <a
                href="https://twitter.com/theoryofarts"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-[#1C1C1C] border-2 border-[#CC9933]/30 hover:border-[#CC9933] transition-all duration-300 hover:shadow-[0_0_20px_rgba(204,153,51,0.3)]"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6 text-[#CC9933]" />
              </a>

              <a
                href="https://pinterest.com/theoryofarts"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-[#1C1C1C] border-2 border-[#CC9933]/30 hover:border-[#CC9933] transition-all duration-300 hover:shadow-[0_0_20px_rgba(204,153,51,0.3)]"
                aria-label="Pinterest"
              >
                <svg
                  className="w-6 h-6 text-[#CC9933]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
