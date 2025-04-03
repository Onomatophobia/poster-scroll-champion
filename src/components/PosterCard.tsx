
import React from 'react';
import { Poster } from '../types';
import { usePosterContext } from '../context/PosterContext';

interface PosterCardProps {
  poster: Poster;
}

const PosterCard: React.FC<PosterCardProps> = ({ poster }) => {
  const { toggleFavorite, isFavorite } = usePosterContext();
  const favorite = isFavorite(poster.id);

  return (
    <div className="relative group animate-fade-in">
      <div className="poster-hover bg-poster-muted rounded-lg overflow-hidden border border-poster-border">
        <a
          href={poster.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative aspect-[3/4] overflow-hidden"
        >
          <img
            src={poster.imageUrl}
            alt={poster.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <h3 className="text-white font-bold text-lg mb-1">{poster.title}</h3>
            <p className="text-white/80">${poster.price.toFixed(2)}</p>
          </div>
        </a>
      </div>
      
      <button
        onClick={() => toggleFavorite(poster.id)}
        className="absolute top-2 right-2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 hover:bg-black/80 transition-all duration-300 z-10"
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill={favorite ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={favorite ? "text-red-500" : "text-white"}
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      </button>
    </div>
  );
};

export default PosterCard;
