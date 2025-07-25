import z from "zod";

export const GetQuestionDTO = z.object({
	_id: z.uuid(),
	title: z.string(),
	description: z.string(),
});

export type GetQuestionDTO = z.infer<typeof GetQuestionDTO>;
