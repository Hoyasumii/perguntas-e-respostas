import type { CreateQuestionDTO } from "@/dtos/questions";
import { Question } from "@/models";
import { useConnection } from "@/utils";

export class CreateQuestion {
	@useConnection()
	static async run(data: CreateQuestionDTO) {
		const newQuestion = await Question.create(data);

		return newQuestion._id;
	}
}
