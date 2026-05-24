'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ImagePlus, Check } from 'lucide-react'
import PageWrapper from '@/components/PageWrapper'

const GENERIC = [
  'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400',
  'https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=400',
  'https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=400',
  'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=400',
]

const SANTORINI = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'

const PRESETS = [
  { name: 'Golden Hour',  filter: 'sepia(0.4) saturate(1.3) brightness(1.1)',        img: GENERIC[0] },
  { name: 'Muted Film',   filter: 'saturate(0.6) contrast(0.9) brightness(1.05)',    img: GENERIC[1] },
  { name: 'Vivid Coast',  filter: 'saturate(1.6) hue-rotate(10deg) brightness(1.1)', img: GENERIC[2] },
  { name: 'Noir City',    filter: 'grayscale(0.9) contrast(1.3)',                    img: GENERIC[3] },
  { name: 'Velvet Dusk',  filter: 'sepia(0.2) hue-rotate(290deg) saturate(1.4)',     img: GENERIC[0] },
  { name: 'Arctic Light', filter: 'saturate(0.5) brightness(1.2) contrast(0.95)',    img: GENERIC[1] },
]

export default function FiltersPage() {
  const [selectedPreset, setSelectedPreset] = useState<number | null>(null)
  const [prompt, setPrompt] = useState('')

  return (
    <PageWrapper>
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">

          {/* Page title */}
          <div className="mb-10">
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 48,
                color: 'var(--text-primary)',
                lineHeight: 1.1,
              }}
            >
              AI Filters
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 16,
                color: 'var(--text-secondary)',
                marginTop: 4,
              }}
            >
              Describe a look or choose a preset — applied in one click.
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12">

            {/* ── Left: Before / After ── */}
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 12,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--text-secondary)',
                  marginBottom: 8,
                }}
              >
                Before
              </p>

              <div style={{ position: 'relative', paddingBottom: '66%', borderRadius: 12, overflow: 'hidden' }}>
                <Image fill src={SANTORINI} alt="Original photo" style={{ objectFit: 'cover' }} />
              </div>

              <div style={{ height: 2, background: 'var(--accent)', margin: '16px 0', width: '100%' }} />

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 12,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--text-secondary)',
                  marginBottom: 8,
                }}
              >
                After
              </p>

              <div style={{ position: 'relative', paddingBottom: '66%', borderRadius: 12, overflow: 'hidden' }}>
                <Image
                  fill
                  src={SANTORINI}
                  alt="Filtered photo"
                  style={{
                    objectFit: 'cover',
                    filter: 'sepia(0.3) contrast(1.1) saturate(1.2) brightness(1.05)',
                  }}
                />
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  fontStyle: 'italic',
                  color: 'var(--text-secondary)',
                  marginTop: 10,
                }}
              >
                Golden Hour filter applied · 1 credit used
              </p>
            </div>

            {/* ── Right: Controls ── */}
            <div>
              {/* Credits badge */}
              <div className="flex justify-end mb-6">
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 13,
                    fontWeight: 500,
                    padding: '5px 14px',
                    borderRadius: 'var(--radius-pill)',
                    background: '#FFFBEB',
                    color: '#92400E',
                    border: '1px solid #FDE68A',
                  }}
                >
                  ✦ 185 credits remaining
                </span>
              </div>

              {/* Prompt textarea */}
              <div className="mb-6">
                <label
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 14,
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    display: 'block',
                    marginBottom: 8,
                  }}
                >
                  Describe your filter
                </label>
                <textarea
                  rows={3}
                  value={prompt}
                  onChange={e => setPrompt(e.target.value)}
                  placeholder="Make this feel like a golden hour film photo from the 70s..."
                  style={{
                    width: '100%',
                    fontFamily: 'var(--font-body)',
                    fontSize: 14,
                    border: '1px solid var(--border)',
                    borderRadius: 12,
                    padding: 12,
                    color: 'var(--text-primary)',
                    background: 'white',
                    resize: 'none',
                    outline: 'none',
                  }}
                />
                <motion.button
                  whileHover={{ y: -2, boxShadow: '0 4px 16px rgba(196,134,42,0.35)' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full mt-2 py-3 text-sm font-medium text-white"
                  style={{
                    background: 'var(--accent)',
                    borderRadius: 'var(--radius-pill)',
                    fontFamily: 'var(--font-body)',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Generate Filter ���
                </motion.button>
              </div>

              {/* Reference image drop zone */}
              <div className="mb-6">
                <label
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 14,
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    display: 'block',
                    marginBottom: 8,
                  }}
                >
                  Upload reference image
                </label>
                <div
                  style={{
                    border: '1.5px dashed var(--border)',
                    borderRadius: 12,
                    padding: 24,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 8,
                    cursor: 'pointer',
                    background: 'white',
                  }}
                >
                  <ImagePlus size={24} color="var(--accent)" />
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 14,
                      color: 'var(--text-secondary)',
                      margin: 0,
                    }}
                  >
                    Drop a reference photo here
                  </p>
                </div>
              </div>

              {/* Preset grid */}
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 14,
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    marginBottom: 10,
                  }}
                >
                  Preset filters
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {PRESETS.map((preset, i) => {
                    const active = selectedPreset === i
                    return (
                      <motion.div
                        key={preset.name}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.18 }}
                        onClick={() => setSelectedPreset(active ? null : i)}
                        style={{
                          borderRadius: 8,
                          overflow: 'hidden',
                          cursor: 'pointer',
                          position: 'relative',
                          border: `1.5px solid ${active ? 'var(--accent)' : 'var(--border)'}`,
                          boxShadow: active ? '0 0 0 2px rgba(196,134,42,0.2)' : 'none',
                        }}
                      >
                        <div style={{ position: 'relative', paddingBottom: '70%' }}>
                          <Image
                            fill
                            src={preset.img}
                            alt={preset.name}
                            style={{ objectFit: 'cover', filter: preset.filter }}
                            sizes="150px"
                          />
                        </div>
                        <div style={{ padding: '6px 8px', background: 'white' }}>
                          <p
                            style={{
                              fontFamily: 'var(--font-body)',
                              fontSize: 12,
                              fontWeight: 500,
                              color: active ? 'var(--accent)' : 'var(--text-primary)',
                              margin: 0,
                            }}
                          >
                            {preset.name}
                          </p>
                        </div>
                        {active && (
                          <div
                            style={{
                              position: 'absolute',
                              top: 6,
                              right: 6,
                              background: 'var(--accent)',
                              borderRadius: '50%',
                              width: 20,
                              height: 20,
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
              </div>

              {/* Bottom note */}
              <p
                className="mt-6"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  color: 'var(--text-secondary)',
                }}
              >
                Credits reset monthly. Pro plan includes 200 credits — enough for your whole trip.
              </p>
            </div>

          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
