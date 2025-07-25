import { QuestionsRepository } from "@/repositories/mongodb/questions";
import { GetQuestionService } from "@/services/questions";

export function makeGetQuestion() {
	const repo = new QuestionsRepository();
	return new GetQuestionService(repo);
}
