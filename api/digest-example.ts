import { digest } from '@vercel/edge-config';

export const config = {
	runtime: 'edge'
};

export default async () => {
	const version = await digest();
	return Response.json({
		test: version
	});
};
