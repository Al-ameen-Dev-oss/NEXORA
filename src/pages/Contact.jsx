import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  Loader2,
  Copy,
  Check,
} from 'lucide-react'

import emailjs from '@emailjs/browser'

import { supabase } from '../lib/supabase'

import '../styles/contact.css'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [requestCode, setRequestCode] = useState('')
  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  function handleChange(e) {
    setForm((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }))

    setErrorMessage('')
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMessage('Please complete all required fields.')
      return
    }

    setLoading(true)
    setErrorMessage('')

    const generatedCode = `NX-${Math.floor(
      10000 + Math.random() * 90000
    )}`

    try {
      const { error } = await supabase
        .from('requests')
        .insert([
          {
            request_code: generatedCode,
            name: form.name.trim(),
            email: form.email.trim(),
            service: form.project || 'General Inquiry',
            message: form.message.trim(),
            status: 'pending',
          },
        ])

      if (error) {
        console.error('Supabase submission error:', error)

        setErrorMessage(
          'We could not send your request. Please try again.'
        )

        return
      }

await emailjs.send(
  'service_kbgi6vp',
  'template_7t02vrj',
  {
    name: form.name.trim(),
    email: form.email.trim(),
    project: form.project || 'General Inquiry',
    message: form.message.trim(),
    request_code: generatedCode,
  },
  'HWTuHh2I-qe3UmkYi'
)

      setRequestCode(generatedCode)
      setSubmitted(true)

      setForm({
        name: '',
        email: '',
        project: '',
        message: '',
      })
    } catch (error) {
      console.error('Unexpected submission error:', error)

      setErrorMessage(
        'Something went wrong. Please try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  async function copyRequestCode() {
    try {
      await navigator.clipboard.writeText(requestCode)

      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (error) {
      console.error('Copy failed:', error)
    }
  }

  function sendAnotherMessage() {
    setSubmitted(false)
    setRequestCode('')
    setCopied(false)
    setErrorMessage('')
  }

  return (
    <div className="contact-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="contact-hero">
        <div className="container">

          <motion.div
            className="contact-hero-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-eyebrow">
              GET IN TOUCH
            </span>

            <h1>
              Let's make
              <span> something.</span>
            </h1>

            <p>
              Have a project, idea, or just want to say hello?
              Tell us a little about it and we'll get back to you.
            </p>
          </motion.div>

        </div>
      </section>

      {/* =========================
          CONTACT
      ========================= */}

      <section className="contact-section section">
        <div className="container contact-grid">

          {/* CONTACT INFO */}

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-eyebrow">
              CONTACT DETAILS
            </span>

            <h2>
              Tell us what
              <br />
              you're working on.
            </h2>

            <p className="contact-info-text">
              Whether you're starting something new or improving
              something that already exists, we'd love to hear
              about it.
            </p>

            <div className="contact-details">

              <a
                href="mailto:hello@nexora.com"
                className="contact-detail"
              >
                <div className="contact-icon">
                  <Mail size={18} />
                </div>

                <div>
                  <span>Email</span>
                  <strong>hello@nexora.com</strong>
                </div>
              </a>

              <a
                href="tel:+2340000000000"
                className="contact-detail"
              >
                <div className="contact-icon">
                  <Phone size={18} />
                </div>

                <div>
                  <span>Phone</span>
                  <strong>+234 000 000 0000</strong>
                </div>
              </a>

              <div className="contact-detail">
                <div className="contact-icon">
                  <MapPin size={18} />
                </div>

                <div>
                  <span>Location</span>
                  <strong>Nigeria</strong>
                </div>
              </div>

            </div>
          </motion.div>

          {/* =========================
              FORM
          ========================= */}

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            {submitted ? (

              /* =========================
                 SUCCESS
              ========================= */

              <div className="success-message">

                <div className="success-icon-wrapper">
                  <CheckCircle2 size={30} />
                </div>

                <span className="success-label">
                  REQUEST SENT
                </span>

                <h2>
                  Message received.
                </h2>

                <p className="success-description">
                  Your project request has been submitted
                  successfully and is currently being reviewed.
                </p>

                {/* REQUEST CODE */}

                <div className="request-code-box">

                  <span className="request-code-label">
                    YOUR REQUEST CODE
                  </span>

                  <div className="request-code-row">

                    <strong className="request-code">
                      {requestCode}
                    </strong>

                    <button
                      type="button"
                      className={`copy-code-button ${
                        copied ? 'copied' : ''
                      }`}
                      onClick={copyRequestCode}
                      aria-label="Copy request code"
                    >
                      {copied ? (
                        <>
                          <Check size={15} />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy size={15} />
                          Copy code
                        </>
                      )}
                    </button>

                  </div>

                </div>

                {/* STATUS */}

                <div className="pending-status">
                  <span className="status-dot" />
                  Pending
                </div>

                <p className="status-note">
                  Copy your request code and keep it safe.
                  You will need it together with your email
                  address to check your request status.
                </p>

                {/* ACTION BUTTONS */}

                <div className="success-actions">

                  <a
                    href="/track"
                    className="btn btn-primary success-track-button"
                  >
                    Track your request
                    <ArrowUpRight size={17} />
                  </a>

                  <button
                    type="button"
                    className="btn btn-outline success-another-button"
                    onClick={sendAnotherMessage}
                  >
                    Send another message
                    <ArrowRight size={17} />
                  </button>

                </div>

              </div>

            ) : (

              /* =========================
                 FORM
              ========================= */

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="form-row">

                  <div className="form-group">
                    <label htmlFor="name">
                      Your name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      disabled={loading}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      Email address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      disabled={loading}
                      required
                    />
                  </div>

                </div>

                <div className="form-group">
                  <label htmlFor="project">
                    What do you need?
                  </label>

                  <select
                    id="project"
                    name="project"
                    value={form.project}
                    onChange={handleChange}
                    disabled={loading}
                  >
                    <option value="">
                      Select a service
                    </option>

                    <option value="Web Development">
                      Web Development
                    </option>

                    <option value="UI / UX Design">
                      UI / UX Design
                    </option>

                    <option value="Mobile Experience">
                      Mobile Experience
                    </option>

                    <option value="Digital Product">
                      Digital Product
                    </option>

                    <option value="General Inquiry">
                      General Inquiry
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    Tell us about it
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="7"
                    placeholder="Tell us a little about your project..."
                    value={form.message}
                    onChange={handleChange}
                    disabled={loading}
                    required
                  />
                </div>

                {errorMessage && (
                  <div className="form-error">
                    {errorMessage}
                  </div>
                )}

                {/* SEND BUTTON */}

                <button
                  type="submit"
                  className="btn btn-primary submit-button"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2
                        size={17}
                        className="spin"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <ArrowUpRight size={17} />
                    </>
                  )}
                </button>

              </form>

            )}

          </motion.div>

        </div>
      </section>

    </div>
  )
}