import type { QuestionsRepositoryInterface } from "@/repositories";
import { CreateQuestion } from "./create-question";
import { GetQuestion } from "./get-question";
import { GetAllQuestions } from "./get-all-questions";

export class QuestionsRepository implements QuestionsRepositoryInterface {
	create = CreateQuestion.run;
	get = GetQuestion.run;
	getAll = GetAllQuestions.run;
}
