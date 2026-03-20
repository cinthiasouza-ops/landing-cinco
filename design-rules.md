# Design System Rules — CINCO Landing Page

Extracted from Figma file: `Landing-page_CINCO_Lovable` (node `235:104`)

---

## Typography

**Font Families**
- Primary: `Raleway` (used across all text elements)
- Secondary: `Roboto` (used only in the iPhone mockup label)

**Font Weights**
| Weight | Name |
|--------|------|
| 400 | Regular |
| 500 | Medium |
| 600 | SemiBold |
| 700 | Bold |
| 800 | ExtraBold |

**Type Scale**

| Role | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|--------|-------------|----------------|-------|
| Hero XL | 45px | 800 | 1.174 | — | B2C emotional headline |
| Hero H1 | 40px | 700 | 1.1 | — | Main hero heading |
| Hero H1 Alt | 40px | 700 | 1.3 | — | Use-casa section heading |
| Section Heading | 30px | 700 | 1.133 | — | Section titles |
| Section Heading Alt | 30px | 700 | 1.2 | — | FAQ heading |
| Brand Accent | 30px | 800 | 0.933 | — | CINCO Care subheading |
| Card Title Large | 24px | 700 | 1.3 | — | Organization card titles |
| CTA Button | 18px | 700 | 1.222 | — | All CTA buttons ("Experimente agora") |
| Card Title | 18px | 600 | 1.5 | -1.1% | Card body headers |
| Plan Name | 18px | 600 | 1.3 | — | Plan/kit names |
| Partners Label | 18px | 500 | 2.111 | — | "PARCEIROS" label |
| Body Large | 20px | 500 | 1.4 | — | Hero subtitle, kit descriptions |
| Body Large Alt | 20px | 500 | 1.174 | — | B2C subtitle |
| Body Large Bold | 20px | 700 | 1.5 | — | FAQ questions |
| Body Large Accent | 20px | 700 | 1.3 | — | Feature card titles |
| Body | 16px | 500 | 1.25 | — | Section subtitles, general body |
| Body SemiBold | 16px | 600 | 1.25 | — | Device/kit item list |
| Body Bold | 16px | 700 | 1.25 | — | Nav links, footer links |
| Nav Regular | 16px | 400 | 1.25 | — | Navigation menu items |
| Label Uppercase | 16px | 600 | 1.25 | 18.75% | "BEM-ESTAR CARDIOMETABÓLICO" badge (`text-transform: uppercase`) |
| Body Small | 14px | 500 | 1.286 | — | Card descriptions |
| Body Small Bold | 14px | 700 | 1.286 | — | "Contém" labels in plan cards |
| Body Small Regular | 14px | 400 | 1.286 | — | Plan card subtitles |
| Badge Launch | 12px | 700 | 1.3 | 25% | "LANÇAMENTO" badge |
| Badge Soon | 12px | 700 | 1.3 | 41.67% | "EM BREVE" badge |
| Caption | 12px | 500 | 1.333 | — | Legal disclaimer, "Powered by", privacy links |

---

## Color Palette

### Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#052EB1` | Primary brand blue (nav background, footer, icon fills) |
| `cta` | `#305BE5` | CTA button background, accent blue |
| `accent-dark` | `#165B83` | Dark blue accent (used in icon fills) |
| `background-light` | `#F2F5FD` | Light blue-tinted background (page bg, card inner panels) |
| `blue-light` | `#E6ECFF` | Light blue icon backgrounds |

### Neutral / Gray Scale

| Token | Hex | Usage |
|-------|-----|-------|
| `/cinza/01` | `#33303E` | Primary dark text |
| `/cinza/02` | `#4E4B59` | Secondary dark text |
| `/cinza/03` | `#5F5C6B` | Body text, descriptions |
| `/cinza/09` | `#F1F0F5` | Border color, card dividers |
| `white` | `#FFFFFF` | Backgrounds, icon fills on dark |

### Utility Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `divider` | `#BACEDA` | FAQ dividers, parceiros section border |
| `overlay-dark` | `#111111` | Dark overlay on mockup |
| `near-white` | `#FAFAFA` | Subtle white-tinted text |
| `black` | `#000000` | Pure black (used in mockup elements) |
| `gray-neutral` | `#D9D9D9` | Neutral gray placeholder |

### Gradients

| Name | Value | Usage |
|------|-------|-------|
| Hero gradient | `linear-gradient(133deg, rgba(5, 46, 177, 1) 0%, rgba(6, 53, 202, 1) 100%)` | Hero section background |
| Plans gradient | `linear-gradient(-77deg, rgba(2, 62, 254, 1) 0%, rgba(5, 46, 177, 1) 54%)` | Planos section background |
| B2C dark gradient | `linear-gradient(133deg, rgba(1, 13, 50, 1) 0%, rgba(3, 34, 144, 0.5) 100%)` | B2C section (over image) |
| B2C overlay | `linear-gradient(90deg, rgba(3, 3, 3, 1) 0%, rgba(2, 19, 75, 0) 40%)` | B2C image directional overlay |

---

## Spacing & Layout

### Canvas

| Property | Value |
|----------|-------|
| Page width | `1440px` |
| Max content width | `1216px` |
| Section horizontal padding | `112px` each side |

### Spacing Scale (Gap values in use)

