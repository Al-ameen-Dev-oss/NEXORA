import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, CheckCircle2, Clock3, XCircle } from 'lucide-react'
import { supabase } from '../lib/supabase'

import '../styles/track-request.css'

export default function TrackRequest() {
  const [requestCode, setRequestCode] = useState('')
  const [email, setEmail] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleCheck(e) {
    e.preventDefault()

    if (!requestCode.trim() || !email.trim()) {
      setError('Enter your request code and email address.')
      return
    }

    setLoading(true)
    setError('')
    setResult(null)

    const { data, error: supabaseError } = await supabase.rpc(
      'check_request_status',
      {
        p_request_code: requestCode.trim(),
        p_email: email.trim(),
      }
    )

    setLoading(false)

    if (supabaseError) {
      console.error(supabaseError)
      setError('Unable to check your request. Please try again.')
      return
    }

    if (!data || data.length === 0) {
      setError(
        'No request was found with that request code and email.'
      )
      return
    }

    setResult(data[0])
  }

  function getStatusContent(status) {
    switch (status) {
      case 'approved':
        return {
          icon: <CheckCircle2 size={42} />,
          title: 'Request Approved',
          text: 'Your project request has been approved. We will be in touch with you soon.',
          className: 'status-approved',
        }

      case 'rejected':
        return {
          icon: <XCircle size={42} />,
          title: 'Request Declined',
          text: 'Unfortunately, your project request was not approved at this time.',
          className: 'status-rejected',
        }

      default:
        return {
          icon: <Clock3 size={42} />,
          title: 'Request Pending',
          text: 'Your request is currently being reviewed. Please check again later.',
          className: 'status-pending',
        }
    }
  }

  return (
    <main className="track-page">
      <section className="track-hero">
        <div className="container">

          <motion.div
            className="track-header"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="section-eyebrow">
              REQUEST STATUS
            </span>

            <h1>
              Track your
              <span> request.</span>
            </h1>

            <p>
              Enter the request code you received after
              submitting your project.
            </p>
          </motion.div>

          <motion.div
            className="track-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <form onSubmit={handleCheck}>

              <div className="track-field">
                <label htmlFor="request-code">
                  Request code
                </label>

                <input
                  id="request-code"
                  type="text"
                  placeholder="NX-12345"
                  value={requestCode}
                  onChange={(e) =>
                    setRequestCode(e.target.value)
                  }
                  disabled={loading}
                />
              </div>

              <div className="track-field">
                <label htmlFor="track-email">
                  Email address
                </label>

                <input
                  id="track-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  disabled={loading}
                />
              </div>

              {error && (
                <div className="track-error">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="track-button"
                disabled={loading}
              >
                <Search size={17} />

                {loading ? 'Checking...' : 'Check status'}
              </button>

            </form>

            {result && (
              <motion.div
                className={`track-result ${getStatusContent(result.status).className}`}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                {getStatusContent(result.status).icon}

                <span className="result-label">
                  {result.status.toUpperCase()}
                </span>

                <h2>
                  {getStatusContent(result.status).title}
                </h2>

                <p>
                  {getStatusContent(result.status).text}
                </p>

                <div className="result-code">
                  {result.request_code}
                </div>
              </motion.div>
            )}

          </motion.div>

        </div>
      </section>
    </main>
  )
}