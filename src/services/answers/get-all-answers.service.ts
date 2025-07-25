import type { uuid } from "@/dtos";
import type { GetAnswerDTO } from "@/dtos/answers";
import type { AnswersRepositoryInterface } from "@/repositories";

export class GetAllAnswersService {
	constructor(private repository: AnswersRepositoryInterface) {}

	async run(id: uuid): Promise<Array<GetAnswerDTO>> {
		return await this.repository.getAll(id);
	}
}
