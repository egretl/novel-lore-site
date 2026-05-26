import type { LoreEntry, RelationRecord } from "./schemas";

export type GraphNode = {
  id: string;
  title: string;
  category: string;
  collection: string;
};

export type GraphEdge = {
  sourceId: string;
  targetId: string;
  type: string;
  label: string;
  strength: number;
  description: string;
};

export type GraphBuildResult = {
  nodes: GraphNode[];
  edges: GraphEdge[];
  missingReferences: string[];
};

export function buildGraph(entries: LoreEntry[], relations: RelationRecord[]): GraphBuildResult {
  const nodes = entries.map((entry) => ({
    id: entry.id,
    title: entry.title,
    category: entry.category,
    collection: entry.collection,
  }));

  const knownIds = new Set(nodes.map((node) => node.id));
  const missingReferences = new Set<string>();

  const edges = relations.map((relation) => {
    if (!knownIds.has(relation.sourceId)) {
      missingReferences.add(relation.sourceId);
    }

    if (!knownIds.has(relation.targetId)) {
      missingReferences.add(relation.targetId);
    }

    return {
      sourceId: relation.sourceId,
      targetId: relation.targetId,
      type: relation.type,
      label: relation.label,
      strength: relation.strength,
      description: relation.description,
    };
  });

  return {
    nodes,
    edges,
    missingReferences: [...missingReferences].sort(),
  };
}

