import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { nextShow } from '../data/content'

type Remaining = { days: number; hours: number; mins: number; secs: number } | null

/** null once the doors have opened — the banner then flips to its "live/past" state. */
function remainingUntil(iso: string): Remaining {
  const diff = new Date(iso).getTime() - Date.now()
  if (Number.isNaN(diff) || diff <= 0) return null
  const secs = Math.floor(diff / 1000)
  return {
    days: Math.floor(secs / 86400),
    hours: Math.floor((secs % 86400) / 3600),
    mins: Math.floor((secs % 3600) / 60),
    secs: secs % 60,
  }
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="min-w-[62px] rounded-lg border border-gold/25 bg-ink/70 px-3 py-2 text-center backdrop-blur sm:min-w-[76px] sm:px-4 sm:py-3">
      <div className="font-mono text-2xl font-bold tabular-nums text-white sm:text-4xl">
        {String(value).padStart(2, '0')}
      </div>
      <div className="mt-0.5 text-[9px] tracking-[0.25em] text-mist uppercase">{label}</div>
    </div>
  )
}

export default function NextShow() {
  const [left, setLeft] = useState<Remaining>(() => remainingUntil(nextShow.startsAt))

  useEffect(() => {
    const t = setInterval(() => setLeft(remainingUntil(nextShow.startsAt)), 1000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="next" className="relative scroll-mt-24 overflow-hidden border-y border-gold/20">
      {/* poster bleed */}
      <div className="absolute inset-0">
        <img src={nextShow.poster} alt="" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/60" />
      </div>
      <div className="hazard absolute inset-x-0 top-0 h-1 opacity-60" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-5 lg:items-center lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-3"
        >
          <p className="font-mono mb-3 flex items-center gap-2 text-[10px] tracking-[0.4em] text-gold uppercase">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            {left ? 'Next Date' : 'Latest Date'}
          </p>

          <p className="text-sm tracking-wide text-mist">{nextShow.presenter}</p>
          <h2 className="font-display mt-1 text-3xl leading-tight sm:text-5xl">
            {nextShow.title}
          </h2>

          <p className="font-mono mt-4 text-sm text-white/80">
            {nextShow.dateLabel} · {nextShow.timeLabel}
          </p>
          <p className="font-mono text-sm text-gold">
            📍 {nextShow.city} — {nextShow.venueNote}
          </p>

          <p className="mt-5 max-w-xl leading-relaxed text-white/65">{nextShow.blurb}</p>
          <p className="mt-3 max-w-xl text-xs leading-relaxed text-mist">{nextShow.smallprint}</p>

          <a
            href={nextShow.ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block rounded-full bg-gold px-8 py-3 text-sm font-bold tracking-wide text-white transition-transform hover:scale-105"
          >
            🎟️ Get Tickets ↗
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-2"
        >
          {left ? (
            <>
              <p className="mb-3 text-center text-[10px] tracking-[0.35em] text-mist uppercase lg:text-right">
                Doors in
              </p>
              <div className="flex justify-center gap-2 sm:gap-3 lg:justify-end">
                <Unit value={left.days} label="Days" />
                <Unit value={left.hours} label="Hrs" />
                <Unit value={left.mins} label="Min" />
                <Unit value={left.secs} label="Sec" />
              </div>
            </>
          ) : (
            <div className="rounded-xl border border-gold/25 bg-ink/70 p-6 text-center backdrop-blur lg:text-right">
              <p className="font-display text-2xl text-gradient-gold">Doors are open.</p>
              <p className="mt-2 text-sm text-mist">
                Check Instagram for the next announcement — the lineup drops there first.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
