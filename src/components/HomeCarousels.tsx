'use client';

import Image from 'next/image';
import { useState } from 'react';

interface HomeCarouselsProps {
  onPropertyClick?: (propertyId: string) => void;
}

export default function HomeCarousels({ onPropertyClick }: HomeCarouselsProps = {}) {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const toggleFavorite = (propertyId: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(propertyId)) {
      newFavorites.delete(propertyId);
    } else {
      newFavorites.add(propertyId);
    }
    setFavorites(newFavorites);
  };

  const PropertyCard = ({ property }: { property: { _id: string; title: string; price: number; rating: number; images: string[]; isGuestFavorite: boolean } }) => (
    <div className="flex-shrink-0 w-72 cursor-pointer" onClick={() => onPropertyClick?.(property._id)}>
      <div className="relative mb-3 rounded-xl overflow-hidden">
        <div className="aspect-[4/3] relative">
          <Image
            src={property.images?.[0] || '/placeholder-image.jpg'}
            alt={property.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="288px"
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
              toggleFavorite(property._id);
            }}
            className="absolute top-3 right-3 p-2 hover:scale-110 transition-transform"
          >
            <svg
              className={`w-6 h-6 ${
                favorites.has(property._id)
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
        <h3 className="font-medium text-gray-900 text-sm truncate">{property.title}</h3>
        <p className="text-gray-900 font-medium text-sm">
          ${property.price} for 2 nights • ⭐ {property.rating}
        </p>
      </div>
    </div>
  );



  return (
    <div className="space-y-10">
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
        <div className="flex overflow-x-auto scrollbar-hide pb-4 space-x-4">
          {Array.from({ length: 7 }).map((_, index) => (
            <PropertyCard key={`dhaka-${index}`} property={{
              _id: `dhaka-${index}`,
              title: index === 0 ? 'Apartment in Moham\'madapura Thana' : 
                    index === 1 ? 'Apartment in Dhaka' :
                    index === 2 ? 'Room in Dhaka' :
                    index === 3 ? 'Apartment in Dhaka' :
                    index === 4 ? 'Apartment in Gulasana Thana' :
                    index === 5 ? 'Apartment in Dhaka' : 'Home in Dhaka',
              price: index === 0 ? 48 : index === 1 ? 59 : index === 2 ? 39 : index === 3 ? 180 : index === 4 ? 92 : index === 5 ? 105 : 60,
              rating: index === 0 ? 5.0 : index === 1 ? 4.9 : index === 2 ? 5.0 : index === 3 ? 5.0 : index === 4 ? 4.98 : index === 5 ? 5.0 : 4.88,
              images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop'],
              isGuestFavorite: true
            }} />
          ))}
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
        <div className="flex overflow-x-auto scrollbar-hide pb-4 space-x-4">
          {Array.from({ length: 7 }).map((_, index) => (
            <PropertyCard key={`kl-${index}`} property={{
              _id: `kl-${index}`,
              title: index === 0 ? 'Condo in PULAPOL' : 
                    index === 1 ? 'Apartment in Bukit Bintang' :
                    index === 2 ? 'Apartment in Kampung Datuk Keramat' :
                    index === 3 ? 'Apartment in Kampung Bahru' :
                    index === 4 ? 'Place to stay in Bukit Bintang' :
                    index === 5 ? 'Apartment in Bukit Bintang' : 'Apartment in Kuala Lumpur',
              price: index === 0 ? 75 : index === 1 ? 91 : index === 2 ? 224 : index === 3 ? 134 : index === 4 ? 45 : index === 5 ? 95 : 92,
              rating: index === 0 ? 4.93 : index === 1 ? 4.95 : index === 2 ? 4.97 : index === 3 ? 4.98 : index === 4 ? 4.95 : index === 5 ? 4.94 : 4.88,
              images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop'],
              isGuestFavorite: true
            }} />
          ))}
        </div>
      </section>

      {/* Available next month in London */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Available next month in London</h2>
          <button className="text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="flex overflow-x-auto scrollbar-hide pb-4 space-x-4">
          {Array.from({ length: 7 }).map((_, index) => (
            <PropertyCard key={`london-${index}`} property={{
              _id: `london-${index}`,
              title: index === 0 ? 'Room in London' : 
                    index === 1 ? 'Room in Paddington' :
                    index === 2 ? 'Room in Lambeth' :
                    index === 3 ? 'Room in London' :
                    index === 4 ? 'Room in London' :
                    index === 5 ? 'Room in Hammersmith' : 'Room in London',
              price: index === 0 ? 89 : index === 1 ? 145 : index === 2 ? 78 : index === 3 ? 92 : index === 4 ? 156 : index === 5 ? 134 : 98,
              rating: index === 0 ? 4.8 : index === 1 ? 4.92 : index === 2 ? 4.76 : index === 3 ? 4.85 : index === 4 ? 4.91 : index === 5 ? 4.88 : 4.83,
              images: ['https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=300&fit=crop'],
              isGuestFavorite: true
            }} />
          ))}
        </div>
      </section>

      {/* Homes in Toronto */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Homes in Toronto</h2>
          <button className="text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="flex overflow-x-auto scrollbar-hide pb-4 space-x-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <PropertyCard key={`toronto-${index}`} property={{
              _id: `toronto-${index}`,
              title: index === 0 ? 'Room in Toronto' : 
                    index === 1 ? 'Room in Toronto' :
                    index === 2 ? 'Room in Toronto' :
                    index === 3 ? 'Room in Toronto' :
                    index === 4 ? 'Guesthouse in Toronto' : 'Room in North York',
              price: index === 0 ? 67 : index === 1 ? 89 : index === 2 ? 78 : index === 3 ? 92 : index === 4 ? 145 : 112,
              rating: index === 0 ? 4.8 : index === 1 ? 4.9 : index === 2 ? 4.85 : index === 3 ? 4.91 : index === 4 ? 4.93 : 4.87,
              images: ['https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=300&fit=crop'],
              isGuestFavorite: true
            }} />
          ))}
        </div>
      </section>

      {/* Available next month in Seoul */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Available next month in Seoul</h2>
          <button className="text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="flex overflow-x-auto scrollbar-hide pb-4 space-x-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <PropertyCard key={`seoul-${index}`} property={{
              _id: `seoul-${index}`,
              title: index === 0 ? 'Guesthouse in Seoul' : 
                    index === 1 ? 'Guesthouse in Seoul' :
                    index === 2 ? 'Room in Jongno-gu' :
                    index === 3 ? 'Room in Mapo-gu' :
                    index === 4 ? 'Apartment in Seoul' : 'Room in Seoul',
              price: index === 0 ? 45 : index === 1 ? 67 : index === 2 ? 89 : index === 3 ? 78 : index === 4 ? 123 : 95,
              rating: index === 0 ? 4.85 : index === 1 ? 4.9 : index === 2 ? 4.82 : index === 3 ? 4.88 : index === 4 ? 4.94 : 4.87,
              images: ['https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop'],
              isGuestFavorite: true
            }} />
          ))}
        </div>
      </section>

      {/* Places to stay in Osaka */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Places to stay in Osaka</h2>
          <button className="text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="flex overflow-x-auto scrollbar-hide pb-4 space-x-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <PropertyCard key={`osaka-${index}`} property={{
              _id: `osaka-${index}`,
              title: index === 0 ? 'Apartment in Osaka' : 
                    index === 1 ? 'Room in Osaka' :
                    index === 2 ? 'Apartment in Osaka' :
                    index === 3 ? 'Apartment in Namba-Minami' :
                    index === 4 ? 'Apartment in Osaka' : 'Apartment in Sumiyoshi',
              price: index === 0 ? 89 : index === 1 ? 67 : index === 2 ? 145 : index === 3 ? 123 : index === 4 ? 98 : 112,
              rating: index === 0 ? 4.88 : index === 1 ? 4.85 : index === 2 ? 4.92 : index === 3 ? 4.89 : index === 4 ? 4.91 : 4.86,
              images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop'],
              isGuestFavorite: true
            }} />
          ))}
        </div>
      </section>

      {/* Check out homes in Tokyo */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Check out homes in Tokyo</h2>
          <button className="text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="flex overflow-x-auto scrollbar-hide pb-4 space-x-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <PropertyCard key={`tokyo-${index}`} property={{
              _id: `tokyo-${index}`,
              title: index === 0 ? 'Room in Sumida City' : 
                    index === 1 ? 'Apartment in Shibuya' :
                    index === 2 ? 'Room in Taito City' :
                    index === 3 ? 'Apartment in Shinjuku' :
                    index === 4 ? 'Apartment in Tokyo' : 'Room in Harajuku',
              price: index === 0 ? 134 : index === 1 ? 189 : index === 2 ? 98 : index === 3 ? 156 : index === 4 ? 145 : 123,
              rating: index === 0 ? 4.91 : index === 1 ? 4.94 : index === 2 ? 4.87 : index === 3 ? 4.89 : index === 4 ? 4.92 : 4.88,
              images: ['https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop'],
              isGuestFavorite: true
            }} />
          ))}
        </div>
      </section>

      {/* Popular homes in Melbourne */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Popular homes in Melbourne</h2>
          <button className="text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="flex overflow-x-auto scrollbar-hide pb-4 space-x-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <PropertyCard key={`melbourne-${index}`} property={{
              _id: `melbourne-${index}`,
              title: index === 0 ? 'Room in Southbank' : 
                    index === 1 ? 'Room in Melbourne' :
                    index === 2 ? 'Room in Collingwood' :
                    index === 3 ? 'Apartment in Melbourne' :
                    index === 4 ? 'Room in Melbourne' : 'Room in South Melbourne',
              price: index === 0 ? 145 : index === 1 ? 123 : index === 2 ? 98 : index === 3 ? 189 : index === 4 ? 156 : 134,
              rating: index === 0 ? 4.92 : index === 1 ? 4.89 : index === 2 ? 4.87 : index === 3 ? 4.94 : index === 4 ? 4.91 : 4.88,
              images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop'],
              isGuestFavorite: true
            }} />
          ))}
        </div>
      </section>

      {/* Stay in Britain */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Stay in Britain</h2>
          <button className="text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="flex overflow-x-auto scrollbar-hide pb-4 space-x-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <PropertyCard key={`britain-${index}`} property={{
              _id: `britain-${index}`,
              title: index === 0 ? 'Apartment in Hill along' : 
                    index === 1 ? 'Apartment in Greenwich Park' :
                    index === 2 ? 'Apartment in Birmingham' :
                    index === 3 ? 'Apartment in Hill along' :
                    index === 4 ? 'House in Long Hill' : 'Apartment in Birmingham',
              price: index === 0 ? 98 : index === 1 ? 134 : index === 2 ? 78 : index === 3 ? 145 : index === 4 ? 189 : 112,
              rating: index === 0 ? 4.87 : index === 1 ? 4.91 : index === 2 ? 4.84 : index === 3 ? 4.93 : index === 4 ? 4.89 : 4.86,
              images: ['https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=300&fit=crop'],
              isGuestFavorite: true
            }} />
          ))}
        </div>
      </section>
    </div>
  );
}