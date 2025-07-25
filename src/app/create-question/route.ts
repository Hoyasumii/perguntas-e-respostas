import { renderFile } from "ejs";
import type { NextRequest } from "next/server";
import { redirect } from "next/navigation";
import { viewsPath } from "@/constants";
import { makeCreateQuestion } from "@/factories/questions";

export async function GET() {
	const pageContent = await renderFile(`${viewsPath}/create-question.ejs`, {
		head: `${viewsPath}/partials/head`,
		navbar: `${viewsPath}/partials/navbar`,
		footer: `${viewsPath}/partials/footer`,
	});

	return new Response(pageContent, {
		headers: {
			"Content-Type": "text/html; charset=UTF-8",
		},
	});
}

export async function POST(request: NextRequest) {
	const formData = await request.formData();

	const title = formData.get("title")! as string;
	const description = formData.get("description")! as string;

	const service = makeCreateQuestion();

	try {
		await service.run({ title, description });
	} catch (_) {}

	return redirect("/");
}
