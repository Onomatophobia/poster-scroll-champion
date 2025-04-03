
import React from 'react';
import Header from '../components/Header';
import CategorySidebar from '../components/CategorySidebar';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { PosterProvider } from '../context/PosterContext';

const About: React.FC = () => {
  return (
    <PosterProvider>
      <SEO 
        title="About Poster Champion - Our Story and Contact Information"
        description="Learn about Poster Champion, how our poster collection works, and how to contact us."
        keywords={['about', 'contact', 'poster collection', 'poster info', 'poster champion']}
      />
      
      <div className="min-h-screen bg-poster text-white flex flex-col">
        <Header />
        
        <div className="flex flex-1">
          <CategorySidebar />
          
          <main className="flex-1 pl-16 sm:pl-56 pt-8 pb-16 pr-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold mb-6">About Poster Champion</h1>
              
              <div className="bg-poster-muted p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold mb-4">How It Works</h2>
                <p className="mb-4">
                  Poster Champion is a curated collection of the most unique and interesting posters from around the web.
                  Browse by category, search for specific themes, or just scroll through our constantly updated selection.
                </p>
                <p className="mb-4">
                  When you find a poster you love, just click on it to be directed to where you can purchase it.
                </p>
              </div>
              
              <div className="bg-poster-muted p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <div className="space-y-2">
                  <p>Email: <a href="mailto:contact@posterchampion.com" className="text-blue-400 hover:underline">contact@posterchampion.com</a></p>
                  <p>Instagram: <a href="#" className="text-blue-400 hover:underline">@posterchampion</a></p>
                  <p>Twitter: <a href="#" className="text-blue-400 hover:underline">@posterchampion</a></p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Link to="/" className="inline-flex items-center text-blue-400 hover:underline">
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
                    className="mr-2"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  Back to All Posters
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </PosterProvider>
  );
};

export default About;
