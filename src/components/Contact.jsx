import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

const contactEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT

const socials = [
  {
    icon: Mail,
    label: 'harshvai0314@gmail.com',
    href: 'mailto:harshvai0314@gmail.com',
    external: false,
  },
  {
    icon: Phone,
    label: '+91 7300274802',
    href: 'tel:+917300274802',
    external: false,
  },
  {
    icon: MapPin,
    label: 'Nagpur, India',
    href: null,
    external: false,
  },
  {
    icon: LinkedinIcon,
    label: 'linkedin.com/in/harsh-vaishnav20044',
    href: 'https://www.linkedin.com/in/harsh-vaishnav20044/',
    external: true,
  },
  {
    icon: GithubIcon,
    label: 'github.com/Harsh40863',
    href: 'https://github.com/Harsh40863',
    external: true,
  },
]

const inputClasses =
  'bg-transparent border border-gridline rounded-sm px-4 py-3 text-chalk font-body w-full focus:border-gold focus:outline-none transition placeholder:text-chalk-muted/50'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const message = form.message.value

    if (!contactEndpoint) {
      window.location.href = `mailto:harshvai0314@gmail.com?subject=Portfolio inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0A- ${encodeURIComponent(name)} (${encodeURIComponent(email)})`
      return
    }

    setStatus('sending')

    try {
      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          subject: `Portfolio inquiry from ${name}`,
        }),
      })

      if (!response.ok) {
        throw new Error('Message failed')
      }

      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section">
      <p className="section-label">Contact</p>
      <h2 className="section-title">Let's connect</h2>
      <p className="section-subtitle">
        Open to internships, collaborations, and conversations about AI systems,
        full-stack engineering, or competitive programming.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="space-y-5">
            {socials.map(({ icon: Icon, label, href, external }) => {
              const content = (
                <>
                  <Icon
                    size={18}
                    className="text-gold-muted group-hover:text-gold transition shrink-0"
                  />
                  <span className="text-chalk-muted group-hover:text-chalk transition font-mono text-sm">
                    {label}
                  </span>
                </>
              )

              if (!href) {
                return (
                  <div key={label} className="flex items-center gap-3">
                    {content}
                  </div>
                )
              }

              return (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex items-center gap-3 group"
                >
                  {content}
                </a>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-mono text-[0.65rem] uppercase tracking-widest text-gold-muted mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className={inputClasses}
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block font-mono text-[0.65rem] uppercase tracking-widest text-gold-muted mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className={inputClasses}
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block font-mono text-[0.65rem] uppercase tracking-widest text-gold-muted mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className={`${inputClasses} resize-none`}
                placeholder="What's on your mind?"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full mt-2"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send message'}
              <Send size={15} />
            </button>

            {status === 'sent' && (
              <p className="font-mono text-xs text-signal-green">
                Message sent. I'll get back to you soon.
              </p>
            )}

            {status === 'error' && (
              <p className="font-mono text-xs text-gold-muted">
                Message could not be sent. Please email me directly.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
