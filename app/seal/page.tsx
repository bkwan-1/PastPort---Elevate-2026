'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Flame, Lock, Play } from 'lucide-react'
import PageWrapper from '@/components/PageWrapper'
import BottomNav from '@/components/BottomNav'

const GENERIC = [
  'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400',
  'https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=400',
  'https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=400',
  'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=400',
]

const DURATIONS = ['60 seconds', '2 minutes', '5 minutes']
const VIBES = ['Cinematic & Epic', 'Indie & Warm', 'Upbeat & Fun', 'Soft & Nostalgic']
const GEN_MESSAGES = [
  'Sealing your memories...',
  'Weaving your moments together',
  'Capturing the feeling',
  'Almost ready...',
]
const DOT_X = [5, 12, 20, 28, 35, 43, 52, 60, 68, 76, 84, 92]

const GRAIN_BG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")"

type Phase = 'idle' | 'questions' | 'generating' | 'complete'

function PillButton({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        fontWeight: 500,
        padding: '8px 18px',
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        border: `1.5px solid ${active ? 'var(--accent)' : 'var(--border)'}`,
        background: active ? 'var(--accent)' : 'transparent',
        color: active ? 'white' : 'var(--text-secondary)',
        transition: 'all 0.15s',
      }}
    >
      {children}
    </button>
  )
}

