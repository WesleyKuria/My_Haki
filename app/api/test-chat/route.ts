import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Test if OpenAI API key is available
    const hasApiKey = !!process.env.OPENAI_API_KEY

    return NextResponse.json({
      status: "API endpoint working",
      hasApiKey,
      timestamp: new Date().toISOString(),
      message: hasApiKey
        ? "OpenAI API key is configured"
        : "OpenAI API key is missing - add OPENAI_API_KEY to environment variables",
    })
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
