import { ventures } from '../data/content'
import { SectionHeading, Reveal } from './Section'

export default function Ventures() {
  return (
    <section id="ventures" className="relative scroll-mt-24 bg-ink-2/50 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading kicker="Building" title="The Collectives" />
        <p className="-mt-8 mb-14 max-w-2xl text-white/60">
          Three brands run out of the same booth. Rather than wait to be booked, he books the room —
          artist, curator, organiser, promoter.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ventures.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-ink-2 transition-all duration-500 hover:-translate-y-2 hover:border-gold/50">
                <div className="relative block aspect-[4/5] w-full overflow-hidden">
                  {v.poster ? (
                    <img
                      src={v.poster}
                      alt={`${v.title} artwork`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ink-3 to-ink">
                      <span className="font-display px-6 text-center text-3xl text-white/10">
                        {v.title}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />

                  <span className="font-mono absolute top-4 left-4 rounded-full border border-gold/40 bg-ink/80 px-3 py-1 text-[10px] tracking-widest text-gold uppercase backdrop-blur">
                    {v.tag}
                  </span>

                  {v.logo && (
                    <img
                      src={v.logo}
                      alt=""
                      className="absolute right-4 bottom-4 h-12 w-12 rounded-full border border-white/20 object-cover shadow-lg"
                    />
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-xl">{v.title}</h3>
                    <span className="font-mono text-sm text-gold">{v.year}</span>
                  </div>
                  <a
                    href={v.handleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono mt-1 text-sm text-mist transition-colors hover:text-gold"
                  >
                    {v.handle}
                  </a>
                  <p className="mt-2 text-xs tracking-widest text-white/40 uppercase">{v.role}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
                    {v.description}
                  </p>

                  {v.linkUrl && (
                    <a
                      href={v.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 self-start rounded-full border border-white/15 px-4 py-2 text-xs tracking-wide text-white/70 transition-colors hover:border-gold hover:text-gold"
                    >
                      {v.linkLabel}
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
