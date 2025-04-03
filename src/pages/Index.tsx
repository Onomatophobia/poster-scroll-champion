
import React from 'react';
import Header from '../components/Header';
import CategorySidebar from '../components/CategorySidebar';
import PosterGrid from '../components/PosterGrid';
import SEO from '../components/SEO';
import { PosterProvider } from '../context/PosterContext';
import { posters } from '../data/posters';

const Index: React.FC = () => {
  // Extract all unique keywords from posters for SEO
  const allKeywords = [...new Set(posters.flatMap(poster => poster.keywords))];
  
  return (
    <PosterProvider>
      <SEO 
        title="Poster Champion - Curated Poster Collection"
        description="Browse our collection of unique movie, music, art, gaming, anime, nature, abstract, and minimalist posters."
        keywords={allKeywords}
      />
      <div className="min-h-screen bg-poster text-white flex flex-col">
        <Header />
        
        <div className="flex flex-1">
          <CategorySidebar />
          
          <main className="flex-1 pl-16 sm:pl-56 pt-4 pb-16 pr-4">
            <PosterGrid />
          </main>
        </div>
      </div>
    </PosterProvider>
  );
};

export default Index;
