import type { SectionDefinition } from "../lib/sections";

type SectionCardProps = {
  section: SectionDefinition;
  count?: number;
};

export function SectionCard({ section, count = 0 }: SectionCardProps) {
  return (
    <a className="section-card" href={section.href}>
      <span className="section-card__count">{count}</span>
      <h2>{section.title}</h2>
      <p>{section.description}</p>
    </a>
  );
}

