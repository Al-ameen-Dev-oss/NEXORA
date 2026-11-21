import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Palette,
  Smartphone,
  Sparkles,
} from 'lucide-react'

import '../styles/Home.css'

const services = [
  {
    icon: Code2,
    number: '01',
    title: 'Web Development',
    text: 'Fast, responsive websites and digital experiences built around your goals.',
  },
  {
    icon: Palette,
    number: '02',
    title: 'UI / UX Design',
    text: 'Simple, thoughtful interfaces that look good and feel natural to use.',
  },
  {
    icon: Smartphone,
    number: '03',
    title: 'Digital Products',
    text: 'From early concepts to polished products, we turn ideas into usable experiences.',
  },
]

const projects = [
  {
    number: '01',
    title: 'Digital Platform',
    category: 'Web Development',
  },
  {
    number: '02',
    title: 'Brand Experience',
    category: 'UI / UX Design',
  },
  {
    number: '03',
    title: 'Mobile Product',
    category: 'Product Design',
  },
]

export default function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">

          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="hero-label">
              <span className="hero-dot" />
              Independent digital studio
            </div>

            <h1>
              We turn good
              <span> ideas </span>
              into great digital experiences.
            </h1>

            <p>
              ARVEX is a small creative studio building websites,
              digital products, and brand experiences for ambitious
              businesses.
            </p>

            <div className="hero-buttons">
              <a
                href="/contact"
                className="btn btn-primary"
              >
                Start a project
                <ArrowUpRight size={17} />
              </a>

              <a
                href="#work"
                className="btn btn-outline"
              >
                Explore our work
                <ArrowRight size={17} />
              </a>
            </div>
          </motion.div>

          {/* HERO VISUAL */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="visual-card main-card">
              <div className="visual-top">
                <span>NX / 001</span>

                <span className="visual-status">
                  <span />
                  Live
                </span>
              </div>

              <div className="visual-content">
                <Sparkles size={28} />

                <h3>
                  Ideas become
                  <br />
                  experiences.
                </h3>

                <div className="visual-line" />
                <div className="visual-line short" />
              </div>

              <div className="visual-footer">
                <span>DESIGN</span>
                <span>DEVELOPMENT</span>
                <span>2026</span>
              </div>
            </div>

            <div className="floating-card floating-one">
              <span>01</span>
              <strong>Design</strong>
            </div>

            <div className="floating-card floating-two">
              <span>02</span>
              <strong>Build</strong>
            </div>
          </motion.div>

        </div>
      </section>

      {/* INTRO */}
      <section className="intro section">
        <div className="container intro-grid">

          <div className="section-eyebrow">
            WHAT WE DO
          </div>

          <div>
            <h2 className="section-title">
              Small team.
              <br />
              Big attention to detail.
            </h2>

            <p className="section-text intro-text">
              We believe great digital work doesn't need to be
              complicated. We combine design, technology, and
              strategy to create experiences that are useful,
              memorable, and easy to understand.
            </p>

            <a
              href="/about"
              className="text-link"
            >
              More about NEXORA
              <ArrowRight size={17} />
            </a>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="services section">
        <div className="container">

          <div className="section-heading">
            <div>
              <span className="section-eyebrow">
                OUR SERVICES
              </span>

              <h2 className="section-title">
                What we build.
              </h2>
            </div>

            <p className="section-text">
              Focused services for businesses that want
              to make a stronger digital impression.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon

              return (
                <motion.article
                  className="service-card"
                  key={service.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  <div className="service-top">
                    <span>{service.number}</span>
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>

                  <ArrowUpRight className="service-arrow" size={20} />
                </motion.article>
              )
            })}
          </div>

        </div>
      </section>

      {/* WORK */}
      <section
        className="work section"
        id="work"
      >
        <div className="container">

          <div className="section-heading">
            <div>
              <span className="section-eyebrow">
                SELECTED WORK
              </span>

              <h2 className="section-title">
                A few things we've made.
              </h2>
            </div>

            <a
              href="/services"
              className="text-link"
            >
              Our capabilities
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article
                className={`project-card project-${index + 1}`}
                key={project.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <div className="project-number">
                  {project.number}
                </div>

                <div className="project-info">
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                </div>

                <ArrowUpRight
                  className="project-arrow"
                  size={22}
                />
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="home-cta section">
        <div className="container">

          <motion.div
            className="cta-box"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <span className="section-eyebrow">
                HAVE A PROJECT IN MIND?
              </span>

              <h2>
                Let's make something
                <span> meaningful.</span>
              </h2>
            </div>

            <a
              href="/contact"
              className="btn btn-primary"
            >
              Start a conversation
              <ArrowUpRight size={17} />
            </a>
          </motion.div>

        </div>
      </section>

    </div>
  )
}