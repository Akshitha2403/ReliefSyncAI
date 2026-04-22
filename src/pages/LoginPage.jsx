import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage({ t, onLogin }) {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.email.includes('@')) {
      setError(t.invalidEmail)
      return
    }
    if (form.password.length < 6) {
      setError(t.invalidPassword)
      return
    }
    setError('')
    onLogin()
    navigate('/dashboard')
  }

  return (
    <div className="login-shell">
      <form className="login-card glass" onSubmit={handleSubmit}>
        <h1>{t.appName}</h1>
        <p>{t.loginTitle}</p>
        <input type="email" placeholder={t.email} value={form.email} onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))} />
        <input type="password" placeholder={t.password} value={form.password} onChange={(event) => setForm((prev) => ({ ...prev, password: event.target.value }))} />
        {error && <div className="form-error">{error}</div>}
        <div className="login-actions">
          <button type="submit">{t.login}</button>
          <button type="button" className="secondary-btn">{t.register}</button>
        </div>
      </form>
    </div>
  )
}

