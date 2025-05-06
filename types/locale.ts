export interface LocaleTuple<T> {
  en: T;
  zh: T;
}

export type Locales = keyof LocaleTuple<void>;
