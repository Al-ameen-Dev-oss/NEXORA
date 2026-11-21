import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Code2,
  Palette,
  Smartphone,
  Layers3,
  Gauge,
  Wrench,
} from 'lucide-react'

import '../styles/Services.css'

const services = [
  {
    number: '01',
    icon: Code2,
    title: 'Web Development',
    description:
      'Responsive websites and web applications built with modern technologies and clean, maintainable code.',
    features: [
      'Business websites',
      'Web applications',
      'Responsive development',
      'Performance optimization',
    ],
  },
  {
    number: '02',
    icon: Palette,
    title: 'UI / UX Design',
    description:
      'Interfaces designed around real users, clear interactions, and a strong visual identity.',
    features: [
      'Interface design',
      'User experience',
      'Design systems',
      'Interactive prototypes',
    ],
  },
  {
    number: '03',
    icon: Smartphone,
    title: 'Mobile Experiences',
    description:
      'Digital experiences designed to work beautifully across phones, tablets, and desktop screens.',
    features: [
      'Mobile-first design',
      'Responsive interfaces',
      'Cross-device experiences',
      'Mobile web applications',
    ],
  },
  {
    number: '04',
    icon: Layers3,
    title: 'Digital Products',
    description:
      'From an early idea to a working product, we help turn concepts into practical digital solutions.',
    features: [
      'Product strategy',
      'MVP development',
      'Feature planning',
      'Product interfaces',
    ],
  },
]

const process = [
  {
    icon: Gauge,
    number: '01',
    title: 'Discover',
    text: 'We understand your goals, audience, and the problem that needs solving.',
  },
  {
    icon: Palette,
    number: '02',
    title: 'Design',
    text: 'We turn the strategy into a clear visual direction and intuitive experience.',
  },
  {
    icon: Code2,
    number: '03',
    title: 'Build',
    text: 'We develop the final experience with responsiveness and performance in mind.',
  },
  {
    icon: Wrench,
    number: '04',
    title: 'Refine',
    text: 'We test, polish, and make sure everything works as expected before launch.',
  },
]

export default function Services() {
  return (
    <div className="services-page">

      {/* HERO */}
      <section className="services-hero">
        <div className="container">

          <motion.div
            className="services-hero-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-eyebrow">
              OUR SERVICES
            </span>

            <h1>
              We build things
              <span> people use.</span>
            </h1>

            <p>
              From websites to digital products, we combine
              thoughtful design with solid development to create
              experiences that work.
            </p>
          </motion.div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="service-list section">
        <div className="container">

          <div className="services-intro">
            <span className="section-eyebrow">
              WHAT WE DO
            </span>

            <p className="section-text">
              Our services are focused on helping businesses
              create a stronger and more useful digital presence.
            </p>
          </div>

          <div className="service-list-grid">
            {services.map((service, index) => {
              const Icon = service.icon

              return (
                <motion.article
                  className="large-service-card"
                  key={service.number}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                >
                  <div className="large-service-number">
                    {service.number}
                  </div>

                  <div className="large-service-icon">
                    <Icon size={25} />
                  </div>

                  <div className="large-service-content">
                    <h2>{service.title}</h2>

                    <p>{service.description}</p>

                    <ul>
                      {service.features.map((feature) => (
                        <li key={feature}>
                          <span />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <ArrowUpRight
                    className="large-service-arrow"
                    size={24}
                  />
                </motion.article>
              )
            })}
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="process section">
        <div className="container">

          <div className="section-heading">
            <div>
              <span className="section-eyebrow">
                OUR PROCESS
              </span>

              <h2 className="section-title">
                Simple from start
                <br />
                to finish.
              </h2>
            </div>

            <p className="section-text">
              No unnecessary complexity. Just a clear process
              designed to move an idea forward.
            </p>
          </div>

          <div className="process-grid">
            {process.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.article
                  className="process-card"
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                >
                  <div className="process-top">
                    <span>{item.number}</span>
                    <Icon size={20} />
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </motion.article>
              )
            })}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="services-cta section">
        <div className="container">

          <motion.div
            className="services-cta-box"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
          >
            <div>
              <span className="section-eyebrow">
                HAVE A PROJECT?
              </span>

              <h2>
                Let's create something
                <span> useful.</span>
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