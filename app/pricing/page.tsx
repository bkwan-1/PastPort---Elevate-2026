'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Sparkles, ChevronDown } from 'lucide-react'
import PageWrapper from '@/components/PageWrapper'

interface Feature {
  text: string
  highlight?: boolean
}

interface Plan {
  name: string
  monthlyPrice: string
  annualPrice: string
  features: Feature[]
  cta: string
  ctaStyle: 'filled' | 'outlined'
  featured: boolean
  badge?: string
}

const plans: Plan[] = [
  {
    name: 'Free',
    monthlyPrice: '$0',
    annualPrice: '$0',
    features: [
      { text: '10GB storage' },
      { text: '20 credits/month' },
      { text: 'Trip Albums' },
      { text: 'Group Albums' },
      { text: 'Map pins' },
    ],
    cta: 'Start Free',
    ctaStyle: 'outlined',
    featured: false,
  },
  {
    name: 'Pro',
    monthlyPrice: '$8.99',
    annualPrice: '$71.99',
    features: [
      { text: '200GB storage' },
      { text: '200 credits/month' },
      { text: 'Everything in Free' },
      { text: 'Group Movie Creation', highlight: true },
      { text: 'Priority support' },
    ],
    cta: 'Get Pro',
    ctaStyle: 'filled',
    featured: true,
    badge: 'Most Popular',
  },
  {
    name: 'Max',
    monthlyPrice: '$17.99',
    annualPrice: '$143.99',
    features: [
      { text: '500GB storage' },
      { text: '600 credits/month' },
      { text: 'Everything in Pro' },
      { text: 'Early feature access' },
    ],
    cta: 'Get Max',
    ctaStyle: 'outlined',
    featured: false,
  },
]

