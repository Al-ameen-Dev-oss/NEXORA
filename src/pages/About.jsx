import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Check,
  Lightbulb,
  Target,
  Layers,
} from 'lucide-react'

import '../styles/About.css'

const principles = [
  {
    icon: Lightbulb,
    title: 'Think clearly',
    text: 'We start by understanding the problem before jumping into solutions.',
  },
  {
    icon: Target,
    title: 'Stay focused',
    text: 'Every decision has a purpose. We remove unnecessary complexity.',
  },
  {
    icon: Layers,
    title: 'Build properly',
    text: 'Good design deserves good development, so we care about both.',
  },
]

const values = [
  'Simple solutions',
  'Strong visual design',
  'Responsive experiences',
  'Clean development',
  'Clear communication',
  'Long-term thinking',
]

export default function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="container">

          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-eyebrow">
              ABOUT ARVEX
            </span>

            <h1>
              We make digital
              <span> simpler.</span>
            </h1>

            <p>
              ARVEX is an independent digital studio focused on
              creating useful, beautiful, and purposeful digital
              experiences.
            </p>
          </motion.div>

        </div>
      </section>

      {/* STORY */}
      <section className="about-story section">
        <div className="container about-story-grid">

          <div className="about-label">
            OUR APPROACH
          </div>

          <div className="about-story-content">
            <h2 className="section-title">
              Design should solve
              <br />
              problems, not create them.
            </h2>

            <p>
              We believe the best digital products feel natural.
              You shouldn't have to think about how something works;
              you should simply be able to use it.
            </p>

            <p>
              That's why we combine strategy, design, and technology
              from the beginning. The result is digital work that
              looks considered and works exactly as it should.
            </p>

            <a
              href="/contact"
              className="btn btn-primary about-button"
            >
              Work with us
              <ArrowUpRight size={17} />
            </a>
          </div>

        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="principles section">
        <div className="container">

          <div className="section-heading">
            <div>
              <span className="section-eyebrow">
                HOW WE WORK
              </span>

              <h2 className="section-title">
                Three simple principles.
              </h2>
            </div>
          </div>

          <div className="principles-grid">
            {principles.map((principle, index) => {
              const Icon = principle.icon

              return (
                <motion.article
                  className="principle-card"
                  key={principle.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  <div className="principle-icon">
                    <Icon size={22} />
                  </div>

                  <div>
                    <span className="principle-number">
                      0{index + 1}
                    </span>

                    <h3>{principle.title}</h3>

                    <p>{principle.text}</p>
                  </div>
                </motion.article>
              )
            })}
          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="values section">
        <div className="container values-grid">

          <div>
            <span className="section-eyebrow">
              WHAT MATTERS
            </span>

            <h2 className="section-title">
              The details
              <br />
              matter.
            </h2>
          </div>

          <div className="values-list">
            {values.map((value) => (
              <div
                className="value-item"
                key={value}
              >
                <Check size={17} />
                <span>{value}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="about-cta section">
        <div className="container">

          <motion.div
            className="about-cta-box"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <span className="section-eyebrow">
                LET'S WORK TOGETHER
              </span>

              <h2>
                Have an idea?
                <span> Let's build it.</span>
              </h2>
            </div>

            <a
              href="/contact"
              className="btn btn-primary"
            >
              Start a project
              <ArrowUpRight size={17} />
            </a>
          </motion.div>

        </div>
      </section>

    </div>
  )
}