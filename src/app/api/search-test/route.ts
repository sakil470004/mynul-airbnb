import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  // Extract search parameters
  const destination = searchParams.get('destination') || '';
  const adults = parseInt(searchParams.get('adults') || '0');
  const children = parseInt(searchParams.get('children') || '0');
  
  // Test data for search functionality
  const testApartments = [
    {
      _id: '1',
      title: 'Modern Apartment in Dhaka',
      location: 'Dhaka, Bangladesh',
      description: 'Beautiful modern apartment with city views',
      price: 45,
      rating: 4.8,
      reviews: 127,
      images: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400',
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400'
      ],
      maxGuests: 4,
      bedrooms: 2,
      bathrooms: 1,
      type: 'Apartment',
      amenities: ['WiFi', 'Kitchen', 'Air conditioning'],
      instantBook: true,
      relevanceScore: 10
    },
    {
      _id: '2',
      title: 'Cozy Home in Toronto',
      location: 'Toronto, Canada',
      description: 'Comfortable home near CN Tower',
      price: 89,
      rating: 4.9,
      reviews: 203,
      images: [
        'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=400',
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400'
      ],
      maxGuests: 6,
      bedrooms: 3,
      bathrooms: 2,
      type: 'House',
      amenities: ['WiFi', 'Kitchen', 'Parking', 'Heating'],
      instantBook: false,
      relevanceScore: 8
    },
    {
      _id: '3',
      title: 'Luxury Condo in Kuala Lumpur',
      location: 'Kuala Lumpur, Malaysia',
      description: 'Stunning views of the Petronas Towers',
      price: 125,
      rating: 4.7,
      reviews: 89,
      images: [
        'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=400',
        'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=400'
      ],
      maxGuests: 4,
      bedrooms: 2,
      bathrooms: 2,
      type: 'Condo',
      amenities: ['WiFi', 'Kitchen', 'Pool', 'Gym', 'Air conditioning'],
      instantBook: true,
      relevanceScore: 9
    },
    {
      _id: '4',
      title: 'Traditional House in Bangkok',
      location: 'Bangkok, Thailand',
      description: 'Experience authentic Thai living',
      price: 67,
      rating: 4.6,
      reviews: 156,
      images: [
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400'
      ],
      maxGuests: 5,
      bedrooms: 3,
      bathrooms: 2,
      type: 'House',
      amenities: ['WiFi', 'Kitchen', 'Garden', 'Air conditioning'],
      instantBook: false,
      relevanceScore: 7
    },
    {
      _id: '5',
      title: 'Modern Loft in London',
      location: 'London, United Kingdom',
      description: 'Stylish loft in central London',
      price: 180,
      rating: 4.9,
      reviews: 234,
      images: [
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400',
        'https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=400'
      ],
      maxGuests: 2,
      bedrooms: 1,
      bathrooms: 1,
      type: 'Loft',
      amenities: ['WiFi', 'Kitchen', 'Heating', 'Workspace'],
      instantBook: true,
      relevanceScore: 6
    }
  ];

  // Filter apartments based on search criteria
  let filteredApartments = testApartments;
  
  if (destination) {
    filteredApartments = filteredApartments.filter(apt => 
      apt.location.toLowerCase().includes(destination.toLowerCase()) ||
      apt.title.toLowerCase().includes(destination.toLowerCase())
    );
  }
  
  const totalGuests = adults + children;
  if (totalGuests > 0) {
    filteredApartments = filteredApartments.filter(apt => apt.maxGuests >= totalGuests);
  }

  return NextResponse.json({
    success: true,
    data: filteredApartments,
    count: filteredApartments.length,
    searchParams: {
      destination,
      guests: { adults, children },
      totalGuests
    }
  });
}

export async function POST() {
  return NextResponse.json({
    success: true,
    data: {
      destinations: ['Dhaka, Bangladesh', 'Toronto, Canada', 'Kuala Lumpur, Malaysia', 'Bangkok, Thailand', 'London, United Kingdom'],
      propertyTypes: ['Apartment', 'House', 'Condo', 'Loft'],
      amenities: ['WiFi', 'Kitchen', 'Air conditioning', 'Parking', 'Heating', 'Pool', 'Gym', 'Garden', 'Workspace'],
      priceRange: { minPrice: 45, maxPrice: 180, avgPrice: 101 }
    }
  });
}