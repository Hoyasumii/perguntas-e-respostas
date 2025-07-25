import z from "zod";

export const CreateQuestionDTO = z.object({
	title: z.string(),
	description: z.string(),
});

export type CreateQuestionDTO = z.infer<typeof CreateQuestionDTO>;
