'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/albums', label: 'Albums' },
  { href: '/filters', label: 'Filters' },
  { href: '/movie', label: 'Movie' },
  { href: '/map', label: 'Map' },
  { href: '/pricing', label: 'Pricing' },
]

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const isScrolledOrOpen = scrolled || menuOpen

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: isScrolledOrOpen ? 'rgba(12,12,10,0.92)' : 'transparent',
        backdropFilter: isScrolledOrOpen ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: isScrolledOrOpen ? 'blur(12px)' : 'none',
        borderBottom: `1px solid ${isScrolledOrOpen ? 'var(--border)' : 'transparent'}`,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: '24px',
            color: 'var(--text-primary)',
            letterSpacing: '-0.01em',
          }}
        >
          PastPort
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + '/')
            return (
              <Link
                key={href}
                href={href}
                className="relative text-sm font-medium pb-1.5 transition-colors"
                style={{ color: active ? 'var(--accent)' : 'var(--text-secondary)' }}
              >
                {label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: 'var(--accent)',
                      borderRadius: 1,
                    }}
                    transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                  />
                )}
              </Link>
            )
          })}

          <motion.button
            whileHover={{ y: -2, boxShadow: '0 4px 16px rgba(196,134,42,0.35)' }}
            whileTap={{ scale: 0.97 }}
            className="px-5 py-2 text-sm font-medium text-white"
            style={{
              background: 'var(--accent)',
              borderRadius: 'var(--radius-pill)',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Get Started
          </motion.button>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="md:hidden flex items-center justify-center w-9 h-9"
          onClick={() => setMenuOpen(v => !v)}
          style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-primary)' }}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={menuOpen ? 'close' : 'open'}
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              transition={{ duration: 0.15 }}
              style={{ display: 'flex' }}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' as const }}
            style={{ overflow: 'hidden', borderTop: '1px solid var(--border)' }}
          >
            <div
              style={{
                padding: '16px 24px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
              }}
            >
              {links.map(({ href, label }) => {
                const active = pathname === href || pathname.startsWith(href + '/')
                return (
                  <Link
                    key={href}
                    href={href}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 15,
                      fontWeight: 500,
                      padding: '10px 0',
                      color: active ? 'var(--accent)' : 'var(--text-secondary)',
                      borderBottom: '1px solid var(--border)',
                    }}
                  >
                    {label}
                  </Link>
                )
              })}

              <motion.button
                whileHover={{ y: -2, boxShadow: '0 4px 16px rgba(196,134,42,0.35)' }}
                whileTap={{ scale: 0.97 }}
                className="mt-4 w-full py-3 text-sm font-medium text-white"
                style={{
                  background: 'var(--accent)',
                  borderRadius: 'var(--radius-pill)',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
