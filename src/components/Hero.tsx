import { motion, useScroll, useTransform } from 'framer-motion'
import { site } from '../data/content'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 180])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])

  return (
    <section
      id="top"
      className="scanlines relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* photo backdrop, heavily dimmed for text legibility */}
      <div className="absolute inset-0">
        <img
          src="/photos/ig-DbNZ_OSGWu5.jpg"
          alt=""
          className="h-full w-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/60 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/70" />
      </div>

      {/* the kick drum — a red pulse behind the wordmark */}
      <div className="animate-kick absolute top-1/2 left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 h-[300px] w-[500px] rounded-full bg-gold-2/8 blur-[150px]" />

      {/* vertical rig lines */}
      <div className="absolute inset-y-0 left-8 hidden w-px bg-gradient-to-b from-transparent via-gold/25 to-transparent lg:block" />
      <div className="absolute inset-y-0 right-8 hidden w-px bg-gradient-to-b from-transparent via-gold/25 to-transparent lg:block" />

      <motion.div style={{ y, opacity }} className="relative z-10 w-full px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono mb-6 text-[10px] tracking-[0.45em] text-gold uppercase sm:text-xs"
        >
          {site.tagline}
        </motion.p>

        <h1 className="font-display leading-[0.9]">
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-outline block text-[15vw] tracking-tighter sm:text-[13vw] lg:text-[11rem]"
          >
            {site.name}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-gradient-gold glow-red block text-2xl tracking-[0.5em] sm:text-4xl"
          >
            ({site.region})
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mx-auto mt-8 max-w-lg text-base text-mist sm:text-lg"
        >
          {site.heroIntro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#shows"
            className="rounded-full bg-gold px-8 py-3 text-sm font-bold tracking-wide text-white transition-transform hover:scale-105"
          >
            Upcoming Shows
          </a>
          <a
            href="#ventures"
            className="rounded-full border border-white/20 px-8 py-3 text-sm tracking-wide text-white/80 transition-colors hover:border-gold hover:text-gold"
          >
            The Collectives
          </a>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="h-12 w-px animate-pulse bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  )
}
