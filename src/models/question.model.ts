import mongoose from "mongoose";
import { randomUUID } from "node:crypto";

const questionSchema = new mongoose.Schema({
	_id: { type: String, default: () => randomUUID() },
	title: { type: String, required: true },
	description: { type: String, required: true },
});

export type Question = mongoose.InferSchemaType<typeof questionSchema>;
export const Question = mongoose.model("questions", questionSchema);
