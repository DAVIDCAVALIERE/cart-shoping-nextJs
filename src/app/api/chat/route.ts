import { OpenAIStream, StreamingTextResponse } from "ai";

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();

  // Call OpenAI's API using fetch for streaming response
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPEN_AI_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      stream: true,
      messages,
    }),
  });

  // Convert the response into a friendly text-stream
  const stream = await OpenAIStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
