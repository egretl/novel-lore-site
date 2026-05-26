import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { GraphCanvas } from "./GraphCanvas";

describe("GraphCanvas", () => {
  it("renders an empty graph state", () => {
    render(<GraphCanvas graph={{ nodes: [], edges: [], missingReferences: [] }} />);

    expect(screen.getByRole("region", { name: "空关系导图" })).toBeInTheDocument();
    expect(screen.getByText("关系导图暂无内容")).toBeInTheDocument();
  });

  it("renders graph nodes and edges", () => {
    render(
      <GraphCanvas
        graph={{
          nodes: [
            {
              id: "hero",
              title: "角色",
              category: "人物",
              collection: "characters",
            },
          ],
          edges: [
            {
              sourceId: "hero",
              targetId: "guild",
              type: "belongs_to",
              label: "隶属",
              strength: 3,
              description: "",
            },
          ],
          missingReferences: ["guild"],
        }}
      />,
    );

    expect(screen.getByRole("region", { name: "关系导图" })).toBeInTheDocument();
    expect(screen.getByText("角色")).toBeInTheDocument();
    expect(screen.getByText("隶属")).toBeInTheDocument();
    expect(screen.getByRole("alert")).toHaveTextContent("guild");
  });
});

