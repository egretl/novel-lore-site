import { z } from "zod";

export const entryStatusSchema = z.enum(["draft", "active", "archived"]);

export const loreEntrySchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  category: z.string().min(1),
  summary: z.string().default(""),
  status: entryStatusSchema.default("draft"),
  tags: z.array(z.string()).default([]),
  image: z.string().optional(),
});

export const relationTypeSchema = z.enum([
  "belongs_to",
  "opposes",
  "controls",
  "located_in",
  "caused_by",
  "knows",
  "seeks",
  "related_to",
]);

export const relationSchema = z.object({
  sourceId: z.string().min(1),
  targetId: z.string().min(1),
  type: relationTypeSchema.default("related_to"),
  label: z.string().default("相关"),
  strength: z.number().min(1).max(5).default(1),
  description: z.string().default(""),
});

export type LoreEntry = z.infer<typeof loreEntrySchema> & {
  collection: string;
};

export type RelationRecord = z.infer<typeof relationSchema>;
