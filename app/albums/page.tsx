'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Plus, Camera, ArrowLeft, Lock } from 'lucide-react'
import PageWrapper from '@/components/PageWrapper'

const GENERIC = [
  'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400',
  'https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=400',
  'https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=400',
  'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=400',
]

const trips = [
  {
    name: 'Tokyo 2025',
    date: 'March 2025',
    photos: 284,
    contributors: ['S', 'M', 'K', 'R'],
    cover: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
  },
  {
    name: 'World Cup Vancouver 2026',
    date: 'June 2026',
    photos: 127,
    contributors: ['Y', 'B', 'W', 'A', 'R', 'J'],
    cover: 'https://images.unsplash.com/photo-1559511260-66a654ae982a?w=800',
  },
  {
    name: 'Lisbon Summer',
    date: 'July 2024',
    photos: 312,
    contributors: ['S', 'M', 'T'],
    cover: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800',
  },
  {
    name: 'Amalfi Coast',
    date: 'Sept 2024',
    photos: 198,
    contributors: ['S', 'M'],
    cover: 'https://images.unsplash.com/photo-1633321702518-7feccafb94d5?w=800',
  },
  {
    name: 'Kyoto Autumn',
    date: 'Nov 2024',
    photos: 445,
    contributors: ['S', 'M', 'K', 'R', 'T'],
    cover: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800',
  },
  {
    name: 'New York Weekend',
    date: 'Feb 2025',
    photos: 89,
    contributors: ['S', 'M'],
    cover: 'https://images.unsplash.com/photo-1499092346302-b8d7a599b2c9?w=800',
  },
]

const AVATAR_COLORS = ['#C4862A', '#4A5568', '#2D6A4F', '#6B4EFF', '#E05C5C', '#2F80ED']
const SUB_TABS = ['All', 'Day 1', 'Day 2', 'Food', 'People']

function AvatarStack({ initials }: { initials: string[] }) {
  return (
    <div className="flex items-center">
      {initials.map((c, i) => (
        <div
          key={i}
          style={{
            width: 28,
            height: 28,
            borderRadius: '50%',
            background: AVATAR_COLORS[i % AVATAR_COLORS.length],
            marginLeft: i > 0 ? -8 : 0,
            zIndex: initials.length - i,
            border: '2px solid rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-body)',
            fontSize: 11,
            fontWeight: 600,
            color: 'white',
            position: 'relative',
          }}
        >
          {c}
        </div>
      ))}
    </div>
  )
}

export default function AlbumsPage() {
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState('All')

  if (selectedAlbum !== null) {
    const trip = trips[selectedAlbum]
    return (
      <PageWrapper key={selectedAlbum}>
        <div className="min-h-screen pt-24 pb-16">
          <div className="max-w-6xl mx-auto px-6">
            {/* Top bar */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <button
                  onClick={() => setSelectedAlbum(null)}
                  className="flex items-center gap-1.5 mb-4 transition-colors"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 14,
                    color: 'var(--text-secondary)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  <ArrowLeft size={16} />
                  Back to trips
                </button>

                <h1
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 40,
                    color: 'var(--text-primary)',
                    lineHeight: 1.15,
                  }}
                >
                  {trip.name}
                </h1>

                <p
                  className="mt-1"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 14,
                    color: 'var(--text-secondary)',
                  }}
                >
                  {trip.date} · {trip.photos} photos
                </p>

                <div className="mt-3">
                  <AvatarStack initials={trip.contributors} />
                </div>
              </div>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 mt-16 px-4 py-2 transition-colors"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  color: '#E05C5C',
                  border: '1.5px solid #E05C5C',
                  borderRadius: 'var(--radius-pill)',
                  background: 'transparent',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(224,92,92,0.1)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <Lock size={14} />
                End Trip
              </motion.button>
            </div>

            {/* Sub-album tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {SUB_TABS.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 14,
                    fontWeight: 500,
                    padding: '6px 16px',
                    borderRadius: 'var(--radius-pill)',
                    background: activeTab === tab ? 'var(--accent)' : 'transparent',
                    color: activeTab === tab ? 'white' : 'var(--text-secondary)',
                    border: `1.5px solid ${activeTab === tab ? 'var(--accent)' : 'var(--border)'}`,
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Photo grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {Array.from({ length: 12 }, (_, i) => GENERIC[i % 4]).map((src, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.18 }}
                  style={{
                    position: 'relative',
                    paddingBottom: '100%',
                    borderRadius: 8,
                    overflow: 'hidden',
                    cursor: 'pointer',
                  }}
                >
                  <Image fill src={src} alt={`Photo ${i + 1}`} style={{ objectFit: 'cover' }} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header row */}
          <div className="flex items-end justify-between mb-10">
            <div>
              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 48,
                  color: 'var(--text-primary)',
                  lineHeight: 1.1,
                }}
              >
                Your Trips
              </h1>
              <p
                className="mt-1"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 16,
                  color: 'var(--text-secondary)',
                }}
              >
                12 adventures, 3,847 memories
              </p>
            </div>

            <motion.button
              whileHover={{ y: -2, boxShadow: '0 4px 16px rgba(196,134,42,0.35)' }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-5 py-2.5"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 14,
                fontWeight: 500,
                background: 'var(--accent)',
                color: 'white',
                borderRadius: 'var(--radius-pill)',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <Plus size={16} />
              New Trip
            </motion.button>
          </div>

          {/* Albums grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trips.map((trip, index) => (
              <motion.div
                key={trip.name}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                  borderBottomColor: 'var(--accent)',
                }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedAlbum(index)}
                style={{
                  borderRadius: 'var(--radius-card)',
                  border: '1px solid var(--border)',
                  borderBottom: '2px solid transparent',
                  overflow: 'hidden',
                  background: 'var(--surface)',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                {/* Cover photo */}
                <div style={{ position: 'relative', paddingBottom: '58%' }}>
                  <Image
                    fill
                    src={trip.cover}
                    alt={trip.name}
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Info */}
                <div className="p-4">
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 20,
                      color: 'var(--text-primary)',
                      lineHeight: 1.2,
                    }}
                  >
                    {trip.name}
                  </p>
                  <p
                    className="mt-0.5"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 13,
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {trip.date}
                  </p>

                  {/* Footer row */}
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center">
                      <Camera size={14} color="var(--text-secondary)" />
                      <span
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: 13,
                          color: 'var(--text-secondary)',
                          marginLeft: 6,
                        }}
                      >
                        {trip.photos}
                      </span>
                    </div>
                    <AvatarStack initials={trip.contributors} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
