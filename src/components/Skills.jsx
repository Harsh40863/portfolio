import { motion } from 'framer-motion'

const layers = [
  {
    label: 'GenAI & Agents',
    skills: ['RAG', 'LangChain', 'LangGraph', 'LangSmith', 'DeepEval', 'MCP', 'FAISS', 'ChromaDB'],
    borderColor: 'border-l-cyan-wire',
    labelColor: 'text-cyan-wire',
  },
  {
    label: 'Backend & Data',
    skills: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'JWT', 'Socket.IO', 'MongoDB', 'MySQL'],
    borderColor: 'border-l-gold',
    labelColor: 'text-gold',
  },
  {
    label: 'DevOps & Cloud',
    skills: ['Docker', 'Docker Compose', 'GitHub Actions', 'AWS (EC2, IAM)', 'Nginx', 'Git', 'Postman'],
    borderColor: 'border-l-cyan-wire',
    labelColor: 'text-cyan-wire',
  },
  {
    label: 'Frontend',
    skills: ['React', 'Tailwind'],
    borderColor: 'border-l-gold',
    labelColor: 'text-gold',
  },
  {
    label: 'Languages',
    skills: ['C++', 'Python', 'JavaScript', 'Java', 'C', 'SQL'],
    borderColor: 'border-l-cyan-wire',
    labelColor: 'text-cyan-wire',
  },
  {
    label: 'Core CS',
    skills: ['Data Structures and Algorithms', 'OOP', 'Operating Systems', 'DBMS', 'Computer Networks'],
    borderColor: 'border-l-gold',
    labelColor: 'text-gold',
  },
]

const stackVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const layerVariants = {
  hidden: { x: -30, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
}

function Connector() {
  return <div className="w-px h-5 bg-gridline/60 mx-auto" />
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <p className="section-label">Skills</p>
      <h2 className="section-title">Technical arsenal</h2>
      <p className="section-subtitle">
        From low-level systems fundamentals to production AI pipelines — the stack
        I use to build end-to-end.
      </p>

      <motion.div
        className="space-y-3"
        variants={stackVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {layers.map((layer, index) => (
          <div key={layer.label}>
            <motion.div
              className={`card border-l-2 ${layer.borderColor} flex flex-col md:flex-row md:items-center py-5`}
              variants={layerVariants}
            >
              <div className="w-full md:w-40 md:shrink-0 mb-3 md:mb-0">
                <span
                  className={`font-mono uppercase text-[0.65rem] tracking-[0.15em] ${layer.labelColor}`}
                >
                  {layer.label}
                </span>
              </div>

              <div className="flex-1 flex flex-wrap gap-2">
                {layer.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {index < layers.length - 1 && <Connector />}
          </div>
        ))}
      </motion.div>
    </section>
  )
}