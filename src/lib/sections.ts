export type SectionKey =
  | "world"
  | "settings"
  | "regions"
  | "factions"
  | "characters"
  | "events"
  | "concepts"
  | "artifacts"
  | "graph";

export type SectionDefinition = {
  key: SectionKey;
  title: string;
  href: string;
  description: string;
  emptyText: string;
};

export const sections: SectionDefinition[] = [
  {
    key: "world",
    title: "世界总览",
    href: "/world/",
    description: "一句话世界观、核心矛盾、阅读顺序。",
    emptyText: "还没有世界总览内容。",
  },
  {
    key: "settings",
    title: "基本设定",
    href: "/settings/",
    description: "世界规则、力量体系、宇宙观、禁忌。",
    emptyText: "还没有基本设定内容。",
  },
  {
    key: "regions",
    title: "地域/国家",
    href: "/regions/",
    description: "地区、文化、政治、环境。",
    emptyText: "还没有地域或国家内容。",
  },
  {
    key: "factions",
    title: "势力组织",
    href: "/factions/",
    description: "目标、资源、盟友、敌人。",
    emptyText: "还没有势力组织内容。",
  },
  {
    key: "characters",
    title: "人物档案",
    href: "/characters/",
    description: "欲望、恐惧、秘密、阵营、关系。",
    emptyText: "还没有人物档案内容。",
  },
  {
    key: "events",
    title: "历史时间线",
    href: "/events/",
    description: "时代、大事件、遗留影响。",
    emptyText: "还没有历史事件内容。",
  },
  {
    key: "concepts",
    title: "术语/概念",
    href: "/concepts/",
    description: "概念、术语、传说、制度。",
    emptyText: "还没有术语或概念内容。",
  },
  {
    key: "artifacts",
    title: "物品/遗物",
    href: "/artifacts/",
    description: "道具、遗物、文献、象征物。",
    emptyText: "还没有物品或遗物内容。",
  },
  {
    key: "graph",
    title: "关系导图",
    href: "/graph/",
    description: "展示人物、势力、地点、事件、概念之间的连接。",
    emptyText: "还没有可展示的关系数据。",
  },
];

export const contentSections = sections.filter((section) => section.key !== "graph");

export function findSection(key: SectionKey) {
  return sections.find((section) => section.key === key);
}

