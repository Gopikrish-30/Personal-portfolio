'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ACHIEVEMENTS = [
    {
        code: 'ACH-00',
        title: 'Best Technical Implementation Award — NEOVERSE’26',
        org: 'Coimbatore Institute of Technology',
        date: '2026',
        description: 'Recognized at the National Level 24-hour AI Hackathon for building Navigator with strong technical implementation and problem-solving.',
        color: 'amber' as const,
    },
    {
        code: 'ACH-01',
        title: 'Secured 3rd place at Code O Clock 2025',
        org: 'Coimbatore Institute of Technology',
        date: '2025',
        description: 'Won a national 24-hour hackathon by building Mentora, an AI co-pilot that streamlines course creation.',
        color: 'amber' as const,
    },
    {
        code: 'ACH-02',
        title: 'Developed a business inspection and organization system',
        org: 'Fashcognitive',
        date: '2025',
        description: 'Built a system for business inspection and organization during my internship.',
        color: 'steel' as const,
    },
    {
        code: 'ACH-03',
        title: 'First place at Big O Battle (LOGIN 2025)',
        org: 'PSG College of Arts and Science',
        date: '2025',
        description: 'Built a competitive Python bot that outperformed peers in the Big O Battle technical event.',
        color: 'moss' as const,
    },
]

function AchievementCard({ achievement, index }: { achievement: typeof ACHIEVEMENTS[0]; index: number }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-60px' })

    const colorMap: Record<string, { border: string; text: string }> = {
        amber: { border: 'border-amber/30', text: 'text-amber' },
        steel: { border: 'border-steel/30', text: 'text-steel' },
        moss: { border: 'border-moss/30', text: 'text-moss' },
    }
    const c = colorMap[achievement.color]

    return (
        <motion.div
            ref={ref}
            className={`relative border ${c.border} bg-charcoal-2 p-6 transition-all duration-300`}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className={`absolute top-0 left-0 right-0 h-px ${achievement.color === 'amber' ? 'bg-gradient-to-r from-amber/40 to-transparent' :
                achievement.color === 'steel' ? 'bg-gradient-to-r from-steel/40 to-transparent' :
                    'bg-gradient-to-r from-moss/40 to-transparent'
                }`} />
            <div className="flex items-center justify-between mb-4">
                <span className={`font-mono text-xs ${c.text}/60 tracking-widest`}>{achievement.code}</span>
                <span className="font-mono text-[10px] text-cream-dim/30 tracking-wider">{achievement.date}</span>
            </div>
            <h3 className="font-mono text-sm font-medium tracking-wide mb-2 text-cream">
                {achievement.title}
            </h3>
            <div className={`font-mono text-xs ${c.text}/50 tracking-wider mb-3`}>{achievement.org}</div>
            <p className="font-mono text-xs text-cream-dim/60 leading-relaxed">
                {achievement.description}
            </p>
        </motion.div>
    )
}

export default function ParallelProcesses() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <section id="achievements" className="relative py-32 bg-charcoal overflow-hidden">
            <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-steel/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    ref={ref}
                    className="mb-16"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <span className="font-mono text-xs text-amber/60 tracking-[0.4em]">MODULE // 04</span>
                        <div className="h-px w-16 bg-amber/20" />
                    </div>
                    <h2 className="font-display text-5xl md:text-7xl text-cream tracking-widest">
                        KEY<br /><span className="text-amber">ACHIEVEMENTS</span>
                    </h2>
                    <p className="mt-6 font-mono text-sm text-cream-dim/50 max-w-xl leading-relaxed">
                        Milestones from competitions, internships, and technical events.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {ACHIEVEMENTS.map((achievement, i) => (
                        <AchievementCard key={achievement.code} achievement={achievement} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}
