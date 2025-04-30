import React from 'react';
import { GhostIcon } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <GhostIcon className="h-8 w-8 text-pink-400" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Anime Mood Recommender
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;