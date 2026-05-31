import type { GraphBuildResult } from "../lib/graph";

type GraphCanvasProps = {
  graph: GraphBuildResult;
};

export function GraphCanvas({ graph }: GraphCanvasProps) {
  if (graph.nodes.length === 0) {
    return (
      <section className="empty-panel" aria-label="空关系导图">
        <h2>关系导图暂无内容</h2>
        <p>添加人物、势力、地点、事件和关系后，这里会显示它们之间的连接。</p>
      </section>
    );
  }

  return (
    <section className="graph-panel" aria-label="关系导图">
      <div className="graph-panel__nodes">
        {graph.nodes.map((node) => (
          <article className="graph-node" key={node.id}>
            <span>{node.collection}</span>
            <strong>{node.title}</strong>
            <small>{node.category}</small>
          </article>
        ))}
      </div>
      <div className="graph-panel__edges">
        <h2>关系</h2>
        {graph.edges.length === 0 ? (
          <p>已有节点，但尚未添加关系。</p>
        ) : (
          <ul>
            {graph.edges.map((edge) => (
              <li key={`${edge.sourceId}-${edge.type}-${edge.targetId}`}>
                <strong>{edge.label}</strong>
                <span>
                  {edge.sourceId} → {edge.targetId}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {graph.missingReferences.length > 0 && (
        <div className="warning-panel" role="alert">
          未找到引用：{graph.missingReferences.join(", ")}
        </div>
      )}
    </section>
  );
}
