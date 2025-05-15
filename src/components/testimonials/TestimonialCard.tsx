import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Testimonial } from '../../types/testimonial';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className="mb-4 flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={`${
              i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-300'
            }`}
          />
        ))}
      </div>
      
      <p className="text-neutral-700 mb-4 italic">"{testimonial.text}"</p>
      
      <div className="flex items-center">
        {testimonial.avatarUrl && (
          <img 
            src={testimonial.avatarUrl} 
            alt={testimonial.name} 
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
        )}
        <div>
          <p className="font-semibold">{testimonial.name}</p>
          <p className="text-sm text-neutral-500">{testimonial.course || testimonial.type}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;