'use client'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingBar() {
  const pathname = usePathname()
  const [animKey, setAnimKey] = useState(0)
  const [show, setShow] = useState(false)
  const isFirst = useRef(true)

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false
      return
    }
    setAnimKey(k => k + 1)
    setShow(true)
    const t = setTimeout(() => setShow(false), 650)
    return () => clearTimeout(t)
  }, [pathname])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key={animKey}
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            scaleX: { duration: 0.4, ease: 'easeOut' as const },
            opacity: { duration: 0.2 },
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: 'var(--accent)',
            zIndex: 9999,
            pointerEvents: 'none',
            transformOrigin: 'left center',
          }}
        />
      )}
    </AnimatePresence>
  )
}
