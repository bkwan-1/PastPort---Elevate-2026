'use client'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { motion } from 'framer-motion'
import PageWrapper from '@/components/PageWrapper'
import BottomNav from '@/components/BottomNav'

const MapClient = dynamic(() => import('@/components/MapClient'), { ssr: false })

const GENERIC = [
  'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400',
  'https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=400',
  'https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=400',
]
const VANCOUVER = 'https://images.unsplash.com/photo-1559511260-66a654ae982a?w=800'
const TOKYO     = 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800'

const chapters = [
  { title: 'Tokyo 2025',         date: '2025',      img: TOKYO      },
  { title: 'Vancouver Island',   date: 'Sept 2024', img: VANCOUVER  },
  { title: 'Barcelona Summer',   date: 'Aug 2024',  img: GENERIC[0] },
  { title: 'Kyoto Autumn',       date: 'Oct 2024',  img: GENERIC[1] },
]

export default function AtlasPage() {
  return (
    <PageWrapper>
      <div style={{ paddingBottom: 96 }}>

        {/* Header */}
        <div style={{ padding: '56px 20px 16px' }}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 13,
              color: 'var(--text-secondary)',
              margin: 0,
            }}
          >
            12 chapters &middot; 4 years &middot; 7 countries
          </p>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 28,
              color: 'var(--text-primary)',
              marginTop: 4,
              lineHeight: 1.2,
            }}
          >
            Every glow is a chapter you sealed.
          </p>
        </div>

        {/* Dark map */}
        <div style={{ height: '45vh', overflow: 'hidden' }}>
          <MapClient showFilter={false} darkMode />
        </div>

        {/* Sealed chapters list */}
        <div style={{ padding: '16px 20px 0' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 12,
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 12,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--accent)',
                margin: 0,
              }}
            >
              Sealed chapters
            </p>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 12,
                fontWeight: 500,
                padding: '2px 10px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-pill)',
                color: 'var(--text-secondary)',
              }}
            >
              {chapters.length}
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {chapters.map((ch, i) => (
              <motion.div
                key={ch.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.35, ease: 'easeOut' as const }}
                whileHover={{ scale: 1.01 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                  padding: 16,
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 8,
                      overflow: 'hidden',
                      position: 'relative',
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      fill
                      src={ch.img}
                      alt={ch.title}
                      style={{ objectFit: 'cover' }}
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 14,
                        fontWeight: 500,
                        color: 'var(--text-primary)',
                        margin: 0,
                      }}
                    >
                      {ch.title}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 12,
                        color: 'var(--text-secondary)',
                        margin: 0,
                        marginTop: 2,
                      }}
                    >
                      {ch.date}
                    </p>
                  </div>
                </div>
                <button
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 12,
                    fontWeight: 500,
                    padding: '4px 14px',
                    borderRadius: 'var(--radius-pill)',
                    border: '1.5px solid var(--accent)',
                    background: 'transparent',
                    color: 'var(--accent)',
                    cursor: 'pointer',
                  }}
                >
                  Open
                </button>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
      <BottomNav />
    </PageWrapper>
  )
}
