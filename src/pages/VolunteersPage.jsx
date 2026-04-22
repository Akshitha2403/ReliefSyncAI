import { useState } from 'react'

export default function VolunteersPage({ t, volunteers }) {
  const [list, setList] = useState(volunteers)
  const [form, setForm] = useState({ name: '', skills: '', location: '', availability: '' })

  const submitVolunteer = (event) => {
    event.preventDefault()
    if (!form.name || !form.skills || !form.location || !form.availability) {
      return
    }
    setList((prev) => [...prev, { ...form, trust: 4.2 }])
    setForm({ name: '', skills: '', location: '', availability: '' })
  }

  return (
    <div className="page-grid">
      <section className="card glass">
        <h2>{t.volunteerList}</h2>
        <div className="vol-grid">
          {list.map((item) => (
            <article key={`${item.name}-${item.location}`} className="vol-card">
              <h4>{item.name}</h4>
              <p>{t.skills}: {item.skillsKey ? t[item.skillsKey] : item.skills}</p>
              <p>{t.location}: {item.location}</p>
              <p>{t.availability}: {item.availabilityKey ? t[item.availabilityKey] : item.availability}</p>
              <p>{t.trustScore}: {'★'.repeat(Math.round(item.trust))}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="card glass">
        <h2>{t.becomeVolunteer}</h2>
        <form className="vol-form" onSubmit={submitVolunteer}>
          <input value={form.name} onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))} placeholder={t.name} />
          <input value={form.skills} onChange={(event) => setForm((prev) => ({ ...prev, skills: event.target.value }))} placeholder={t.skills} />
          <input value={form.location} onChange={(event) => setForm((prev) => ({ ...prev, location: event.target.value }))} placeholder={t.location} />
          <input value={form.availability} onChange={(event) => setForm((prev) => ({ ...prev, availability: event.target.value }))} placeholder={t.availability} />
          <button type="submit">{t.submit}</button>
        </form>
      </section>
    </div>
  )
}

