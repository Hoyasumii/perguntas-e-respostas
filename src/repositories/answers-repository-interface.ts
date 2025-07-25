import type { uuid } from "@/dtos";
import type { CreateAnswerDTO, GetAnswerDTO } from "@/dtos/answers";

export interface AnswersRepositoryInterface {
	create(data: CreateAnswerDTO): Promise<uuid>;
	getAll(id: uuid): Promise<Array<GetAnswerDTO>>;
}
