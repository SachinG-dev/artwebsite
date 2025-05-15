import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Media } from '../../types/media';

interface VideoCardProps {
  media: Media;
  index: number;
}

const VideoCard: React.FC<VideoCardProps> = ({ media, index }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleClose = () => {
    setIsPlaying(false);
  };

  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      // Extract YouTube video ID
      let videoId = '';
      if (url.includes('v=')) {
        videoId = url.split('v=')[1].split('&')[0];
      } else if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1].split('?')[0];
      }
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    } else if (url.includes('vimeo.com')) {
      // Extract Vimeo video ID
      const videoId = url.split('vimeo.com/')[1].split('?')[0];
      return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
    }
    return url;
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="card"
      >
        <div 
          className="thumbnail cursor-pointer" 
          onClick={handlePlay}
        >
          <img 
            src={media.thumbnailUrl} 
            alt={media.title} 
            className="w-full aspect-video object-cover"
          />
          <div className="thumbnail-overlay">
            <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
              <Play size={30} className="text-primary-600 ml-1" />
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-medium mb-1">{media.title}</h3>
          <p className="text-neutral-500 text-sm">{media.duration}</p>
        </div>
      </motion.div>

      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90"
            onClick={handleClose}
          >
            <button 
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white text-black hover:bg-opacity-90"
              onClick={handleClose}
            >
              <X size={24} />
            </button>
            
            <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
              <iframe
                src={getEmbedUrl(media.videoUrl)}
                className="absolute inset-0 w-full h-full"
                title={media.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VideoCard;