import { describe, expect, it } from "vitest";
import { buildGraph } from "./graph";
import type { LoreEntry, RelationRecord } from "./schemas";

const entries: LoreEntry[] = [
  {
    id: "hero",
    worldId: "world-1",
    title: "角色",
    category: "人物",
    summary: "",
    status: "draft",
    tags: [],
    collection: "characters",
  },
  {
    id: "guild",
    worldId: "world-1",
    title: "组织",
    category: "势力",
    summary: "",
    status: "draft",
    tags: [],
    collection: "factions",
  },
];

describe("buildGraph", () => {
  it("builds graph nodes and edges from entries and relations", () => {
    const relations: RelationRecord[] = [
      {
        worldId: "world-1",
        sourceId: "hero",
        targetId: "guild",
        type: "belongs_to",
        label: "隶属",
        strength: 3,
        description: "角色隶属于组织。",
      },
    ];

    const graph = buildGraph(entries, relations);

    expect(graph.nodes).toHaveLength(2);
    expect(graph.edges).toHaveLength(1);
    expect(graph.missingReferences).toEqual([]);
    expect(graph.edges[0]).toMatchObject({
      sourceId: "hero",
      targetId: "guild",
      label: "隶属",
    });
  });

  it("reports missing relation references", () => {
    const graph = buildGraph(entries, [
      {
        worldId: "world-1",
        sourceId: "hero",
        targetId: "unknown",
        type: "seeks",
        label: "追求",
        strength: 1,
        description: "",
      },
    ]);

    expect(graph.missingReferences).toEqual(["unknown"]);
  });
});
