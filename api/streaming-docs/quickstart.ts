import { VercelRequest, VercelResponse } from "@vercel/node";

 export const config = {
  // Works if set to 'edge'
  supportsResponseStreaming: true
 };
 
// You can name this method anything
export default async function handler(request: VercelRequest, response: VercelResponse) {
  // This encoder will stream our text
  const encoder = new TextEncoder();
  const customReadable = new ReadableStream({
    start(controller) {
      // Start encoding 'Basic Streaming Test',
      // and add the resulting stream to the queue
      controller.enqueue(encoder.encode('Basic Streaming Test'));
      // Prevent anything else being added to the stream
      controller.close();
    },
  });
 

  response.status(200).setHeader("Content-Type", "text/html; charset=utf-8").send(customReadable);

  // return new Response(customReadable, {
  //   headers: { 'Content-Type': 'text/html; charset=utf-8' },
  // });
}