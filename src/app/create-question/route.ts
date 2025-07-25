import { renderFile } from "ejs";
import type { NextRequest } from "next/server";
import { redirect } from "next/navigation";

export async function GET() {
	const pageContent = await renderFile("/views/create-question.ejs");

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
