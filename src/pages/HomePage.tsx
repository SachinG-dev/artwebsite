import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Palette, BookOpen, Calendar, Image, MessageCircle, Award } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

import HeroSection from '../components/sections/HeroSection';
import { artworks } from '../data/artworks';
import { courses } from '../data/courses';
import { testimonials } from '../data/testimonials';
import { events } from '../data/events';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  
  // Featured items
  const featuredArtworks = artworks.slice(0, 3);
  const featuredCourses = courses.slice(0, 2);
  const featuredTestimonials = testimonials.slice(0, 1);
  const upcomingEvents = events
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 2);

  return (
    <>
      <HeroSection />
      
      {/* About Section */}
      <FadeInSection>
        <section className="section bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-6">About The Artist</h2>
                <p className="text-lg mb-6">
                  I am an artist passionate about capturing the essence of life through vibrant colors 
                  and expressive brushstrokes. With over 15 years of experience, my work has been featured 
                  in galleries across the country.
                </p>
                <p className="mb-8">
                  My journey began with a fascination for how light plays with shadows, 
                  creating an ever-changing landscape of colors. This exploration has led me 
                  to develop a unique style that bridges classical techniques with contemporary themes.
                </p>
                <button 
                  onClick={() => navigate('/about')}
                  className="btn btn-outline"
                >
                  Learn More About Me
                </button>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/3094218/pexels-photo-3094218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Artist at work" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
      
      {/* Featured Artworks */}
      <FadeInSection>
        <section className="section bg-neutral-50">
          <div className="container">
            <div className="section-title">
              <h2>Featured Artworks</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredArtworks.map((artwork, index) => (
                <div key={artwork.id} className="card">
                  <div className="thumbnail">
                    <img src={artwork.imageUrl} alt={artwork.title} />
                    <div className="thumbnail-overlay"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium">{artwork.title}</h3>
                    <p className="text-neutral-500 text-sm">{artwork.medium}, {artwork.year}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <button 
                onClick={() => navigate('/gallery')} 
                className="btn btn-primary"
              >
                <Image size={18} className="mr-2" />
                View Full Gallery
              </button>
            </div>
          </div>
        </section>
      </FadeInSection>
      
      {/* Services Section */}
      <FadeInSection>
        <section className="section bg-primary-50">
          <div className="container">
            <div className="section-title">
              <h2>What I Offer</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                  <Palette size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Original Artwork</h3>
                <p className="text-neutral-600">
                  Unique pieces created with passion and attention to detail. Each artwork tells a story 
                  and captures emotions through color and form.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                  <BookOpen size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Art Courses</h3>
                <p className="text-neutral-600">
                  Learn various techniques and styles through personalized courses designed for 
                  both beginners and advanced students.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                  <Award size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Commissions</h3>
                <p className="text-neutral-600">
                  Custom artworks created specifically for your space and according to your 
                  preferences and requirements.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
      
      {/* Featured Courses */}
      <FadeInSection>
        <section className="section bg-white">
          <div className="container">
            <div className="section-title">
              <h2>Upcoming Courses</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredCourses.map((course, index) => (
                <div key={course.id} className="card hover:shadow-lg">
                  <div className="relative">
                    <img 
                      src={course.imageUrl} 
                      alt={course.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm font-semibold text-primary-600">
                      ${course.price}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                    <p className="text-neutral-600 mb-4">{course.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-neutral-500">Starts {course.startDate}</span>
                      <button 
                        onClick={() => navigate('/courses')}
                        className="btn btn-outline py-2 px-4"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <button 
                onClick={() => navigate('/courses')} 
                className="btn btn-primary"
              >
                <BookOpen size={18} className="mr-2" />
                Explore All Courses
              </button>
            </div>
          </div>
        </section>
      </FadeInSection>
      
      {/* Testimonial Section */}
      <FadeInSection>
        <section className="section bg-primary-600 text-white">
          <div className="container">
            <div className="section-title">
              <h2 className="text-white">What Students Say</h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {featuredTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="text-center">
                  <div className="mb-6 flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl italic mb-6">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex items-center justify-center">
                    {testimonial.avatarUrl && (
                      <img 
                        src={testimonial.avatarUrl} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                    )}
                    <div className="text-left">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-primary-200">{testimonial.course || testimonial.type}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button 
                onClick={() => navigate('/testimonials')} 
                className="btn bg-white text-primary-600 hover:bg-neutral-100"
              >
                <MessageCircle size={18} className="mr-2" />
                Read All Testimonials
              </button>
            </div>
          </div>
        </section>
      </FadeInSection>
      
      {/* Upcoming Events */}
      <FadeInSection>
        <section className="section bg-neutral-50">
          <div className="container">
            <div className="section-title">
              <h2>Upcoming Events</h2>
            </div>
            
            {upcomingEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {upcomingEvents.map((event, index) => (
                  <div key={event.id} className="card hover:shadow-lg">
                    <div className="relative">
                      <img 
                        src={event.imageUrl} 
                        alt={event.title} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Upcoming
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <div className="flex items-center text-neutral-500 mb-3">
                        <Calendar size={16} className="mr-2" />
                        <span>{event.date} - {event.time}</span>
                      </div>
                      <p className="text-neutral-600 mb-4">{event.description}</p>
                      {event.rsvpLink && (
                        <a 
                          href={event.rsvpLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-primary w-full"
                        >
                          RSVP Now
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <p className="text-neutral-600">No upcoming events at the moment. Check back soon!</p>
              </div>
            )}
            
            <div className="text-center mt-10">
              <button 
                onClick={() => navigate('/events')} 
                className="btn btn-primary"
              >
                <Calendar size={18} className="mr-2" />
                View All Events
              </button>
            </div>
          </div>
        </section>
      </FadeInSection>
      
      {/* CTA Section */}
      <FadeInSection>
        <section className="py-20 bg-accent-500 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Artistic Journey?</h2>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
              Whether you're looking for a statement piece or want to learn new techniques, 
              I'm here to help you bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => navigate('/contact')} 
                className="btn bg-white text-accent-600 hover:bg-neutral-100"
              >
                Contact Me
              </button>
              <button 
                onClick={() => navigate('/courses')} 
                className="btn bg-transparent border-2 border-white hover:bg-white hover:text-accent-600"
              >
                Explore Courses
              </button>
            </div>
          </div>
        </section>
      </FadeInSection>
    </>
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

export default HomePage;