'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import PageWrapper from '@/components/PageWrapper'
import BottomNav from '@/components/BottomNav'

const TOKYO   = 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800'
const GENERIC = [
  'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400',
  'https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=400',
  'https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=400',
]

const presets = [
  { name: '1999 Tokyo Rain',      tags: ['neon', 'grain', 'reflection'], filter: 'sepia(0.4) saturate(1.3) brightness(1.1)',      img: TOKYO      },
  { name: 'Golden Childhood',     tags: ['amber', 'bloom', 'soft'],      filter: 'sepia(0.2) saturate(1.5) brightness(1.15)',     img: GENERIC[0] },
  { name: 'European Train Movie', tags: ['muted', 'warm', 'drift'],      filter: 'saturate(0.7) contrast(0.9) brightness(1.05)', img: GENERIC[1] },
  { name: 'Super 8, August',      tags: ['halation', 'faded', 'light'],  filter: 'sepia(0.3) contrast(0.85) brightness(1.1)',     img: GENERIC[2] },
]

export default function StudioPage() {
  const [selected, setSelected] = useState<number | null>(null)
  const [prompt, setPrompt] = useState('')

  return (
    <PageWrapper>
      <div style={{ paddingBottom: 96 }}>

        {/* Header */}
        <div style={{ padding: '56px 20px 0' }}>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 36,
              color: 'var(--text-primary)',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            The Filter Lab
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 14,
              color: 'var(--text-secondary)',
              marginTop: 8,
              lineHeight: 1.6,
            }}
          >
            Develop a feeling. Describe a mood. We&rsquo;ll match the film stock.
          </p>
        </div>

        {/* Film preset grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 12,
            padding: '24px 20px 0',
          }}
        >
          {presets.map((preset, i) => {
            const active = selected === i
            return (
              <motion.div
                key={preset.name}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.18 }}
                onClick={() => setSelected(active ? null : i)}
                style={{
                  height: 160,
                  borderRadius: 16,
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                  border: `2px solid ${active ? 'var(--accent)' : 'transparent'}`,
                }}
              >
                <Image
                  fill
                  src={preset.img}
                  alt={preset.name}
                  style={{ objectFit: 'cover', filter: preset.filter }}
                  sizes="(max-width: 768px) 50vw, 200px"
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 55%)',
                  }}
                />

                {/* Tags */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 32,
                    left: 12,
                    display: 'flex',
                    gap: 4,
                    flexWrap: 'wrap',
                  }}
                >
                  {preset.tags.map(tag => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 10,
                        color: 'rgba(240,235,227,0.6)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Name */}
                <p
                  style={{
                    position: 'absolute',
                    bottom: 10,
                    left: 12,
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: 16,
                    color: 'white',
                    margin: 0,
                  }}
                >
                  {preset.name}
                </p>

                {/* Active check */}
                {active && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      width: 22,
                      height: 22,
                      borderRadius: '50%',
                      background: 'var(--accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Check size={12} color="white" />
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Develop prompt */}
        <div style={{ padding: '24px 20px 0' }}>
          <textarea
            rows={3}
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            placeholder="Describe a mood or aesthetic..."
            style={{
              width: '100%',
              fontFamily: 'var(--font-body)',
              fontSize: 14,
              border: '1px solid var(--border)',
              borderRadius: 12,
              padding: 14,
              color: 'var(--text-primary)',
              background: 'var(--surface)',
              resize: 'none',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
          <motion.button
            whileHover={{ y: -2, boxShadow: '0 4px 16px rgba(196,134,42,0.35)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              width: '100%',
              marginTop: 12,
              padding: '14px 0',
              fontFamily: 'var(--font-body)',
              fontSize: 15,
              fontWeight: 500,
              background: 'var(--accent)',
              color: 'white',
              borderRadius: 'var(--radius-pill)',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Develop &rarr;
          </motion.button>
        </div>

      </div>
      <BottomNav />
    </PageWrapper>
  )
}
