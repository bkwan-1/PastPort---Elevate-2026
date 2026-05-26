import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className="py-8 text-center"
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        fontFamily: 'var(--font-body)',
        fontSize: '13px',
        color: 'var(--text-secondary)',
      }}
    >
      <p className="mb-2">© 2026 PastPort · A travel memory studio</p>
      <p className="mb-3 flex items-center justify-center gap-2">
        <Link href="/" className="hover:text-[#F0EBE3] transition-colors">About</Link>
        <span aria-hidden>·</span>
        <Link href="/pricing" className="hover:text-[#F0EBE3] transition-colors">Pricing</Link>
        <span aria-hidden>·</span>
        <Link href="/" className="hover:text-[#F0EBE3] transition-colors">Contact</Link>
      </p>
      <p>Demo photos courtesy of Unsplash</p>
    </footer>
  )
}
