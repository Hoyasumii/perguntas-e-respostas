import type { GetQuestionDTO } from "@/dtos/questions";
import { Question } from "@/models";
import { useConnection } from "@/utils";

export class GetAllQuestions {
	@useConnection()
	static async run(): Promise<Array<GetQuestionDTO>> {
		const questions = await Question.find().lean();

		return questions as unknown as Array<GetQuestionDTO>;
	}
}
