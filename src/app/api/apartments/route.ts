import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Apartment from '@/models/Apartment';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const city = searchParams.get('city');
    const limit = searchParams.get('limit');
    const skip = searchParams.get('skip');

    let query = {};
    if (city) {
      query = { city: { $regex: city, $options: 'i' } };
    }

    const apartments = await Apartment.find(query)
      .limit(limit ? parseInt(limit) : 20)
      .skip(skip ? parseInt(skip) : 0)
      .sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      data: apartments,
      count: apartments.length,
    });
  } catch (error) {
    console.error('Error fetching apartments:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch apartments' },
      { status: 500 }
    );
  }
}