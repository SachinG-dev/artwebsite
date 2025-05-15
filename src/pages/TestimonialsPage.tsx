import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { MessageCircle, Quote } from 'lucide-react';
import TestimonialCard from '../components/testimonials/TestimonialCard';
import { testimonials } from '../data/testimonials';

const TestimonialsPage: React.FC = () => {
  // Split testimonials by type
  const courseTestimonials = testimonials.filter(t => t.type === 'course');
  const artworkTestimonials = testimonials.filter(t => t.type === 'artwork');
  const otherTestimonials = testimonials.filter(t => !t.type || (t.type !== 'course' && t.type !== 'artwork'));

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary-50 py-16">
        <div className="container text-center">
          <h1 className="mb-4">Student & Client Testimonials</h1>
          <p className="text-xl text-neutral-700 max-w-2xl mx-auto">
            Hear what others have to say about their experiences with my art and teaching
          </p>
        </div>
      </section>

      {/* Featured Testimonial */}
      <FadeInSection>
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto bg-primary-600 text-white p-8 md:p-12 rounded-lg relative">
              <Quote size={60} className="absolute top-6 left-6 text-primary-300 opacity-30" />
              
              <div className="relative z-10 text-center">
                <blockquote className="text-xl md:text-2xl italic mb-6">
                  "Working with this artist completely transformed my understanding of color theory. 
                  The personalized guidance and nurturing environment made it possible for me to develop
                  my skills beyond what I thought possible. I've not only improved technically, but I've
                  also found my own unique artistic voice."
                </blockquote>
                
                <div className="flex items-center justify-center">
                  <img 
                    src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Sarah Johnson" 
                    className="w-16 h-16 rounded-full object-cover border-4 border-white mr-4"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-lg">Sarah Johnson</p>
                    <p className="text-primary-200">Advanced Painting Course</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Course Testimonials */}
      <FadeInSection>
        <section className="py-16 bg-neutral-50">
          <div className="container">
            <div className="section-title">
              <h2>Course & Workshop Testimonials</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courseTestimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={testimonial.id} 
                  testimonial={testimonial} 
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Artwork & Commission Testimonials */}
      <FadeInSection>
        <section className="py-16 bg-white">
          <div className="container">
            <div className="section-title">
              <h2>Artwork & Commission Testimonials</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artworkTestimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={testimonial.id} 
                  testimonial={testimonial} 
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Other Testimonials */}
      {otherTestimonials.length > 0 && (
        <FadeInSection>
          <section className="py-16 bg-neutral-50">
            <div className="container">
              <div className="section-title">
                <h2>More Testimonials</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherTestimonials.map((testimonial, index) => (
                  <TestimonialCard 
                    key={testimonial.id} 
                    testimonial={testimonial} 
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-accent-500 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Share Your Experience</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Have you purchased artwork or taken one of my courses? I'd love to hear about your experience!
          </p>
          <button 
            onClick={() => window.location.href = '/contact'}
            className="btn bg-white text-accent-600 hover:bg-neutral-100"
          >
            <MessageCircle size={18} className="mr-2" />
            Submit a Testimonial
          </button>
        </div>
      </section>
    </div>
  );
};

// Fade-in animation component
const FadeInSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default TestimonialsPage;