export default function AnalyticsPage({ t, riskZones }) {
  return (
    <div className="page-grid">
      <section className="card glass">
        <h2>{t.trendsTitle}</h2>
        <div className="trend-bars">
          <div className="bar-row"><span>{t.trendsTitle}</span><div className="bar-fill bar1" /></div>
          <div className="bar-row"><span>{t.responseEfficiency}</span><div className="bar-fill bar2" /></div>
          <div className="bar-row"><span>{t.volunteerCoverage}</span><div className="bar-fill bar3" /></div>
        </div>
      </section>
      <section className="card glass">
        <h3>{t.heatmapTitle}</h3>
        <div className="heatmap-grid">
          <div className="heat-cell high">Uppal</div>
          <div className="heat-cell med">Tarnaka</div>
          <div className="heat-cell low">Gachibowli</div>
          <div className="heat-cell med">Habsiguda</div>
          <div className="legend-box inline">
            <p><strong>{t.heatmapLegend}</strong></p>
            <p>🔴 {t.highDemand}</p>
            <p>🟡 {t.mediumDemand}</p>
            <p>🟢 {t.lowDemand}</p>
          </div>
        </div>
      </section>
      <section className="card glass">
        <h3>{t.riskZones}</h3>
        {riskZones.map((zone) => (
          <div className="bar-row" key={zone.zone}>
            <span>{zone.zone}</span>
            <div className="bar-fill" style={{ width: `${zone.risk}%` }} />
          </div>
        ))}
      </section>
    </div>
  )
}

