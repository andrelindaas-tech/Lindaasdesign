import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
    {
        id: 1,
        role: 'Senior Product Developer',
        company: 'Made for Movement Group AS',
        period: '2004 - Present',
        description: "Starting in the workshop in 2004, I have over the years evolved with the company into a Product Developer and Team Leader. I now enjoy working in all phases of the product development lifecycle, from initial concept to medical certification, specializing in advanced 3D modeling and simulation in SolidWorks and Fusion 360. I focus on bridging the gap between innovative design and practical manufacturing, with a deep emphasis on developing cost-effective production methods through strategic component reduction. Beyond technical engineering, I lead a multidisciplinary team through complex project phases, managing everything from BOM structures and technical documentation to rigorous internal and external regulatory compliance. My goal is always to ensure that every product meets the highest standards of safety, performance, and reliability for the end user.",
        skills: ['SolidWorks', 'Mechanical Engineering', 'Prototyping', 'Regulatory Compliance', 'Team Leader', 'Cost Optimization'],
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        )
    },
    {
        id: 2,
        role: 'Automation Technician',
        company: 'Mikron Tunsberg AS',
        period: '1999 - 2004',
        description: 'Operation and development of high-end production lines and automation for injection molding within the infocom sector, with deliveries to clients including Ericsson. Implemented production solutions for complex products such as Stokke strollers, focusing on process optimization for high-volume manufacturing.',
        skills: ['CNC Programming', 'Injection Molding', 'Automation', 'Process Optimization'],
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        )
    },
    {
        id: 3,
        role: 'Sheet Metal Worker',
        company: 'Grenland Offshore',
        period: '1995 - 1997',
        description: 'Hands-on industrial manufacturing for offshore and marine applications. Developed expertise in precision fabrication, welding, and quality control in demanding environments.',
        skills: ['Metal Fabrication', 'Industrial Manufacturing', 'Quality Control', 'Precision Work'],
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
        )
    }
];

const ExperienceCard = ({ experience, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
            className="glass-card glass-card-hover p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden mb-8"
        >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-ld-yellow/5 blur-3xl rounded-full -mr-16 -mt-16" />

            <div className="relative space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-5">
                        <div className="w-14 h-14 bg-ld-yellow/10 rounded-2xl flex items-center justify-center text-ld-yellow">
                            {experience.icon}
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{experience.role}</h3>
                            <p className="text-ld-yellow font-oswald text-sm tracking-widest uppercase mt-0.5">{experience.company}</p>
                        </div>
                    </div>
                    <div className="px-4 py-1.5 bg-ld-white/5 rounded-full border border-ld-white/10 self-start md:self-auto">
                        <span className="text-xs font-oswald tracking-widest text-ld-white/60">{experience.period}</span>
                    </div>
                </div>

                <p className="text-ld-white/70 leading-relaxed text-lg max-w-4xl">
                    {experience.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                    {experience.skills.map((skill, skillIndex) => (
                        <span
                            key={skillIndex}
                            className="text-[10px] font-oswald tracking-widest uppercase px-4 py-2 bg-ld-white/5 text-ld-white/50 rounded-full border border-ld-white/5 group-hover:border-ld-yellow/20 transition-all duration-500"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="section-spacing bg-ld-black">
            <div className="container-elegant">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 space-y-4 max-w-3xl"
                >
                    <p className="text-ld-yellow text-sm font-oswald tracking-ultra-wide">
                        PROFESSIONAL JOURNEY
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                        From workshop floor to{' '}
                        <span className="text-gradient-yellow">engineering leadership</span>.
                    </h2>
                </motion.div>

                {/* Content Grid */}
                <div className="max-w-6xl">
                    {experienceData.map((experience, index) => (
                        <ExperienceCard
                            key={experience.id}
                            experience={experience}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
