import type { uuid } from "@/dtos";
import type { GetAnswerDTO } from "@/dtos/answers";
import { Answer } from "@/models";
import { useConnection } from "@/utils";

export class GetAllAnswers {
	@useConnection()
	static async run(id: uuid): Promise<Array<GetAnswerDTO>> {
		const questions = await Answer.find({ questionId: id }).lean();

		return questions as unknown as Array<GetAnswerDTO>;
	}
}
