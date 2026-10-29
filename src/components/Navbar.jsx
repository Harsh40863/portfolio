import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Resume', id: 'resume' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sectionIds = ['hero', ...NAV_LINKS.map((l) => l.id)]
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0.15,
      }
    )

    sections.forEach((section) => observer.observe(section))
    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const closeMobile = useCallback(() => setMobileOpen(false), [])

  return (
    <nav className="navbar-glass fixed top-0 left-0 w-full z-50">
      <div className="max-w-[1140px] mx-auto flex items-center justify-between py-5 px-6">
        <a
          href="#hero"
          className="font-display text-xl text-chalk hover:text-gold transition-colors tracking-wide"
        >
          HV
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`font-mono text-[0.7rem] tracking-[0.12em] uppercase transition-colors duration-200
                  ${activeSection === id
                    ? 'text-gold'
                    : 'text-chalk-muted hover:text-chalk'
                  }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex btn btn-primary text-xs py-2 px-4"
        >
          Get in touch
        </a>

        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden text-chalk-muted hover:text-gold transition-colors"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-midnight/97 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={closeMobile}
              className="absolute top-6 right-6 text-chalk-muted hover:text-gold transition-colors"
              aria-label="Close menu"
            >
              <X size={26} />
            </button>

            {NAV_LINKS.map(({ label, id }, i) => (
              <motion.a
                key={id}
                href={`#${id}`}
                onClick={closeMobile}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * i, duration: 0.3 }}
                className={`font-display text-3xl transition-colors
                  ${activeSection === id ? 'text-gold' : 'text-chalk hover:text-gold'}`}
              >
                {label}
              </motion.a>
            ))}

            <motion.a
              href="#contact"
              onClick={closeMobile}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="btn btn-primary mt-4"
            >
              Get in touch
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
