export default async function handler(request: Request, res: Response) {
	const { searchParams } = new URL(request.url);
	const hasTitle = searchParams.has('title');
	const title = hasTitle ? searchParams.get('title')?.slice(0, 100) : 'My default title';

	return res.json();
}
