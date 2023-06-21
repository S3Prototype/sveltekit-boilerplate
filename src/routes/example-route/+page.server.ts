export const config = {
	isr: {
		expiration: 60,
		bypassToken: 'REPLACE_ME_WITH_SECRET_VALUE23354452433532523523543452423535232352353253'
	}
};

export interface Post {
	title: string;
	id: number;
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
	return {
		posts: (await res.json()) as Post[]
	};
}
