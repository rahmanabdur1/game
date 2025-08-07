import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { query } = await req.json();

    if (!query || typeof query !== "string") {
      return NextResponse.json({ error: "Invalid query" }, { status: 400 });
    }

    const prompt = `You are a helpful assistant that returns JSON only.

Given this query: "${query}", respond with a JSON array of universities.
Each object must have:
- name (string)
- cost (string)
- deadline (string)
- applyLink (string)
- description (string)
- country (string)
- city (string)
- courseDuration (string)
- intakeMonths (string)
- requirements (string)
- ranking (string)
- scholarshipAvailable (string)
- languageOfInstruction (string)
- website (string)
- contactEmail (string)

Respond only with valid JSON, no explanations or extra text.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You return valid JSON only." },
        { role: "user", content: prompt },
      ],
      temperature: 0.2,
    });

    const jsonResponse = completion.choices[0].message.content;

    let data;
    try {
      data = JSON.parse(jsonResponse);
    } catch {
      return NextResponse.json({ error: "AI did not return valid JSON" }, { status: 500 });
    }

    return NextResponse.json({ results: data });
  } catch (error) {
    console.error("OpenAI search error:", error);
    return NextResponse.json({ error: "Failed to get AI search results" }, { status: 500 });
  }
}
