import { CreateQuestionDTO } from "@/dtos/questions";
import { BadRequestError } from "@/errors";
import type { QuestionsRepositoryInterface } from "@/repositories";

export class CreateQuestionService {
	constructor(private repository: QuestionsRepositoryInterface) {}

	async run(data: CreateQuestionDTO): Promise<string> {
		const { success } = CreateQuestionDTO.safeParse(data);

		if (!success) throw new BadRequestError();

		return await this.repository.create(data);
	}
}
