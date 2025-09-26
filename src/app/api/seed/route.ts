import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Apartment from '@/models/Apartment';

const sampleApartments = [
  {
    title: 'Apartment in Moham\'madapura Thana',
    location: 'Moham\'madapura Thana, Dhaka',
    distance: '15 kilometers away',
    dates: 'Nov 2–7',
    price: 48,
    rating: 5.0,
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c219?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=400&fit=crop'
    ],
    isGuestFavorite: true,
    city: 'Dhaka',
    country: 'Bangladesh',
    description: 'Beautiful apartment in the heart of Dhaka with modern amenities',
    amenities: ['WiFi', 'Kitchen', 'Air conditioning', 'TV'],
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 1
  },
  {
    title: 'Apartment in Dhaka',
    location: 'Dhaka, Bangladesh',
    distance: '8 kilometers away',
    dates: 'Oct 15–20',
    price: 59,
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=400&fit=crop'
    ],
    isGuestFavorite: true,
    city: 'Dhaka',
    country: 'Bangladesh',
    description: 'Cozy apartment with great city views',
    amenities: ['WiFi', 'Kitchen', 'Balcony', 'Parking'],
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1
  },
  {
    title: 'Room in Dhaka',
    location: 'Dhaka, Bangladesh',
    distance: '12 kilometers away',
    dates: 'Dec 1–6',
    price: 39,
    rating: 5.0,
    images: [
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=400&fit=crop'
    ],
    isGuestFavorite: true,
    city: 'Dhaka',
    country: 'Bangladesh',
    description: 'Comfortable room in a friendly neighborhood',
    amenities: ['WiFi', 'Shared kitchen', 'Air conditioning'],
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1
  },
  {
    title: 'Apartment in Gulasana Thana',
    location: 'Gulasana Thana, Dhaka',
    distance: '20 kilometers away',
    dates: 'Nov 10–15',
    price: 92,
    rating: 4.98,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=500&h=400&fit=crop'
    ],
    isGuestFavorite: true,
    city: 'Dhaka',
    country: 'Bangladesh',
    description: 'Spacious apartment with modern facilities',
    amenities: ['WiFi', 'Kitchen', 'Pool', 'Gym'],
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2
  },
  // Kuala Lumpur properties
  {
    title: 'Condo in PULAPOL',
    location: 'PULAPOL, Kuala Lumpur',
    distance: '5 kilometers away',
    dates: 'Dec 5–10',
    price: 75,
    rating: 4.93,
    images: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&h=400&fit=crop'
    ],
    isGuestFavorite: true,
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    description: 'Modern condo with city skyline views',
    amenities: ['WiFi', 'Pool', 'Gym', 'Parking'],
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2
  },
  {
    title: 'Apartment in Bukit Bintang',
    location: 'Bukit Bintang, Kuala Lumpur',
    distance: '2 kilometers away',
    dates: 'Jan 3–8',
    price: 91,
    rating: 4.95,
    images: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=500&h=400&fit=crop'
    ],
    isGuestFavorite: true,
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    description: 'Prime location apartment in the heart of KL',
    amenities: ['WiFi', 'Kitchen', 'Air conditioning', 'Shopping nearby'],
    maxGuests: 3,
    bedrooms: 1,
    bathrooms: 1
  },
  // Additional properties for variety
  {
    title: 'Villa in Los Angeles',
    location: 'Los Angeles, California',
    distance: '25 kilometers away',
    dates: 'Feb 1–6',
    price: 289,
    rating: 4.96,
    images: [
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1600563438938-a42d0c6dfaae?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1600566753149-e8588b43d5b0?w=500&h=400&fit=crop'
    ],
    isGuestFavorite: true,
    city: 'Los Angeles',
    country: 'United States',
    description: 'Luxury villa with pool and mountain views',
    amenities: ['Pool', 'WiFi', 'Kitchen', 'Parking', 'Garden'],
    maxGuests: 8,
    bedrooms: 4,
    bathrooms: 3
  },
  {
    title: 'Apartment in Miami',
    location: 'Miami, Florida',
    distance: '18 kilometers away',
    dates: 'Mar 10–15',
    price: 156,
    rating: 4.88,
    images: [
      'https://images.unsplash.com/photo-1600566752734-c3bf8d6be823?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1600566752820-29c4e2e32e7d?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1600566752777-baea8dcb29e9?w=500&h=400&fit=crop'
    ],
    isGuestFavorite: false,
    city: 'Miami',
    country: 'United States',
    description: 'Beachfront apartment with ocean views',
    amenities: ['Beach access', 'WiFi', 'Kitchen', 'Balcony'],
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2
  }
];

export async function POST() {
  try {
    await dbConnect();

    // Clear existing data
    await Apartment.deleteMany({});

    // Insert sample data
    const createdApartments = await Apartment.insertMany(sampleApartments);

    return NextResponse.json({
      success: true,
      message: `Successfully seeded ${createdApartments.length} apartments`,
      data: createdApartments,
    });
  } catch (error) {
    console.error('Error seeding database:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to seed database' },
      { status: 500 }
    );
  }
}