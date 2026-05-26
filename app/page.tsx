'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const PHOTOS = [
  'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
  'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
  'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800',
]

export default function SplashPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--bg)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Skip link */}
      <Link
        href="/home"
        style={{
          position: 'absolute',
          top: 24,
          left: 24,
          zIndex: 10,
          fontFamily: 'var(--font-body)',
          fontSize: 12,
          color: 'var(--text-secondary)',
          letterSpacing: '0.04em',
        }}
      >
        Skip &rarr;
      </Link>

      {/* Filmstrip — 3 photos */}
      <div style={{ display: 'flex', gap: 6, height: '52vh' }}>
        {PHOTOS.map((src, i) => (
          <motion.div
            key={src}
            initial={{ scale: 1.04, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: 'easeOut' as const }}
            style={{ flex: 1, position: 'relative', borderRadius: 12, overflow: 'hidden' }}
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
                background: 'rgba(0,0,0,0.2)',
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Text content */}
      <div style={{ padding: '24px 24px 40px' }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 12,
            color: 'var(--accent)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: 16,
          }}
        >
          Tokyo &middot; 2:14 AM
        </motion.p>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' as const }}
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 'clamp(40px, 8vw, 52px)',
            color: 'var(--text-primary)',
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          Some places stay with you forever
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 16,
            color: 'var(--text-secondary)',
            marginTop: 12,
          }}
        >
          a memory you forgot you had
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="/home">
            <motion.button
              whileHover={{ y: -2, boxShadow: '0 4px 20px rgba(196,134,42,0.4)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 16,
                fontWeight: 500,
                padding: '14px 40px',
                background: 'var(--accent)',
                color: 'white',
                borderRadius: 'var(--radius-pill)',
                border: 'none',
                cursor: 'pointer',
                marginTop: 32,
                display: 'inline-block',
              }}
            >
              Begin
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
