'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useApartments } from '@/hooks/useApartments';
import { IApartment } from '@/models/Apartment';

export default function HomeCarousels() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  
  // Fetch apartments from different cities
  const { apartments: dhakaHomes, loading: dhakaLoading } = useApartments({ 
    city: 'Dhaka', 
    limit: 7 
  });
  
  const { apartments: klHomes, loading: klLoading } = useApartments({ 
    city: 'Kuala Lumpur', 
    limit: 7 
  });

  const toggleFavorite = (propertyId: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(propertyId)) {
      newFavorites.delete(propertyId);
    } else {
      newFavorites.add(propertyId);
    }
    setFavorites(newFavorites);
  };

  const PropertyCard = ({ property }: { property: any }) => (
    <div className="flex-shrink-0 w-64 mr-4">
      <div className="relative mb-3 rounded-xl overflow-hidden">
        <div className="aspect-square relative">
          <Image
            src={property.images?.[0] || '/placeholder-image.jpg'}
            alt={property.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="256px"
          />
          
          {/* Guest favorite badge */}
          {property.isGuestFavorite && (
            <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-full text-xs font-medium shadow-md">
              Guest favorite
            </div>
          )}
          
          {/* Heart button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(property._id || property.id);
            }}
            className="absolute top-3 right-3 p-2 hover:scale-110 transition-transform"
          >
            <svg
              className={`w-6 h-6 ${
                favorites.has(property._id || property.id)
                  ? 'text-[#FF385C] fill-current'
                  : 'text-white fill-black/20 hover:fill-black/40'
              }`}
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Property details */}
      <div className="space-y-1">
        <h3 className="font-medium text-gray-900 text-sm">{property.title}</h3>
        <p className="text-gray-900 font-medium text-sm">
          ${property.price} for 2 nights • ⭐ {property.rating}
        </p>
      </div>
    </div>
  );

  if (dhakaLoading || klLoading) {
    return (
      <div className="space-y-12">
        {/* Loading state */}
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF385C]"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Popular homes in Dhaka District */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Popular homes in Dhaka District</h2>
          <button className="text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="flex overflow-x-auto scrollbar-hide pb-4">
          {dhakaHomes.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
          {dhakaHomes.length === 0 && (
            <p className="text-gray-500 py-8">No properties found in Dhaka District.</p>
          )}
        </div>
      </section>

      {/* Available next month in Kuala Lumpur */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Available next month in Kuala Lumpur</h2>
          <button className="text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="flex overflow-x-auto scrollbar-hide pb-4">
          {klHomes.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
          {klHomes.length === 0 && (
            <p className="text-gray-500 py-8">No properties found in Kuala Lumpur.</p>
          )}
        </div>
      </section>
    </div>
  );
}