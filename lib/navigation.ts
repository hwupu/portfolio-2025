import type { LocaleTuple } from "@/types/locale";

export interface Link {
  href: string;
  title: string;
}

export const primary: LocaleTuple<Link[]> = {
  en: [
    { title: "Story", href: "/" },
    { title: "CV", href: "/cv" },
    { title: "Blog", href: "/blog" },
  ],
  zh: [
    { title: "故事", href: "/" },
    { title: "履歷", href: "/cv" },
    { title: "部落格", href: "/blog" },
  ],
};

export const secondary: LocaleTuple<Link[]> = {
  en: [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "AI Disclosure", href: "/disclosure" },
    { title: "Affiliations", href: "/affiliation" },
  ],
  zh: [
    { title: "隱私權政策", href: "/privacy" },
    { title: "AI 使用聲明", href: "/disclosure" },
    { title: "Affiliations", href: "/affiliation" },
  ],
};
