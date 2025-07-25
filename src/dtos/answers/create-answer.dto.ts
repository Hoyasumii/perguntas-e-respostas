import z from "zod";

export const CreateAnswerDTO = z.object({
	text: z.string(),
	questionId: z.uuid(),
});

export type CreateAnswerDTO = z.infer<typeof CreateAnswerDTO>;
