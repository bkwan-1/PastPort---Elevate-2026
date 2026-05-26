'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FolderOpen, Sparkles, Globe } from 'lucide-react'
import PageWrapper from '@/components/PageWrapper'

const FILMSTRIP = [
  'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
  'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
  'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800',
]

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

      {/* ── Hero: Cinematic Filmstrip ── */}
      <section>
        {/* 3-photo filmstrip */}
        <div style={{ display: 'flex', gap: 6, height: '55vh' }}>
          {FILMSTRIP.map((src, i) => (
            <motion.div
              key={src}
              initial={{ scale: 1.04, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' as const }}
              style={{ flex: 1, position: 'relative', borderRadius: 10, overflow: 'hidden' }}
            >
              <Image
                fill
                src={src}
                alt={`Travel memory ${i + 1}`}
                style={{ objectFit: 'cover' }}
                sizes="33vw"
                priority={i === 0}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0,0,0,0.15)',
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Eyebrow + headline + copy + CTAs */}
        <div
          style={{
            maxWidth: 860,
            margin: '0 auto',
            padding: '48px 24px 80px',
          }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: 20,
            }}
          >
            Travel &middot; Memory &middot; Studio
          </motion.p>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' as const }}
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(44px, 6vw, 72px)',
              color: 'var(--text-primary)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            A travel memory studio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.42 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 20,
              color: 'var(--text-secondary)',
              marginTop: 16,
            }}
          >
            Where trips become stories.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 16,
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              marginTop: 12,
              maxWidth: 520,
            }}
          >
            PastPort organizes your travel photos, enhances them with AI, and transforms group trips
            into cinematic memories &mdash; forever.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 40 }}
          >
            <motion.button
              whileHover={{ y: -2, boxShadow: '0 4px 20px rgba(196,134,42,0.4)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 14,
                fontWeight: 500,
                padding: '13px 32px',
                background: 'var(--accent)',
                color: 'white',
                borderRadius: 'var(--radius-pill)',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Get Started Free
            </motion.button>

            <motion.button
              whileHover={{ y: -2, boxShadow: '0 4px 16px rgba(196,134,42,0.15)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 14,
                fontWeight: 500,
                padding: '13px 32px',
                background: 'transparent',
                color: 'var(--accent)',
                borderRadius: 'var(--radius-pill)',
                border: '1.5px solid var(--accent)',
                cursor: 'pointer',
              }}
            >
              See How It Works
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ── Value Props ── */}
      <section style={{ padding: '0 24px 96px' }}>
        <div style={{ maxWidth: 1152, margin: '0 auto' }}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: 12,
            }}
          >
            Why PastPort
          </p>
          <div
            style={{
              width: 32,
              height: 1,
              background: 'var(--accent)',
              marginBottom: 48,
            }}
          />

          <motion.div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {cards.map(({ Icon, title, body }) => (
              <motion.div
                key={title}
                variants={itemVariants}
                whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.5)' }}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-card)',
                  padding: 36,
                  transition: 'box-shadow 0.2s',
                }}
              >
                <Icon size={28} color="var(--accent)" />
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 26,
                    color: 'var(--text-primary)',
                    lineHeight: 1.2,
                    marginTop: 20,
                    marginBottom: 0,
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 15,
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginTop: 10,
                  }}
                >
                  {body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Quote ── */}
      <section style={{ padding: '0 24px 96px' }}>
        <div
          style={{
            maxWidth: 720,
            margin: '0 auto',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 16,
            padding: '48px 52px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: 48,
              height: 2,
              background: 'var(--accent)',
              margin: '0 auto 32px',
            }}
          />

          <blockquote
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(22px, 3vw, 32px)',
              color: 'var(--text-primary)',
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            &ldquo;Finally, a place where my travel memories actually feel like memories.&rdquo;
          </blockquote>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 14,
              color: 'var(--text-secondary)',
              marginTop: 20,
            }}
          >
            &mdash; Sofia R., travelled to 14 countries
          </p>
        </div>
      </section>

    </PageWrapper>
  )
}
