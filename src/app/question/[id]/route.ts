import path from "node:path";
import { renderFile } from "ejs";

export async function GET() {
	const pageFilePath = path.join(
		process.cwd(),
		"src/views/question-page.ejs",
	);

	const pageContent = await renderFile(pageFilePath, {
		questions: [],
		answers: [],
	});

	return new Response(pageContent, {
		headers: {
			"Content-Type": "text/html; charset=UTF-8",
		},
	});
}
