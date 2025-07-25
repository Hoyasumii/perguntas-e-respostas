import type { uuid } from "@/dtos";
import type { CreateQuestionDTO, GetQuestionDTO } from "@/dtos/questions";

export interface QuestionsRepositoryInterface {
	create(data: CreateQuestionDTO): Promise<string>;
	get(id: uuid): Promise<GetQuestionDTO | null>;
	getAll(): Promise<Array<GetQuestionDTO>>;
}
