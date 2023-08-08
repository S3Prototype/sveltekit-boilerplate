import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(request: VercelRequest, response: VercelResponse) {
	const fileName = '../built-time';
	const BuiltTime = await import(fileName);
	response.setHeader('content-type', 'text/plain');
	response.send(`
    This Serverless Function was built at ${new Date(BuiltTime)}.
    The current time is ${new Date()}
  `);
}
