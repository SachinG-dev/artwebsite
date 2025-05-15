import React, { useState, useEffect } from 'react';
import { Image } from 'lucide-react';
import CategoryFilter from '../components/gallery/CategoryFilter';
import GalleryGrid from '../components/gallery/GalleryGrid';
import { artworks } from '../data/artworks';

const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Extract unique categories from artworks
  const categories = Array.from(
    new Set(artworks.flatMap(artwork => artwork.categories))
  ).sort();
  
  // Handle category selection
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  // Check for artwork ID in URL (for purchase inquiries)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const artworkId = params.get('id');
    
    if (artworkId) {
      // Find the artwork with this ID
      const artwork = artworks.find(a => a.id === artworkId);
      if (artwork) {
        // You could automatically open the modal for this artwork
        // or scroll to it, etc.
        console.log('Artwork selected from URL:', artwork.title);
      }
    }
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary-50 py-16">
        <div className="container text-center">
          <h1 className="mb-4">Art Gallery</h1>
          <p className="text-xl text-neutral-700 max-w-2xl mx-auto">
            Explore my collection of original artworks spanning various styles, themes, and mediums
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container">
          {/* Category Filter */}
          <CategoryFilter 
            categories={categories} 
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
          />
          
          {/* Gallery Grid */}
          <GalleryGrid 
            artworks={artworks}
            selectedCategory={selectedCategory}
          />
          
          {/* Information Notice */}
          <div className="mt-16 p-6 bg-neutral-50 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Interested in purchasing?</h3>
            <p className="text-neutral-600 mb-4">
              Click on any available artwork and use the "Inquire About Purchase" button
              to connect via WhatsApp for details on pricing, shipping, and availability.
            </p>
            <p className="text-neutral-500 text-sm">
              <span className="text-accent-600">●</span> For Sale items are available for purchase
              <span className="mx-3">|</span>
              <span className="text-neutral-700">●</span> Sold items are shown for portfolio purposes only
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;