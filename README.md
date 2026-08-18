# ABSTRACK (IND) — Tribute Site

An unofficial tribute site for **ABSTRACK** ([@abstrackmusic.official](https://www.instagram.com/abstrackmusic.official/)) — hard techno / melodic techno DJ, producer and curator out of Delhi NCR, and the founder behind **Cult X**, **Awestruck Events** and **OffGrid**.

## Stack

React 19 · TypeScript · Vite 7 · Tailwind CSS v4 · Framer Motion

## Sections

| Section | What it is |
| --- | --- |
| Hero | Stencilled wordmark with a 4/4 "kick drum" pulse behind it |
| Next Date | Live countdown to the next confirmed show, with a ticket link |
| The Story | Bio assembled from his own captions |
| The Collectives | Cult X, Awestruck Events, OffGrid |
| Shows | Reverse-chronological gig log with venues, lineups and post links |
| Gallery | Photos from his public Instagram and event brands |
| Straight from the Booth | Quotes pulled verbatim from his captions |

## Editing content

Everything lives in [`src/data/content.ts`](src/data/content.ts) — copy, stats, shows,
gallery captions and links. Images go in `public/photos/` and are referenced as
`/photos/filename.jpg`.

To point the countdown at a new date, edit `nextShow.startsAt` (ISO 8601 with an
offset, e.g. `2026-08-22T23:30:00+05:30`). Once that moment passes the banner
switches itself to a "doors are open" state, so the page never shows a stale
countdown.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
```

## Credits & disclaimer

This is an unofficial fan-made tribute site. It is not affiliated with, endorsed by, or
connected to ABSTRACK, Cult X, Awestruck Events or OffGrid. All images belong to their
respective owners and are taken from public Instagram posts; event artwork remains the
property of its designers and promoters. Ticket links point to the official sellers —
this site sells nothing and collects nothing. Any rights holder may request removal and
it will be honoured promptly.

Built by [Alok](https://www.instagram.com/takemahheart).
