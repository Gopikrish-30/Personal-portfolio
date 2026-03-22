'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SKILLS = [
  'Python',
  'Machine Learning',
  'Deep Learning',
  'LLMs',
  'Data Engineering',
  'Model Deployment',
  'MLOps Fundamentals',
]

const FOCUS_AREAS = [
  'Model training, evaluation, and iteration',
  'LLM fine-tuning and RAG pipelines',
  'Inference APIs and deployment workflows',
]

export default function Systems() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="about" className="relative py-32 bg-charcoal overflow-hidden">
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-amber/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          className="mb-16"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs text-amber/60 tracking-[0.4em]">MODULE // 01</span>
            <div className="h-px w-16 bg-amber/20" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-cream tracking-widest">
            ABOUT<br />
            <span className="text-amber">ME</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="font-mono text-sm md:text-base text-cream/80 leading-relaxed mb-5">
              AI/ML engineer with experience across data preparation, model training, evaluation, and deployment.
              Focused on building maintainable pipelines and reproducible results.
            </p>
            <p className="font-mono text-sm text-cream-dim/60 leading-relaxed mb-8">
              Hands-on experience with real-world datasets, LLM tooling, and production-ready workflows.
            </p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-xs text-amber/70 border border-amber/20 bg-amber/5 px-3 py-1.5 tracking-wide"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2 border border-cream-faint/10 bg-charcoal-2 p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
