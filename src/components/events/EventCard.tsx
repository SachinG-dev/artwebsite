import React from 'react';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Event } from '../../types/event';

interface EventCardProps {
  event: Event;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  const isPast = new Date(event.date) < new Date();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`card ${isPast ? 'opacity-75' : ''}`}
    >
      <div className="relative">
        <img 
          src={event.imageUrl} 
          alt={event.title} 
          className="w-full h-48 object-cover"
        />
        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-sm font-medium ${
          isPast 
            ? 'bg-neutral-700 text-white' 
            : 'bg-accent-500 text-white'
        }`}>
          {isPast ? 'Past Event' : 'Upcoming'}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-neutral-500">
            <Calendar size={16} className="mr-2" />
            <span>{event.date}</span>
          </div>
          
          <div className="flex items-center text-neutral-500">
            <Clock size={16} className="mr-2" />
            <span>{event.time}</span>
          </div>
          
          <div className="flex items-center text-neutral-500">
            <MapPin size={16} className="mr-2" />
            <span>{event.location}</span>
          </div>
        </div>
        
        <p className="text-neutral-600 mb-6">{event.description}</p>
        
        {!isPast && event.rsvpLink && (
          <a 
            href={event.rsvpLink} 
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full"
          >
            RSVP Now <ExternalLink size={16} className="ml-1" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default EventCard;