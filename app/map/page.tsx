'use client'
import dynamic from 'next/dynamic'
import PageWrapper from '@/components/PageWrapper'

const MapClient = dynamic(() => import('@/components/MapClient'), { ssr: false })

export default function MapPage() {
  return (
    <PageWrapper>
      <MapClient />
    </PageWrapper>
  )
}
