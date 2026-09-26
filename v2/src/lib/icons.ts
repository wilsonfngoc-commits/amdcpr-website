/**
 * Thin-line Phosphor-style SVG icons
 * 1.5px stroke width, round caps/joins, no fill
 * All icons are 24×24 viewBox, inherit color via currentColor
 */

export interface IconMap {
  [key: string]: string;
}

/** Build a full SVG icon string */
function icon(path: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
}

function iconP(paths: string[]): string {
  return icon(paths.join(''));
}

export const icons: IconMap = {
  verified: iconP([
    '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>',
  ]),

  gavel: iconP([
    '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>',
    '<line x1="4" y1="22" x2="20" y2="22"/>',
  ]),

  home_health: iconP([
    '<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>',
    '<path d="M12 9v4m-2-2h4"/>',
  ]),

  payments: iconP([
    '<rect x="1" y="4" width="22" height="16" rx="2"/>',
    '<line x1="1" y1="10" x2="23" y2="10"/>',
    '<circle cx="12" cy="14" r="2"/>',
  ]),

  favorite: iconP([
    '<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>',
  ]),

  calendar_month: iconP([
    '<rect x="3" y="4" width="18" height="18" rx="2"/>',
    '<line x1="16" y1="2" x2="16" y2="6"/>',
    '<line x1="8" y1="2" x2="8" y2="6"/>',
    '<line x1="3" y1="10" x2="21" y2="10"/>',
  ]),

  groups: iconP([
    '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>',
    '<circle cx="9" cy="7" r="4"/>',
    '<path d="M23 21v-2a4 4 0 00-3-3.87"/>',
    '<path d="M16 3.13a4 4 0 010 7.75"/>',
  ]),

  corporate_fare: iconP([
    '<path d="M3 21h18"/>',
    '<path d="M5 21V7l7-4 7 4v14"/>',
    '<path d="M9 21v-6h6v6"/>',
    '<path d="M9 10h.01M15 10h.01M9 14h.01M15 14h.01"/>',
  ]),

  balance: iconP([
    '<path d="M12 2v20"/>',
    '<path d="M8 2h8"/>',
    '<path d="M4 6h16"/>',
    '<path d="M6 6v4a4 4 0 004 4"/>',
    '<path d="M18 6v4a4 4 0 01-4 4"/>',
    '<path d="M6 16h12"/>',
    '<path d="M4 20h16"/>',
  ]),

  expand_more: iconP([
    '<polyline points="6 9 12 15 18 9"/>',
  ]),

  arrow_forward: iconP([
    '<line x1="5" y1="12" x2="19" y2="12"/>',
    '<polyline points="12 5 19 12 12 19"/>',
  ]),

  arrow_right: iconP([
    '<line x1="5" y1="12" x2="19" y2="12"/>',
    '<polyline points="12 5 19 12 12 19"/>',
  ]),

  check_circle: iconP([
    '<circle cx="12" cy="12" r="10"/>',
    '<polyline points="8 12 11 15 16 9"/>',
  ]),

  person_check: iconP([
    '<path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>',
    '<circle cx="8.5" cy="7" r="4"/>',
    '<polyline points="15 11 17 13 21 9"/>',
  ]),

  chat: iconP([
    '<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>',
  ]),

  stethoscope: iconP([
    '<path d="M4.8 2.3A.3.3 0 105 2"/>',
    '<path d="M2.42 9.42a1 1 0 01-.47-.82V2.5a.5.5 0 01.5-.5h.5"/>',
    '<path d="M16 2h.5a.5.5 0 01.5.5v6.08a1 1 0 01-.42.82"/>',
    '<path d="M9 22a6 6 0 006-6v-2"/>',
    '<path d="M9 2v2a6 6 0 016 6v2"/>',
    '<path d="M12 10h-2"/>',
    '<circle cx="9" cy="16" r="4"/>',
  ]),

  edit_note: iconP([
    '<path d="M12 20h9"/>',
    '<path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>',
  ]),

  home: iconP([
    '<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>',
    '<polyline points="9 22 9 12 15 12 15 22"/>',
  ]),

  timer: iconP([
    '<circle cx="12" cy="12" r="9"/>',
    '<polyline points="12 7 12 12 15 15"/>',
    '<line x1="9" y1="2" x2="15" y2="2"/>',
  ]),

  badge: iconP([
    '<path d="M4 4h16v14l-4-2-4 2-4-2-4 2V4z"/>',
    '<path d="M9 10h6"/>',
    '<path d="M9 13h4"/>',
  ]),

  clinical_notes: iconP([
    '<path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z"/>',
    '<polyline points="14 2 14 8 20 8"/>',
    '<line x1="16" y1="13" x2="8" y2="13"/>',
    '<line x1="16" y1="17" x2="8" y2="17"/>',
    '<polyline points="10 9 9 9 8 9"/>',
  ]),

  medication: iconP([
    '<path d="M10.5 4.5l9 9"/>',
    '<path d="M4.5 10.5l9 9"/>',
    '<circle cx="7" cy="7" r="3"/>',
    '<circle cx="17" cy="17" r="3"/>',
  ]),

  group: iconP([
    '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>',
    '<circle cx="9" cy="7" r="4"/>',
    '<path d="M23 21v-2a4 4 0 00-3-3.87"/>',
    '<path d="M16 3.13a4 4 0 010 7.75"/>',
  ]),

  description: iconP([
    '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>',
    '<polyline points="14 2 14 8 20 8"/>',
    '<line x1="16" y1="13" x2="8" y2="13"/>',
    '<line x1="16" y1="17" x2="8" y2="17"/>',
  ]),

  currency_exchange: iconP([
    '<circle cx="12" cy="12" r="10"/>',
    '<path d="M8 8h5a3 3 0 010 6h-2"/>',
    '<polyline points="14 14 16 16 14 18"/>',
    '<line x1="11" y1="6" x2="11" y2="8"/>',
    '<line x1="11" y1="16" x2="11" y2="18"/>',
  ]),

  location_on: iconP([
    '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>',
    '<circle cx="12" cy="10" r="3"/>',
  ]),

  assignment: iconP([
    '<path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/>',
    '<rect x="8" y="2" width="8" height="4" rx="1"/>',
    '<line x1="12" y1="11" x2="12" y2="17"/>',
  ]),

  home_heart: iconP([
    '<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>',
    '<path d="M15.5 9.5a2.5 2.5 0 00-3.5 0 2.5 2.5 0 00-3.5 3.5L12 17l3.5-4a2.5 2.5 0 000-3.5z"/>',
  ]),

  support_agent: iconP([
    '<path d="M22 12h-4l-3 9H9l-3-9H2"/>',
    '<path d="M5.1 6.1A7 7 0 0118.9 6.1"/>',
    '<path d="M8 12l2-3h4l2 3"/>',
    '<circle cx="12" cy="9" r="1"/>',
  ]),

  translate: iconP([
    '<path d="M5 8l6 6M4 14l6-6 2-3"/>',
    '<path d="M2 5h12"/>',
    '<path d="M7 2h1"/>',
    '<path d="M22 17l-3-3-3 3"/>',
    '<path d="M19 14v8"/>',
  ]),

  diversity_3: iconP([
    '<circle cx="12" cy="5" r="3"/>',
    '<path d="M5 20v-2a3 3 0 013-3h8a3 3 0 013 3v2"/>',
    '<circle cx="7" cy="8" r="2"/>',
    '<circle cx="17" cy="8" r="2"/>',
    '<line x1="12" y1="10" x2="12" y2="12"/>',
  ]),
};

/**
 * Helper to get icon SVG by name.
 * Falls back to a placeholder if icon not found.
 */
export function getIcon(name: string): string {
  return icons[name] || icon(`<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>`);
}