const faq = [
  {
    q: 'Can I upgrade or downgrade at any time?',
    a: 'Yes, changes apply immediately with prorated billing.',
  },
  {
    q: 'What happens to my movies if I downgrade?',
    a: 'Movies already generated are kept forever. Creating new ones requires Pro or Max.',
  },
  {
    q: 'Is there a student discount?',
    a: 'Coming soon — join the waitlist.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
}

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <PageWrapper>
      <div className="min-h-screen pt-16 pb-24">
        {/* Header */}
        <div className="text-center py-16 px-6">
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(36px, 5vw, 52px)',
              color: 'var(--text-primary)',
              lineHeight: 1.1,
            }}
          >
            Simple, Honest Pricing
          </h1>
          <p
            className="mt-3"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 18,
              color: 'var(--text-secondary)',
            }}
          >
            Your memories deserve more than a camera roll.
          </p>

          {/* Monthly / Annual toggle */}
          <div className="flex items-center justify-center mt-8">
            <div
              style={{
                display: 'inline-flex',
                background: 'var(--border)',
                borderRadius: 9999,
                padding: 4,
                position: 'relative',
              }}
            >
              {/* Sliding amber pill */}
              <motion.div
                animate={{ x: isAnnual ? '100%' : '0%' }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                style={{
                  position: 'absolute',
                  top: 4,
                  left: 4,
                  width: 'calc(50% - 4px)',
                  height: 'calc(100% - 8px)',
                  background: 'var(--accent)',
                  borderRadius: 9999,
                }}
              />
              <button
                onClick={() => setIsAnnual(false)}
                style={{
                  width: 110,
                  padding: '8px 0',
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  fontWeight: 500,
                  color: isAnnual ? 'var(--text-secondary)' : 'white',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'color 0.2s',
                }}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                style={{
                  width: 110,
                  padding: '8px 0',
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  fontWeight: 500,
                  color: isAnnual ? 'white' : 'var(--text-secondary)',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'color 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 6,
                }}
              >
                Annual
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: '#4ade80',
                    background: 'rgba(74,222,128,0.12)',
                    padding: '1px 6px',
                    borderRadius: 9999,
                    lineHeight: 1.6,
                  }}
                >
                  Save 33%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {plans.map(plan => (
            <motion.div key={plan.name} variants={cardVariants}>
              <div
                style={{
                  transform: plan.featured ? 'scale(1.03)' : 'scale(1)',
                  position: 'relative',
                  background: plan.featured ? 'var(--card)' : 'var(--surface)',
                  border: `1px solid ${plan.featured ? 'var(--accent)' : 'var(--border)'}`,
                  borderLeft: plan.featured ? '3px solid var(--accent)' : undefined,
                  borderRadius: 'var(--radius-card)',
                  padding: '32px 28px',
                  boxShadow: plan.featured ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                }}
              >
                {/* Most Popular badge */}
                {plan.badge && (
                  <span
                    style={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      fontFamily: 'var(--font-body)',
                      fontSize: 11,
                      fontWeight: 600,
                      color: 'white',
                      background: 'var(--accent)',
                      padding: '3px 10px',
                      borderRadius: 9999,
                    }}
                  >
                    {plan.badge}
                  </span>
                )}

                {/* Plan name */}
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 13,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: plan.featured ? 'var(--accent)' : 'var(--text-secondary)',
                    marginBottom: 16,
                  }}
                >
                  {plan.name}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-6">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={isAnnual ? `${plan.name}-annual` : `${plan.name}-monthly`}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2, ease: 'easeOut' as const }}
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 48,
                        color: 'var(--text-primary)',
                        lineHeight: 1,
                      }}
                    >
                      {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </motion.span>
                  </AnimatePresence>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 16,
                      color: 'var(--text-secondary)',
                    }}
                  >
                    /month
                  </span>
                </div>

                {/* Features */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {plan.features.map(feat => (
                    <li
                      key={feat.text}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        fontFamily: 'var(--font-body)',
                        fontSize: 14,
                      }}
                    >
                      {feat.highlight ? (
                        <Sparkles size={16} color="var(--accent)" style={{ flexShrink: 0 }} />
                      ) : (
                        <Check size={16} color="var(--accent)" style={{ flexShrink: 0 }} />
                      )}
                      <span
                        style={{
                          color: feat.highlight ? 'var(--accent)' : 'var(--text-primary)',
                          fontWeight: feat.highlight ? 600 : 400,
                        }}
                      >
                        {feat.text}
                        {feat.highlight && ' ✦'}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                <motion.button
                  whileHover={{
                    y: -2,
                    boxShadow:
                      plan.ctaStyle === 'filled'
                        ? '0 4px 16px rgba(196,134,42,0.35)'
                        : '0 4px 16px rgba(196,134,42,0.15)',
                  }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    width: '100%',
                    padding: '12px 0',
                    fontFamily: 'var(--font-body)',
                    fontSize: 14,
                    fontWeight: 600,
                    borderRadius: 'var(--radius-pill)',
                    cursor: 'pointer',
                    border: '1.5px solid var(--accent)',
                    background: plan.ctaStyle === 'filled' ? 'var(--accent)' : 'transparent',
                    color: plan.ctaStyle === 'filled' ? 'white' : 'var(--accent)',
                    transition: 'background 0.15s',
                  }}
                >
                  {plan.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Credit explainer */}
        <p
          className="text-center mt-8 px-6"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 14,
            color: 'var(--text-secondary)',
          }}
        >
          1 credit = 1 photo filter &nbsp;·&nbsp; 3 credits = 1 video filter &nbsp;·&nbsp; 25–40 credits = 1 group movie
        </p>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto mt-16 px-6">
          <h2
            className="text-center mb-8"
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 32,
              color: 'var(--text-primary)',
            }}
          >
            Common Questions
          </h2>

          <div>
            {faq.map((item, i) => (
              <div
                key={i}
                style={{
                  borderBottom: '1px solid var(--border)',
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full py-4 flex items-center justify-between text-left"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 15,
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {item.q}
                  <motion.span
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' as const }}
                    style={{ display: 'flex', flexShrink: 0, marginLeft: 16 }}
                  >
                    <ChevronDown size={18} color="var(--text-secondary)" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' as const }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p
                        className="pb-4"
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: 14,
                          color: 'var(--text-secondary)',
                          lineHeight: 1.6,
                        }}
                      >
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
