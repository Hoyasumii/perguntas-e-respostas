import { AnswersRepository } from "@/repositories/mongodb/answers";
import { GetAllAnswersService } from "@/services/answers";

export function makeGetAllAnswers() {
	const repo = new AnswersRepository();
	return new GetAllAnswersService(repo);
}
