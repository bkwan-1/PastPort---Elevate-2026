# PastPort — Claude Code Instructions

## Project
Travel memory studio app. Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, React Leaflet. Demo only — no auth, no real backend.

## Stack
- Framework: Next.js 14 App Router
- Styling: Tailwind CSS + CSS variables
- Animation: Framer Motion
- Maps: react-leaflet + leaflet (dynamic import, ssr:false)
- Icons: lucide-react
- Fonts: Cormorant Garamond (display) + DM Sans (body) via next/font/google
- Deploy: Vercel

## Design System
- Background: #FAFAF8
- Accent: #C4862A (amber)
- Text primary: #1A1A1A
- Text secondary: #4A5568
- Border: #E8E4DF
- Radius: 12px cards, 999px pills
- Shadows: 0 2px 12px rgba(0,0,0,0.08) default, 0 8px 32px rgba(0,0,0,0.14) hover
- Grain overlay: body::before, SVG noise, 4% opacity, pointer-events none

## Typography
- Display/headings: Cormorant Garamond, italic where impactful
- Body/UI: DM Sans
- Hero: 72px, Section titles: 48-52px, Cards: 20px, Body: 16px, Captions: 13px

## Component Rules
- Every page: 'use client' + PageWrapper (fade in + y:12→0, 0.35s)
- All buttons: whileHover={{ y:-2, boxShadow:'...' }} whileTap={{ scale:0.97 }}
- All cards: whileHover={{ scale:1.02, shadow increase }}
- List entrances: whileInView + staggerChildren:0.12s
- Amber filled button: bg #C4862A, white text, pill, hover darken
- Outlined button: border #C4862A, amber text, pill, hover fill

## Code Rules
- No placeholder comments like "add logic here"
- No TODO comments
- Complete, working code only
- Use CSS variables over hardcoded hex in components
- Prefer Tailwind utilities; use inline style only when Tailwind can't reach
- Fix all TypeScript errors before finishing
- Every component using hooks needs 'use client'

## File Structure
app/
  page.tsx (Landing)
  albums/page.tsx
  filters/page.tsx
  movie/page.tsx
  map/page.tsx
  pricing/page.tsx
  layout.tsx
  globals.css
components/
  Nav.tsx
  PageWrapper.tsx
  Footer.tsx

## Unsplash Photo URLs
Use these exact URLs — no Unsplash website links, direct image CDN only:
- Tokyo street: https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800
- Vancouver skyline: https://images.unsplash.com/photo-1559511260-66a654ae982a?w=800
- Lisbon tiles: https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800
- Amalfi coast: https://images.unsplash.com/photo-1633321702518-7feccafb94d5?w=800
- Kyoto temple: https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800
- NYC skyline: https://images.unsplash.com/photo-1499092346302-b8d7a599b2c9?w=800
- Santorini: https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800
- Mountain hero: https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600
- Generic travel 1: https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400
- Generic travel 2: https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=400
- Generic travel 3: https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=400
- Generic travel 4: https://images.unsplash.com/photo-1488085061387-422e29b40080?w=400

## Unsplash Attribution
Add in Footer: "Demo photos courtesy of Unsplash"

## Performance
- Dynamic import Leaflet map (ssr:false)
- next/image for all photos (width, height, alt required)
- No unnecessary useEffect — prefer CSS animations where possible
