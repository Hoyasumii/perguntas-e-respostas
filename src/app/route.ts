import path from "node:path";
import { renderFile } from "ejs";

export async function GET() {
  console.log(process.cwd())

	const pageFilePath = path.join(process.cwd(), "src/views/index.ejs");

	const pageContent = await renderFile(pageFilePath, {
		questions: [],
	});

	return new Response(pageContent, {
		headers: {
			"Content-Type": "text/html; charset=UTF-8",
		},
	});
}
