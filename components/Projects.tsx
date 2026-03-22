'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const PROJECTS = [
  {
    id: 'eng-tamil-llm',
    status: 'DEPLOYED',
    statusLabel: 'PROJECT',
    statusTooltip: 'Live on Hugging Face',
    statusColor: 'amber',
    name: 'ENGLISH-TAMIL LLM',
    subtitle: 'Machine Translation with M2M100',
    class: 'NLP / LLM',
    version: 'v1.0',
    uptime: 'LIVE',
    stack: ['Python', 'Transformers', 'M2M100', 'Hugging Face'],
    description: 'Fine-tuned a translation model for English to Tamil with a clean data pipeline and evaluation checks.',
    modules: [
      { name: 'Dataset Prep', status: 'active', detail: 'Cleaned and aligned parallel corpora' },
      { name: 'Fine-Tuning', status: 'active', detail: 'Seq2seq training with M2M100' },
      { name: 'Evaluation', status: 'active', detail: 'Quality checks on real-world samples' },
    ],
    highlight: 'Translation pipeline designed for practical usage scenarios.',
    codeUrl: 'https://huggingface.co/gopi30/english-to-tamil-stage5',
  },
  {
    id: 'quizzy-ai',
    status: 'LIVE',
    statusLabel: 'PROJECT',
    statusTooltip: 'Deployed on Vercel',
    statusColor: 'moss',
    name: 'QUIZZY',
    subtitle: 'AI-Powered Quiz Generation App',
    class: 'AI / PRODUCT',
    version: 'v1.2',
    uptime: 'ONLINE',
    stack: ['Vite', 'Gemini API', 'TypeScript', 'Vercel'],
    description: 'Built a quiz platform that converts uploaded documents into structured questions using Gemini models.',
    modules: [
      { name: 'File Parsing', status: 'active', detail: 'PDF/DOCX/PPTX ingestion' },
      { name: 'Question Gen', status: 'active', detail: 'MCQ creation with explanations' },
      { name: 'Inference Flow', status: 'active', detail: 'Prompting and response shaping' },
    ],
    highlight: 'Turns study material into interactive quizzes with explanations.',
    codeUrl: 'https://github.com/Gopikrish-30/Quizzy-AI-Powered-Quiz-App',
    liveUrl: 'https://quizzy-app-gopi30.vercel.app/',
  },
  {
    id: 'navigator',
    status: 'OPEN SOURCE',
    statusLabel: 'PROJECT',
    statusTooltip: 'Desktop AI coworker',
    statusColor: 'steel',
    name: 'NAVIGATOR',
    subtitle: 'Privacy-first AI automation assistant',
    class: 'DESKTOP / AI',
    version: 'v1.0',
    uptime: 'ACTIVE',
    stack: ['Electron', 'React', 'TypeScript', 'Playwright'],
    description: 'Local-first AI automation assistant that runs on-device, handling browser tasks, file management, and document creation with encrypted local keys.',
    modules: [
      { name: 'Agent Core', status: 'active', detail: 'Local orchestration and task routing' },
      { name: 'Browser Ops', status: 'active', detail: 'Playwright-driven automation' },
      { name: 'Security', status: 'active', detail: 'AES-256-GCM key storage' },
    ],
    highlight: 'Full local execution with user-controlled AI providers.',
    codeUrl: 'https://github.com/Gopikrish-30/NeoVerse-26',
  },
  {
    id: 'mentora',
    status: 'HACKATHON',
    statusLabel: 'PROJECT',
    statusTooltip: 'Code O Clock winner',
    statusColor: 'amber',
    name: 'MENTORA',
    subtitle: 'AI Course Creator',
    class: 'EDTECH / RAG',
    version: 'v1.0',
    uptime: 'ACTIVE',
    stack: ['LangChain', 'ChromaDB', 'Gemini', 'PyMuPDF'],
    description: 'AI platform that generates structured courses from text, PDFs, and videos with configurable lesson formats and assessments.',
    modules: [
      { name: 'Extraction', status: 'active', detail: 'PDF and web content parsing' },
      { name: 'Orchestration', status: 'active', detail: 'LangChain workflow pipeline' },
      { name: 'RAG', status: 'active', detail: 'Vector storage and retrieval' },
    ],
    highlight: 'Built for faster, reusable corporate training content.',
    codeUrl: 'https://github.com/Gopikrish-30/Mentora',
  },
  {
    id: 'legalsafe',
    status: 'MODEL CARD',
    statusLabel: 'PROJECT',
    statusTooltip: 'Safety-aligned legal LLM',
    statusColor: 'moss',
    name: 'LEGALSAFE-FALCON-7B',
    subtitle: 'Safety-aligned legal LLM',
    class: 'LLM / SAFETY',
    version: 'v1.0',
    uptime: 'PUBLISHED',
    stack: ['Falcon-7B', 'RLAIF', 'Constitutional AI', 'HF Hub'],
    description: 'Safety-aligned LLM fine-tuned for the Indian legal domain with reduced toxic and unsafe outputs.',
    modules: [
      { name: 'Alignment', status: 'active', detail: 'RLAIF and constitutional prompts' },
      { name: 'Safety Eval', status: 'active', detail: 'Bias and risk checks' },
      { name: 'Model Card', status: 'active', detail: 'Usage boundaries and guidance' },
    ],
    highlight: 'Focused on safe legal QA and summarization.',
    codeUrl: 'https://huggingface.co/gopi30/rlaif-safety-alligned',
  },
  {
    id: 'gitsy',
    status: 'EXTENSION',
    statusLabel: 'PROJECT',
    statusTooltip: 'VS Code extension',
    statusColor: 'steel',
    name: 'GITSY',
    subtitle: 'AI-Powered Git Helper for VS Code',
    class: 'DEVTOOLS / AI',
    version: 'v1.0',
    uptime: 'RELEASED',
    stack: ['VS Code API', 'TypeScript', 'Copilot', 'Gemini'],
    description: 'AI-powered Git extension with pre-flight checks for secrets, branch safety, and code quality inside VS Code.',
    modules: [
      { name: 'Pre-flight', status: 'active', detail: 'Secrets and safety checks' },
      { name: 'Fast Push', status: 'active', detail: 'Stage, commit, push flow' },
      { name: 'Dashboard', status: 'active', detail: 'Repo status and history' },
    ],
    highlight: 'Local-only analysis with secure VS Code storage.',
    codeUrl: 'https://github.com/Gopikrish-30/Gitsy',
    liveUrl: 'https://marketplace.visualstudio.com/items?itemName=Gitsy.gitsy',
  },
]

