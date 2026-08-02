import { zh, type I18nSchema } from './zh';
import { en } from './en';

export const dictionaries: Record<'zh' | 'en', I18nSchema> = { zh, en };

export type Locale = 'zh' | 'en';
export const defaultLocale: Locale = 'zh';

export function pickDict(locale: Locale | undefined): I18nSchema {
  return dictionaries[locale ?? defaultLocale];
}