import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(req: NextRequest) {
  try {
    const resources = await cloudinary.api.resources({ max_results: 30});
    return NextResponse.json(resources.resources);
  } catch (error) {
    console.error('Error fetching Cloudinary resources:', error);
    return NextResponse.json({ error: 'Failed to fetch images' }, { status: 500 });
  }
}
