import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Masonry from 'react-responsive-masonry';
import { ResponsiveMasonry } from 'react-responsive-masonry';
import MobileNav from './MobileNav';

type Page = 'splash' | 'bio' | 'gallery' | 'course' | 'contacts';

interface GalleryPageProps {
  onNavigate: (page: Page) => void;
}

export default function GalleryPage({ onNavigate }: GalleryPageProps) {
  const [hoveredWork, setHoveredWork] = useState<number | null>(null);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const masterworks = [
    {
      id: 1,
      title: 'Ethereal Convergence',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1683222042853-37cd29faf895?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBwYWludGluZyUyMGNhbnZhc3xlbnwxfHx8fDE3NjM3MDM1MDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'Abstract Portrait VII',
      year: '2022',
      image: 'https://images.unsplash.com/photo-1696445149232-48ec4b1e9a8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBvcnRyYWl0JTIwYXJ0fGVufDF8fHx8MTc2Mzc0Mjg2MHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Museum Reflections',
      year: '2021',
      image: 'https://images.unsplash.com/photo-1551963363-a6a4711d390a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljYWwlMjBwYWludGluZyUyMG11c2V1bXxlbnwxfHx8fDE3NjM4MDYxNzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      title: 'Contemporary Dialogue',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1647792845543-a8032c59cbdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnQlMjBnYWxsZXJ5fGVufDF8fHx8MTc2MzgwMTcxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 5,
      title: 'Sculptural Form',
      year: '2022',
      image: 'https://images.unsplash.com/photo-1760808291592-ab99340e9ea7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwYXJ0JTIwc2N1bHB0dXJlfGVufDF8fHx8MTc2MzgwNjE3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 6,
      title: 'Modern Exhibition',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1643888395130-4cb09f9814d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcnQlMjBleGhpYml0aW9ufGVufDF8fHx8MTc2MzY5NjA5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const artForSale = [
    {
      id: 1,
      title: 'Portrait in Contemplation',
      price: '$15,000',
      dimensions: '36" × 48"',
      image: 'https://images.unsplash.com/photo-1701958213864-2307a737e853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBhaW50aW5nJTIwYXJ0fGVufDF8fHx8MTc2MzcyNzEzMnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'Ethereal Landscape',
      price: '$22,500',
      dimensions: '48" × 60"',
      image: 'https://images.unsplash.com/photo-1684410008411-6ccac995726d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBwYWludGluZyUyMGNhbnZhc3xlbnwxfHx8fDE3NjM4MDYyMjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Abstract Composition IX',
      price: '$18,000',
      dimensions: '40" × 40"',
      image: 'https://images.unsplash.com/photo-1681235014294-588fea095706?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydCUyMHBhaW50aW5nfGVufDF8fHx8MTc2MzcwOTEwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      title: 'Luminous Forms',
      price: '$12,000',
      dimensions: '30" × 40"',
      image: 'https://images.unsplash.com/photo-1683222042853-37cd29faf895?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBwYWludGluZyUyMGNhbnZhc3xlbnwxfHx8fDE3NjM3MDM1MDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 5,
      title: 'Midnight Reverie',
      price: '$25,000',
      dimensions: '54" × 72"',
      image: 'https://images.unsplash.com/photo-1696445149232-48ec4b1e9a8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBvcnRyYWl0JTIwYXJ0fGVufDF8fHx8MTc2Mzc0Mjg2MHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 6,
      title: 'Golden Hour Study',
      price: '$14,500',
      dimensions: '32" × 44"',
      image: 'https://images.unsplash.com/photo-1551963363-a6a4711d390a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljYWwlMjBwYWludGluZyUyMG11c2V1bXxlbnwxfHx8fDE3NjM4MDYxNzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

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
          <MobileNav currentPage="gallery" onNavigate={onNavigate} />
        </div>
      </motion.header>

      {/* Page Title */}
      <section className="pt-32 pb-16 px-6">
        <motion.div
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl text-[#B6B6B4] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Gallery
          </h1>
          <div className="w-24 h-px bg-[#B6B6B4] mx-auto mt-6" />
        </motion.div>
      </section>

      {/* Masterworks Showcase */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-5xl text-[#F5F5F5] mb-12 text-center"
            style={{ fontFamily: 'Playfair Display, serif' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Masterworks Collection
          </motion.h2>

          <ResponsiveMasonry
            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
          >
            <Masonry gutter="24px">
              {masterworks.map((work, index) => (
                <motion.div
                  key={work.id}
                  className="relative group cursor-pointer overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredWork(work.id)}
                  onMouseLeave={() => setHoveredWork(null)}
                >
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={work.image}
                      alt={work.title}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Hover overlay */}
                    <div
                      className={`absolute inset-0 bg-[#000100]/80 flex items-center justify-center transition-opacity duration-500 ${
                        hoveredWork === work.id ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <div className="text-center px-6">
                        <h3 className="text-2xl text-[#B6B6B4] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                          {work.title}
                        </h3>
                        <p className="text-[#8A8A8A]">{work.year}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Accent border on hover */}
                  <div
                    className={`absolute inset-0 border-2 border-[#B6B6B4] transition-opacity duration-500 pointer-events-none ${
                      hoveredWork === work.id ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ boxShadow: hoveredWork === work.id ? '0 0 30px rgba(182, 182, 180, 0.4)' : 'none' }}
                  />
                </motion.div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="h-px bg-gradient-to-r from-transparent via-[#B6B6B4] to-transparent" />
      </div>

      {/* Art for Acquisition */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-5xl text-[#F5F5F5] mb-12 text-center"
            style={{ fontFamily: 'Playfair Display, serif' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Art for Acquisition
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artForSale.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-[#292929] overflow-hidden group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Product Image */}
                <div className="relative overflow-hidden aspect-[3/4]">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 border-2 transition-all duration-300 ${
                      hoveredProduct === product.id 
                        ? 'border-[#B6B6B4] shadow-[0_0_30px_rgba(182,182,180,0.4)]' 
                        : 'border-transparent'
                    }`}
                  />
                </div>

                {/* Product Details */}
                <div className="p-6">
                  <h3 className="text-xl text-[#F5F5F5] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {product.title}
                  </h3>
                  <p className="text-[#8A8A8A] mb-1">{product.dimensions}</p>
                  <p className="text-[#B6B6B4] mb-6">{product.price}</p>

                  {/* CTA Button */}
                  <button
                    onClick={() => onNavigate('contacts')}
                    className="w-full py-3 bg-[#B6B6B4] text-[#000100] hover:bg-[#B6B6B4]/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(182,182,180,0.3)]"
                  >
                    Inquire to Purchase
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Commission Banner */}
      <section className="py-24 px-6">
        <motion.div
          className="max-w-7xl mx-auto relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative min-h-[500px] flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1645636667214-c4875ef3d59c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcnQlMjBzdHVkaW98ZW58MXx8fHwxNzYzODA2MjgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Art Studio"
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#000100] via-[#000100]/80 to-[#000100]" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 py-16 max-w-4xl">
              <motion.h2
                className="text-4xl md:text-6xl text-[#B6B6B4] mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Commission Your Masterpiece
              </motion.h2>

              <motion.p
                className="text-xl md:text-2xl text-[#F5F5F5] mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Theory of Arts Services tailored to your vision
              </motion.p>

              <motion.p
                className="text-[#8A8A8A] mb-12 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                From intimate portraits to grand-scale installations, collaborate directly with the artist 
                to create a unique work of art that embodies your aesthetic vision and personal narrative.
              </motion.p>

              <motion.button
                onClick={() => onNavigate('contacts')}
                className="px-16 py-5 bg-[#B6B6B4] text-[#000100] text-lg hover:bg-[#B6B6B4]/90 transition-all duration-300 hover:scale-105 gold-glow-animation"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Start Custom Portrait Order
              </motion.button>
            </div>
          </div>

          {/* Decorative border */}
          <div className="absolute inset-0 border-2 border-[#B6B6B4]/30 pointer-events-none" />
        </motion.div>
      </section>
    </div>
  );
}