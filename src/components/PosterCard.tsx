
import React from 'react';
import { Poster } from '../types';

interface PosterCardProps {
  poster: Poster;
}

const PosterCard: React.FC<PosterCardProps> = ({ poster }) => {
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
    </div>
  );
};

export default PosterCard;
