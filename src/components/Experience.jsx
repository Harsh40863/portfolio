import { motion } from 'framer-motion'
import { Trophy, Palette } from 'lucide-react'

const experiences = [
  {
    Icon: Trophy,
    period: 'Apr 2025 – Aug 2026',
    title: 'Global Finalist (Top 20) — HackIndia Hackathon',
    subtitle: "India's Largest AI & Web3 Hackathon · 29,000+ Participants",
    highlights: [
      'Ranked in the Top 20 of 29,000+ participants nationwide in India’s largest AI and Web3 hackathon; presented live to the CEOs of SingularityNET and Mindcracker.',
      'Engineered summary.ai — a multi-tenant Document Q&A app built on FastAPI, React, and MongoDB with JWT auth and multi-tenant document handling.',
      'Implemented vector retrieval using FAISS with MMR and multi-query expansion, augmented with Tavily & BeautifulSoup live scraping, powered by Mistral AI and Google Gemini.',
      'Measured quality with DeepEval and LangSmith (relevancy, faithfulness, toxicity, PII); tuned chunking and prompt engineering to elevate contextual relevancy from ~35% to 65% at 100% faithfulness.',
    ],
    accent: 'text-cyan-wire',
    border: 'border-l-cyan-wire',
  },
  {
    Icon: Palette,
    period: 'Hackathon',
    title: '3rd Place — Rebranding Wars Hackathon',
    subtitle: '6-Hour Hackathon · Rapid Ideation & Visual Identity Redesign',
    highlights: [
      "Redesigned Zepto's visual identity in Figma within 6 hours, securing 3rd place overall.",
      'Rebuilt the logo mark, color palette, typography hierarchy, and app interface grounded in rapid market research.',
      'Delivered a comprehensive brand pitch to an executive panel of judges.',
    ],
    accent: 'text-gold',
    border: 'border-l-gold',
  },
]
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { x: -24, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.55 } },
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <p className="section-label">Experience</p>
      <h2 className="section-title">Where I've competed & shipped</h2>
      <p className="section-subtitle">
        From global AI hackathon finals to rapid-fire design sprints — building under
        pressure and presenting to industry judges.
      </p>

      <div className="relative pl-8 md:pl-10">
        <div className="timeline-line" aria-hidden="true" />

        <motion.div
          className="space-y-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {experiences.map((exp) => (
            <motion.article
              key={exp.title}
              className={`card border-l-2 ${exp.border} relative`}
              variants={itemVariants}
            >
              <div className="absolute -left-[2.15rem] md:-left-[2.65rem] top-8 timeline-dot" />

              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <exp.Icon size={22} className={exp.accent} />
                <span className="font-mono text-xs text-chalk-muted tracking-wide">
                  {exp.period}
                </span>
              </div>

              <h3 className="font-display text-2xl text-chalk">{exp.title}</h3>
              <p className="font-mono text-xs text-gold mt-1 tracking-wide uppercase">
                {exp.subtitle}
              </p>

              <ul className="mt-5 space-y-3">
                {exp.highlights.map((point) => (
                  <li
                    key={point.slice(0, 40)}
                    className="text-chalk-muted text-sm leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-px before:bg-gridline"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
