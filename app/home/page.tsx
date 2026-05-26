'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import PageWrapper from '@/components/PageWrapper'
import BottomNav from '@/components/BottomNav'

const TOKYO    = 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800'
const VANCOUVER = 'https://images.unsplash.com/photo-1559511260-66a654ae982a?w=800'
const GENERIC = [
  'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400',
  'https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=400',
  'https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=400',
]

const sealedTrips = [
  { title: 'Summer 2025',      tagline: 'Golden memory',     date: 'July 2025',   img: GENERIC[0] },
  { title: 'Vancouver Island', tagline: 'Quiet & wandering', date: 'Sept 2024',   img: VANCOUVER  },
  { title: 'Barcelona Summer', tagline: 'Sun-drenched',      date: 'August 2024', img: GENERIC[1] },
  { title: 'Eurail, Nowhere',  tagline: 'Drifting',          date: 'May 2024',    img: GENERIC[2] },
]

export default function HomePage() {
  return (
    <PageWrapper>
      <div style={{ paddingBottom: 96 }}>

        {/* Header */}
        <div style={{ padding: '56px 20px 0' }}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 22,
              fontWeight: 500,
              color: 'var(--text-primary)',
              margin: 0,
            }}
          >
            Good evening, Theo
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 13,
              color: 'var(--text-secondary)',
              marginTop: 4,
            }}
          >
            4 memories sealed this year
          </p>
        </div>

        {/* Active trip card */}
        <div style={{ margin: '24px 20px 0' }}>
          <div
            style={{
              borderRadius: 16,
              overflow: 'hidden',
              height: 220,
              position: 'relative',
            }}
          >
            <Image
              fill
              src={TOKYO}
              alt="Tokyo — Rainy Nights"
              style={{ objectFit: 'cover', filter: 'brightness(0.75)' }}
              sizes="(max-width: 768px) 100vw, 600px"
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)',
              }}
            />

            {/* Live badge */}
            <div style={{ position: 'absolute', top: 12, right: 12 }}>
              <motion.div
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ repeat: Infinity, duration: 1.6 }}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 11,
                  fontWeight: 600,
                  padding: '4px 10px',
                  background: 'var(--accent)',
                  color: 'white',
                  borderRadius: 'var(--radius-pill)',
                  letterSpacing: '0.06em',
                }}
              >
                LIVE &middot; Day 4 of 7
              </motion.div>
            </div>

            {/* Trip info */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 20 }}>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 28,
                  color: 'white',
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                Tokyo &mdash; Rainy Nights
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  fontStyle: 'italic',
                  color: 'rgba(240,235,227,0.7)',
                  margin: '6px 0 8px',
                }}
              >
                &ldquo;We never made it back to the hotel before sunrise&rdquo;
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 12,
                  color: 'var(--accent)',
                  margin: 0,
                }}
              >
                &#x1F4CD; Shibuya, Japan
              </p>
            </div>
          </div>
        </div>

        {/* Sealed chapters */}
        <div style={{ margin: '32px 0 0' }}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 12,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--accent)',
              padding: '0 20px',
              marginBottom: 12,
            }}
          >
            Sealed chapters
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 12,
              padding: '0 20px',
            }}
          >
            {sealedTrips.map((trip, i) => (
              <motion.div
                key={trip.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: 'easeOut' as const }}
                whileHover={{ scale: 1.02 }}
                style={{ height: 140, borderRadius: 12, overflow: 'hidden', position: 'relative', cursor: 'pointer' }}
              >
                <Image
                  fill
                  src={trip.img}
                  alt={trip.title}
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 50vw, 200px"
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.75) 60%, transparent)',
                  }}
                />
                <p
                  style={{
                    position: 'absolute',
                    bottom: 24,
                    left: 12,
                    fontFamily: 'var(--font-body)',
                    fontSize: 11,
                    color: 'var(--text-secondary)',
                    margin: 0,
                  }}
                >
                  {trip.tagline}
                </p>
                <p
                  style={{
                    position: 'absolute',
                    bottom: 8,
                    left: 12,
                    fontFamily: 'var(--font-display)',
                    fontSize: 16,
                    color: 'var(--text-primary)',
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {trip.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* One year ago today */}
        <div
          style={{
            margin: '24px 20px 0',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 16,
            padding: 20,
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 11,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--text-secondary)',
              margin: 0,
            }}
          >
            One year ago today
          </p>
          <div
            style={{
              width: 24,
              height: 1,
              background: 'var(--accent)',
              margin: '12px 0',
            }}
          />
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 20,
              color: 'var(--text-primary)',
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            &ldquo;We sat on the rooftop until the call to prayer began. Nobody spoke.&rdquo;
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 12,
              color: 'var(--text-secondary)',
              marginTop: 8,
            }}
          >
            Barcelona &middot; August 2024
          </p>
        </div>

      </div>
      <BottomNav />
    </PageWrapper>
  )
}
