import mongoose from "mongoose";
import { randomUUID } from "node:crypto";

const answerSchema = new mongoose.Schema({
  _id: { type: String, default: () => randomUUID() },
	text: { type: String, required: true },
	questionId: { type: String, required: true },
});

export type Answer = mongoose.InferSchemaType<typeof answerSchema>;
export const Answer = mongoose.models.answers || mongoose.model("answers", answerSchema);
