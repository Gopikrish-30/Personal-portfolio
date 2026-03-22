'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STACK_LAYERS = [
  {
    layer: 'L0',
    name: 'CORE LANGUAGES',
    color: 'amber' as const,
    items: ['Python', 'SQL', 'R'],
  },
  {
    layer: 'L1',
    name: 'MACHINE LEARNING',
    color: 'steel' as const,
    items: ['Deep Learning', 'NLP', 'Model Evaluation', 'Hyperparameter Optimization'],
  },
  {
    layer: 'L2',
    name: 'LLM & AI SYSTEMS',
    color: 'moss' as const,
    items: ['RAG', 'LLM Fine-Tuning', 'AI Agents', 'LangChain'],
  },
  {
    layer: 'L3',
    name: 'STATISTICS & ANALYSIS',
    color: 'amber' as const,
    items: ['Statistical Analysis', 'Hypothesis Testing', 'Probability', 'EDA'],
  },
  {
    layer: 'L4',
    name: 'FRAMEWORKS',
    color: 'steel' as const,
    items: ['React', 'Node.js', 'Flask', 'FastAPI', 'Django'],
  },
  {
    layer: 'L5',
    name: 'LIBRARIES',
    color: 'moss' as const,
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'PyTorch'],
  },
  {
    layer: 'L6',
    name: 'TOOLS & PLATFORMS',
    color: 'amber' as const,
    items: ['Git', 'Docker', 'AWS', 'Google Cloud Platform', 'MCPs'],
  },
]

const COLOR_MAP: Record<string, { text: string; border: string; bg: string; glow: string }> = {
  amber: { text: 'text-amber', border: 'border-amber/20', bg: 'bg-amber/8', glow: 'hover:shadow-[0_0_12px_rgba(18,183,106,0.12)]' },
  steel: { text: 'text-steel', border: 'border-steel/20', bg: 'bg-steel/8', glow: 'hover:shadow-[0_0_12px_rgba(74,127,165,0.08)]' },
  moss: { text: 'text-moss', border: 'border-moss/20', bg: 'bg-moss/8', glow: 'hover:shadow-[0_0_12px_rgba(31,122,76,0.12)]' },
}

const CERTS = [
  { name: 'Machine Learning with Python', issuer: 'IBM' },
  { name: 'Generative AI with Large Language Models', issuer: 'DeepLearning.AI' },
  { name: 'Probability and Statistics using Python', issuer: 'Infosys' },
  { name: 'Data Analytics with Excel', issuer: 'Microsoft' },
]

function LayerPanel({ layer, index }: { layer: typeof STACK_LAYERS[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const c = COLOR_MAP[layer.color]

  return (
    <motion.div
      ref={ref}
      className={`border ${c.border} bg-charcoal-2 p-5 relative`}
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`absolute top-0 left-0 right-0 h-px ${layer.color === 'amber' ? 'bg-gradient-to-r from-amber/30 to-transparent' :
        layer.color === 'steel' ? 'bg-gradient-to-r from-steel/30 to-transparent' :
          'bg-gradient-to-r from-moss/30 to-transparent'
        }`} />

      {/* Layer header */}
      <div className="flex items-center gap-3 mb-4">
        <span className={`font-mono text-xs ${c.text}/60 border ${c.border} px-2 py-0.5 tracking-widest`}>
          {layer.layer}
        </span>
        <span className={`font-mono text-sm ${c.text} tracking-[0.2em]`}>
          {layer.name}
        </span>
      </div>

      {/* Tech items — compact grid */}
      <div className="flex flex-wrap gap-2">
        {layer.items.map((item, i) => (
          <motion.div
            key={item}
            className={`font-mono text-xs ${c.text}/80 ${c.bg} border ${c.border} px-3 py-1.5 tracking-wide
              hover:border-opacity-60 ${c.glow} transition-all duration-300 cursor-default`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.15 + i * 0.04, duration: 0.3 }}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Stack() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="stack" className="relative py-32 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          ref={ref}
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs text-amber/60 tracking-[0.4em]">MODULE // 03</span>
            <div className="h-px w-16 bg-amber/20" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-cream tracking-widest">
            MODEL<br /><span className="text-amber">STACK</span>
          </h2>
          <p className="mt-6 font-mono text-sm text-cream-dim/50 max-w-xl leading-relaxed">
            AI/ML engineering stack from data foundations to LLMs and deployment.
          </p>
        </motion.div>

        {/* Layers grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {STACK_LAYERS.map((layer, i) => (
            <LayerPanel key={layer.layer} layer={layer} index={i} />
          ))}

          {/* Certifications panel */}
          <motion.div
            className="border border-cream-faint/10 bg-charcoal-2 p-5 relative md:col-span-2 xl:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-amber/20 via-steel/20 to-transparent" />
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-xs text-cream-dim/40 border border-cream-faint/20 px-2 py-0.5 tracking-widest">
                CERTS
              </span>
              <span className="font-mono text-sm text-cream-dim/60 tracking-[0.2em]">
                CREDENTIALS
              </span>
              <div className="flex-1 h-px bg-cream-faint/8" />
              <span className="font-mono text-[10px] text-cream-dim/20 tracking-wider">
                {CERTS.length} VERIFIED
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {CERTS.map((cert, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-2.5 p-3 border border-cream-faint/8 bg-charcoal-3/50 hover:border-amber/20 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 8 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.05, duration: 0.3 }}
                >
                  <span className="text-amber/40 group-hover:text-amber/70 transition-colors mt-0.5 text-xs">◆</span>
                  <div>
                    <div className="font-mono text-xs text-cream/60 leading-relaxed group-hover:text-cream transition-colors">{cert.name}</div>
                    <div className="font-mono text-[10px] text-cream-dim/30 tracking-wider mt-0.5">{cert.issuer}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
