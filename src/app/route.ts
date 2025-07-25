import { renderFile } from "ejs";
import { viewsPath } from "@/constants";

export async function GET() {
	const pageContent = await renderFile(`${viewsPath}/index.ejs`, {
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
