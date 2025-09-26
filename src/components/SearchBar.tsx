'use client';

export default function SearchBar() {
  return (
    <div className="py-8">
      {/* Search Form */}
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-lg hover:shadow-xl transition-shadow p-2">
          {/* Where */}
          <div className="flex-1 px-6 py-3">
            <div className="text-xs font-semibold text-gray-800 mb-1">Where</div>
            <input
              type="text"
              placeholder="Search destinations"
              className="w-full text-sm text-gray-700 placeholder-gray-400 bg-transparent border-none outline-none"
            />
          </div>

          <div className="w-px h-8 bg-gray-300"></div>

          {/* Check in */}
          <div className="flex-1 px-6 py-3">
            <div className="text-xs font-semibold text-gray-800 mb-1">Check in</div>
            <div className="text-sm text-gray-400">Add dates</div>
          </div>

          <div className="w-px h-8 bg-gray-300"></div>

          {/* Check out */}
          <div className="flex-1 px-6 py-3">
            <div className="text-xs font-semibold text-gray-800 mb-1">Check out</div>
            <div className="text-sm text-gray-400">Add dates</div>
          </div>

          <div className="w-px h-8 bg-gray-300"></div>

          {/* Who */}
          <div className="flex-1 px-6 py-3">
            <div className="text-xs font-semibold text-gray-800 mb-1">Who</div>
            <div className="text-sm text-gray-400">Add guests</div>
          </div>

          {/* Search button */}
          <button className="bg-[#FF385C] text-white p-4 rounded-full hover:bg-[#E31C5F] transition-colors ml-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}