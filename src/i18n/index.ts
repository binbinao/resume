import { zh, type I18nSchema } from './zh';
import { en } from './en';
import { profiles, type Profile } from './profiles';

export const dictionaries: Record<'zh' | 'en', I18nSchema> = { zh, en };

export type Locale = 'zh' | 'en';
export const defaultLocale: Locale = 'zh';

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

/** Deep-merge a base object with a (partial) override. Arrays and scalars from the
 *  override replace the base entirely; nested plain objects are merged recursively. */
function deepMerge<T>(base: T, override: unknown): T {
  if (override === undefined || override === null) return base;
  if (Array.isArray(override) || !isPlainObject(override)) return override as T;
  const result: Record<string, unknown> = isPlainObject(base)
    ? { ...(base as Record<string, unknown>) }
    : {};
  for (const key of Object.keys(override)) {
    const ov = (override as Record<string, unknown>)[key];
    const bs = isPlainObject(base) ? (base as Record<string, unknown>)[key] : undefined;
    if (isPlainObject(ov) && !Array.isArray(ov) && isPlainObject(bs)) {
      result[key] = deepMerge(bs, ov);
    } else {
      result[key] = ov;
    }
  }
  return result as T;
}

/**
 * Resolve the i18n dictionary for a locale, with an optional CIO/CAIO content
 * profile layered on top. Profiles are authored in zh copy only, so they apply
 * to the zh locale; requesting a profile with `en` simply returns the base dict.
 */
export function pickDict(locale: Locale | undefined, profile?: 'cio' | 'caio'): I18nSchema {
  const base = dictionaries[locale ?? defaultLocale];
  if (!profile || locale === 'en' || !profiles[profile]) return base;
  return deepMerge(base, profiles[profile] as Profile);
}