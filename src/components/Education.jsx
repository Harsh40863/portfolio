import { motion } from 'framer-motion'
import { GraduationCap, MapPin } from 'lucide-react'

const education = {
  institution: 'Indian Institute of Information Technology (IIIT), Nagpur',
  degree: 'Bachelor of Technology in Computer Science and Engineering',
  period: 'Aug 2023 — May 2027',
  cgpa: '7.65 / 10',
  location: 'Nagpur, India',
  prior: [
    { label: 'Class XII (CBSE)', score: '84%' },
    { label: 'Class X (CBSE)', score: '83%' },
  ],
}

export default function Education() {
  return (
    <section id="education" className="section">
      <p className="section-label">Education</p>
      <h2 className="section-title">Academic foundation</h2>

      <motion.div
        className="card max-w-3xl"
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-wrap items-start gap-4 mb-6">
          <GraduationCap size={28} className="text-gold" />
          <div className="flex-1 min-w-[200px]">
            <h3 className="font-display text-2xl text-chalk leading-tight">
              {education.institution}
            </h3>
            <p className="text-chalk-muted text-sm mt-2">{education.degree}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 border-t border-gridline/60">
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-widest text-gold-muted">
              Duration
            </p>
            <p className="text-chalk text-sm mt-1">{education.period}</p>
          </div>
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-widest text-gold-muted">
              CGPA
            </p>
            <p className="text-chalk text-sm mt-1">{education.cgpa}</p>
          </div>
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-widest text-gold-muted">
              Location
            </p>
            <p className="text-chalk text-sm mt-1 flex items-center gap-1.5">
              <MapPin size={13} className="text-chalk-muted" />
              {education.location}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-6">
          {education.prior.map(({ label, score }) => (
            <span key={label} className="tag">
              {label} — <span className="text-gold">{score}</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
