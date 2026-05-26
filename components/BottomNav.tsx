'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BookOpen, Globe, Wand2, Users, Lock } from 'lucide-react'

const tabs = [
  { href: '/home',    label: 'Memories', Icon: BookOpen },
  { href: '/atlas',   label: 'Atlas',    Icon: Globe    },
  { href: '/studio',  label: 'Studio',   Icon: Wand2    },
  { href: '/friends', label: 'Friends',  Icon: Users    },
  { href: '/seal',    label: 'Seal',     Icon: Lock     },
]

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <nav
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: 'rgba(12,12,10,0.94)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        paddingBottom: 'env(safe-area-inset-bottom, 20px)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        {tabs.map(({ href, label, Icon }) => {
          const active = pathname === href || pathname.startsWith(href + '/')
          return (
            <Link
              key={href}
              href={href}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
                color: active ? 'var(--accent)' : 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.15s',
              }}
            >
              <Icon size={20} />
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                }}
              >
                {label}
              </span>
              {active && (
                <div
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    marginTop: -2,
                  }}
                />
              )}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
