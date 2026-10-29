import { motion } from 'framer-motion'
import { ExternalLink, Zap, Trophy, Shield, Bot, Users } from 'lucide-react'
import { GithubIcon } from './Icons'

const flagships = [
  {
    title: 'summary.ai: Multi-tenant RAG Platform',
    badge: 'HackIndia Global Finalist · Apr 2025 – Aug 2026',
    tagline: 'Document Q&A Platform with FAISS MMR Retrieval & DeepEval Quality Benchmarking',
    bullets: [
      'Document Q&A app on FastAPI, React and MongoDB, with JWT auth and multi-tenant document handling.',
      'Retrieval uses FAISS with MMR and multi-query expansion; Tavily and BeautifulSoup add web search and scraping, with Mistral and Gemini as the LLMs.',
      'Measured quality with DeepEval and LangSmith (relevancy, faithfulness, toxicity, PII). Tuning chunking and prompts took contextual relevancy from about 35% to 65% at 100% faithfulness.',
      'React frontend built around Context API and custom hooks for auth, documents and search, so state is shared without prop drilling.',
    ],
    stack: [
      'FastAPI',
      'React',
      'MongoDB',
      'JWT Auth',
      'FAISS (MMR)',
      'Multi-Query Expansion',
      'DeepEval',
      'LangSmith',
      'Mistral AI',
      'Google Gemini',
      'Tavily',
      'BeautifulSoup',
    ],
    impact: 'Top 20 of 29,000+ Participants · 65% Relevancy @ 100% Faithfulness',
    ImpactIcon: Trophy,
    github: 'https://github.com/Harsh40863/summary.ai',
    featuredClass: 'card-featured',
  },
  {
    title: 'Harsh Bank of India: Banking Platform with AI Assistant',
    badge: 'AWS EC2 Deployed · Aug 2026',
    tagline: 'Full-Stack Banking with Double-Entry Ledger, LangGraph Multi-Agent & MCP Server',
    bullets: [
      'Node.js, Express and MongoDB backend with a double-entry ledger; balances are derived with aggregation rather than stored.',
      'Fund transfers run inside MongoDB transactions (ClientSession) with idempotency keys, so retries don’t double-post and failures roll back cleanly.',
      'Separate FastAPI service with a LangGraph multi-agent chatbot (Grok API) and an MCP server for expense tracking and live crypto/stock data.',
      'Three Docker images (backend, AI service, MongoDB) on a Compose network, deployed to AWS EC2 behind Nginx with Security Groups and IAM roles.',
    ],
    stack: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'FastAPI',
      'LangGraph',
      'Grok API',
      'MCP Server',
      'Docker Compose',
      'AWS EC2',
      'Nginx',
      'IAM Roles',
    ],
    impact: 'Containerized AWS EC2 Deployment · Double-Entry Ledger + LangGraph MCP Agent',
    ImpactIcon: Shield,
    github: 'https://github.com/Harsh40863/Harsh_Bank',
    featuredClass: 'card-featured',
  },
]

const otherProjects = [
  {
    title: 'VideoMind — AI Video/Meeting Assistant',
    description:
      'Audio ingestion pipeline (yt-dlp, pydub, ffmpeg) routing transcription across local Whisper (English) and Sarvam AI STT (Hinglish). RAG pipeline (LangChain LCEL) chunks transcripts into a persisted ChromaDB vector store with HuggingFace MiniLM embeddings, grounding Mistral AI retrieval in meeting context with structured action item extraction in Streamlit.',
    stack: ['LangChain', 'ChromaDB', 'Whisper', 'Sarvam AI', 'Mistral AI', 'Streamlit'],
    impact: 'Bilingual transcription + grounded meeting Q&A',
    ImpactIcon: Bot,
    github: 'https://github.com/Harsh40863/chat_with_video',
  },
  {
    title: 'Real-Time Collaborative Code Editor',
    description:
      'Google Docs-style collaborative code editor (React.js, Monaco Editor, Node.js, Express.js, Socket.IO) supporting simultaneous multi-user editing with live cursors and presence. Conflict-free real-time sync via Yjs (CRDTs) and the Awareness Protocol merges concurrent edits over WebSockets.',
    stack: ['React.js', 'Monaco Editor', 'Yjs', 'Socket.IO', 'Node.js', 'Express.js'],
    impact: 'Multi-user editing with CRDT-based conflict resolution',
    ImpactIcon: Users,
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
          Source Code
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
        with an intentional, production-grade architecture.
      </p>

      {/* Flagship Projects */}
      <div className="space-y-8 mb-12">
        {flagships.map((project, i) => (
          <motion.article
            key={project.title}
            className={`card ${project.featuredClass}`}
            initial={{ y: 32, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-mono text-xs text-gold tracking-widest uppercase">
                {project.badge}
              </span>
            </div>

            <h3 className="font-display text-3xl text-chalk">{project.title}</h3>
            <p className="font-mono text-xs text-chalk-muted/80 mt-1">
              {project.tagline}
            </p>

            <ul className="mt-5 space-y-2.5">
              {project.bullets.map((point, idx) => (
                <li
                  key={idx}
                  className="text-chalk-muted text-sm leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-px before:bg-gridline"
                >
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>

            <p className="mt-5 font-mono text-signal-green text-xs flex items-center gap-2 tracking-wide">
              <project.ImpactIcon size={14} />
              {project.impact}
            </p>

            <ProjectLinks
              live={project.live}
              liveUrl={project.liveUrl}
              github={project.github}
            />
          </motion.article>
        ))}
      </div>

      {/* Additional Projects */}
      <div>
        <h3 className="font-display text-xl text-chalk mb-6 flex items-center gap-2">
          <span className="text-gold">✦</span> Other Notable Systems
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project, i) => {
            const { ImpactIcon } = project

            return (
              <motion.article
                key={project.title}
                className="card flex flex-col justify-between"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true, amount: 0.15 }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <h4 className="font-display text-2xl text-chalk">{project.title}</h4>
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
                </div>

                <div>
                  <p className="mt-5 font-mono text-cyan-wire text-xs flex items-center gap-2">
                    <ImpactIcon size={14} />
                    {project.impact}
                  </p>

                  <ProjectLinks
                    live={project.live}
                    liveUrl={project.liveUrl}
                    github={project.github}
                  />
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}