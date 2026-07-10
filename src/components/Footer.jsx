import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

const iconLinks = [
  { icon: GithubIcon, href: 'https://github.com/Harsh40863', label: 'GitHub' },
  {
    icon: LinkedinIcon,
    href: 'https://www.linkedin.com/in/harsh-vaishnav20044/',
    label: 'LinkedIn',
  },
  { icon: Mail, href: 'mailto:harshvai0314@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="relative z-1 border-t border-gridline/60">
      <div className="max-w-[1140px] mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="font-display text-lg text-chalk">Harsh Vaishnav</p>
            <p className="font-mono text-xs text-chalk-muted mt-1">
              Full-Stack & AI Systems · IIIT Nagpur
            </p>
          </div>

          <div className="flex gap-5">
            {iconLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-chalk-muted hover:text-gold transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gridline/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-mono text-[0.65rem] text-chalk-muted tracking-wide">
            © 2026 Harsh Vaishnav. Crafted with intent.
          </span>
          <span className="font-mono text-[0.65rem] text-gold-muted">
            Nagpur, India
          </span>
        </div>
      </div>
    </footer>
  )
}
