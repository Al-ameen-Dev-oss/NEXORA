import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-main">
          <div>
            <Link to="/" className="footer-logo">
              ARVEX<span>.</span>
            </Link>

            <p>
              Digital experiences built with clarity,
              creativity, and purpose.
            </p>
          </div>

          <Link
            to="/contact"
            className="footer-link"
          >
            Start a project
            <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="footer-bottom">
          <span>
            © 2026 ARVEX. All rights reserved.
          </span>

          <span>
            Digital Product Studio
          </span>
        </div>

      </div>
    </footer>
  )
}