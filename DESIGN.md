# DoctorNow AMD — Design System

## Brand & Personality
DoctorNow AMD is Hong Kong's mobile advance medical directive service — doctors visit homes to help terminally ill patients and families sign AMD documents. The brand is **warm, trusted, human-first.** Never cold, never clinical.

## Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `moss-green` | #708D81 | Primary — headings, primary brand color, footer bg |
| `terracotta` | #B2675E | Accent — CTAs, active states, highlights, WhatsApp button |
| `warm-sand-light` | #FAF6F2 | Page background (replaces white) |
| `warm-sand` | #F5EBE0 | Card surfaces, section backgrounds |
| `warm-sand-dark` | #E6D7C8 | Borders, dividers, subtle lines |
| `text-main` | #4A4036 | Body text (warm charcoal — never #000) |
| `text-muted` | #7A6F64 | Secondary text |

## Typography
- **Headlines/Body:** Quicksand (Google Fonts)
- **Chinese:** Noto Sans TC (Google Fonts)
- **Letter-spacing:** 0.02em base
- **ZH text line-height:** 1.8 (class `.zh-text-flow`)
- **Headlines:** 4xl-6xl, bold, tracking-wide
- **Body:** text-lg (18px) / text-base (16px)

## Layout Principles
- **Mobile-first, responsive** — 4-col mobile → 12-col desktop grid
- **Asymmetric layouts** — 8+4 column splits for lane cards, never equal grids
- **Generous whitespace** — section gaps 64-96px (py-24)
- **Soft blur layers** for depth instead of harsh shadows
- **Organic shapes** for images (border-radius: 60% 40% / 60% 30% etc.)
- **Left-aligned hero** content + offset image

## Key Components
| Component | Style |
|-----------|-------|
| **Nav** | Fixed glass nav, backdrop-blur(12px), warm-sand-light with 0.8 opacity |
| **Hero** | Left text + right organic-shape image, soft blur circles behind |
| **Buttons** | Pill (rounded-full), 48px height, primary=terracotta, secondary=warm-sand |
| **Trust Bar** | Horizontal icon badges, 64px rounded icon containers, warm-sand bg |
| **Lane Cards** | 32px rounded, warm-sand bg, hover: translateY(-8px) + white bg |
| **Process Steps** | Numbered timeline with connecting line, card-style steps |
| **Footer** | Moss-green bg, warm-sand text, rounded-t-[3rem], 3-column |
| **WhatsApp CTA** | Fixed bottom-right, terracotta pill, hover scale(1.05) |
| **Language Toggle** | Pill shape, top-right nav, "中/EN" |

## Interiors (Other Pages)
All interior pages must share the same **nav, footer, and floating WhatsApp CTA** from the homepage.
Page-specific content will live between `<main>...</main>`.

## Banned (Anti-Patterns)
- ❌ Pure black (#000000) — use #4A4036
- ❌ Pure white backgrounds — use #FAF6F2
- ❌ Stock photos of elderly people
- ❌ Clinical medical blues/whites
- ❌ Heavy drop shadows (use blur layers instead)
- ❌ Emojis in UI — use Material Symbols icons
- ❌ Centered hero sections — always left-aligned or split
- ❌ Equal-width card grids — always asymmetric
- ❌ AI marketing clichés: "seamless", "revolutionary", "next-gen", "elevate"
- ❌ Urgency language — no countdowns, "act now", "limited time"
- ❌ Harsh 1px borders — use tonal surface layering
