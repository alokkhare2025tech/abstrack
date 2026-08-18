/**
 * ─────────────────────────────────────────────────────────────────
 *  ALL SITE CONTENT LIVES HERE.
 *
 *  Every fact below was pulled from public sources (August 2026),
 *  primarily his own Instagram captions:
 *  - Instagram: https://www.instagram.com/abstrackmusic.official/
 *    (verified ✓, "ABSTRACK (IND)", Artist, 162 posts)
 *  - Bio: "🎧DJ | Producer | curator |🧿 / Hard Techno. Melodic Techno /
 *    Building- @awestruck.by.abstrack @offgrid.entertainment @cult.x.ind"
 *  - YouTube: https://youtube.com/@abstrackabhinav ("ABSTRACK•Abhinav")
 *  - Venture accounts: @awestruck.by.abstrack (Awestruck Events),
 *    @offgrid.entertainment (OffGrid), @cult.x.ind (Cult X)
 *
 *  Photos: drop image files into /public/photos and reference them
 *  as "/photos/filename.jpg" below.
 * ─────────────────────────────────────────────────────────────────
 */

export const site = {
  name: "ABSTRACK",
  region: "IND",
  tagline: "DJ · Producer · Curator — Hard Techno / Melodic Techno",
  heroIntro:
    "One artist, three collectives, and a floor that never quite empties. Hard techno and melodic techno out of Delhi NCR — from raver in the crowd to the name on the poster in a single, relentless year.",
  disclaimer:
    "This is an unofficial tribute website made with admiration. It is not affiliated with, endorsed by, or connected to ABSTRACK, Awestruck Events, OffGrid or Cult X. All images belong to their respective owners and are taken from his public Instagram (@abstrackmusic.official) and those of his own event brands; event artwork remains the property of its designers and promoters. Facts are compiled from public posts. Ticket links point to the official sellers — this site sells nothing and collects nothing. Any rights holder may request removal and it will be honoured promptly.",
}

export const about = {
  heading: "The Story",
  paragraphs: [
    "ABSTRACK is Abhinav — a DJ, producer and curator working the harder end of the spectrum out of Delhi NCR. The bio is four words long and completely accurate: hard techno, melodic techno. The point isn't the genre label. As he puts it after a night at X Live: “Whether it's Hard Techno or Melodic Techno, the ABSTRACK hype remains the same. No matter the genre, the energy stays the same.”",
    "The origin story is unusually tidy. He attended Eden of Sounds as a raver, played his first-ever show at the Eden of Sounds pre-party at The Kairoom, and one year later stood on the 2026 North Edition bill at The Westin Sohna alongside Adana Twins, Almost Human, Bigfett, Kinder and TH;EN. His own word for it: “a complete full circle ⭕️.” Room XO in Gurugram he simply calls the home ground — the room where he closed the night after Domina, and where he warmed the floor for Cassie Raptor on her road to Steelworks.",
    "Then there is the other half of the job. Rather than wait to be booked, he builds the bookings: Awestruck Events for the experiences, OffGrid for curation and the artist collective, and Cult X — “an uncompromising vision of Hard Techno” — for the nights with no stage, no barriers and no guest list at the door. Artist, curator, organiser, promoter, in his own poster's words. One incredible year in, the caption still reads: “I haven't started yet, because the best is yet to come.”",
  ],
  stats: [
    { value: "3", label: "Collectives Built" },
    { value: "150+", label: "BPM Territory" },
    { value: "2026", label: "Eden of Sounds" },
    { value: "162", label: "Instagram Posts" },
  ],
  portrait: "/photos/ig-DbNZ_OSGWu5.jpg" as string | null,
}

