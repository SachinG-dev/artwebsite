import React, { useState } from 'react';
import { Video } from 'lucide-react';
import VideoCard from '../components/media/VideoCard';
import { mediaItems } from '../data/media';

const MediaPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Extract unique categories from media items
  const categories = Array.from(
    new Set(mediaItems.flatMap(item => item.categories || []))
  ).filter(Boolean).sort();
  
  // Filter media items by category
  const filteredMedia = selectedCategory === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.categories?.includes(selectedCategory));

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary-50 py-16">
        <div className="container text-center">
          <h1 className="mb-4">Videos & Media</h1>
          <p className="text-xl text-neutral-700 max-w-2xl mx-auto">
            Watch tutorials, behind-the-scenes videos, and interviews
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-neutral-200">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
              onClick={() => setSelectedCategory('all')}
            >
              All
            </button>
            
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          {filteredMedia.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMedia.map((media, index) => (
                <VideoCard key={media.id} media={media} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-lg shadow-sm">
              <Video size={64} className="mx-auto mb-4 text-neutral-400" />
              <h3 className="text-xl font-semibold mb-2">No Videos Found</h3>
              <p className="text-neutral-600">
                There are no videos in this category. Please try selecting a different category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Playlists */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Featured Playlists</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/7887850/pexels-photo-7887850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Painting Techniques" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                  <div className="text-white text-center">
                    <div className="bg-primary-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <Video size={24} />
                    </div>
                    <span className="font-semibold">12 Videos</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">Painting Techniques</h3>
                <p className="text-neutral-600">
                  Learn various painting techniques from basic to advanced.
                </p>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/6996353/pexels-photo-6996353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Studio Tours" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                  <div className="text-white text-center">
                    <div className="bg-primary-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <Video size={24} />
                    </div>
                    <span className="font-semibold">8 Videos</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">Studio Tours</h3>
                <p className="text-neutral-600">
                  Behind-the-scenes looks at my studio and creative process.
                </p>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/5588423/pexels-photo-5588423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Artist Interviews" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                  <div className="text-white text-center">
                    <div className="bg-primary-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <Video size={24} />
                    </div>
                    <span className="font-semibold">5 Videos</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">Artist Interviews</h3>
                <p className="text-neutral-600">
                  Conversations about art, inspiration, and creative journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-16 bg-accent-500 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Subscribe for New Videos</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Stay updated with my latest tutorials, behind-the-scenes footage, and art demonstrations.
          </p>
          <div className="inline-flex items-center">
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn bg-red-600 hover:bg-red-700 text-white"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="mr-2"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaPage;