import type { WorldRecord } from "../lib/schemas";
import { getWorldHref, sortWorlds, WORLD_MANAGEMENT_HREF } from "../lib/worlds";
import type { CSSProperties } from "react";

type WorldSelectorProps = {
  worlds: WorldRecord[];
};

export function WorldSelector({ worlds }: WorldSelectorProps) {
  const sortedWorlds = sortWorlds(worlds);
  const gridStyle = { "--world-count": sortedWorlds.length } as CSSProperties;

  return (
    <section className="world-gate" aria-label="世界选择">
      <div className="world-gate__frame">
        <div className="world-gate__sky" aria-hidden="true">
          <span className="world-gate__sun" />
          <span className="world-gate__birds">⌁ ⌁ ⌁</span>
        </div>
        <div className="world-gate__grid" style={gridStyle}>
          {sortedWorlds.map((world) => (
            <a
              className={`world-entry world-entry--${world.theme}`}
              href={getWorldHref(world.id)}
              key={world.id}
            >
              <span>{world.title}</span>
              <small>{world.description}</small>
            </a>
          ))}
        </div>
        <a className="world-gate__manage" href={WORLD_MANAGEMENT_HREF} aria-label="管理世界">
          <span aria-hidden="true">✥</span>
        </a>
      </div>
    </section>
  );
}