/** The next confirmed date — drives the countdown banner. */
export const nextShow = {
  presenter: "CULT-X presents",
  title: "Boiler Room Edition",
  city: "Gurugram",
  venueNote: "Location on ticket",
  /** Sat 22 Aug 2026, 23:30 IST (UTC+5:30) */
  startsAt: "2026-08-22T23:30:00+05:30",
  dateLabel: "Saturday, 22 August 2026",
  timeLabel: "11:30 PM — till it's done",
  blurb:
    "You'll feel it through the floor before you find the door. No stage. No barriers. No VIPs. Just floor-to-ceiling glass, rager sound, and people who came to dance.",
  smallprint:
    "Capacity stays tight by design. Doors close at capacity. No second release. No guest list at the door. No exceptions.",
  ticketUrl: "https://sortmyscene.com/event/cult-x-boiler-room-edition-aug-22-2026",
  poster: "/photos/cult-DcHKadWk3z0.jpg",
}

export type Venture = {
  title: string
  handle: string
  handleUrl: string
  year: string
  role: string
  description: string
  poster: string | null
  logo: string | null
  tag: string
  linkLabel: string | null
  linkUrl: string | null
}

export const ventures: Venture[] = [
  {
    title: "Cult X",
    handle: "@cult.x.ind",
    handleUrl: "https://www.instagram.com/cult.x.ind/",
    year: "2026 —",
    role: "Founder · Hard Techno",
    description:
      "“An uncompromising vision of Hard Techno.” Not an event — a movement, in his words. No stage, no barriers, no VIPs; capacity kept tight on purpose, for the ones who stay until the lights come up.",
    poster: "/photos/cult-DcEyBjXEw6H.jpg",
    logo: "/photos/logo-cult_x_ind.jpg",
    tag: "The Movement ⛓️",
    linkLabel: "Tickets ↗",
    linkUrl: "https://sortmyscene.com/event/cult-x-boiler-room-edition-aug-22-2026",
  },
  {
    title: "Awestruck Events",
    handle: "@awestruck.by.abstrack",
    handleUrl: "https://www.instagram.com/awestruck.by.abstrack/",
    year: "2025 —",
    role: "Co-Founder · Experiences",
    description:
      "“Experiences that leave you AweStruck.” Built with @ayushispamm.25 — massive Saturdays at Room XO, sundowners and rooftop nights, plus the Baardos Qutub × Boom Room takeovers.",
    poster: "/photos/awestruck-DZ5FGq9j1bp.jpg",
    logo: "/photos/logo-awestruck_by_abstrack.jpg",
    tag: "Experiences ✨",
    linkLabel: "Instagram ↗",
    linkUrl: "https://www.instagram.com/awestruck.by.abstrack/",
  },
  {
    title: "OffGrid",
    handle: "@offgrid.entertainment",
    handleUrl: "https://www.instagram.com/offgrid.entertainment/",
    year: "2025 —",
    role: "Co-Founder · Curation",
    description:
      "Event curation and artist collective with @mashter_m. Behind AURA rooftop sundowners in Gurgaon and the Eden of Sounds / X Live runs — guest list, collabs and the best party experiences, end to end.",
    poster: "/photos/offgrid-DYUCaCED3nC.jpg",
    logo: "/photos/logo-offgrid_entertainment.jpg",
    tag: "Curation 🌿",
    linkLabel: "Instagram ↗",
    linkUrl: "https://www.instagram.com/offgrid.entertainment/",
  },
]

export type Show = {
  date: string
  event: string
  venue: string
  city: string
  note: string
  withArtists: string | null
  postUrl: string | null
  upcoming?: boolean
}

