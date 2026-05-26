'use client'
import { motion } from 'framer-motion'
import PageWrapper from '@/components/PageWrapper'
import BottomNav from '@/components/BottomNav'

export default function FriendsPage() {
  return (
    <PageWrapper>
      <div style={{ padding: '56px 20px 0', paddingBottom: 96 }}>
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
          Friends
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 16,
            color: 'var(--text-secondary)',
            marginTop: 12,
            lineHeight: 1.6,
          }}
        >
          Social features coming soon.
        </p>

        <div
          style={{
            width: 48,
            height: 1,
            background: 'var(--accent)',
            margin: '24px 0',
          }}
        />

        <motion.button
          whileHover={{ y: -2, boxShadow: '0 4px 16px rgba(196,134,42,0.2)' }}
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
          Join the waitlist
        </motion.button>
      </div>
      <BottomNav />
    </PageWrapper>
  )
}
