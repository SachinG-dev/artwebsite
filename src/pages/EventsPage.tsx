import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import EventCard from '../components/events/EventCard';
import { events } from '../data/events';

const EventsPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');
  
  const currentDate = new Date();
  
  const filteredEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    if (filter === 'upcoming') {
      return eventDate >= currentDate;
    } else if (filter === 'past') {
      return eventDate < currentDate;
    }
    return true;
  });
  
  // Sort events: upcoming first (by date, closest first), then past (by date, most recent first)
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    const isAFuture = dateA >= currentDate;
    const isBFuture = dateB >= currentDate;
    
    if (isAFuture && isBFuture) {
      return dateA.getTime() - dateB.getTime(); // Upcoming: earliest first
    } else if (!isAFuture && !isBFuture) {
      return dateB.getTime() - dateA.getTime(); // Past: most recent first
    } else {
      return isAFuture ? -1 : 1; // Upcoming before past
    }
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary-50 py-16">
        <div className="container text-center">
          <h1 className="mb-4">Events & Exhibitions</h1>
          <p className="text-xl text-neutral-700 max-w-2xl mx-auto">
            Join me at upcoming exhibitions, workshops, and events or explore past events
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-neutral-200">
        <div className="container">
          <div className="flex justify-center">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                className={`px-4 py-2 text-sm font-medium ${
                  filter === 'all'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-neutral-700 hover:bg-neutral-50'
                } border border-neutral-300 rounded-l-md`}
                onClick={() => setFilter('all')}
              >
                All Events
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium ${
                  filter === 'upcoming'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-neutral-700 hover:bg-neutral-50'
                } border-t border-b border-r border-neutral-300`}
                onClick={() => setFilter('upcoming')}
              >
                Upcoming
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium ${
                  filter === 'past'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-neutral-700 hover:bg-neutral-50'
                } border-t border-b border-r border-neutral-300 rounded-r-md`}
                onClick={() => setFilter('past')}
              >
                Past Events
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          {sortedEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-lg shadow-sm">
              <Calendar size={64} className="mx-auto mb-4 text-neutral-400" />
              <h3 className="text-xl font-semibold mb-2">No Events Found</h3>
              <p className="text-neutral-600 max-w-md mx-auto">
                {filter === 'upcoming' 
                  ? 'There are no upcoming events scheduled at the moment. Please check back later.'
                  : filter === 'past' 
                    ? 'There are no past events to display.'
                    : 'There are no events to display.'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Submit Event Interest */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Interested in Event Updates?</h2>
            <p className="text-lg text-neutral-700 mb-8">
              Sign up to receive notifications about upcoming exhibitions, workshops, and other events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <button className="btn btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-neutral-500 mt-4">
              I respect your privacy and will never share your information. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Host an Event */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-white mb-6">Host a Private Event</h2>
              <p className="mb-6">
                Looking to host a private art event, workshop, or presentation? I'm available for 
                private gatherings, corporate events, and educational institutions.
              </p>
              <p className="mb-8">
                From intimate art workshops to larger demonstrations and talks, I can tailor an 
                art experience to meet your group's interests and needs.
              </p>
              <button 
                onClick={() => window.location.href = '/contact'}
                className="btn bg-white text-primary-600 hover:bg-neutral-100"
              >
                Inquire About Private Events
              </button>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Art workshop" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;