| Value | Common Usage |
|-------|-------------|
| `4px` | Tight inner padding |
| `8px` | Small gaps, inner card padding |
| `10px` | Small element gaps |
| `12px` | Button inner gap (icon + label) |
| `16px` | Default gap, card inner padding |
| `18px` | Medium gaps |
| `20px` | Card inner spacing |
| `24px` | Component separation |
| `32px` | Card grid gap |
| `40px` | Section inner gaps |
| `50px` | Nav link gap |
| `56px` | Medium section spacing |
| `72px` | Section vertical padding |
| `100px` | Nav logo-to-links gap |

### Section Padding Patterns

| Pattern | Context |
|---------|---------|
| `72px 112px` | Standard section (itens-kit, planos, footer links) |
| `40px 112px` | Compact section (parceiros) |
| `100px 112px` | Hero section |
| `72px 0px 72px 112px` | Organizations section (no right padding, image bleeds) |
| `20px 112px` | Navbar |
| `16px 40px` | Pill button padding |
| `16px` | Square buttons, card containers |
| `20px` | Feature cards inner padding |

### Layout Modes

- **Row layouts**: Navbar, button groups, card rows, organization grid
- **Column layouts**: Section content stacks, card content, FAQ items
- Flexbox `justify-content: space-between` used in navbar
- Flexbox `justify-content: center` used in CTA button rows
- Flexbox `align-items: center` used throughout

---

## Border & Radius

### Border Radius

| Value | Usage |
|-------|-------|
| `8px` | Plan cards, FAQ items, hero badge pill |
| `16px` | Feature cards (sensores, IA, insights), card panels |
| `20px` | Organization card photos |
| `40px` | Organization cards (large radius), footer container |
| `100px` | Buttons (fully rounded pills), nav CTA |
| `0px 100px 100px 0px` | CINCO Care "Kit de saúde" badge (half-pill, right side only) |

### Borders / Strokes

| Token | Color | Width | Usage |
|-------|-------|-------|-------|
| Plan selected | `#052EB1` | `2px` | Active/featured plan card border |
| FAQ divider | `#BACEDA` | `2px` | Line above FAQ items |
| White border | `#FFFFFF` | `2px` | White outlines on dark backgrounds |
| Footer divider | `#FFFFFF` | `1px` | Logo separator line in footer |
| Org card | `#F1F0F5` | `1px` | Subtle border on organization cards |
| Parceiros | `#F2F5FD` | `2px` | Partner section border |
| Primary fine | `#052EB1` | `~0.7px` | Fine detail borders |
| Primary heavy | `#052EB1` | `3px` | Emphasized borders |

---

## Shadows & Elevation

### Box Shadows

| Name | Value | Usage |
|------|-------|-------|
| `Cards` | `0px 4px 39px 0px rgba(0, 45, 181, 0.08)` | Feature cards (sensores, IA, insights), organization cards |

### Text Shadows

| Name | Value | Usage |
|------|-------|-------|
| `botão shadow` | `0px 4px 6px 2px rgba(5, 22, 112, 0.25)` | Hero H1 and subtitle text on gradient backgrounds |

---

## Iconography

**Icon Library:** Custom `Outline` set (used consistently at 24×24px)

| Icon Name | Usage |
|-----------|-------|
| `Outline/building-skyscraper` | "Para organizações" nav button |
| `Outline/brand-whatsapp` | WhatsApp CTA buttons |
| `Outline/chevron-right` | Navigation/link indicators |
| `Outline/plus` | FAQ accordion expand icon |
| `Outline/scale-outline` | Balança de bioimpedância item |

**Default Icon Size:** `24px × 24px`

**React Icons (used in mockup only):**
- `react-icons/bs/BsCamera` — iPhone mockup context

---

## Component Tokens

### Named Color Variables (Figma tokens)

| Variable Name | Value |
|---------------|-------|
| `/cinza/01` | `#33303E` |
| `/cinza/02` | `#4E4B59` |
| `/cinza/03` | `#5F5C6B` |
| `/cinza/09` | `#F1F0F5` |
| `azul escuro` | `#305BE5` |
| `Azul Escuro` | `#165B83` |

### Named Style Variables (Figma effects)

| Variable Name | Value |
|---------------|-------|
| `Cards` | `box-shadow: 0px 4px 39px 0px rgba(0, 45, 181, 0.08)` |
| `botão shadow` | `text-shadow: 0px 4px 6px 2px rgba(5, 22, 112, 0.25)` |

### Button Component Patterns

| Variant | Background | Text Color | Border Radius | Padding | Font |
|---------|-----------|------------|---------------|---------|------|
| Primary (filled) | `#305BE5` | `#FFFFFF` | `100px` | `16px` | Raleway 700 18px |
| Primary dark | `#052EB1` | `#FFFFFF` | `100px` | `16px` | Raleway 700 16px |
| Outline nav | transparent | `#FFFFFF` | `100px` | `16px` | Raleway 700 16px |
| WhatsApp CTA | `#052EB1` | `#FFFFFF` | `100px` | `16px 40px` | Raleway 700 18px (with WhatsApp icon) |

### Badge/Pill Component Patterns

| Variant | Background | Text Color | Border Radius | Font |
|---------|-----------|------------|---------------|------|
| Launch badge | `#052EB1` | `#FFFFFF` | `100px` | Raleway 700 12px, ls 25% |
| Coming soon badge | `#305BE5` | `#FFFFFF` | `100px` | Raleway 700 12px, ls 41.67% |
| Category tag | `#305BE5` | `#FFFFFF` | `8px` | Raleway 600 16px, uppercase, ls 18.75% |
