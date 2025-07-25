import { AnswersRepository } from "@/repositories/mongodb/answers";
import { CreateAnswerService } from "@/services/answers";

export function makeCreateAnswer() {
	const repo = new AnswersRepository();
	return new CreateAnswerService(repo);
}
