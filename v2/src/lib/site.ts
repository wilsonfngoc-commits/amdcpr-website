/** Canonical contact / CTA helpers for DoctorNow AMD */

export const WA_NUMBER = '85263324599';
export const WA_DISPLAY = '+852 6332 4599';
export const EMAIL = 'info@doctornow.hk';

/** GA4 Measurement ID */
export const GA_MEASUREMENT_ID = 'G-H6QSG5KYZ3';

/**
 * WhatsApp shortcode registry.
 * Map from shortcode to human-readable source description.
 * Updated in brandops Phase B0.
 */
export const WA_SHORTCODES: Record<string, { en: string; zh: string }> = {
  'AMD-S01': { en: 'I want to learn about AMD', zh: '我想了解預設醫療指示' },
  'AMD-S02': { en: 'I want to book a home visit', zh: '我想預約上門簽署AMD' },
  'AMD-S03': { en: 'I want to learn about AMD services', zh: '我想了解AMD服務' },
  'AMD-S04': { en: 'I want to learn about AMD', zh: '我想了解預設醫療指示' },
  'AMD-S05': { en: 'I want to know AMD pricing', zh: '我想了解AMD收費' },
  'AMD-S06': { en: 'I have a question about AMD', zh: '我想查詢AMD問題' },
  'AMD-S07': { en: 'I want to learn about this topic', zh: '我想了解這個主題' },
  'AMD-S08': { en: 'I want to contact DoctorNow AMD', zh: '我想聯絡老友宅醫AMD' },
  'AMD-S09': { en: 'I want to learn the AMD process', zh: '我想了解AMD流程' },
  'AMD-S10': { en: 'I want to know about DoctorNow AMD', zh: '我想了解老友宅醫AMD' },
 'AMD-S11': { en: 'I want to inquire about DNACPR form service', zh: '我想查詢不急救紙服務收費' },
};

export function waUrl(text: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

/** Build WA URL with shortcode tracking prefix + optional custom text (falls back to registry text) */
export function waUrlShort(shortcode: string, lang: 'en' | 'zh', customText?: string): string {
  const entry = WA_SHORTCODES[shortcode];
  const text = customText || (entry ? entry[lang] : (lang === 'zh' ? '我想了解預設醫療指示' : 'I want to learn about AMD'));
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('[' + shortcode + '] ' + text)}`;
}

/** Build WA URL with shortcode tracking prefix */
export function waUrlWithShortcode(shortcode: string, lang: 'en' | 'zh'): string {
  const entry = WA_SHORTCODES[shortcode];
  const text = entry ? entry[lang] : (lang === 'zh' ? '我想了解預設醫療指示' : 'I want to learn about AMD');
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('[' + shortcode + '] ' + text)}`;
}
