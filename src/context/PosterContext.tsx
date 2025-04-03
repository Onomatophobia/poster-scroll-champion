
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Poster, Category } from '../types';
import { posters as initialPosters, categories as initialCategories } from '../data/posters';
import { useFavorites } from '../hooks/useFavorites';

interface PosterContextProps {
  posters: Poster[];
  filteredPosters: Poster[];
  categories: Category[];
  selectedCategory: string | null;
  searchQuery: string;
  favorites: string[];
  setSearchQuery: (query: string) => void;
  selectCategory: (categoryId: string | null) => void;
  toggleFavorite: (posterId: string) => void;
  isFavorite: (posterId: string) => boolean; // Fixed return type from void to boolean
  showFavoritesOnly: boolean;
  toggleShowFavoritesOnly: () => void;
}

const PosterContext = createContext<PosterContextProps | undefined>(undefined);

export const PosterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [posters] = useState<Poster[]>(initialPosters);
  const [categories] = useState<Category[]>(initialCategories);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredPosters, setFilteredPosters] = useState<Poster[]>(posters);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState<boolean>(false);
  
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

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

    // Filter by favorites if enabled
    if (showFavoritesOnly) {
      result = result.filter(poster => favorites.includes(poster.id));
    }

    setFilteredPosters(result);
  }, [selectedCategory, searchQuery, posters, favorites, showFavoritesOnly]);

  const selectCategory = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
  };

  const toggleShowFavoritesOnly = () => {
    setShowFavoritesOnly(prev => !prev);
  };

  return (
    <PosterContext.Provider 
      value={{
        posters,
        filteredPosters,
        categories,
        selectedCategory,
        searchQuery,
        favorites,
        setSearchQuery,
        selectCategory,
        toggleFavorite,
        isFavorite,
        showFavoritesOnly,
        toggleShowFavoritesOnly
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
