import React from 'react';
import { X, ShoppingBag, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { Artwork } from '../../types/artwork';

interface ArtworkModalProps {
  artwork: Artwork;
  onClose: () => void;
  onPurchase: (artwork: Artwork, e: React.MouseEvent) => void;
}

const ArtworkModal: React.FC<ArtworkModalProps> = ({ artwork, onClose, onPurchase }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75" onClick={onClose}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white bg-opacity-80 text-neutral-800 hover:bg-opacity-100"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-neutral-100 flex items-center justify-center p-6">
            <img src={artwork.imageUrl} alt={artwork.title} className="w-full h-auto max-h-[70vh] object-contain" />
          </div>

          <div className="p-6 md:p-8 flex flex-col">
            <h2 className="text-2xl md:text-3xl font-serif mb-2">{artwork.title}</h2>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {artwork.categories.map((category, index) => (
                <span key={index} className="flex items-center text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full">
                  <Tag size={12} className="mr-1" />
                  {category}
                </span>
              ))}
            </div>
            
            <div className="space-y-4 text-neutral-700 mb-6">
              <p><span className="font-medium">Year:</span> {artwork.year}</p>
              <p><span className="font-medium">Medium:</span> {artwork.medium}</p>
              <p><span className="font-medium">Dimensions:</span> {artwork.dimensions}</p>
              
              {artwork.forSale && (
                <p className="text-xl font-semibold text-accent-600">
                  Price: ${artwork.price} {artwork.sold && <span className="text-neutral-500 line-through ml-2">(Sold)</span>}
                </p>
              )}
            </div>
            
            <p className="my-4">{artwork.description}</p>

            {artwork.forSale && !artwork.sold && (
              <button 
                onClick={(e) => onPurchase(artwork, e)}
                className="btn btn-primary mt-auto"
              >
                <ShoppingBag size={18} className="mr-2" />
                Inquire About Purchase
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ArtworkModal;