import zh from '../i18n/zh.json';
import en from '../i18n/en.json';

export type Lang = 'zh' | 'en';

const catalogs = { zh, en } as const;

export function isLang(value: string | undefined): value is Lang {
  return value === 'zh' || value === 'en';
}

export function resolveLang(value: string | undefined): Lang {
  return isLang(value) ? value : 'zh';
}

export function ui(lang: string | undefined) {
  return catalogs[resolveLang(lang)];
}
