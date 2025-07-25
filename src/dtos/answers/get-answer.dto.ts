import z from "zod";

export const GetAnswerDTO = z.object({
	_id: z.uuid(),
	text: z.string(),
	questionId: z.uuid(),
});

export type GetAnswerDTO = z.infer<typeof GetAnswerDTO>;
