import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Award, Calendar, ArrowRight } from 'lucide-react';
import { pastWorks } from '../data/pastWorks';

const PastWorkPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary-50 py-16">
        <div className="container text-center">
          <h1 className="mb-4">Past Work & Exhibitions</h1>
          <p className="text-xl text-neutral-700 max-w-2xl mx-auto">
            Explore my journey through previous exhibitions, commissioned works, and special projects
          </p>
        </div>
      </section>

      {/* Timeline of Work */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {pastWorks.map((work, index) => (
              <FadeInSection key={work.id}>
                <div className={`flex flex-col md:flex-row gap-8 mb-24 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}>
                  <div className="md:w-1/2">
                    <img 
                      src={work.imageUrl} 
                      alt={work.title} 
                      className="rounded-lg shadow-lg w-full h-auto"
                    />
                  </div>
                  
                  <div className="md:w-1/2">
                    <div className="flex items-center mb-4">
                      <Calendar size={20} className="text-primary-600 mr-2" />
                      <span className="text-neutral-500">{work.year}</span>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-serif mb-4">{work.title}</h2>
                    
                    {work.location && (
                      <p className="text-neutral-700 font-medium mb-3">
                        Location: {work.location}
                      </p>
                    )}
                    
                    <p className="text-neutral-600 mb-4">{work.description}</p>
                    
                    {work.achievements && work.achievements.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Award size={18} className="text-accent-500 mr-2" />
                          Achievements
                        </h4>
                        <ul className="list-disc pl-6 space-y-1">
                          {work.achievements.map((achievement, i) => (
                            <li key={i} className="text-neutral-600">{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {work.link && (
                      <a 
                        href={work.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                      >
                        View More Details <ArrowRight size={16} className="ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="section-title">
            <h2>Awards & Recognition</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-accent-500 mb-3">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence in Arts, 2018</h3>
              <p className="text-neutral-600">
                Awarded by the National Gallery for outstanding contribution to contemporary art.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-accent-500 mb-3">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Artist of the Year, 2020</h3>
              <p className="text-neutral-600">
                Recognized by Contemporary Art Magazine for innovative techniques and vision.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-accent-500 mb-3">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Exhibition, 2021</h3>
              <p className="text-neutral-600">
                "Urban Reflections" series received critical acclaim and visitor's choice award.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-accent-500 mb-3">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Teaching Excellence, 2022</h3>
              <p className="text-neutral-600">
                Recognized for outstanding contribution to art education and mentorship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Press Coverage */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Press & Media Coverage</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">"The Transformative Power of Color"</h3>
                <p className="text-neutral-500 mb-3">Art Weekly Magazine, June 2022</p>
                <p className="text-neutral-600 mb-4">
                  "This artist's masterful use of color creates an emotional response that transcends 
                  the visual experience. The latest exhibition is a testament to the power of art to 
                  transform our perception of everyday scenes."
                </p>
                <a 
                  href="#"
                  className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                >
                  Read Article <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
              
              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">"Bridging Classical and Contemporary"</h3>
                <p className="text-neutral-500 mb-3">Metropolitan Arts Review, March 2021</p>
                <p className="text-neutral-600 mb-4">
                  "Few artists successfully bridge the gap between classical techniques and contemporary 
                  themes with such elegance. The attention to detail and emotional depth in each piece 
                  creates a compelling narrative."
                </p>
                <a 
                  href="#"
                  className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                >
                  Read Article <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
              
              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">"Teaching Art in the Digital Age"</h3>
                <p className="text-neutral-500 mb-3">Education Today, January 2023</p>
                <p className="text-neutral-600 mb-4">
                  "This artist's innovative approach to teaching traditional art techniques in 
                  the digital age has created a new model for art education that honors classic 
                  methods while embracing modern tools."
                </p>
                <a 
                  href="#"
                  className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                >
                  Read Article <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Collaboration?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            I'm always open to new opportunities for exhibitions, commissions, or special projects.
          </p>
          <button 
            onClick={() => window.location.href = '/contact'}
            className="btn bg-white text-primary-600 hover:bg-neutral-100"
          >
            Get In Touch
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

export default PastWorkPage;