/** Reverse-chronological gig log, reconstructed from his own captions. */
export const shows: Show[] = [
  {
    date: "22 Aug 2026",
    event: "CULT-X · Boiler Room Edition",
    venue: "Location on ticket",
    city: "Gurugram",
    note: "His own night. No stage, no barriers, no guest list at the door.",
    withArtists: "Stoney · full lineup on the poster",
    postUrl: "https://www.instagram.com/p/DcHKadWk3z0/",
    upcoming: true,
  },
  {
    date: "15–16 Aug 2026",
    event: "Eden of Sounds · North Edition",
    venue: "The Westin Sohna Resort & Spa",
    city: "Sohna",
    note: "Full circle — from raver in the crowd to a name on the 2026 bill.",
    withArtists: "Adana Twins · Almost Human · Bigfett · Kinder · TH;EN",
    postUrl: "https://www.instagram.com/p/Db4Y28DGUbD/",
  },
  {
    date: "9 Aug 2026",
    event: "Baardos Qutub × Boom Room",
    venue: "Baardos, Qutub",
    city: "Delhi",
    note: "6:30 AM and the energy still at 100%. This night was wild.",
    withArtists: "Avantika · N1RVAAN · Itish · Vazir",
    postUrl: "https://www.instagram.com/p/DbxpTTmo_qY/",
  },
  {
    date: "7 Aug 2026",
    event: "Cassie Raptor · Road to Steelworks",
    venue: "Room XO",
    city: "Gurugram",
    note: "For the people who love hard techno and the vibe.",
    withArtists: "Cassie Raptor · Barely Alive · Fastlane",
    postUrl: "https://www.instagram.com/p/DbuVAirmcQM/",
  },
  {
    date: "30 Jul 2026",
    event: "Privilege India × Room XO",
    venue: "Room XO",
    city: "Gurugram",
    note: "“I might make you fall in love with hard techno.” Closing the night after Domina was unreal.",
    withArtists: "Domina",
    postUrl: "https://www.instagram.com/p/Dbap8jGxF-T/",
  },
  {
    date: "23 Jul 2026",
    event: "X Live India",
    venue: "X Live",
    city: "Delhi NCR",
    note: "Melodic journeys into hard techno madness — same intensity, every time.",
    withArtists: "Safar · Kikkat · Vedant Jadia",
    postUrl: "https://www.instagram.com/p/DbI7cVhGd9m/",
  },
  {
    date: "12 Jul 2026",
    event: "Woops",
    venue: "Woops",
    city: "Delhi NCR",
    note: "“That's how I play Woops!” One hell of a crazy experience.",
    withArtists: null,
    postUrl: "https://www.instagram.com/p/DarQDZmRFTd/",
  },
  {
    date: "Mar 2026",
    event: "Techno Takeover India",
    venue: "The Kairoom",
    city: "Delhi NCR",
    note: "The room with the sound system good enough for the edits he can't play anywhere else.",
    withArtists: "B2B set",
    postUrl: "https://www.instagram.com/p/DVgMN6sk9_o/",
  },
  {
    date: "2025",
    event: "Eden of Sounds · Pre-Party",
    venue: "The Kairoom",
    city: "Delhi NCR",
    note: "Where it started — the very first ABSTRACK show.",
    withArtists: null,
    postUrl: null,
  },
]

export type GalleryItem = {
  src: string | null // "/photos/xyz.jpg" — null renders a styled placeholder
  caption: string
  span?: "tall" | "wide"
}

export const gallery: GalleryItem[] = [
  // All photos from his public Instagram and his event brands — credits in the footer disclaimer.
  { src: "/photos/ig-Db4Y28DGUbD.jpg", caption: "Eden of Sounds 2026 — the full circle" },
  { src: "/photos/ig-DbI7cVhGd9m.jpg", caption: "On the Pioneer, X Live India" },
  { src: "/photos/ig-DbNZ_OSGWu5.jpg", caption: "For your consideration: 1 artist, 4 jobs" },
  { src: "/photos/ig-Db4OE3ayr4z.jpg", caption: "6:30 AM at Baardos, Qutub" },
  { src: "/photos/cult-DcHKadWk3z0.jpg", caption: "CULT-X · Boiler Room Edition" },
  { src: "/photos/ig-Db4Y28DGUbD-1.jpg", caption: "North Edition lineup, Westin Sohna" },
  { src: "/photos/ig-DbqVYYGzH5O.jpg", caption: "Cassie Raptor comes to Delhi" },
  { src: "/photos/ig-Dbh0cWypPdX.jpg", caption: "Welcome to Cult-X" },
  { src: "/photos/awestruck-DZ5FGq9j1bp.jpg", caption: "Awestruck — a massive Saturday at Room XO" },
  { src: "/photos/ig-DbNZ_OSGWu5-1.jpg", caption: "One incredible year" },
  { src: "/photos/offgrid-DYUCaCED3nC.jpg", caption: "AURA — Gurgaon's rooftop sundowner" },
  { src: "/photos/ig-DbxpTTmo_qY.jpg", caption: "Baardos Qutub × Boom Room" },
  { src: "/photos/ig-Db4Y28DGUbD-2.jpg", caption: "Backstage at the Westin" },
  { src: "/photos/ig-Dbap8jGxF-T.jpg", caption: "Closing after Domina, Room XO" },
  { src: "/photos/cult-DcEaJ7rCYDq.jpg", caption: "No stage. No barriers. No VIPs." },
  { src: "/photos/ig-DbuVAirmcQM.jpg", caption: "Road to Steelworks, Room XO" },
  { src: "/photos/offgrid-Dbc1U7ZJxUB.jpg", caption: "Step into the Garden of Sound" },
  { src: "/photos/ig-DarQDZmRFTd.jpg", caption: "That's how I play Woops" },
  { src: "/photos/ig-DbI7cVhGd9m-1.jpg", caption: "Red light, full floor" },
  { src: "/photos/offgrid-Db_AiL6MEVc.jpg", caption: "OffGrid presents Joyhauser at X Live" },
  { src: "/photos/ig-DbxpTTmo_qY-1.jpg", caption: "Boom Room, mirrored" },
  { src: "/photos/ig-Db4Y28DGUbD-3.jpg", caption: "The Garden of Sound, from above" },
]

