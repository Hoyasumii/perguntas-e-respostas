import path from "node:path";
import { renderFile } from "ejs";
import { viewsPath } from "@/constants";

export async function GET() {
	console.log(process.cwd());

	const pageFilePath = path.join(process.cwd(), "src/views/index.ejs");

	const pageContent = await renderFile(pageFilePath, {
		head: `${viewsPath}/partials/head`,
		navbar: `${viewsPath}/partials/navbar`,
		footer: `${viewsPath}/partials/footer`,
		questions: [],
	});

	return new Response(pageContent, {
		headers: {
			"Content-Type": "text/html; charset=UTF-8",
		},
	});
}
