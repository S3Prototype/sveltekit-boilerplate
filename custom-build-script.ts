import * as fs from 'fs';
fs.writeFile(
	'built-time.ts',
	`export default function builtTime() :string { return '${new Date()}' }`,
	(err: any) => {
		if (err) throw err;
		console.log('Build time file created successfully!');
	}
);
