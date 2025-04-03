
import { useState, useEffect } from 'react';
import { Poster } from '../types';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  // Load favorites from localStorage on initial render
  useEffect(() => {
    const storedFavorites = localStorage.getItem('posterChampionFavorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('posterChampionFavorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (posterId: string) => {
    setFavorites(prev => {
      if (prev.includes(posterId)) {
        return prev.filter(id => id !== posterId);
      } else {
        return [...prev, posterId];
      }
    });
  };

  const isFavorite = (posterId: string) => {
    return favorites.includes(posterId);
  };

  const getFavoritePosters = (allPosters: Poster[]) => {
    return allPosters.filter(poster => favorites.includes(poster.id));
  };

  return {
    favorites,
    toggleFavorite,
    isFavorite,
    getFavoritePosters,
  };
};
