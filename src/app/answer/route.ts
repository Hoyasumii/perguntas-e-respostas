import { makeCreateAnswer } from "@/factories/answers";
import { redirect } from "next/navigation";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
	const formData = await request.formData();

	const text = formData.get("text")! as string;
	const questionId = formData.get("questionId")! as string;

	const service = makeCreateAnswer();

	try {
		await service.run({ text, questionId });
	} catch (_) {}

	return redirect(`/question/${questionId}`);
}
