import { renderFile } from "ejs";
import { viewsPath } from "@/constants";
import type { NextRequest } from "next/server";
import { makeGetQuestion } from "@/factories/questions";
import { redirect } from "next/navigation";
import { makeGetAllAnswers } from "@/factories/answers";

export async function GET(
	_: NextRequest,
	context: { params: Promise<{ id: string }> },
) {
	const { id } = await context.params;

	const getQuestionService = makeGetQuestion();
	const getAnswersService = makeGetAllAnswers();

	const answers = await getAnswersService.run(id);

	try {
		const targetQuestion = await getQuestionService.run(id);

		const pageContent = await renderFile(`${viewsPath}/question-page.ejs`, {
			questions: targetQuestion,
			answers: answers,
			head: `${viewsPath}/partials/head`,
			navbar: `${viewsPath}/partials/navbar`,
			footer: `${viewsPath}/partials/footer`,
		});

		return new Response(pageContent, {
			headers: {
				"Content-Type": "text/html; charset=UTF-8",
			},
		});
	} catch (_) {
		return redirect("/");
	}
}
