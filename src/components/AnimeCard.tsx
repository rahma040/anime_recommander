import React, { useState } from 'react';
import { Anime } from '../types';
import { InfoIcon } from 'lucide-react';

interface AnimeCardProps {
  anime: Anime;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div
      className="relative flex-shrink-0 w-64 h-96 rounded-lg overflow-hidden shadow-md transition-all duration-300 ease-in-out m-2"
      style={{ 
        transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: isHovered ? '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : ''
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0" />
      
      <img
        src={anime.coverImage}
        alt={anime.title}
        className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-300"
        style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10 transition-transform duration-300"
        style={{ transform: showInfo ? 'translateY(-8rem)' : 'translateY(0)' }}>
        <h3 className="text-lg font-semibold mb-1">{anime.title}</h3>
        
        <div className="flex flex-wrap gap-1 mb-2">
          {anime.genres.map((genre, index) => (
            <span 
              key={index} 
              className="inline-block px-2 py-1 text-xs rounded-full bg-white/20 backdrop-blur-sm"
            >
              {genre}
            </span>
          ))}
        </div>
        
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm hover:bg-white/30 transition-colors"
        >
          <InfoIcon size={16} />
          {showInfo ? 'Hide Info' : 'More Info'}
        </button>
        
        {showInfo && (
          <div className="mt-2 text-sm text-white/90 bg-black/40 backdrop-blur-sm p-2 rounded animate-fadeIn">
            {anime.description}
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimeCard;