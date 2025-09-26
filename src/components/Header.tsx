'use client';

import { useState } from 'react';

export default function Header() {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="px-6 lg:px-10 xl:px-20 py-4">
        <div className="flex items-center justify-between">
          {/* Logo generating by chatGPT */}
          <div className="flex items-center">
            <div onClick={() => window.location.href = '/'} className="text-2xl font-bold text-[#FF385C]">
              <svg width="102" height="32" viewBox="0 0 102 32" fill="currentColor">
                <path d="M12.4 0C8.9 0 5.8 1.5 3.7 4.1L0.2 8.6C-0.2 9.1-0.2 9.8 0.3 10.2L3.7 13.9C5.8 16.5 8.9 18 12.4 18S19 16.5 21.1 13.9L24.5 10.2C24.9 9.7 24.9 9 24.5 8.6L21.1 4.1C19 1.5 15.9 0 12.4 0Z" />
                <path d="M67.4 18.5C71.7 18.5 75 15.2 75 10.9S71.7 3.3 67.4 3.3 59.8 6.6 59.8 10.9 63.1 18.5 67.4 18.5ZM67.4 7.7C69.2 7.7 70.6 9.1 70.6 10.9S69.2 14.1 67.4 14.1 64.2 12.7 64.2 10.9 65.6 7.7 67.4 7.7Z" />
                <path d="M94.1 31.5C98.1 31.5 101.2 28.4 101.2 24.4V8.1C101.2 7.5 100.7 7 100.1 7H96.5C95.9 7 95.4 7.5 95.4 8.1V24.4C95.4 25.1 94.8 25.7 94.1 25.7S92.8 25.1 92.8 24.4V8.1C92.8 7.5 92.3 7 91.7 7H88.1C87.5 7 87 7.5 87 8.1V24.4C87 28.4 90.1 31.5 94.1 31.5Z" />
                <path d="M44.8 18.5C49.1 18.5 52.4 15.2 52.4 10.9S49.1 3.3 44.8 3.3 37.2 6.6 37.2 10.9 40.5 18.5 44.8 18.5ZM44.8 7.7C46.6 7.7 48 9.1 48 10.9S46.6 14.1 44.8 14.1 41.6 12.7 41.6 10.9 43 7.7 44.8 7.7Z" />
                <path d="M30.2 18.1H33.8C34.4 18.1 34.9 17.6 34.9 17V8.1C34.9 7.5 34.4 7 33.8 7H30.2C29.6 7 29.1 7.5 29.1 8.1V17C29.1 17.6 29.6 18.1 30.2 18.1Z" />
                <path d="M82.7 18.1H86.3C86.9 18.1 87.4 17.6 87.4 17V8.1C87.4 7.5 86.9 7 86.3 7H82.7C82.1 7 81.6 7.5 81.6 8.1V17C81.6 17.6 82.1 18.1 82.7 18.1Z" />
              </svg>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium border-b-2 border-gray-800 pb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21l8-8-8-8" />
              </svg>
              <span>Homes</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 font-medium pb-4">
              <div className="bg-orange-500 text-white px-1 text-xs rounded">NEW</div>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>Experiences</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 font-medium pb-4">
              <div className="bg-teal-600 text-white px-1 text-xs rounded">NEW</div>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <span>Services</span>
            </a>
          </nav>

          {/* User menu */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block text-gray-700 hover:text-gray-900 font-medium">
              Airbnb your home
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
              </svg>
            </button>
            <div className="relative">
              <button 
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2 border border-gray-300 rounded-full py-2 px-4 hover:shadow-md transition-shadow"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </button>
              
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Sign up</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Log in</a>
                  <hr className="my-1" />
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Airbnb your home</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Host an experience</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Help Center</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}