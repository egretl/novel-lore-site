import { describe, expect, it } from "vitest";
import { filterByWorld, getSectionHref, getWorldHref, sortWorlds } from "./worlds";
import type { LoreEntry, WorldRecord } from "./schemas";

const worlds: WorldRecord[] = [
  {
    id: "world-2",
    title: "世界二",
    order: 2,
    theme: "gold",
    description: "第二个世界",
  },
  {
    id: "world-1",
    title: "世界一",
    order: 1,
    theme: "jade",
    description: "第一个世界",
  },
];

const entries: LoreEntry[] = [
  {
    id: "hero",
    worldId: "world-1",
    title: "主角",
    category: "人物",
    summary: "",
    status: "draft",
    tags: [],
    collection: "characters",
  },
  {
    id: "guild",
    worldId: "world-2",
    title: "组织",
    category: "势力",
    summary: "",
    status: "draft",
    tags: [],
    collection: "factions",
  },
];

describe("world helpers", () => {
  it("sorts worlds by configured order", () => {
    expect(sortWorlds(worlds).map((world) => world.id)).toEqual(["world-1", "world-2"]);
  });

  it("builds stable world and section routes", () => {
    expect(getWorldHref("world-1")).toBe("/worlds/world-1/");
    expect(getSectionHref("world-1", "characters")).toBe("/worlds/world-1/characters/");
  });

  it("filters lore entries to one world", () => {
    expect(filterByWorld(entries, "world-1").map((entry) => entry.id)).toEqual(["hero"]);
  });
});