const STATUS_COLORS: Record<string, string> = {
  amber: 'text-amber bg-amber/10 border-amber/30',
  moss: 'text-moss bg-moss/10 border-moss/30',
  steel: 'text-steel bg-steel/10 border-steel/30',
}

function ModuleStatus({ mod }: { mod: { name: string; status: string; detail: string } }) {
  return (
    <div className="flex items-start gap-3 py-2 border-b border-cream-faint/10 last:border-0">
      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-moss flex-shrink-0 status-active" />
      <div>
        <div className="font-mono text-xs text-cream/80 tracking-wider">{mod.name}</div>
        <div className="font-mono text-xs text-cream-dim/40 mt-0.5">{mod.detail}</div>
      </div>
    </div>
  )
}

function ProjectPanel({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className="relative border border-cream-faint/30 bg-charcoal-2 hover:border-cream-faint/50 transition-all duration-300 shadow-[0_0_0_1px_rgba(42,52,46,0.4)]"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Top accent line */}
      <div
        className={`absolute top-0 left-0 right-0 h-px ${project.statusColor === 'amber' ? 'bg-gradient-to-r from-amber/50 to-transparent' :
          project.statusColor === 'moss' ? 'bg-gradient-to-r from-moss/50 to-transparent' :
            'bg-gradient-to-r from-steel/50 to-transparent'
          }`}
      />

      {/* Header */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span
              className={`font-mono text-xs px-2 py-0.5 border tracking-widest cursor-default select-none ${STATUS_COLORS[project.statusColor]}`}
              title={project.statusTooltip}
            >
              <span className="opacity-50">{project.statusLabel}:</span>{' '}{project.status}
            </span>
            <span className="font-mono text-xs text-cream-dim/30 tracking-wider">{project.class}</span>
          </div>
          <span className="font-mono text-xs text-cream-dim/20 flex-shrink-0">{project.version}</span>
        </div>

        <h3 className="font-display text-2xl md:text-3xl text-cream tracking-widest mb-1">
          {project.name}
        </h3>
        <p className="font-mono text-[11px] text-cream-dim/50 tracking-wider mb-3">
          {project.subtitle}
        </p>

        <p className="font-mono text-[11px] text-cream/60 leading-relaxed">
          {project.description}
        </p>

        {/* Highlight */}
        <div className="mt-4 pl-3 border-l border-amber/30">
          <p className="font-mono text-xs text-amber/70 italic">{project.highlight}</p>
        </div>
      </div>

      {/* Stack */}
      <div className="px-6 pb-4">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span key={s} className="font-mono text-xs text-cream-dim/50 border border-cream-faint/10 px-2 py-0.5">
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="px-6 pb-5 flex flex-wrap gap-2">
        {project.codeUrl && (
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-cream-dim border border-cream-faint/20 px-3 py-1.5 hover:border-amber/50 hover:text-amber transition-colors"
          >
            VIEW CODE
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-charcoal bg-amber px-3 py-1.5 hover:bg-amber-dim transition-colors"
          >
            {project.id === 'gitsy' ? 'DOWNLOAD' : 'VIEW LIVE'}
          </a>
        )}
      </div>

      {/* Expand toggle */}
      <button
        className="w-full px-6 py-3 flex items-center justify-between border-t border-cream-faint/10 hover:bg-charcoal-3 transition-colors duration-200 group"
        onClick={() => setExpanded(!expanded)}
      >
        <span className="font-mono text-xs text-cream-dim/40 tracking-widest group-hover:text-cream-dim/70 transition-colors">
          {expanded ? 'COLLAPSE MODULES' : 'INSPECT MODULES'}
        </span>
        <motion.span
          className="text-cream-dim/40 text-xs"
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          ▼
        </motion.span>
      </button>

      {/* Expanded modules */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 bg-charcoal-3/50">
              <div className="font-mono text-xs text-cream-dim/30 tracking-widest mb-3">
                ACTIVE MODULES [{project.modules.length}]
              </div>
              {project.modules.map((mod) => (
                <ModuleStatus key={mod.name} mod={mod} />
              ))}
              <div className="mt-4 flex items-center justify-between">
                <span className="font-mono text-xs text-cream-dim/20">UPTIME: {project.uptime}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="projects" className="relative py-32 bg-charcoal-2 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #e8e0d0 0px, #e8e0d0 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #e8e0d0 0px, #e8e0d0 1px, transparent 1px, transparent 48px)'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs text-amber/60 tracking-[0.4em]">MODULE // 02</span>
            <div className="h-px w-16 bg-amber/20" />
          </div>
          <div className="flex items-end gap-6">
            <h2 className="font-display text-5xl md:text-7xl text-cream tracking-widest">
              FEATURED<br /><span className="text-amber">PROJECTS</span>
            </h2>
            <div className="mb-3 hidden md:block">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-moss status-active" />
                <span className="font-mono text-xs text-moss/70">{PROJECTS.length} PROJECTS ACTIVE</span>
              </div>
            </div>
          </div>
          <p className="mt-6 font-mono text-sm text-cream-dim/50 max-w-xl leading-relaxed">
            Selected work across machine learning, AI products, and web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {PROJECTS.map((project, i) => (
            <ProjectPanel key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
