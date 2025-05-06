import type { LocaleTuple } from "@/types/locale";
import type { Experience, Education } from "@/types/cv";

import { experiences as experiencesEn, education as educationEn } from "./en";
import { experiences as experiencesZh, education as educationZh } from "./zh";

export const experiences: LocaleTuple<Experience[]> = {
  en: experiencesEn,
  zh: experiencesZh,
};

export const education: LocaleTuple<Education[]> = {
  en: educationEn,
  zh: educationZh,
};
