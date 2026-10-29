import { motion } from 'framer-motion'
import { FileText, Download, ExternalLink, CheckCircle2 } from 'lucide-react'

const highlights = [
  'Final-Year CS at IIIT Nagpur (CGPA: 7.65)',
  'HackIndia Global Finalist (Top 20 of 29,000+)',
  'LeetCode 1863 (Knight) · CodeChef 1611 (3★)',
  '1000+ DSA Problems Solved · 100+ Contests',
  'summary.ai (RAG, FAISS MMR, DeepEval)',
  'Harsh Bank of India (AWS EC2, LangGraph, MCP)',
  'Dot-Slash Coding Club (Senior Core Member)',
  'Available to Join Immediately',
]

export default function Resume() {
  return (
    <section id="resume" className="section">
      <p className="section-label">Resume</p>
      <h2 className="section-title">Curriculum Vitae</h2>
      <p className="section-subtitle">
        A single-page overview of full-stack engineering, GenAI systems,
        competitive programming, and leadership.
      </p>

      <motion.div
        className="card mb-8"
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-gridline/60">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xs border border-gold/40 bg-gold/10 flex items-center justify-center shrink-0">
              <FileText size={24} className="text-gold" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-display text-2xl text-chalk">
                  Harsh Vaishnav — Resume
                </h3>
                <span className="font-mono text-[0.65rem] uppercase tracking-wider text-signal-green px-2 py-0.5 border border-signal-green/30 bg-signal-green/10 rounded-xs">
                  Latest Version
                </span>
              </div>
              <p className="font-mono text-xs text-chalk-muted mt-1">
                PDF Document · 1 Page · Full-Stack & GenAI Systems
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/harsh_resume.pdf"
              download="Harsh_Vaishnav_Resume.pdf"
              className="btn btn-primary"
            >
              <Download size={15} />
              Download PDF
            </a>
            <a
              href="/harsh_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <ExternalLink size={15} />
              Open in New Tab
            </a>
          </div>
        </div>

        {/* Quick Highlights Grid */}
        <div className="pt-6">
          <p className="font-mono text-[0.65rem] uppercase tracking-widest text-gold-muted mb-3">
            Resume Highlights
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-xs font-mono text-chalk-muted bg-midnight/60 border border-gridline/60 px-3 py-2 rounded-xs"
              >
                <CheckCircle2 size={13} className="text-gold shrink-0" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Embedded PDF Viewer */}
      <motion.div
        className="w-full rounded-xs border border-gridline bg-midnight/80 overflow-hidden shadow-2xl"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="flex items-center justify-between px-4 py-3 bg-blueprint/70 border-b border-gridline font-mono text-xs text-chalk-muted">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gridline" />
            <span className="w-2.5 h-2.5 rounded-full bg-gridline" />
            <span className="w-2.5 h-2.5 rounded-full bg-gridline" />
            <span className="ml-2 text-chalk">harsh_resume.pdf</span>
          </div>
          <a
            href="/harsh_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-wire hover:text-gold flex items-center gap-1 transition-colors"
          >
            Fullscreen <ExternalLink size={12} />
          </a>
        </div>

        <div className="relative w-full h-[650px] md:h-[900px] bg-blueprint/30">
          <iframe
            src="/harsh_resume.pdf#view=FitH"
            title="Harsh Vaishnav Resume"
            className="w-full h-full border-none"
          />
        </div>
      </motion.div>
    </section>
  )
}
