import path from "node:path";
import { renderFile } from "ejs";
import type { NextRequest } from "next/server";
import { redirect } from "next/navigation";

export async function GET() {
	const pageFilePath = path.join(
		process.cwd(),
		"/views/create-question.ejs",
	);

	const pageContent = await renderFile(pageFilePath);

	return new Response(pageContent, {
		headers: {
			"Content-Type": "text/html; charset=UTF-8",
		},
	});
}

export async function POST(request: NextRequest) {
	const formData = await request.formData();

	const title = formData.get("title");
	const description = formData.get("description");

	return redirect("/");
}