export default function SealPage() {
  const [phase, setPhase] = useState<Phase>('idle')
  const [step, setStep] = useState(1)
  const [durAnswer, setDurAnswer] = useState('')
  const [vibeAnswer, setVibeAnswer] = useState('')
  const [photoAnswer, setPhotoAnswer] = useState<number | null>(null)
  const [msgIdx, setMsgIdx] = useState(0)

  useEffect(() => {
    if (phase !== 'generating') return
    const interval = setInterval(() => setMsgIdx(i => (i + 1) % GEN_MESSAGES.length), 1500)
    return () => clearInterval(interval)
  }, [phase])

  useEffect(() => {
    if (phase !== 'generating') return
    const timeout = setTimeout(() => setPhase('complete'), 5500)
    return () => clearTimeout(timeout)
  }, [phase])

  const nextDisabled =
    step === 1 ? !durAnswer : step === 2 ? !vibeAnswer : photoAnswer === null

  return (
    <PageWrapper>
      <div style={{ paddingBottom: 96 }}>

        {/* IDLE */}
        {phase === 'idle' && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: '80px 24px 32px',
              maxWidth: 440,
              margin: '0 auto',
            }}
          >
            <Flame size={36} color="var(--accent)" style={{ marginBottom: 24 }} />

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'clamp(36px, 8vw, 48px)',
                color: 'var(--text-primary)',
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Seal this chapter.
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 16,
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginTop: 16,
                maxWidth: 360,
              }}
            >
              When your group is ready, this trip becomes permanent. A sealed memory.
            </p>

            <motion.button
              whileHover={{ y: -2, boxShadow: '0 4px 20px rgba(196,134,42,0.4)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setPhase('questions')}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 16,
                fontWeight: 500,
                padding: '16px 40px',
                background: 'var(--accent)',
                color: 'white',
                borderRadius: 'var(--radius-pill)',
                border: 'none',
                cursor: 'pointer',
                marginTop: 32,
              }}
            >
              End &amp; Seal
            </motion.button>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                fontStyle: 'italic',
                color: 'var(--text-secondary)',
                marginTop: 20,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <Lock size={13} />
              This action is permanent. Once sealed, no new media can be added.
            </p>
          </div>
        )}

        {/* QUESTIONS */}
        {phase === 'questions' && (
          <div style={{ padding: '64px 24px 0', maxWidth: 440, margin: '0 auto' }}>
            <div
              style={{
                height: 3,
                background: 'var(--border)',
                borderRadius: 99,
                marginBottom: 24,
                overflow: 'hidden',
              }}
            >
              <motion.div
                style={{ height: '100%', background: 'var(--accent)', borderRadius: 99 }}
                animate={{ width: `${(step / 3) * 100}%` }}
                transition={{ duration: 0.4, ease: 'easeOut' as const }}
              />
            </div>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                color: 'var(--text-secondary)',
                marginBottom: 24,
              }}
            >
              Step {step} of 3
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25, ease: 'easeOut' as const }}
              >
                {step === 1 && (
                  <>
                    <h2
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontStyle: 'italic',
                        fontSize: 30,
                        color: 'var(--text-primary)',
                        lineHeight: 1.2,
                        margin: 0,
                      }}
                    >
                      How long should your memory be?
                    </h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 24 }}>
                      {DURATIONS.map(d => (
                        <PillButton key={d} active={durAnswer === d} onClick={() => setDurAnswer(d)}>
                          {d}
                        </PillButton>
                      ))}
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <h2
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontStyle: 'italic',
                        fontSize: 30,
                        color: 'var(--text-primary)',
                        lineHeight: 1.2,
                        margin: 0,
                      }}
                    >
                      Choose a music vibe:
                    </h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 24 }}>
                      {VIBES.map(v => (
                        <PillButton key={v} active={vibeAnswer === v} onClick={() => setVibeAnswer(v)}>
                          {v}
                        </PillButton>
                      ))}
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <h2
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontStyle: 'italic',
                        fontSize: 30,
                        color: 'var(--text-primary)',
                        lineHeight: 1.2,
                        margin: 0,
                      }}
                    >
                      Pick your favourite moment:
                    </h2>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: 12,
                        marginTop: 24,
                      }}
                    >
                      {GENERIC.map((src, i) => (
                        <div
                          key={i}
                          onClick={() => setPhotoAnswer(i)}
                          style={{
                            position: 'relative',
                            paddingBottom: '70%',
                            borderRadius: 10,
                            overflow: 'hidden',
                            cursor: 'pointer',
                            outline: photoAnswer === i ? '3px solid var(--accent)' : '3px solid transparent',
                            outlineOffset: 2,
                            transition: 'outline-color 0.15s',
                          }}
                        >
                          <Image
                            fill
                            src={src}
                            alt={`Moment ${i + 1}`}
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 50vw, 200px"
                          />
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>

            <motion.button
              whileHover={nextDisabled ? {} : { y: -2, boxShadow: '0 4px 16px rgba(196,134,42,0.35)' }}
              whileTap={nextDisabled ? {} : { scale: 0.97 }}
              disabled={nextDisabled}
              onClick={() => (step < 3 ? setStep(s => s + 1) : setPhase('generating'))}
              style={{
                width: '100%',
                marginTop: 32,
                padding: '14px 0',
                fontFamily: 'var(--font-body)',
                fontSize: 15,
                fontWeight: 500,
                background: nextDisabled ? 'var(--surface)' : 'var(--accent)',
                color: nextDisabled ? 'var(--text-secondary)' : 'white',
                borderRadius: 'var(--radius-pill)',
                border: `1px solid ${nextDisabled ? 'var(--border)' : 'transparent'}`,
                cursor: nextDisabled ? 'not-allowed' : 'pointer',
                transition: 'background 0.2s, color 0.2s',
              }}
            >
              {step < 3 ? 'Next →' : 'Seal the Memory →'}
            </motion.button>
          </div>
        )}

        {/* GENERATING */}
        {phase === 'generating' && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: '120px 24px 0',
            }}
          >
            <motion.p
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' as const }}
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 36,
                color: 'var(--accent)',
                margin: 0,
              }}
            >
              PastPort
            </motion.p>

            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 26,
                color: 'var(--text-primary)',
                marginTop: 24,
              }}
            >
              Sealing your chapter...
            </p>

            <div
              style={{
                width: '100%',
                maxWidth: 360,
                height: 4,
                background: 'var(--border)',
                borderRadius: 99,
                margin: '24px auto',
                overflow: 'hidden',
              }}
            >
              <motion.div
                style={{ height: '100%', background: 'var(--accent)', borderRadius: 99 }}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 5, ease: 'easeInOut' as const }}
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={msgIdx}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease: 'easeOut' as const }}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 15,
                  color: 'var(--text-secondary)',
                }}
              >
                {GEN_MESSAGES[msgIdx]}
              </motion.p>
            </AnimatePresence>
          </div>
        )}

        {/* COMPLETE */}
        {phase === 'complete' && (
          <div style={{ padding: '56px 24px 0', maxWidth: 520, margin: '0 auto' }}>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'clamp(28px, 6vw, 40px)',
                color: 'var(--text-primary)',
                lineHeight: 1.15,
                marginBottom: 24,
              }}
            >
              Your chapter is sealed.
            </h1>

            {/* Video player mock */}
            <div
              style={{
                position: 'relative',
                aspectRatio: '16/9',
                background: '#0C0C0A',
                borderRadius: 14,
                overflow: 'hidden',
                border: '1px solid var(--border)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 2,
                  pointerEvents: 'none',
                  opacity: 0.06,
                  backgroundImage: GRAIN_BG,
                  backgroundSize: '200px 200px',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 3,
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <Play size={24} color="white" style={{ marginLeft: 3 }} />
                </motion.div>
              </div>
              <div style={{ position: 'absolute', bottom: 16, left: 16, zIndex: 3 }}>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: 22,
                    color: 'white',
                    margin: 0,
                  }}
                >
                  Tokyo 2025
                </p>
              </div>
              {DOT_X.map((x, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 0, y: -100 }}
                  transition={{
                    duration: 2 + (i % 3) * 0.5,
                    delay: i * 0.18,
                    ease: 'easeOut' as const,
                  }}
                  style={{
                    position: 'absolute',
                    bottom: 16,
                    left: `${x}%`,
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    zIndex: 4,
                  }}
                />
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 24, justifyContent: 'center' }}>
              <motion.button
                whileHover={{ y: -2, boxShadow: '0 4px 16px rgba(196,134,42,0.35)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  fontWeight: 500,
                  padding: '12px 28px',
                  background: 'var(--accent)',
                  color: 'white',
                  borderRadius: 'var(--radius-pill)',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Save to Time Capsule
              </motion.button>
              <motion.button
                whileHover={{ y: -2, boxShadow: '0 4px 16px rgba(196,134,42,0.15)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  fontWeight: 500,
                  padding: '12px 28px',
                  background: 'transparent',
                  color: 'var(--accent)',
                  borderRadius: 'var(--radius-pill)',
                  border: '1.5px solid var(--accent)',
                  cursor: 'pointer',
                }}
              >
                Share
              </motion.button>
            </div>
          </div>
        )}

      </div>
      <BottomNav />
    </PageWrapper>
  )
}
