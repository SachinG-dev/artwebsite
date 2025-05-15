import React from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, Heart, Map } from "lucide-react";
import { useInView } from "react-intersection-observer";

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary-50 py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6">About The Artist</h1>
              <p className="text-xl text-neutral-700 mb-6">
                Creating meaningful art that connects with people on an
                emotional level
              </p>
            </div>
            <div>
              <img
                src="/assests/images/mahenderSirProfile.png"
                alt="Artist portrait"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <FadeInSection>
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="mb-8 text-center">My Story</h2>

              <div className="prose max-w-none">
                <p className="text-lg">
                  Born in a small coastal town, I developed a fascination with
                  colors and forms from an early age. The ever-changing
                  seascapes and dramatic skies became my first inspiration,
                  which still influences my work today.
                </p>

                <p>
                  After formal training at the Academy of Fine Arts, I developed
                  my own distinctive style that combines traditional techniques
                  with contemporary perspectives. My work explores the
                  relationship between humanity and nature, seeking to capture
                  the emotional resonance of landscapes and human experiences.
                </p>

                <p>
                  With over 15 years of experience, my artwork has been featured
                  in numerous solo and group exhibitions across the country.
                  I've been honored to receive several prestigious awards for my
                  contributions to contemporary art.
                </p>

                <p>
                  In addition to creating art, I'm passionate about teaching and
                  sharing my knowledge with others. I believe that art is a
                  universal language that can bridge divides and create
                  understanding between people from different backgrounds.
                </p>

                <blockquote className="italic text-neutral-700 border-l-4 border-primary-500 pl-4 my-6">
                  "Art washes away from the soul the dust of everyday life." -
                  Pablo Picasso
                </blockquote>

                <p>
                  Today, I continue to push the boundaries of my practice,
                  exploring new techniques and subject matter while remaining
                  true to my artistic vision. I'm grateful for the opportunity
                  to connect with others through my work and to contribute to
                  the rich tapestry of contemporary art.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Timeline */}
      <FadeInSection>
        <section className="py-16 bg-neutral-50">
          <div className="container">
            <h2 className="text-center mb-12">My Journey</h2>

            <div className="max-w-3xl mx-auto">
              <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-300 before:to-transparent">
                <TimelineItem year="2008" title="Formal Art Education">
                  Graduated with honors from the Academy of Fine Arts,
                  specializing in oil painting and mixed media.
                </TimelineItem>

                <TimelineItem year="2010" title="First Solo Exhibition">
                  Hosted my first solo exhibition "Perspectives of Nature" at
                  the Metropolitan Gallery.
                </TimelineItem>

                <TimelineItem year="2013" title="International Recognition">
                  Received the International Contemporary Art Award for the
                  "Emotions in Color" series.
                </TimelineItem>

                <TimelineItem year="2016" title="Teaching Beginning">
                  Started offering art courses and workshops, sharing techniques
                  and inspiration with aspiring artists.
                </TimelineItem>

                <TimelineItem year="2019" title="Museum Collection">
                  Three pieces from the "Urban Reflections" series acquired by
                  the National Museum of Modern Art.
                </TimelineItem>

                <TimelineItem year="2022" title="Art Book Publication">
                  Published "The Language of Color" - a comprehensive look at my
                  artistic philosophy and techniques.
                </TimelineItem>

                <TimelineItem year="Present" title="Continuing The Journey">
                  Continuing to create, teach, and explore new artistic
                  territories while maintaining my distinctive style.
                </TimelineItem>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Philosophy Section */}
      <FadeInSection>
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-center mb-12">My Artistic Philosophy</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-primary-50 rounded-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                  <Heart size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Emotion First</h3>
                <p className="text-neutral-600">
                  I believe art should evoke emotions and create connections.
                  Technical skill serves the emotional impact.
                </p>
              </div>

              <div className="text-center p-6 bg-primary-50 rounded-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                  <Map size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Nature Inspired</h3>
                <p className="text-neutral-600">
                  The natural world provides endless inspiration. I strive to
                  capture its beauty, patterns, and rhythms.
                </p>
              </div>

              <div className="text-center p-6 bg-primary-50 rounded-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                  <Award size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Authenticity</h3>
                <p className="text-neutral-600">
                  Creating with honesty and authenticity is essential. Each
                  piece reflects a genuine exploration.
                </p>
              </div>

              <div className="text-center p-6 bg-primary-50 rounded-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                  <BookOpen size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Continuous Growth
                </h3>
                <p className="text-neutral-600">
                  Art is a lifelong journey of learning and discovery. I embrace
                  experimentation and evolution.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Studio Section */}
      <FadeInSection>
        <section className="py-16 bg-neutral-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="mb-6">My Studio</h2>
                <p className="mb-4">
                  My creative sanctuary is located in a converted industrial
                  space filled with natural light. This open, airy environment
                  allows me to work on multiple pieces simultaneously and host
                  small groups for workshops and courses.
                </p>
                <p>
                  The studio is equipped with professional-grade materials and
                  tools, allowing me to explore various techniques from
                  traditional oil painting to mixed media and experimental
                  approaches.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Art studio"
                  className="rounded-lg shadow-md w-full h-full object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/6046220/pexels-photo-6046220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Painting supplies"
                  className="rounded-lg shadow-md w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Create Something Together
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Whether you're interested in commissioning a piece, joining a
            course, or just want to connect, I'd love to hear from you.
          </p>
          <button
            onClick={() => (window.location.href = "/contact")}
            className="btn bg-white text-primary-600 hover:bg-neutral-100"
          >
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
};

// Timeline Item Component
interface TimelineItemProps {
  year: string;
  title: string;
  children: React.ReactNode;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  children,
}) => {
  return (
    <div className="relative flex items-start group">
      <div className="flex items-center h-6 md:justify-center md:w-24 md:min-w-24">
        <div className="w-3 h-3 rounded-full bg-primary-500 border-4 border-white shadow"></div>
      </div>
      <div className="bg-white p-5 rounded-lg shadow-md">
        <div className="font-bold text-primary-600 mb-1">{year}</div>
        <div className="font-semibold mb-2">{title}</div>
        <p className="text-neutral-600">{children}</p>
      </div>
    </div>
  );
};

// Fade-in animation component
const FadeInSection: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
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

export default AboutPage;
