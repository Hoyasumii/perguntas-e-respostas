import { renderFile } from "ejs";
import { viewsPath } from "@/constants";
import { makeGetAllQuestions } from "@/factories/questions";

export async function GET() {
	const service = makeGetAllQuestions();

	const pageContent = await renderFile(`${viewsPath}/index.ejs`, {
		head: `${viewsPath}/partials/head`,
		navbar: `${viewsPath}/partials/navbar`,
		footer: `${viewsPath}/partials/footer`,
		questions: await service.run(),
	});

	return new Response(pageContent, {
		headers: {
			"Content-Type": "text/html; charset=UTF-8",
		},
	});
}
