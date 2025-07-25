import type { GetQuestionDTO } from "@/dtos/questions";
import { Question } from "@/models";
import { useConnection } from "@/utils";

export class GetAllQuestions {
	@useConnection()
	static async run(): Promise<Array<GetQuestionDTO>> {
		const newQuestion = await Question.find().lean();

		return newQuestion;
	}
}
