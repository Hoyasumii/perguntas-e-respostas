import type { CreateAnswerDTO } from "@/dtos/answers";
import { Answer } from "@/models";
import { useConnection } from "@/utils";

export class CreateAnswer {
	@useConnection()
	static async run(data: CreateAnswerDTO) {
		const newAnswer = await Answer.create(data);

		return newAnswer._id;
	}
}
