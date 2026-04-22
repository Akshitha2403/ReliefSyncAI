const priorityOrder = { High: 3, Medium: 2, Low: 1 }

export default function RequestsPage({ t, requests }) {
  const sorted = [...requests].sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority])

  return (
    <section className="card glass">
      <h2>{t.requestList}</h2>
      {sorted.map((item) => (
        <div key={item.id} className="request-row">
          <strong>{item.id} - {t[item.typeKey]}</strong>
          <span>{t.location}: {item.location}</span>
          <span>{t.assignedVolunteer}: {item.assignedVolunteerKey ? t[item.assignedVolunteerKey] : item.assignedVolunteer}</span>
          <div className="chip-wrap">
            <span className={`priority ${item.priority.toLowerCase()}`}>
              {item.priority === 'High' ? `🔴 ${t.high}` : item.priority === 'Medium' ? `🟡 ${t.medium}` : `🟢 ${t.low}`}
            </span>
            <span className="tag">{t.status}: {item.status === 'Assigned' ? t.assigned : t.escalated}</span>
          </div>
        </div>
      ))}
    </section>
  )
}

