import { type NextRequest, NextResponse } from "next/server"

// Simple in-memory storage (in production, use a database)
let siteContent = {
  hero: {
    title: "Building Ethical Business Ecosystems",
    subtitle: "Empowering AJK & GB Through Islamic Values",
    description:
      "Join a prestigious network of visionary entrepreneurs, investors, and professionals committed to sustainable economic transformation grounded in Islamic ethics.",
  },
  about: {
    description:
      "The Business Forum Azad Jammu & Kashmir & Gilgit Baltistan (BFAJK&GB) is a non-profit, non-political alliance of visionary entrepreneurs, investors, economists, and professionals committed to economic transformation grounded in Islamic ethics.",
  },
  contact: {
    phone: "+92-XXX-XXXXXXX",
    email: "info@bfajkgb.org",
    address: "Muzaffarabad, Azad Jammu & Kashmir",
  },
}

export async function GET() {
  return NextResponse.json(siteContent)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    siteContent = { ...siteContent, ...body }

    return NextResponse.json({
      success: true,
      message: "Content updated successfully",
      data: siteContent,
    })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to update content" }, { status: 500 })
  }
}
