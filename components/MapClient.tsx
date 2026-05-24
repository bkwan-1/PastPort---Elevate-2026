'use client'
import 'leaflet/dist/leaflet.css'
import { useState } from 'react'
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

interface Trip {
  name: string
  pos: [number, number]
  year: number
  photos: number
  contributors: number
}

const trips: Trip[] = [
  { name: 'Tokyo 2025',          pos: [35.6762, 139.6503],  year: 2025, photos: 284, contributors: 4 },
  { name: 'World Cup Vancouver', pos: [49.2827, -123.1207], year: 2026, photos: 127, contributors: 6 },
  { name: 'Lisbon Summer',       pos: [38.7223, -9.1393],   year: 2024, photos: 312, contributors: 3 },
  { name: 'Amalfi Coast',        pos: [40.6340, 14.6027],   year: 2024, photos: 198, contributors: 2 },
  { name: 'Kyoto Autumn',        pos: [35.0116, 135.7681],  year: 2024, photos: 445, contributors: 5 },
  { name: 'New York',            pos: [40.7128, -74.0060],  year: 2025, photos: 89,  contributors: 2 },
]

const YEARS = ['All', '2024', '2025', '2026']

const markerIcon = L.divIcon({
  html: `<div style="width:20px;height:20px;border-radius:50%;background:#C4862A;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(196,134,42,0.5)"><div style="width:6px;height:6px;border-radius:50%;background:white;"></div></div>`,
  className: '',
  iconSize: [20, 20] as [number, number],
  iconAnchor: [10, 10] as [number, number],
  popupAnchor: [0, -14] as [number, number],
})

export default function MapClient() {
  const [activeYear, setActiveYear] = useState('All')
  const filtered = activeYear === 'All' ? trips : trips.filter(t => t.year === parseInt(activeYear))

  return (
    <>
      <style>{`
        .pastport-popup .leaflet-popup-content-wrapper {
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.14);
          padding: 0;
          overflow: hidden;
          width: 280px;
          border: 1px solid #E8E4DF;
        }
        .pastport-popup .leaflet-popup-content {
          margin: 0;
          width: 100% !important;
        }
        .pastport-popup .leaflet-popup-tip {
          background: white;
        }
        .pastport-popup .leaflet-popup-close-button {
          top: 8px !important;
          right: 8px !important;
          color: #4A5568 !important;
          font-size: 18px !important;
          z-index: 10;
        }
      `}</style>

      <div style={{ position: 'relative', marginTop: 64 }}>
        {/* Year filter bar */}
        <div
          className="absolute top-4 left-1/2 -translate-x-1/2 z-[1000] shadow-md rounded-full px-2 py-1 flex gap-1"
          style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
        >
          {YEARS.map(y => (
            <button
              key={y}
              onClick={() => setActiveYear(y)}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                fontWeight: 500,
                padding: '6px 16px',
                borderRadius: 9999,
                border: 'none',
                cursor: 'pointer',
                background: activeYear === y ? '#C4862A' : 'transparent',
                color: activeYear === y ? 'white' : '#4A5568',
                transition: 'all 0.15s',
              }}
            >
              {y}
            </button>
          ))}
        </div>

        {/* Map */}
        <MapContainer
          center={[20, 10]}
          zoom={2}
          style={{ height: 'calc(100vh - 64px)', width: '100%' }}
          zoomControl={false}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
          />
          {filtered.map(trip => (
            <Marker key={trip.name} position={trip.pos} icon={markerIcon}>
              <Popup className="pastport-popup">
                <div style={{ fontFamily: 'var(--font-body)' }}>
                  {/* Mock movie thumbnail */}
                  <div
                    style={{
                      background: '#1A1A1A',
                      aspectRatio: '16/9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        background: '#C4862A',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white" style={{ marginLeft: 2 }}>
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </div>
                  </div>
                  {/* Trip info */}
                  <div style={{ padding: '14px 16px' }}>
                    <p
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 20,
                        color: '#1A1A1A',
                        margin: '0 0 4px',
                        lineHeight: 1.2,
                      }}
                    >
                      {trip.name}
                    </p>
                    <p style={{ fontSize: 13, color: '#4A5568', margin: '0 0 12px' }}>
                      {trip.year} · {trip.photos} photos · {trip.contributors} contributors
                    </p>
                    <a
                      href="/albums"
                      style={{ fontSize: 13, fontWeight: 600, color: '#C4862A', textDecoration: 'none' }}
                    >
                      View Album →
                    </a>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* Play All Trips — fixed bottom-right */}
        <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1000 }}>
          <div style={{ position: 'relative', display: 'inline-flex' }}>
            <motion.div
              animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeOut' as const }}
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: 9999,
                border: '2px solid #C4862A',
                pointerEvents: 'none',
              }}
            />
            <motion.button
              whileHover={{ y: -2, boxShadow: '0 4px 20px rgba(196,134,42,0.45)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 14,
                fontWeight: 500,
                padding: '12px 24px',
                background: '#C4862A',
                color: 'white',
                borderRadius: 9999,
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <Play size={16} color="white" />
              Play All Trips
            </motion.button>
          </div>
        </div>
      </div>
    </>
  )
}
