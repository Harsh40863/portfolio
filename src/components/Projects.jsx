import { motion } from 'framer-motion'
import { ExternalLink, Zap, Trophy, Shield } from 'lucide-react'
import { GithubIcon } from './Icons'

const featured = {
  title: 'summary.ai',
  badge: 'HackIndia Global Finalist',
  description:
    'Deployed Document Summarization & Retrieval System built with FastAPI and React. Semantic search via FAISS vector indexing, T5 summarization, and Gemini API reasoning layered on top to reduce hallucination and improve retrieval accuracy.',
  stack: ['React', 'FastAPI', 'LangChain', 'FAISS', 'Google Gemini', 'Python'],
  impact: 'Global Finals · Top team among 2,900+ participants',
  ImpactIcon: Trophy,
  live: true,
  liveUrl: 'https://summary-ai-steel.vercel.app/',
  github: 'https://github.com/Harsh40863/summary.ai',
}

const projects = [
  {
    title: 'AI Mock Interviewer',
    description:
      'End-to-end AI mock interview platform generating role-specific questions and evaluating responses in real time. RAG pipeline with FAISS enables context-aware follow-ups by detecting weak topics from prior answers.',
    stack: ['React', 'FastAPI', 'LangChain', 'Gemini API', 'FAISS', 'MongoDB'],
    impact: '5-question progressive interviews with live scoring',
    ImpactIcon: Zap,
    live: true,
    liveUrl: 'https://interview-application-2gx7lp5gv-harsh-vaishnav-s-projects.vercel.app',
    github: 'https://github.com/Harsh40863/interview-application',
  },
  {
    title: 'Knock',
    description:
      'Twitter-like social backend with Node.js, Express, and MongoDB. Dual-identity architecture for privacy-preserving anonymous interactions, JWT-secured auth, and schema optimized for feed retrieval.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs'],
    impact: 'Anonymous + public post feeds with secure sessions',
    ImpactIcon: Shield,
    live: false,
    liveUrl: null,
    github: 'https://github.com/Harsh40863/anti',
  },
]

function ProjectLinks({ live, liveUrl, github }) {
  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {live && liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost"
        >
          <ExternalLink size={13} />
          Live
        </a>
      )}
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-ghost"
      >
        <GithubIcon size={13} />
        Source
      </a>
    </div>
  )
}

function LiveBadge({ href }) {
  if (!href) {
    return <span className="badge-live">Live</span>
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="badge-live"
      aria-label="Open live project"
    >
      Live
    </a>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <p className="section-label">Projects</p>
      <h2 className="section-title">What I've built</h2>
      <p className="section-subtitle">
        Production-deployed systems — not demos. Each project solves a real problem
        with a deliberate architecture.
      </p>

      <motion.article
        className="card card-featured mb-8"
        initial={{ y: 32, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <LiveBadge href={featured.liveUrl} />
          <span className="font-mono text-xs text-gold tracking-widest uppercase">
            {featured.badge}
          </span>
        </div>

        <h3 className="font-display text-3xl text-chalk">{featured.title}</h3>
        <p className="text-chalk-muted text-sm mt-4 leading-relaxed max-w-2xl">
          {featured.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {featured.stack.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>

        <p className="mt-5 font-mono text-signal-green text-xs flex items-center gap-2 tracking-wide">
          <featured.ImpactIcon size={14} />
          {featured.impact}
        </p>

        <ProjectLinks
          live={featured.live}
          liveUrl={featured.liveUrl}
          github={featured.github}
        />
      </motion.article>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, i) => {
          const { ImpactIcon } = project

          return (
            <motion.article
              key={project.title}
              className="card"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true, amount: 0.15 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-display text-2xl text-chalk">{project.title}</h3>
                {project.live && <LiveBadge href={project.liveUrl} />}
              </div>

              <p className="text-chalk-muted text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-5 font-mono text-cyan-wire text-xs flex items-center gap-2">
                <ImpactIcon size={14} />
                {project.impact}
              </p>

              <ProjectLinks
                live={project.live}
                liveUrl={project.liveUrl}
                github={project.github}
              />
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
