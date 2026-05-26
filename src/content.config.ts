import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { loreEntrySchema, relationSchema } from "./lib/schemas";

const loreCollection = (base: string) =>
  defineCollection({
    loader: glob({ base, pattern: "**/*.{md,mdx}" }),
    schema: loreEntrySchema,
  });

export const collections = {
  world: loreCollection("./src/content/world"),
  settings: loreCollection("./src/content/settings"),
  regions: loreCollection("./src/content/regions"),
  factions: loreCollection("./src/content/factions"),
  characters: loreCollection("./src/content/characters"),
  events: loreCollection("./src/content/events"),
  concepts: loreCollection("./src/content/concepts"),
  artifacts: loreCollection("./src/content/artifacts"),
  relations: defineCollection({
    loader: glob({ base: "./src/content/relations", pattern: "**/*.{json,yaml,yml}" }),
    schema: relationSchema,
  }),
};

