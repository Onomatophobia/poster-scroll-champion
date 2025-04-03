
import React, { useState } from 'react';
import { usePosterContext } from '../context/PosterContext';
import { Link } from 'react-router-dom';

const CategorySidebar: React.FC = () => {
  const { categories, selectCategory, selectedCategory } = usePosterContext();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleCategoryClick = (categoryId: string) => {
    if (selectedCategory === categoryId) {
      selectCategory(null); // Deselect if already selected
    } else {
      selectCategory(categoryId);
    }
  };

  return (
    <div
      className={`fixed left-0 top-0 h-screen bg-poster-muted z-40 pt-20 transition-all duration-300 ease-in-out flex flex-col justify-between ${
        isCollapsed ? 'w-16' : 'w-56'
      }`}
    >
      <div>
        <button
          onClick={toggleSidebar}
          className="absolute top-1/2 -right-3 w-6 h-12 bg-poster-accent rounded-r-md flex items-center justify-center"
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform ${isCollapsed ? 'rotate-0' : 'rotate-180'}`}
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <div className="px-4 pb-4">
          <h2 className={`text-white font-bold text-lg mb-4 ${isCollapsed ? 'hidden' : 'block'}`}>
            Categories
          </h2>

          <ul className="space-y-2">
            <li>
              <button
                onClick={() => selectCategory(null)}
                className={`category-button w-full ${
                  selectedCategory === null ? 'active' : ''
                }`}
              >
                {isCollapsed ? (
                  <span className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="7" height="7" x="3" y="3" rx="1" />
                      <rect width="7" height="7" x="14" y="3" rx="1" />
                      <rect width="7" height="7" x="14" y="14" rx="1" />
                      <rect width="7" height="7" x="3" y="14" rx="1" />
                    </svg>
                  </span>
                ) : (
                  'All Posters'
                )}
              </button>
            </li>

            {categories.map((category) => (
              <li key={category.id}>
                <button
                  onClick={() => handleCategoryClick(category.id)}
                  className={`category-button w-full ${
                    selectedCategory === category.id ? 'active' : ''
                  }`}
                >
                  {isCollapsed ? (
                    <span className="flex justify-center">
                      {category.name.charAt(0)}
                    </span>
                  ) : (
                    category.name
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="px-4 py-4 border-t border-poster-border mt-auto">
        <Link 
          to="/about"
          className="category-button w-full block text-center"
        >
          {isCollapsed ? (
            <span className="flex justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" x2="12" y1="8" y2="12" />
                <line x1="12" x2="12.01" y1="16" y2="16" />
              </svg>
            </span>
          ) : (
            'About Poster Champion'
          )}
        </Link>
      </div>
    </div>
  );
};

export default CategorySidebar;
