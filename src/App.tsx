import React from 'react';
import Navbar from './components/Navbar';
import MoodSection from './components/MoodSection';
import { moodCategories } from './data/animeData';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-6">
        <header className="text-center py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your <span className="text-pink-500">Perfect</span> Anime
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover anime recommendations based on your current mood. Whether you're feeling lazy, 
            need inspiration, want to cry, or just looking for a good laugh - we've got you covered!
          </p>
        </header>
        
        <div className="space-y-8">
          {moodCategories.map((category) => (
            <MoodSection key={category.id} category={category} />
          ))}
        </div>
      </main>
      
      <footer className="bg-white py-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © 2025 Anime Mood Recommender - Find the perfect anime for every mood
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;