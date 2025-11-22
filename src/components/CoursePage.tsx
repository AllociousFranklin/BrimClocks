import { motion } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Palette, Lightbulb, Users, Award } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import MobileNav from './MobileNav';

type Page = 'splash' | 'bio' | 'gallery' | 'course' | 'contacts';

interface CoursePageProps {
  onNavigate: (page: Page) => void;
}

export default function CoursePage({ onNavigate }: CoursePageProps) {
  const features = [
    {
      icon: Palette,
      title: 'Master Techniques',
      description: 'Learn classical and contemporary methods from a practicing professional artist.',
    },
    {
      icon: Lightbulb,
      title: 'Creative Vision',
      description: 'Develop your unique artistic voice and conceptual approach to visual storytelling.',
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Receive personalized feedback and guidance throughout your artistic journey.',
    },
    {
      icon: Award,
      title: 'Professional Standards',
      description: 'Build a portfolio-worthy body of work with gallery-level execution.',
    },
  ];

  const modules = [
    {
      title: 'Foundations',
      lessons: [
        'Introduction to Materials: Types of charcoal (vine, compressed, pencil), erasers, blending tools, papers.',
        'Basic Handling: How to hold charcoal, pressure control, line variation.',
        'Fundamental Shapes: Drawing spheres, cubes, cylinders with shading.',
        'Light & Shadow Basics: Understanding value scales, highlights, mid-tones, and shadows.',
        'Simple Still Life: Sketching everyday objects with basic shading.',
      ],
    },
    {
      title: 'Elementary',
      lessons: [
        'Gesture Drawing: Quick sketches to capture movement and energy.',
        'Texture Techniques: Creating wood, fabric, metal, and skin textures.',
        'Blending & Smudging: Using fingers, stumps, tissues for smooth gradients.',
        'Perspective Drawing: One-point and two-point perspective with charcoal.',
        'Portrait Basics: Facial proportions, features, and tonal studies.',
      ],
    },
    {
      title: 'Advanced Practice',
      lessons: [
        'Complex Compositions: Arranging multiple objects with depth and atmosphere.',
        'Advanced Anatomy: Muscles, hands, and expressive poses.',
        'Dramatic Lighting: Chiaroscuro techniques for strong contrast.',
        'Expressive Mark-Making: Loose strokes, layering, and experimental styles.',
        'Large-Scale Works: Working on oversized paper for impact.',
      ],
    },
    {
      title: 'Mastery',
      lessons: [
        'Narrative Drawing: Telling stories through charcoal compositions.',
        'Mixed Media Integration: Combining charcoal with ink, pastel, or watercolor.',
        'Personal Style Development: Refining unique techniques and artistic voice.',
        'Portfolio Creation: Preparing works for exhibitions or professional presentation.',
        'Critique & Refinement: Self-assessment and peer review for growth.',
      ],
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
          <MobileNav currentPage="course" onNavigate={onNavigate} />
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1649920442906-3c8ef428fb6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBjbGFzcyUyMHRlYWNoaW5nfGVufDF8fHx8MTc2MzgwNjMxMnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Art Masterclass"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000100]/70 via-[#000100]/50 to-[#000100]" />
        </div>

        <motion.div
          className="relative z-10 text-center px-6 max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-7xl text-[#B6B6B4] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            The Theory of Arts Masterclass
          </h1>
          <p className="text-2xl md:text-3xl text-[#F5F5F5] mb-4">
            Achieve Artistic Excellence
          </p>
          <p className="text-lg text-[#8A8A8A] max-w-3xl mx-auto mb-12 leading-relaxed">
            A comprehensive online course designed to transform aspiring artists into confident creators. 
            Learn the techniques, philosophy, and professional practices that define world-class artistry.
          </p>
          <motion.button
            onClick={() => onNavigate('contacts')}
            className="px-12 py-4 bg-[#B6B6B4] text-[#000100] text-lg hover:bg-[#B6B6B4]/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(182,182,180,0.4)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enroll Now
          </motion.button>
        </motion.div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 px-6 bg-[#292929]/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl text-[#B6B6B4] mb-16 text-center"
            style={{ fontFamily: 'Playfair Display, serif' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            What You'll Master
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-8 bg-[#292929] border-2 border-transparent hover:border-[#B6B6B4] transition-all duration-300 hover:shadow-[0_0_30px_rgba(182,182,180,0.2)]"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="inline-block p-4 bg-[#B6B6B4]/10 rounded-full mb-6">
                    <Icon className="w-8 h-8 text-[#B6B6B4]" />
                  </div>
                  <h3 className="text-xl text-[#F5F5F5] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {feature.title}
                  </h3>
                  <p className="text-[#8A8A8A] leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl text-[#B6B6B4] mb-16 text-center"
            style={{ fontFamily: 'Playfair Display, serif' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Curriculum Overview
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {modules.map((module, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-2 border-[#B6B6B4]/20 bg-[#292929] px-6 data-[state=open]:border-[#B6B6B4]"
                >
                  <AccordionTrigger className="text-xl text-[#B6B6B4] hover:no-underline" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {module.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3 pt-4">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <li key={lessonIndex} className="flex items-start">
                          <span className="text-[#B6B6B4] mr-3">•</span>
                          <span className="text-[#F5F5F5]">{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Enrollment Section */}
      <section className="py-24 px-6 bg-[#292929]/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-6xl text-[#B6B6B4] mb-8"
            style={{ fontFamily: 'Playfair Display, serif' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Begin Your Artistic Journey
          </motion.h2>

          <motion.p
            className="text-[#F5F5F5] text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transform your creative vision into reality with personalized guidance and proven techniques. 
            Connect with us to explore enrollment options tailored to your artistic goals.
          </motion.p>

          <motion.button
            onClick={() => onNavigate('contacts')}
            className="px-16 py-5 bg-[#B6B6B4] text-[#000100] text-lg hover:bg-[#B6B6B4]/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(182,182,180,0.4)]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Inquire About Enrollment
          </motion.button>
        </div>
      </section>
    </div>
  );
}
