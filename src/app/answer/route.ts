import { redirect } from "next/navigation";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
	const formData = await request.formData();

	const text = formData.get("text");
	const questionId = formData.get("questionId");

	return redirect(`/question/${questionId}`);
}
