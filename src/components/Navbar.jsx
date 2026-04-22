import { Activity, BarChart3, ClipboardList, Users } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/dashboard', key: 'dashboard', icon: Activity },
  { to: '/requests', key: 'requests', icon: ClipboardList },
  { to: '/volunteers', key: 'volunteers', icon: Users },
  { to: '/analytics', key: 'analytics', icon: BarChart3 },
]

export default function Navbar({ t, language, onLanguageChange }) {
  return (
    <header className="navbar glass">
      <div className="brand">{t.appName}</div>
      <nav className="nav-links">
        {navItems.map(({ to, key, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            <Icon size={16} />
            {t[key]}
          </NavLink>
        ))}
      </nav>
      <select className="lang-select" value={language} onChange={(event) => onLanguageChange(event.target.value)}>
        {['English', 'Hindi', 'Telugu', 'Tamil', 'Kannada', 'Malayalam', 'Bengali'].map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </header>
  )
}

