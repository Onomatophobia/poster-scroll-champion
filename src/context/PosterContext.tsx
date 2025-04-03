
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Poster, Category } from '../types';
import { posters as initialPosters, categories as initialCategories } from '../data/posters';

interface PosterContextProps {
  posters: Poster[];
  filteredPosters: Poster[];
  categories: Category[];
  selectedCategory: string | null;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectCategory: (categoryId: string | null) => void;
}

const PosterContext = createContext<PosterContextProps | undefined>(undefined);

export const PosterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [posters] = useState<Poster[]>(initialPosters);
  const [categories] = useState<Category[]>(initialCategories);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredPosters, setFilteredPosters] = useState<Poster[]>(posters);
  
  useEffect(() => {
    let result = posters;

    // Filter by category if selected
    if (selectedCategory) {
      result = result.filter(poster => 
        poster.categories.includes(selectedCategory)
      );
    }

    // Filter by search query if present
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(poster => 
        poster.title.toLowerCase().includes(query) || 
        poster.keywords.some(keyword => keyword.toLowerCase().includes(query))
      );
    }

    setFilteredPosters(result);
  }, [selectedCategory, searchQuery, posters]);

  const selectCategory = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
  };

  return (
    <PosterContext.Provider 
      value={{
        posters,
        filteredPosters,
        categories,
        selectedCategory,
        searchQuery,
        setSearchQuery,
        selectCategory,
      }}
    >
      {children}
    </PosterContext.Provider>
  );
};

export const usePosterContext = () => {
  const context = useContext(PosterContext);
  if (!context) {
    throw new Error('usePosterContext must be used within a PosterProvider');
  }
  return context;
};
