'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const TERMINAL_LINES = [
  { delay: 0, text: '$ init profile --role=ai_ml_engineer', type: 'cmd' },
  { delay: 0.8, text: '> data_pipeline: READY', type: 'ok' },
  { delay: 1.4, text: '> model_training: CONFIGURED', type: 'ok' },
  { delay: 1.9, text: '> llm_finetune: ENABLED', type: 'ok' },
  { delay: 2.4, text: '> inference_api: AVAILABLE', type: 'ok' },
  { delay: 2.9, text: '$ status: AVAILABLE', type: 'cmd' },
]

const HERO_SKILLS = [
  'Python',
  'Machine Learning',
  'Deep Learning',
  'LLM Engineering',
  'RAG Systems',
  'AI Agents',
  'Model Deployment',
]

const FOCUS_AREAS = [
  'Model training, evaluation, and iteration',
  'LLM fine-tuning and RAG pipelines',
  'Inference APIs and deployment workflows',
]

function TerminalLine({ text, type, delay }: { text: string; type: string; delay: number }) {
  const [visible, setVisible] = useState(false)
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
      let i = 0
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1))
        i++
        if (i >= text.length) clearInterval(interval)
      }, 18)
      return () => clearInterval(interval)
    }, delay * 1000)
    return () => clearTimeout(timer)
  }, [text, delay])

  if (!visible) return null

  const color =
    type === 'cmd' ? 'text-amber' :
      type === 'ok' ? 'text-moss' :
        'text-cream-dim'

  return (
    <motion.div
      className={`font-mono text-xs md:text-sm ${color} leading-relaxed`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {displayed}
      {displayed.length < text.length && (
        <span className="cursor-blink text-amber">▊</span>
      )}
    </motion.div>
  )
}

// Animated background grid
function SystemGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Horizontal lines */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={`h-${i}`}
          className="absolute left-0 right-0"
          style={{
            top: `${(i + 1) * 5}%`,
            height: '1px',
            background: 'rgba(232, 224, 208, 0.03)',
          }}
        />
      ))}
      {/* Vertical lines */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={`v-${i}`}
          className="absolute top-0 bottom-0"
          style={{
            left: `${(i + 1) * 8.33}%`,
            width: '1px',
            background: 'rgba(232, 224, 208, 0.03)',
          }}
        />
      ))}

      {/* Scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(18,183,106,0.15), transparent)' }}
        animate={{ y: ['0vh', '100vh'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={ref}
      className="relative pt-28 pb-16 flex flex-col justify-center overflow-hidden bg-charcoal"
      id="hero"
    >
      <SystemGrid />

      {/* Top status bar */}
      <motion.div
        className="absolute top-20 left-0 right-0 flex items-center justify-between px-6 md:px-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-cream-dim/40 tracking-widest">NODE_01</span>
          <span className="w-8 h-px bg-cream-faint" />
          <span className="font-mono text-xs text-amber/60 tracking-wider">ONLINE</span>
        </div>
        <div className="font-mono text-xs text-cream-dim/30">
          REGION: IN-COIMBATORE
        </div>
      </motion.div>

      <div
        className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Left: Main identity */}
          <div className="lg:col-span-3 space-y-8">
            {/* System label */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex gap-1">
                {[0, 1, 2].map(i => (
                  <motion.div
                    key={i}
                    className="w-1 h-4 bg-amber"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.1 * i, duration: 0.3 }}
                  />
                ))}
              </div>
              <span className="font-mono text-xs text-amber/70 tracking-[0.3em] uppercase">
                Profile Module / v2025.1
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h1 className="font-display text-7xl md:text-9xl text-cream tracking-widest leading-none">
                GOPI M
              </h1>
              <div className="flex items-center gap-4 mt-2">
                <div className="h-px flex-1 bg-amber/20" />
                <span className="font-mono text-xs text-cream-dim/60 tracking-widest">AI/ML ENGINEER</span>
                <div className="h-px w-8 bg-amber/20" />
              </div>
            </motion.div>

            {/* Descriptor */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <p className="font-mono text-sm md:text-base text-cream/80 leading-relaxed max-w-xl">
                AI/ML Engineer specializing in end-to-end intelligent systems — from data pipelines and model training to LLM workflows, RAG architectures, and autonomous AI agents, with a focus on scalable deployment.
              </p>
            </motion.div>


            {/* Availability signal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
            >
              <span className="font-mono text-xs text-cream-dim/40 tracking-widest">
                Available for AI/ML roles.
              </span>
            </motion.div>

            {/* CTA row */}
            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="mailto:gopim302004@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative font-mono text-sm text-charcoal bg-amber px-6 py-3 tracking-wider hover:bg-amber-dim transition-colors duration-200"
              >
                <span className="relative z-10">$ INITIATE_CONTACT</span>
              </a>
              <a
                href="/Gopi_Resume_.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group font-mono text-sm text-cream-dim border border-cream-faint px-6 py-3 tracking-wider hover:border-amber hover:text-amber transition-all duration-200"
              >
                → RESUME
              </a>
              <a
                href="https://github.com/Gopikrish-30"
                target="_blank"
                rel="noopener noreferrer"
                className="group font-mono text-sm text-cream-dim border border-cream-faint px-6 py-3 tracking-wider hover:border-amber hover:text-amber transition-all duration-200"
              >
                → GITHUB
              </a>
              <a
                href="https://www.linkedin.com/in/gopi-m-181a06249/"
                target="_blank"
                rel="noopener noreferrer"
                className="group font-mono text-sm text-cream-dim border border-cream-faint px-6 py-3 tracking-wider hover:border-steel hover:text-steel transition-all duration-200"
              >
                → LINKEDIN
              </a>
            </motion.div>
          </div>

          {/* Right: Terminal */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="relative bg-charcoal-2 border border-cream-faint/20 panel-border">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-cream-faint/10">
                <div className="w-2 h-2 rounded-full bg-rust" />
                <div className="w-2 h-2 rounded-full bg-amber-dim" />
                <div className="w-2 h-2 rounded-full bg-moss" />
                <span className="ml-3 font-mono text-xs text-cream-dim/40 tracking-wider">
                  system.init — bash
                </span>
              </div>
              {/* Terminal body */}
              <div className="p-4 space-y-1.5 min-h-[200px]">
                {TERMINAL_LINES.map((line, i) => (
                  <TerminalLine key={i} {...line} />
                ))}
              </div>
            </div>

            <div className="border border-cream-faint/10 bg-charcoal-2 p-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs text-cream-dim/40 border border-cream-faint/20 px-2 py-0.5 tracking-widest">
                  FOCUS
                </span>
                <span className="font-mono text-sm text-cream-dim/60 tracking-[0.2em]">
                  AREAS
                </span>
              </div>
              <div className="space-y-3">
                {FOCUS_AREAS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber" />
                    <span className="font-mono text-xs text-cream/70 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 border border-cream-faint/10 bg-charcoal-2 p-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-xs text-cream-dim/40 border border-cream-faint/20 px-2 py-0.5 tracking-widest">
              SKILLS
            </span>
            <div className="flex-1 h-px bg-cream-faint/10" />
          </div>
          <div className="flex flex-wrap gap-2">
            {HERO_SKILLS.map((skill) => (
              <span
                key={skill}
                className="font-mono text-xs text-amber/70 border border-amber/20 bg-amber/5 px-3 py-1.5 tracking-wide"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  )
}
