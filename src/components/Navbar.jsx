import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  Menu,
  X,
  ArrowUpRight,
  Moon,
  Sun,
} from 'lucide-react'

import '../styles/navbar.css'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
  {name: 'Track Request', path: '/track'},
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('nexora-theme') === 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      darkMode ? 'dark' : 'light'
    )

    localStorage.setItem(
      'nexora-theme',
      darkMode ? 'dark' : 'light'
    )
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode((current) => !current)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="container navbar-inner">

        <Link
          to="/"
          className="logo"
          onClick={closeMenu}
        >
         ARVEX<span>.</span>
        </Link>

        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-actions">

          <button
            className="theme-button"
            onClick={toggleTheme}
            aria-label={
              darkMode
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
          >
            {darkMode ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>

          <Link
            to="/contact"
            className="navbar-cta"
          >
            Start a project
            <ArrowUpRight size={16} />
          </Link>

        </div>

        <div className="mobile-actions">

          <button
            className="theme-button"
            onClick={toggleTheme}
            aria-label={
              darkMode
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
          >
            {darkMode ? (
              <Sun size={19} />
            ) : (
              <Moon size={19} />
            )}
          </button>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <nav>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? 'mobile-link active'
                  : 'mobile-link'
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="mobile-cta"
          onClick={closeMenu}
        >
          Start a project
          <ArrowUpRight size={17} />
        </Link>
      </div>
    </header>
  )
}