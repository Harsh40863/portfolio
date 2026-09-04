import { motion } from 'framer-motion'
import { ExternalLink, Zap, Trophy, Shield, Bot, Users } from 'lucide-react'
import { GithubIcon } from './Icons'

const featured = {
  title: 'Summary.ai',
  badge: 'HackIndia Global Finalist',
  description:
    'Agentic RAG Document Intelligence Platform (FastAPI + React) with a JWT-secured, multi-tenant architecture. Multi-agent query system with distinct Search, Explore, and Think pipelines — FAISS + MMR vector retrieval for semantic search, a LangChain agent tool for social data exploration, and a Tavily + BeautifulSoup web-scraping pipeline for live augmentation, synthesized via Mistral AI and Google Gemini.',
  stack: ['React', 'FastAPI', 'LangChain', 'FAISS', 'Mistral AI', 'Google Gemini', 'Tavily', 'JWT Auth'],
  impact: 'Global Finals · Top team among 29,000+ participants',
  ImpactIcon: Trophy,
  live: false,
  liveUrl: null,
  github: 'https://github.com/Harsh40863/summary.ai',
}

const projects = [
  {
    title: 'Harsh Bank of India',
    description:
      'Modular banking backend (Node.js, Express.js, MongoDB) with a double-entry ledger architecture, deriving account balances via MongoDB aggregation and enforcing immutability via Mongoose pre-hooks. Atomic fund transfers use MongoDB ClientSession transactions with idempotency-key handling to prevent duplicate charges. A LangGraph multi-agent AI service (FastAPI) layers a Teller-Underwriter state machine on top, isolating conversational access from a backend-only loan-disbursement agent to mitigate prompt-injection risk, with LangSmith-traced observability and thread-scoped context via MemorySaver.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'LangGraph', 'FastAPI', 'LangSmith'],
    impact: 'Double-entry ledger + prompt-injection-resistant loan agent',
    ImpactIcon: Shield,
    live: false,
    liveUrl: null,
    github: 'https://github.com/Harsh40863/Harsh_Bank',
  },
  {
    title: 'VideoMind — AI Video/Meeting Assistant',
    description:
      'Audio ingestion pipeline (yt-dlp, pydub, ffmpeg) that downloads YouTube audio or converts local files to WAV, auto-chunks long recordings, and routes transcription across two paths — local Whisper for English and the Sarvam AI STT-translate API for Hinglish. A RAG pipeline (LangChain LCEL) chunks transcripts into a persisted ChromaDB vector store with HuggingFace MiniLM embeddings, grounding a Mistral AI-backed retrieval chain strictly in transcript context. Structured-extraction chains surface action items, key decisions, and open questions in a Streamlit UI with live per-stage pipeline status.',
    stack: ['LangChain', 'ChromaDB', 'Whisper', 'Sarvam AI', 'Mistral AI', 'Streamlit'],
    impact: 'Bilingual transcription + grounded meeting Q&A',
    ImpactIcon: Bot,
    live: false,
    liveUrl: null,
    github: 'https://github.com/Harsh40863/chat_with_video',
  },
  {
    title: 'Real-Time Collaborative Code Editor',
    description:
      'Google Docs-style collaborative code editor (React.js, Monaco Editor, Node.js, Express.js, Socket.IO) supporting simultaneous multi-user editing with live cursors and presence. Conflict-free real-time sync via Yjs (CRDTs) and the Awareness Protocol merges concurrent edits and broadcasts cursor/selection state over WebSockets.',
    stack: ['React.js', 'Monaco Editor', 'Yjs', 'Socket.IO', 'Node.js', 'Express.js'],
    impact: 'Multi-user editing with CRDT-based conflict resolution',
    ImpactIcon: Users,
    live: false,
    liveUrl: null,
    github: 'https://github.com/Harsh40863/Collaborative-Code-Editor',
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
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost"
        >
          <GithubIcon size={13} />
          Source
        </a>
      )}
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
          {featured.live && <LiveBadge href={featured.liveUrl} />}
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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