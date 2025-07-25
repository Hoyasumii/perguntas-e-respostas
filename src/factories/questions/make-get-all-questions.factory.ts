import { QuestionsRepository } from "@/repositories/mongodb/questions";
import { GetAllQuestionsService } from "@/services/questions";

export function makeGetAllQuestions() {
	const repo = new QuestionsRepository();
	return new GetAllQuestionsService(repo);
}
