import { motion } from 'framer-motion'

function SketchUnderline() {
  return (
    <span className="sketch-underline">
      <svg viewBox="0 0 300 12" preserveAspectRatio="none">
        <motion.path
          d="M0,8 C12,5 24,10 40,7 C56,4 68,9 84,6 C100,3 116,10 140,7 C164,4 180,9 200,6 C220,3 240,10 260,7 C276,5 288,8 300,6"
          fill="none"
          stroke="#C9A962"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9, ease: 'easeOut' }}
        />
      </svg>
    </span>
  )
}

function RAGPipeline() {
  const nodes = [
    { id: 'query', label: 'Query', x: 40, y: 30, w: 130, h: 56 },
    { id: 'retrieval', label: 'Retrieval', x: 185, y: 160, w: 130, h: 56 },
    { id: 'generation', label: 'Generation', x: 310, y: 300, w: 140, h: 56 },
  ]

  const connectors = [
    { id: 'c1', d: 'M 105,86 C 105,120 250,110 250,160', delay: 0.4 },
    { id: 'c2', d: 'M 250,216 C 250,255 380,250 380,300', delay: 0.9 },
  ]

  const PulsingDot = ({ cx, cy }) => (
    <g>
      <circle cx={cx} cy={cy} r="3" fill="#7EE8A2" opacity="0.9">
        <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2s" repeatCount="indefinite" />
      </circle>
    </g>
  )

  return (
    <motion.div
      initial={{ x: 40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full flex justify-center md:justify-end"
    >
      <svg
        viewBox="0 0 500 400"
        className="w-full max-w-[440px] md:max-w-full opacity-90"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#4ECDC4" opacity="0.6" />
          </marker>
        </defs>

        {connectors.map(({ id, d, delay }) => (
          <g key={id}>
            <path d={d} fill="none" stroke="#1E2D45" strokeWidth="1" opacity="0.4" />
            <motion.path
              d={d}
              fill="none"
              stroke="#4ECDC4"
              strokeWidth="1.5"
              opacity="0.5"
              strokeLinecap="round"
              markerEnd="url(#arrowhead)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay, ease: 'easeInOut' }}
            />
            <path id={`particle-${id}`} d={d} fill="none" stroke="none" />
          </g>
        ))}

        {nodes.map(({ id, label, x, y, w, h }, i) => (
          <motion.g
            key={id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.25 }}
          >
            <rect
              x={x}
              y={y}
              width={w}
              height={h}
              rx="2"
              fill="rgba(18,28,46,0.6)"
              stroke="#1E2D45"
              strokeWidth="1"
            />
            <text
              x={x + w / 2}
              y={y + h / 2 + 1}
              textAnchor="middle"
              dominantBaseline="central"
              fill="#F2EFE8"
              fontFamily="'JetBrains Mono', monospace"
              fontSize="11"
              letterSpacing="0.08em"
            >
              {label}
            </text>
            <PulsingDot cx={x + w - 10} cy={y + 10} />
          </motion.g>
        ))}
      </svg>
    </motion.div>
  )
}

const stats = [
  { value: 'Global Finalist', label: 'among 29,000+ participants - HackIndia' },
  { value: '850+', label: 'DSA problems solved' },
  { value: '1851', label: 'LeetCode peak rating' },
]

export default function Hero() {
  return (
    <section id="hero" className="section min-h-screen flex items-center pt-28 md:pt-32">
      <div className="w-full grid grid-cols-1 md:grid-cols-[52%_48%] gap-14 md:gap-10 items-center">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Full-Stack & AI Systems Developer</span>

          <h1 className="font-display text-6xl md:text-[5.5rem] text-chalk mt-4 leading-[0.95]">
            Harsh
            <br />
            <em className="text-gold font-normal">Vaishnav</em>
          </h1>
          <SketchUnderline />

          <p className="font-body text-lg text-chalk-muted max-w-md mt-7 leading-relaxed">
            Pre-final year CS at IIIT Nagpur. I architect RAG pipelines, ship
            production full-stack systems, and solve hard problems at scale.
          </p>

          <div className="stat-grid mt-8">
            {stats.map(({ value, label }) => (
              <span key={label} className="stat-pill">
                <strong>{value}</strong> {label}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-10">
            <a href="#projects" className="btn btn-primary">
              View my work
            </a>
            <a
              href="/harsh_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Download resume
            </a>
          </div>
        </motion.div>

        <RAGPipeline />
      </div>
    </section>
  )
}
