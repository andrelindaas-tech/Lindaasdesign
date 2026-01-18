import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    {
        id: 1,
        title: 'Mechanical Design & Engineering',
        description: 'Expert-level proficiency in SolidWorks for complex assemblies, parametric modeling, and design optimization.',
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
        ),
        level: 95
    },
    {
        id: 2,
        title: 'Simulation, Testing & Prototyping',
        description: 'Comprehensive approach to product validation through FEA, stress analysis, and rapid prototyping iterations.',
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        level: 90
    },
    {
        id: 3,
        title: 'Manufacturing Optimization',
        description: 'Streamlining production processes for efficiency, cost reduction, and quality consistency across CNC and injection molding.',
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        level: 88
    },
    {
        id: 4,
        title: 'Project Management & Compliance',
        description: 'End-to-end project oversight with expertise in medical device regulations, ISO standards, and cross-functional team leadership.',
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        level: 75
    }
];

const SkillCard = ({ skill, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group card-elegant p-8 space-y-6 hover:scale-105 transition-all duration-500"
        >
            {/* Icon */}
            <div className="w-20 h-20 bg-ld-dark-grey border-2 border-ld-yellow/20 group-hover:border-ld-yellow flex items-center justify-center text-ld-yellow transition-all duration-500">
                {skill.icon}
            </div>

            {/* Content */}
            <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-bold group-hover:text-ld-yellow transition-colors duration-300">
                    {skill.title}
                </h3>
                <p className="text-ld-white/70 leading-relaxed">
                    {skill.description}
                </p>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                    <span className="text-ld-white/60 font-oswald tracking-wider">PROFICIENCY</span>
                    <span className="text-ld-yellow font-bold">{skill.level}%</span>
                </div>
                <div className="h-2 bg-ld-dark-grey overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-ld-yellow to-ld-yellow-bright"
                    />
                </div>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="section-spacing bg-ld-near-black">
            <div className="container-elegant">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center space-y-4 max-w-3xl mx-auto"
                >
                    <p className="text-ld-yellow text-sm font-oswald tracking-ultra-wide">
                        CORE COMPETENCIES
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                        Skills & <span className="text-gradient-yellow">Expertise</span>
                    </h2>
                    <p className="text-lg text-ld-white/70">
                        Two decades of experience refined into four core pillars of engineering excellence.
                    </p>
                </motion.div>

                {/* Skills Grid - Uniform 2x2 Style */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {skillsData.map((skill, index) => {
                        return (
                            <motion.div
                                key={skill.id}
                                className="glass-card glass-card-hover p-8 md:p-10 rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden group h-full"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {/* Background Accent */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-ld-yellow/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-ld-yellow/10 transition-colors duration-700" />

                                <div className="space-y-6 relative z-10">
                                    <div className="w-16 h-16 bg-ld-yellow/10 rounded-2xl flex items-center justify-center text-ld-yellow group-hover:scale-110 transition-transform duration-500">
                                        {skill.icon}
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{skill.title}</h3>
                                        <p className="text-ld-white/60 leading-relaxed text-sm md:text-base">{skill.description}</p>
                                    </div>
                                </div>

                                <div className="mt-10 space-y-3 relative z-10">
                                    <div className="flex justify-between items-end">
                                        <span className="text-[10px] font-oswald tracking-[0.2em] text-ld-white/40 uppercase">Expertise Level</span>
                                        <span className="text-ld-yellow font-oswald text-xl leading-none">{skill.level}%</span>
                                    </div>
                                    <div className="h-1.5 bg-ld-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                            className="h-full bg-gradient-to-r from-ld-yellow to-ld-yellow-bright"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
