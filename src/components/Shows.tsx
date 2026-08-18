import { shows } from '../data/content'
import { SectionHeading, Reveal } from './Section'

export default function Shows() {
  return (
    <section id="shows" className="relative mx-auto max-w-5xl scroll-mt-24 px-6 py-28">
      <SectionHeading kicker="The Log" title="Shows" />
      <p className="-mt-8 mb-14 max-w-2xl text-white/60">
        Reconstructed from his own captions — every date he has posted about, newest first.
      </p>

      <ol className="relative border-l border-white/10 pl-6 sm:pl-10">
        {shows.map((s, i) => (
          <Reveal key={s.date + s.event} delay={Math.min(i, 5) * 0.06}>
            <li className="relative pb-10 last:pb-0">
              {/* node on the rail */}
              <span
                className={`absolute -left-[31px] top-2 flex h-3 w-3 items-center justify-center sm:-left-[47px] ${
                  s.upcoming ? '' : ''
                }`}
              >
                {s.upcoming && (
                  <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-gold opacity-70" />
                )}
                <span
                  className={`relative h-3 w-3 rounded-full border-2 ${
                    s.upcoming ? 'border-gold bg-gold' : 'border-white/25 bg-ink'
                  }`}
                />
              </span>

              <div
                className={`rounded-xl border p-5 transition-colors sm:p-6 ${
                  s.upcoming
                    ? 'border-gold/40 bg-gold/5'
                    : 'border-white/8 bg-ink-2/60 hover:border-white/20'
                }`}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-sm text-gold">{s.date}</span>
                  {s.upcoming && (
                    <span className="font-mono rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-bold tracking-widest text-white uppercase">
                      Upcoming
                    </span>
                  )}
                </div>

                <h3 className="font-display mt-2 text-lg sm:text-xl">{s.event}</h3>
                <p className="font-mono mt-1 text-sm text-mist">
                  {s.venue} · {s.city}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{s.note}</p>

                {s.withArtists && (
                  <p className="mt-3 text-xs text-white/45">
                    <span className="tracking-widest uppercase text-white/30">With </span>
                    {s.withArtists}
                  </p>
                )}

                {s.postUrl && (
                  <a
                    href={s.postUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-xs tracking-wide text-white/50 transition-colors hover:text-gold"
                  >
                    View the post ↗
                  </a>
                )}
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
