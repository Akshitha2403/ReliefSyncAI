import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import ChatAssistant from './components/ChatAssistant'
import Navbar from './components/Navbar'
import VoiceInput from './components/VoiceInput'
import { requestsData, riskZones, volunteersData } from './data'
import { translations } from './i18n'
import AnalyticsPage from './pages/AnalyticsPage'
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'
import RequestsPage from './pages/RequestsPage'
import VolunteersPage from './pages/VolunteersPage'

function AppLayout() {
  const [language, setLanguage] = useState('English')
  const [voiceText, setVoiceText] = useState('')
  const [loading, setLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const location = useLocation()
  const t = translations[language] ?? translations.English
  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 450)
    return () => clearTimeout(timer)
  }, [location.pathname])

  if (location.pathname === '/login') {
    if (isLoggedIn) {
      return <Navigate to="/dashboard" replace />
    }
    return <LoginPage t={t} onLogin={handleLogin} />
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />
  }

  return (
    <div className="app-shell">
      <Navbar t={t} language={language} onLanguageChange={setLanguage} />
      <section className="hero glass">
        <h1>{t.appName}</h1>
        <p>{t.subtitle}</p>
      </section>

      {loading ? (
        <div className="loading-card glass">{t.loading}</div>
      ) : (
        <>
          <Routes>
            <Route path="/dashboard" element={<DashboardPage t={t} requests={requestsData} riskZones={riskZones} />} />
            <Route path="/requests" element={<RequestsPage t={t} requests={requestsData} />} />
            <Route path="/volunteers" element={<VolunteersPage t={t} volunteers={volunteersData} />} />
            <Route path="/analytics" element={<AnalyticsPage t={t} riskZones={riskZones} />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
          <VoiceInput t={t} value={voiceText} onChange={setVoiceText} />
          {location.pathname === '/dashboard' && <ChatAssistant t={t} />}
        </>
      )}
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<AppLayout />} />
      <Route path="/*" element={<AppLayout />} />
    </Routes>
  )
}

