import { get } from '@vercel/edge-config';

export const config = {
	runtime: 'edge'
};

export default async function handler() {
	const exampleValue1 = await get('example_key_1');
	return Response.json({
		label: `This is the value of "example_key_1" in my Edge Config.`,
		value: exampleValue1
	});
}
