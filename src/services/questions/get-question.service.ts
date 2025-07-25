import { uuid } from "@/dtos";
import type { GetQuestionDTO } from "@/dtos/questions";
import { BadRequestError, ResourceNotFoundError } from "@/errors";
import type { QuestionsRepositoryInterface } from "@/repositories";

export class GetQuestionService {
	constructor(private repository: QuestionsRepositoryInterface) {}

	async run(id: uuid): Promise<GetQuestionDTO> {
		const { success } = uuid.safeParse(id);

		if (!success) throw new BadRequestError();

		const targetQuestion = await this.repository.get(id);

		if (!targetQuestion) throw new ResourceNotFoundError();

		return targetQuestion;
	}
}
