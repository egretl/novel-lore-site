import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { sections } from "../lib/sections";
import { SectionCard } from "./SectionCard";

describe("SectionCard", () => {
  it("renders the section title, description, and count", () => {
    render(<SectionCard section={sections[0]} count={0} />);

    expect(screen.getByRole("link", { name: /世界总览/ })).toHaveAttribute("href", "/world/");
    expect(screen.getByText("一句话世界观、核心矛盾、阅读顺序。")).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
  });
});

