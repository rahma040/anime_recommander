import React, { useRef } from 'react';
import { MoodCategory } from '../types';
import AnimeCard from './AnimeCard';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

interface MoodSectionProps {
  category: MoodCategory;
}

const MoodSection: React.FC<MoodSectionProps> = ({ category }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-8">
      <div 
        className="rounded-lg p-6 mb-4"
        style={{ backgroundColor: `${category.color}20` }}  // 20% opacity of the category color
      >
        <h2 
          className="text-2xl font-bold mb-2" 
          style={{ color: category.color }}
        >
          {category.title}
        </h2>
        <p className="text-gray-600">{category.description}</p>
      </div>

      <div className="relative">
        <button 
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-colors"
        >
          <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
        </button>
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto py-4 hide-scrollbar scroll-smooth"
          style={{ scrollbarWidth: 'none' }}
        >
          {category.animeList.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
        
        <button 
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-colors"
        >
          <ChevronRightIcon className="h-6 w-6 text-gray-800" />
        </button>
      </div>
    </section>
  );
};

export default MoodSection;