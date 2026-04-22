import { useEffect, useState } from 'react'

const volunteerPoints = [
  { x: 16, y: 50, label: 'Volunteer nearby - Uppal' },
  { x: 46, y: 38, label: 'Volunteer nearby - Tarnaka' },
  { x: 74, y: 55, label: 'Volunteer nearby - Madhapur' },
]

const requestPoints = [
  { x: 26, y: 62, label: 'Emergency request - Habsiguda' },
  { x: 62, y: 28, label: 'Emergency request - Secunderabad' },
  { x: 83, y: 46, label: 'Emergency request - Gachibowli' },
]

export default function MapPanel({ t }) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setOffset((prev) => (prev + 1) % 8)
    }, 800)
    return () => clearInterval(timer)
  }, [])

  return (
    <article className="card glass">
      <h3>{t.trackingTitle}</h3>
      <div className="map-box">
        {volunteerPoints.map((point, index) => (
          <div
            key={`vol-${point.label}`}
            className="marker volunteer"
            style={{ left: `${point.x + ((offset + index) % 2)}%`, top: `${point.y - ((offset + index) % 2)}%` }}
            title={`${t.volunteerNearby}: ${point.label.split('-')[1].trim()}`}
          />
        ))}
        {requestPoints.map((point) => (
          <div
            key={`req-${point.label}`}
            className="marker request pulse"
            style={{ left: `${point.x}%`, top: `${point.y}%` }}
            title={`${t.emergencyRequest}: ${point.label.split('-')[1].trim()}`}
          />
        ))}
        <div className="map-color-legend">
          <span>{t.mapColorVolunteers}</span>
          <span>{t.mapColorRequests}</span>
        </div>
      </div>
    </article>
  )
}

