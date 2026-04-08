import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");
    
    // TODO: Implement nearby emergencies logic
    
    return NextResponse.json({ 
      emergencies: [] 
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch nearby emergencies" },
      { status: 500 }
    );
  }
}
