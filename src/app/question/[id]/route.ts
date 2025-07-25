import { renderFile } from "ejs";

export async function GET() {
	const pageContent = await renderFile("/views/question-page.ejs", {
		questions: [],
		answers: [],
	});

	return new Response(pageContent, {
		headers: {
			"Content-Type": "text/html; charset=UTF-8",
		},
	});
}
