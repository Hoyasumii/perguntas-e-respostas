import type { AnswersRepositoryInterface } from "@/repositories";
import { CreateAnswer } from "./create-answer";
import { GetAllAnswers } from "./get-all-answers";

export class AnswersRepository implements AnswersRepositoryInterface {
	create = CreateAnswer.run;
	getAll = GetAllAnswers.run;
}
