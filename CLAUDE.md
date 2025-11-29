# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

OmniDM is a marketing website built with Next.js 14 for an AI-powered chat automation platform targeting Cambodian businesses. The site features bilingual support (English/Khmer) and showcases integration with Cambodian payment solutions (ABA PayWay, KHQR).

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Lint code (currently not configured)
npm run lint
```

## Architecture

### Single-Page Application Structure

This is a **single-page Next.js application** using the App Router. All content is rendered on one page (`app/page.tsx`) with client-side routing via smooth scrolling to section anchors.

**Key files:**
- `app/page.tsx` - Main page component (client component with 'use client')
- `app/layout.tsx` - Root layout with metadata
- `app/globals.css` - All global styles

### Bilingual Language System

The site uses a **CSS-based language switching mechanism** (not i18n libraries):

1. **State Management**: Language preference stored in:
   - React state (`language`)
   - localStorage (`preferredLanguage`)
   - Body class (`lang-km`)

2. **Content Display**: Elements use `data-lang="en"` and `data-lang="km"` attributes. CSS rules hide/show based on body class:
   ```css
   [data-lang="km"] { display: none; }
   body.lang-km [data-lang="en"] { display: none !important; }
   body.lang-km [data-lang="km"] { display: block !important; }
   ```

3. **When adding new content**: Always create dual versions:
   ```tsx
   <h1 data-lang="en">English Text</h1>
   <h1 data-lang="km">Khmer Text</h1>
   ```

### Client-Side Features

The page is a client component because it uses:
- **Particle animation system**: `createParticles()` generates 50 animated particles on mount
- **Intersection Observer**: Scroll-reveal animations for `.feature-card`, `.pricing-card`, `.platform-logo`
- **Smooth scrolling**: `scrollToSection()` handles anchor navigation
- **localStorage**: Persists language preference

### Styling Approach

**All styles are in `app/globals.css`** - no CSS modules, no styled-components, no Tailwind. The theme uses:
- Colors: Electric Blue (#0066ff), Neon Cyan (#00ffff), Dark Gray (#1e1e1e)
- Animations: gradient shifts, particle floats, button glows, card reveals
- Responsive: Grid auto-fit patterns, mobile-first breakpoints

## Deployment

### Production Target
- **Platform**: Vercel
- **Domain**: omnidm.ai
- **Repository**: https://github.com/myownipgit/omnidm

### Deployment Methods
See `DEPLOYMENT.md` for detailed instructions. Quick deploy:
```bash
vercel login
vercel --prod
```

### Build Configuration
- Framework auto-detected as Next.js
- No environment variables required
- Static export: All pages are pre-rendered at build time
- Output directory: `.next`

## Content Sections

The page contains these sections in order:
1. Hero (animated particles, CTA)
2. Platforms (6 messaging platforms + 2 payment solutions)
3. Features (6 feature cards)
4. Pricing (4 pricing tiers)
5. Stats (4 statistics)
6. Trust (3 trust badges)
7. Footer

## Important Patterns

### Adding New Sections
1. Add JSX to `app/page.tsx` between existing `<section>` tags
2. Duplicate content with `data-lang="en"` and `data-lang="km"`
3. Add corresponding CSS classes to `app/globals.css`
4. If interactive, add to Intersection Observer targets in `useEffect`

### Testing Checklist
After changes, verify:
- [ ] Language toggle switches all content
- [ ] Animations trigger on scroll
- [ ] Smooth scrolling to anchors works
- [ ] Build completes: `npm run build`
- [ ] Mobile responsive (breakpoint: 768px)

## Known Limitations

- No TypeScript linting configured (only build-time type checking)
- No test suite
- Single-file component structure (may need refactoring for scalability)
- Particle animation creates 50 DOM elements on every mount (no cleanup on unmount needed due to page structure)