export type PressItem = {
  outlet: string
  quote: string
  url: string | null
  date: string
}

export const press: PressItem[] = [
  {
    outlet: "Instagram",
    quote:
      "1 incredible year!! I haven't started yet, because the best is yet to come!!",
    url: "https://www.instagram.com/p/DbNZ_OSGWu5/",
    date: "One Year In",
  },
  {
    outlet: "Instagram",
    quote:
      "From attending Eden of Sound as a raver to now playing at Eden of Sound alongside all the greatest music artists of all time!! It's a complete full circle ⭕️",
    url: "https://www.instagram.com/p/Db4Y28DGUbD/",
    date: "Aug 2026",
  },
  {
    outlet: "Instagram",
    quote:
      "Whether it's Hard Techno or Melodic Techno, the ABSTRACK hype remains the same. No matter the genre, the energy stays the same. ⚡",
    url: "https://www.instagram.com/p/DbI7cVhGd9m/",
    date: "Jul 2026",
  },
  {
    outlet: "Instagram",
    quote:
      "I might make you fall in love with Hard Techno!! Closing the night after Domina was unreal.",
    url: "https://www.instagram.com/p/Dbap8jGxF-T/",
    date: "Jul 2026",
  },
  {
    outlet: "Cult X",
    quote:
      "This is the moment we've been building towards. We're not just an event; we're a movement. Join us as we redefine the pulse of the underground.",
    url: "https://www.instagram.com/p/Dbh0cWypPdX/",
    date: "Aug 2026",
  },
  {
    outlet: "Instagram",
    quote:
      "Every smile, every scream, every moment on that dance floor meant everything. A night to remember. A memory to cherish. And we're only getting started.",
    url: "https://www.instagram.com/p/DZmW7AMTBKF/",
    date: "Room XO",
  },
]

export type Social = {
  label: string
  handle: string
  url: string
  icon: "instagram" | "youtube" | "link" | "mixes"
}

export const socials: Social[] = [
  {
    label: "Instagram",
    handle: "@abstrackmusic.official",
    url: "https://www.instagram.com/abstrackmusic.official/",
    icon: "instagram",
  },
  {
    label: "YouTube",
    handle: "ABSTRACK•Abhinav",
    url: "https://youtube.com/@abstrackabhinav",
    icon: "youtube",
  },
  {
    label: "Links & Mixes",
    handle: "Sets and recordings",
    url: "https://drive.google.com/drive/folders/1pfaFq0r3ZOfeNc3UYgp2cKy8MdILn5-u",
    icon: "mixes",
  },
  {
    label: "Press Kit",
    handle: "For bookings & promoters",
    url: "https://drive.google.com/drive/folders/1KKx8H5FFMf8HhEWoDpPkrHX8xqQof4qN",
    icon: "link",
  },
]
