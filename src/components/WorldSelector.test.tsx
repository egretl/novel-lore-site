import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { WorldSelector } from "./WorldSelector";
import type { WorldRecord } from "../lib/schemas";

const worlds: WorldRecord[] = Array.from({ length: 6 }, (_, index) => ({
  id: `world-${index + 1}`,
  title: `世界${index + 1}`,
  order: index + 1,
  theme: "jade",
  description: "",
}));

afterEach(() => {
  cleanup();
});

describe("WorldSelector", () => {
  it("renders every world as an entry link", () => {
    render(<WorldSelector worlds={worlds} />);

    expect(screen.getByRole("link", { name: /世界1/ })).toHaveAttribute(
      "href",
      "/worlds/world-1/",
    );
    expect(screen.getByRole("link", { name: /世界6/ })).toHaveAttribute(
      "href",
      "/worlds/world-6/",
    );
  });

  it("links the ornament control to world management", () => {
    render(<WorldSelector worlds={worlds} />);

    expect(screen.getByRole("link", { name: "管理世界" })).toHaveAttribute(
      "href",
      "/admin/#/collections/worlds",
    );
  });
});
