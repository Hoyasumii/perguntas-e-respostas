import type { uuid } from "@/dtos";
import type { GetQuestionDTO } from "@/dtos/questions";
import { Question } from "@/models";
import { useConnection } from "@/utils";

export class GetQuestion {
	@useConnection()
	static async run(id: uuid): Promise<GetQuestionDTO | null> {
		const newQuestion = await Question.findById(id);

		if (!newQuestion) return null;

		return newQuestion;
	}
}
