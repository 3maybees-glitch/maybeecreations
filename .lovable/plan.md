# Four Realms: Faith · Freedom · Fans · Future

Restructure the site around the four pillars of Maybee Creations. The landing page becomes a launchpad; each category gets its own page with a shared layout and a unique accent color + hero art.

## 1. Landing page (`/`)

Keep current `Navigation`, `Hero`, and `Footer`. Replace the existing `WorldMapsShowcase` section with:

- A short intro: "Creative apps, visual maps, and digital learning tools for **Faith, Freedom, Fans, and the Future.**"
- A 2×2 grid of 4 large category cards:
  - **Faith** — Bible-rooted apps, maps, and lessons. → `/faith`
  - **Freedom** — Tools that celebrate liberty, civics, and conservative values. → `/freedom`
  - **Fans** — Apps built for sports fans and the people who live the game. → `/fans`
  - **Future** — AI fantasy world maps + tutorials to learn the AI era. → `/future`
- Each card: category accent color, icon/hero thumbnail, 1‑line tagline, item count ("2 apps · 1 map" etc.), hover lift, link to the page.

Remove `WorldMapsShowcase` from the landing page (it moves to `/future`).

## 2. Four category pages

Create `src/pages/Faith.tsx`, `Freedom.tsx`, `Fans.tsx`, `Future.tsx`. All share a new `CategoryPageLayout` component:

```text
[Navigation]
[CategoryHero]   ← accent color band, big title, intro paragraph, hero art
[AppsSection]    ← grid of AppCard (existing component, reused)
[MapsSection]    ← grid of map cards (RealmCard pattern from WorldMapsShowcase)
[CTA strip]      ← link to Payhip / App Store as relevant
[Footer]
```

Sections render only when they have content. Each page passes its own data + accent.

### Page contents (real content where it exists)

- **Faith** (accent: warm gold on parchment)
  - Apps: **Jesus Wept** (existing, links to `/jesus-wept`)
  - Maps: Bible Fantasy World Maps — "Coming soon" placeholder card
  - Lessons: lesson-plans teaser card — "Coming soon"

- **Freedom** (accent: deep navy + red)
  - Intro about freedom-conservative apps
  - Apps grid: "Coming soon" placeholder cards (2–3 styled tiles)

- **Fans** (accent: vibrant orange / stadium energy)
  - Intro about fan-sports apps
  - Apps grid: "Coming soon" placeholder cards

- **Future** (accent: current fantasy-map parchment + ink)
  - Apps: **Intellicity** (existing, links to `/intellicity`), **Snackers** (pending)
  - Maps: the existing 8 AI realms (move `WorldMapsShowcase`'s realm data + `RealmCard` here, including the "What's Included?" block)

Snackers stays under Future (AI-adjacent, virtual dining). If you'd rather move it elsewhere, easy swap later.

## 3. Navigation

Replace the current "Realms" link with a single **Explore** dropdown (shadcn `DropdownMenu` or `NavigationMenu`) containing:

- Faith → `/faith`
- Freedom → `/freedom`
- Fans → `/fans`
- Future → `/future`

Keep the **Shop** link (Payhip) as-is. Mobile: dropdown collapses into a simple inline list under the logo.

## 4. Shared design system

Add 4 category accent tokens to `src/index.css` and `tailwind.config.ts` (HSL only):

- `--faith` (warm gold)
- `--freedom` (deep navy with red highlight)
- `--fans` (energetic orange)
- `--future` (existing ink/parchment accent)

Each page sets its accent via a CSS variable on the layout wrapper so reusable components (hero band, section headers, buttons) pick it up without per-page Tailwind classes. Keeps brand red/blue as the global primary/secondary; category accents are layered on top.

## 5. Routes

Add to `src/App.tsx`:

```text
/faith    → Faith
/freedom  → Freedom
/fans     → Fans
/future   → Future
```

Existing product routes (`/jesus-wept`, `/intellicity`, `/snackers`, etc.) unchanged.

## Files to add / change

**New**
- `src/pages/Faith.tsx`, `Freedom.tsx`, `Fans.tsx`, `Future.tsx`
- `src/components/CategoryPageLayout.tsx` (hero + sections wrapper)
- `src/components/CategoryCard.tsx` (landing page tiles)
- `src/components/MapCard.tsx` (extracted from `WorldMapsShowcase`'s `RealmCard`)
- `src/components/ComingSoonCard.tsx` (styled placeholder)
- 4 small hero images in `src/assets/` (generated)

**Edit**
- `src/App.tsx` — add 4 routes
- `src/pages/Index.tsx` — replace `WorldMapsShowcase` with new `CategoryGrid`
- `src/components/Navigation.tsx` — Explore dropdown
- `src/index.css`, `tailwind.config.ts` — add category accent tokens

**Delete / repurpose**
- `src/components/WorldMapsShowcase.tsx` — its realm data + "What's Included?" block move into `/future`

## Out of scope (for this pass)

- Real content for Freedom / Fans apps (placeholders only)
- Bible maps artwork (placeholder only)
- Per-category custom typography or motion (kept shared this round; easy to add later if you decide a category needs more personality)
