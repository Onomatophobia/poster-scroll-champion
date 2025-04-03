
import React from 'react';
import Header from '../components/Header';
import CategorySidebar from '../components/CategorySidebar';
import PosterGrid from '../components/PosterGrid';
import { PosterProvider } from '../context/PosterContext';

const Index: React.FC = () => {
  return (
    <PosterProvider>
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
