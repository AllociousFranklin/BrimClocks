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
      title: 'Module 1: Foundations of Artistic Excellence',
      lessons: [
        'Understanding Light, Shadow, and Form',
        'Color Theory and Palette Development',
        'Composition and Visual Hierarchy',
        'Materials and Tools of the Trade',
      ],
    },
    {
      title: 'Module 2: Classical Techniques',
      lessons: [
        'Drawing Fundamentals and Anatomy',
        'Oil Painting Methods and Layering',
        'Portrait Studies and Character',
        'Landscape and Environmental Painting',
      ],
    },
    {
      title: 'Module 3: Contemporary Expression',
      lessons: [
        'Abstract Composition and Conceptual Art',
        'Mixed Media and Experimental Techniques',
        'Personal Style Development',
        'Finding Your Artistic Voice',
      ],
    },
    {
      title: 'Module 4: Professional Practice',
      lessons: [
        'Building a Cohesive Portfolio',
        'Gallery Representation and Exhibitions',
        'Pricing and Marketing Your Work',
        'Sustainable Art Career Development',
      ],
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
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/50 to-[#0A0A0A]" />
        </div>

        <motion.div
          className="relative z-10 text-center px-6 max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-7xl text-[#CC9933] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
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
            className="px-12 py-4 bg-[#CC9933] text-[#0A0A0A] text-lg hover:bg-[#CC9933]/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(204,153,51,0.4)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enroll Now
          </motion.button>
        </motion.div>
      </section>

      {/* Value Proposition */}
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
            What You'll Master
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-8 bg-[#1C1C1C] border-2 border-transparent hover:border-[#CC9933] transition-all duration-300 hover:shadow-[0_0_30px_rgba(204,153,51,0.2)]"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="inline-block p-4 bg-[#CC9933]/10 rounded-full mb-6">
                    <Icon className="w-8 h-8 text-[#CC9933]" />
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
            className="text-4xl md:text-6xl text-[#CC9933] mb-16 text-center"
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
                  className="border-2 border-[#CC9933]/20 bg-[#1C1C1C] px-6 data-[state=open]:border-[#CC9933]"
                >
                  <AccordionTrigger className="text-xl text-[#CC9933] hover:no-underline" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {module.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3 pt-4">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <li key={lessonIndex} className="flex items-start">
                          <span className="text-[#CC9933] mr-3">•</span>
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
      <section className="py-24 px-6 bg-[#1C1C1C]/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-6xl text-[#CC9933] mb-8"
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
            className="px-16 py-5 bg-[#CC9933] text-[#0A0A0A] text-lg hover:bg-[#CC9933]/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(204,153,51,0.4)]"
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