import type { GetQuestionDTO } from "@/dtos/questions";
import type { QuestionsRepositoryInterface } from "@/repositories";

export class GetAllQuestionsService {
	constructor(private repository: QuestionsRepositoryInterface) {}

	async run(): Promise<Array<GetQuestionDTO>> {
		return (await this.repository.getAll()).reverse();
	}
}
