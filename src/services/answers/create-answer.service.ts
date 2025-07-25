import { CreateAnswerDTO } from "@/dtos/answers";
import { BadRequestError } from "@/errors";
import type { AnswersRepositoryInterface } from "@/repositories";

export class CreateAnswerService {
	constructor(private repository: AnswersRepositoryInterface) {}

	async run(data: CreateAnswerDTO): Promise<string> {
		const { success } = CreateAnswerDTO.safeParse(data);

		if (!success) throw new BadRequestError();

		return await this.repository.create(data);
	}
}
