
import React, { useRef, useEffect, useState } from 'react';
import { usePosterContext } from '../context/PosterContext';
import PosterCard from './PosterCard';

const PosterGrid: React.FC = () => {
  const { filteredPosters } = usePosterContext();
  const [visiblePosters, setVisiblePosters] = useState<number>(20);
  const [loading, setLoading] = useState<boolean>(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !loading && visiblePosters < filteredPosters.length) {
          setLoading(true);
          // Simulate loading more posters with a slight delay
          setTimeout(() => {
            setVisiblePosters(prev => Math.min(prev + 8, filteredPosters.length));
            setLoading(false);
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [filteredPosters.length, loading, visiblePosters]);

  // Reset visible posters when filter changes
  useEffect(() => {
    setVisiblePosters(20);
  }, [filteredPosters]);

  const displayedPosters = filteredPosters.slice(0, visiblePosters);

  return (
    <div className="min-h-screen w-full">
      {filteredPosters.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[50vh] text-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="64" 
            height="64" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-gray-500 mb-4"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <h2 className="text-xl font-semibold text-white mb-2">No posters found</h2>
          <p className="text-gray-400">Try changing your search or filter criteria</p>
        </div>
      ) : (
        <>
          <div className="poster-grid">
            {displayedPosters.map((poster) => (
              <PosterCard key={poster.id} poster={poster} />
            ))}
          </div>

          {visiblePosters < filteredPosters.length && (
            <div 
              ref={loaderRef} 
              className="flex justify-center items-center py-8"
            >
              <div className="w-8 h-8 border-t-2 border-r-2 border-white rounded-full animate-spin"></div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PosterGrid;
