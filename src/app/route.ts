import { renderFile } from "ejs";

export async function GET() {
	const pageContent = await renderFile("/views/index.ejs", {
		questions: [],
	});

	return new Response(pageContent, {
		headers: {
			"Content-Type": "text/html; charset=UTF-8",
		},
	});
}
