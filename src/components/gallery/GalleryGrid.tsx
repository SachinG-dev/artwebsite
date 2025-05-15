import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import { Search, Tag, ShoppingBag } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import ArtworkModal from './ArtworkModal';
import { Artwork } from '../../types/artwork';

interface GalleryGridProps {
  artworks: Artwork[];
  selectedCategory: string;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ artworks, selectedCategory }) => {
  const navigate = useNavigate();
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePurchaseClick = (artwork: Artwork, e: React.MouseEvent) => {
    e.stopPropagation();
    // Add the artwork ID to the URL query parameter
    navigate(`/gallery?id=${artwork.id}`);
    
    // Open WhatsApp with a message about this specific artwork
    const message = encodeURIComponent(`Hello, I'm interested in purchasing artwork "${artwork.title}" (ID: ${artwork.id}). Is it still available?`);
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  const filteredArtworks = selectedCategory === 'all' 
    ? artworks 
    : artworks.filter(artwork => artwork.categories.includes(selectedCategory));

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex -ml-4 w-auto"
        columnClassName="pl-4 bg-clip-padding"
      >
        {filteredArtworks.map((artwork) => (
          <ArtworkItem 
            key={artwork.id} 
            artwork={artwork} 
            openModal={openModal}
            handlePurchaseClick={handlePurchaseClick}
          />
        ))}
      </Masonry>

      {isModalOpen && selectedArtwork && (
        <ArtworkModal artwork={selectedArtwork} onClose={closeModal} onPurchase={handlePurchaseClick} />
      )}
    </>
  );
};

interface ArtworkItemProps {
  artwork: Artwork;
  openModal: (artwork: Artwork) => void;
  handlePurchaseClick: (artwork: Artwork, e: React.MouseEvent) => void;
}

const ArtworkItem: React.FC<ArtworkItemProps> = ({ artwork, openModal, handlePurchaseClick }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5 }}
      className="mb-4"
    >
      <div 
        className="card cursor-pointer group"
        onClick={() => openModal(artwork)}
      >
        <div className="thumbnail">
          <img src={artwork.imageUrl} alt={artwork.title} />
          <div className="thumbnail-overlay">
            <Search className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
          </div>
          
          {artwork.forSale && !artwork.sold && (
            <div className="absolute top-3 right-3 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              For Sale
            </div>
          )}
          
          {artwork.sold && (
            <div className="absolute top-3 right-3 bg-neutral-700 text-white px-3 py-1 rounded-full text-sm font-medium">
              Sold
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-medium mb-1">{artwork.title}</h3>
          <p className="text-neutral-500 text-sm mb-2">{artwork.medium}, {artwork.year}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {artwork.categories.slice(0, 2).map((category, index) => (
                <span key={index} className="flex items-center text-xs text-neutral-600">
                  <Tag size={12} className="mr-1" />
                  {category}
                </span>
              ))}
            </div>
            
            {artwork.forSale && !artwork.sold && (
              <div className="flex items-center">
                <span className="text-accent-600 font-semibold mr-2">
                  ${artwork.price}
                </span>
                <button 
                  onClick={(e) => handlePurchaseClick(artwork, e)}
                  className="p-2 bg-primary-50 text-primary-600 rounded-full hover:bg-primary-100 transition-colors"
                >
                  <ShoppingBag size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryGrid;