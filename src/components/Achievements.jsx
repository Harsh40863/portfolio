import { motion } from 'framer-motion'
import { Trophy, Award, Code, Users, Calendar, Medal } from 'lucide-react'

const competitive = [
  { platform: 'LeetCode', stat: '1863', detail: 'Knight · 100+ rated contests' },
  { platform: 'CodeChef', stat: '1611', detail: '3★ (3 Star) rated coder' },
  { platform: 'Problems Solved', stat: '1000+', detail: 'LeetCode, CodeChef, Codeforces, CSES' },
  { platform: 'Contests', stat: '100+', detail: 'Rated algorithmic programming rounds' },
]

const leadership = [
  {
    Icon: Award,
    title: 'Dot-Slash Coding Club (Senior Core Member)',
    detail:
      'Selected among the top 10 coders in college; mentor juniors in Data Structures, Algorithms, and competitive programming.',
  },
  {
    Icon: Calendar,
    title: 'Flash Code (Event Head)',
    detail:
      'Ran a coding contest with 500+ registrations and a team of 10 volunteers covering problem setting, logistics, and evaluation.',
  },
]

const milestones = [
  {
    Icon: Trophy,
    title: 'HackIndia (Global Finalist)',
    detail:
      'Top 20 of 29,000+ participants in India’s largest AI and Web3 hackathon; presented summary.ai to the CEOs of SingularityNET and Mindcracker.',
  },
  {
    Icon: Medal,
    title: 'Hackathon (3rd Place) — Rebranding Wars',
    detail:
      'Redesigned Zepto’s visual identity in Figma within 6 hours; executive brand pitch and competitor analysis.',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <p className="section-label">Achievements</p>
      <h2 className="section-title">Milestones & leadership</h2>
      <p className="section-subtitle">
        Competitive programming ratings, hackathon honors, and positions of
        responsibility at IIIT Nagpur.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {competitive.map((item, i) => (
          <motion.div
            key={item.platform}
            className="card text-center py-6"
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="font-mono text-[0.65rem] uppercase tracking-widest text-gold-muted">
              {item.platform}
            </p>
            <p className="font-display text-4xl text-gold mt-2">{item.stat}</p>
            <p className="text-chalk-muted text-xs mt-2 leading-relaxed px-2">
              {item.detail}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {milestones.map((m, i) => (
          <motion.div
            key={m.title}
            className="card flex gap-4"
            initial={{ x: i % 2 === 0 ? -20 : 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <m.Icon size={22} className="text-cyan-wire shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-xl text-chalk">{m.title}</h3>
              <p className="text-chalk-muted text-sm mt-2">{m.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <h3 className="font-display text-xl text-chalk mb-5 flex items-center gap-3">
        <Code size={20} className="text-gold" />
        Positions of Responsibility
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {leadership.map((item, i) => (
          <motion.div
            key={item.title}
            className="card"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <item.Icon size={20} className="text-gold" />
            <h4 className="font-display text-lg text-chalk mt-4">{item.title}</h4>
            <p className="text-chalk-muted text-sm mt-2 leading-relaxed">
              {item.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
