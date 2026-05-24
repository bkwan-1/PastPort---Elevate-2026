'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'transparent'}`,
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

        <div className="flex items-center gap-7">
          {links.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + '/')
            return (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium transition-colors pb-0.5"
                style={
                  active
                    ? {
                        color: 'var(--accent)',
                        borderBottom: '2px solid var(--accent)',
                      }
                    : {
                        color: 'var(--text-secondary)',
                      }
                }
              >
                {label}
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
            }}
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </nav>
  )
}
