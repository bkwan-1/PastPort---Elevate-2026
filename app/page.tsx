'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown, FolderOpen, Sparkles, Globe } from 'lucide-react'
import PageWrapper from '@/components/PageWrapper'

const cards = [
  {
    Icon: FolderOpen,
    title: 'Organize',
    body: 'Every photo finds its place. Albums are built automatically by trip, sorted by date and location.',
  },
  {
    Icon: Sparkles,
    title: 'Beautify',
    body: 'AI-powered enhancements bring out golden hours, soften shadows, and restore faded memories.',
  },
  {
    Icon: Globe,
    title: 'Remember',
    body: 'Replay your journeys on an interactive map or let PastPort turn them into a cinematic movie.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
}

export default function Home() {
  return (
    <PageWrapper>
      {/* ── Section 1: Hero ── */}
      <section style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
        <Image
          fill
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600"
          alt="Mountain landscape"
          className="brightness-90"
          style={{ objectFit: 'cover' }}
          priority
        />

        {/* bottom-60% warm gradient fade */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, #FAFAF8 0%, transparent 60%)',
          }}
        />

        {/* centered content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pt-32 px-6 text-center">
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(44px, 7vw, 72px)',
              color: 'var(--text-primary)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            A travel memory studio
          </h1>

          <p
            className="mt-3"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '20px',
              color: 'var(--text-secondary)',
            }}
          >
            Where trips become stories.
          </p>

          <p
            className="mt-4 max-w-lg"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
            }}
          >
            PastPort organizes your travel photos, enhances them with AI, and transforms group trips
            into cinematic memories — forever.
          </p>

          <div className="flex flex-wrap gap-4 mt-8 justify-center">
            <motion.button
              whileHover={{ y: -2, boxShadow: '0 4px 16px rgba(196,134,42,0.35)' }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 text-sm font-medium text-white"
              style={{
                background: 'var(--accent)',
                borderRadius: 'var(--radius-pill)',
                fontFamily: 'var(--font-body)',
              }}
            >
              Get Started Free
            </motion.button>

            <motion.button
              whileHover={{ y: -2, boxShadow: '0 4px 16px rgba(196,134,42,0.15)' }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 text-sm font-medium"
              style={{
                border: '1.5px solid var(--accent)',
                color: 'var(--accent)',
                borderRadius: 'var(--radius-pill)',
                fontFamily: 'var(--font-body)',
                background: 'transparent',
              }}
            >
              See How It Works
            </motion.button>
          </div>
        </div>

        {/* bouncing scroll arrow */}
        <motion.div
          className="absolute bottom-8 left-1/2 z-10"
          style={{ x: '-50%' }}
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ChevronDown size={28} color="var(--accent)" />
        </motion.div>
      </section>

      {/* ── Section 2: Value Props ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="text-center mb-12"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}
          >
            Why PastPort
          </p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {cards.map(({ Icon, title, body }) => (
              <motion.div
                key={title}
                variants={itemVariants}
                className="bg-white p-8"
                style={{
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-card)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <Icon size={28} color="var(--accent)" />
                <h3
                  className="mt-4"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '24px',
                    color: 'var(--text-primary)',
                    lineHeight: 1.2,
                  }}
                >
                  {title}
                </h3>
                <p
                  className="mt-2"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '15px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  {body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Section 3: Quote ── */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div
            style={{
              width: 48,
              height: 2,
              background: 'var(--accent)',
              margin: '0 auto 2rem',
            }}
          />

          <blockquote
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(22px, 3vw, 32px)',
              color: 'var(--text-primary)',
              lineHeight: 1.4,
            }}
          >
            &ldquo;Finally, a place where my travel memories actually feel like memories.&rdquo;
          </blockquote>

          <p
            className="mt-4"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              color: 'var(--text-secondary)',
            }}
          >
            — Sofia R., travelled to 14 countries
          </p>
        </div>
      </section>
    </PageWrapper>
  )
}
