import { describe, expect, it } from "vitest";
import { loreEntrySchema, relationSchema, worldSchema } from "./schemas";

describe("worldSchema", () => {
  it("accepts a minimal world", () => {
    const result = worldSchema.parse({
      id: "world-1",
      title: "世界一",
    });

    expect(result).toMatchObject({
      id: "world-1",
      title: "世界一",
      order: 1,
      theme: "jade",
      description: "",
    });
  });
});

describe("loreEntrySchema", () => {
  it("accepts a minimal lore entry", () => {
    const result = loreEntrySchema.parse({
      id: "entry-id",
      title: "标题",
      category: "分类",
    });

    expect(result).toMatchObject({
      id: "entry-id",
      worldId: "world-1",
      title: "标题",
      category: "分类",
      summary: "",
      status: "draft",
      tags: [],
    });
  });

  it("rejects entries without an id", () => {
    expect(() =>
      loreEntrySchema.parse({
        title: "标题",
        category: "分类",
      }),
    ).toThrow();
  });
});

describe("relationSchema", () => {
  it("accepts a minimal relation record", () => {
    const result = relationSchema.parse({
      sourceId: "a",
      targetId: "b",
    });

    expect(result).toMatchObject({
      worldId: "world-1",
      sourceId: "a",
      targetId: "b",
      type: "related_to",
      label: "相关",
      strength: 1,
      description: "",
    });
  });
});
