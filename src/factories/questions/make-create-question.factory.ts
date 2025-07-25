import { QuestionsRepository } from "@/repositories/mongodb/questions";
import { CreateQuestionService } from "@/services/questions";

export function makeCreateQuestion() {
	const repo = new QuestionsRepository();
	return new CreateQuestionService(repo);
}
