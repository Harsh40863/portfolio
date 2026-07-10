import { motion } from 'framer-motion'
import { Cpu, Zap, Rocket } from 'lucide-react'

const cards = [
  {
    Icon: Cpu,
    title: 'Systems Thinker',
    body: "At IIIT Nagpur, I don't just write code — I design how data flows. Every project starts with architecture: retrieval pipelines, API contracts, and schema design before the first commit.",
    accent: 'text-cyan-wire',
  },
  {
    Icon: Zap,
    title: 'Competitive Edge',
    body: 'LeetCode 1738 · CodeChef 3★ (1611) · Codeforces 1240. 850+ problems across LeetCode, Codeforces, CodeChef, CSES, and NeetCode — I solve hard problems fast because I\'ve solved a lot of them.',
    accent: 'text-gold',
  },
  {
    Icon: Rocket,
    title: "Ships, Doesn't Slide-Deck",
    body: 'AI Mock Interviewer and summary.ai are live in production — Railway, Vercel, MongoDB Atlas. I debug Python version conflicts, IP whitelisting, and API key management so users actually get to use what I build.',
    accent: 'text-cyan-wire',
  },
]

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
}

export default function About() {
  return (
    <section id="about" className="section">
      <p className="section-label">About</p>
      <h2 className="section-title">How I think about building</h2>
      <p className="section-subtitle">
        A developer who sits at the intersection of competitive programming rigor,
        AI systems engineering, and shipping real products.
      </p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {cards.map(({ Icon, title, body, accent }) => (
          <motion.div key={title} className="card" variants={cardVariants}>
            <Icon size={26} className={accent} />
            <h3 className="font-display text-xl text-chalk mt-5">{title}</h3>
            <p className="font-body text-chalk-muted text-sm mt-3 leading-relaxed">
              {body}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
