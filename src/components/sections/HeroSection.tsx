import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Art Studio" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto px-4"
        >
          <h1 className="mb-6 font-serif">Creating Art That Touches The Soul</h1>
          <p className="text-xl md:text-2xl mb-8 text-neutral-100">
            Explore a unique collection of original artworks that capture emotion and imagination
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/gallery" className="btn btn-accent w-full sm:w-auto">
              View Gallery
            </Link>
            <Link to="/contact" className="btn bg-white text-neutral-900 hover:bg-neutral-100 w-full sm:w-auto">
              Get in Touch <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;