'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import SearchFilters from '@/components/SearchFilters';
import HomeCarousels from '@/components/HomeCarousels';

import SearchResults from '@/components/SearchResults';
import Footer from '@/components/Footer';
import { useSearch } from '@/hooks/useSearch';

interface SearchParams {
  destination: string;
  checkIn: Date | null;
  checkOut: Date | null;
  adults: number;
  children: number;
  infants: number;
  pets: number;
}

export default function Home() {
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { results, loading, error, search } = useSearch();

  const handleSearch = async (params: SearchParams) => {
    setSearchQuery(params.destination || 'your search');
    setIsSearchMode(true);
    
    await search({
      ...params,
      minPrice: 0,
      maxPrice: 10000,
    });
  };

  const resetToHome = () => {
    setIsSearchMode(false);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {isSearchMode ? (
        <main className="px-6 lg:px-10 xl:px-20">
          <SearchBar onSearch={handleSearch} />
          <div className="py-4">
            <button
              onClick={resetToHome}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to browsing</span>
            </button>
          </div>
          <SearchResults 
            results={results} 
            loading={loading} 
            error={error}
            searchQuery={searchQuery}
          />
        </main>
      ) : (
        <main className="px-6 lg:px-10 xl:px-20">
          <SearchBar onSearch={handleSearch} />
          <SearchFilters />
          <HomeCarousels />
        </main>
      )}
      
      <Footer />
    </div>
  );
}
