import MapPanel from '../components/MapPanel'

export default function DashboardPage({ t, requests, riskZones }) {
  const localizedPredictions = [t.prediction1, t.prediction2, t.prediction3]
  return (
    <div className="page-grid">
      <section className="stats-grid">
        <article className="card glass"><h3>{t.totalRequests}</h3><p>{requests.length}</p></article>
        <article className="card glass"><h3>{t.assignedVolunteers}</h3><p>{requests.filter((item) => item.status === 'Assigned').length}</p></article>
        <article className="card glass"><h3>{t.pendingCases}</h3><p>{requests.filter((item) => item.status === 'Escalated').length}</p></article>
      </section>
      <section className="card glass">
        <h3>{t.aiPredictions}</h3>
        <ul className="simple-list">{localizedPredictions.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>
      <section className="card glass">
        <h3>{t.riskZones}</h3>
        <div className="risk-zone-list">
          {riskZones.map((zone) => (
            <div key={zone.zone} className={`risk-row ${zone.risk > 80 ? 'high' : zone.risk > 70 ? 'medium' : 'low'}`}>
              <span>{zone.risk > 80 ? `🔴 ${t.highRisk}` : zone.risk > 70 ? `🟡 ${t.mediumRisk}` : `🟢 ${t.lowRisk}`}</span>
              <strong>{zone.zone}</strong>
            </div>
          ))}
        </div>
      </section>
      <MapPanel t={t} />
    </div>
  )
}

