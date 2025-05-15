import React from 'react';
import { Clock, Users, Calendar, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Course } from '../../types/course';

interface CourseCardProps {
  course: Course;
  index: number;
  onJoinClick: (course: Course) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, index, onJoinClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card hover:shadow-lg"
    >
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
        
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-neutral-500 text-sm">
            <Clock size={16} className="mr-2" />
            <span>Duration: {course.duration}</span>
          </div>
          
          <div className="flex items-center text-neutral-500 text-sm">
            <Users size={16} className="mr-2" />
            <span>Max Students: {course.maxStudents}</span>
          </div>
          
          <div className="flex items-center text-neutral-500 text-sm">
            <Calendar size={16} className="mr-2" />
            <span>Start Date: {course.startDate}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <span className={course.spotsLeft > 3 ? 'text-green-600' : 'text-accent-600'}>
              {course.spotsLeft} spots left
            </span>
          </div>
          
          <button 
            onClick={() => onJoinClick(course)}
            className="btn btn-primary py-2"
          >
            Join Course <ExternalLink size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;