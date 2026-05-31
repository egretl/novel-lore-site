import type { LoreEntry, RelationRecord, WorldRecord } from "./schemas";
import type { SectionKey } from "./sections";

export const DEFAULT_WORLD_ID = "world-1";
export const WORLD_MANAGEMENT_HREF = "/admin/#/collections/worlds";

export function sortWorlds(worlds: WorldRecord[]) {
  return [...worlds].sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

export function getWorldHref(worldId: string) {
  return `/worlds/${worldId}/`;
}

export function getSectionHref(worldId: string, sectionKey: SectionKey) {
  return `/worlds/${worldId}/${sectionKey}/`;
}

export function filterByWorld<T extends { worldId: string }>(items: T[], worldId: string) {
  return items.filter((item) => item.worldId === worldId);
}

export function filterLoreByWorld(entries: LoreEntry[], worldId: string) {
  return filterByWorld(entries, worldId);
}

export function filterRelationsByWorld(relations: RelationRecord[], worldId: string) {
  return filterByWorld(relations, worldId);
}
