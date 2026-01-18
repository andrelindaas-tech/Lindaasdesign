import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

// Animated Counter Component
const AnimatedCounter = ({ value, duration = 2 }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const animation = animate(count, value, { duration });
        const unsubscribe = rounded.on('change', (latest) => setDisplayValue(latest));

        return () => {
            animation.stop();
            unsubscribe();
        };
    }, [value, count, rounded, duration]);

    return <span>{displayValue}</span>;
};

const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <section id="about" className="section-spacing bg-ld-black relative overflow-hidden">
            <div className="container-elegant">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="space-y-4">
                            <p className="text-ld-yellow text-sm font-oswald tracking-ultra-wide">
                                EST. 2002 / MY PHILOSOPHY
                            </p>
                            <h2 className="text-4xl md:text-5xl font-bold">
                                Engineering for{' '}
                                <span className="text-gradient-yellow">precision</span> and performance.
                            </h2>
                        </div>

                        <div className="space-y-4 text-ld-white/80 leading-relaxed">
                            <p className="text-lg">
                                With <strong className="text-ld-white">22 years of professional engineering experience</strong>,
                                I've evolved from hands-on mechanical tinkering to leading full-scale production projects
                                with medical certifications.
                            </p>
                            <p>
                                My journey began with a fascination for how things work – taking apart machines,
                                understanding their mechanics, and reimagining better solutions. Today, that curiosity
                                drives every project I touch.
                            </p>
                            <p>
                                I believe in <strong className="text-ld-yellow">industrial-grade craftsmanship</strong>—where form meets function, and technical concepts evolve into precision-manufactured products ready for the complexities of the real world.
                            </p>
                        </div>

                        {/* Stats with Animated Counters */}
                        <motion.div
                            className="grid grid-cols-3 gap-6 pt-8 border-t border-ld-dark-grey"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            onViewportEnter={() => setIsVisible(true)}
                        >
                            <div>
                                <p className="text-3xl md:text-4xl font-bold text-ld-yellow">
                                    {isVisible && <AnimatedCounter value={22} duration={2.5} />}+
                                </p>
                                <p className="text-sm text-ld-white/70 mt-1 font-medium">Years of Experience</p>
                            </div>
                            <div>
                                <p className="text-3xl md:text-4xl font-bold text-ld-yellow">
                                    {isVisible && <AnimatedCounter value={50} duration={2.5} />}+
                                </p>
                                <p className="text-sm text-ld-white/70 mt-1 font-medium">Technical Solutions</p>
                            </div>
                            <div>
                                <p className="text-3xl md:text-4xl font-bold text-ld-yellow">
                                    {isVisible && <AnimatedCounter value={5} duration={2} />}+
                                </p>
                                <p className="text-sm text-ld-white/70 mt-1 font-medium">Sector Expertise</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-square bg-ld-near-black border border-ld-dark-grey p-8 relative group hover:border-ld-yellow transition-colors duration-500">
                            {/* Decorative Elements */}
                            <div className="absolute top-4 right-4 w-24 h-24 border-t-2 border-r-2 border-ld-yellow/30" />
                            <div className="absolute bottom-4 left-4 w-24 h-24 border-b-2 border-l-2 border-ld-yellow/30" />

                            {/* Content */}
                            <div className="relative h-full flex items-center justify-center">
                                <div className="text-center space-y-6">
                                    <div className="inline-flex items-center justify-center w-32 h-32 border-4 border-ld-yellow rounded-full">
                                        <svg className="w-16 h-16 text-ld-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold">Certified Excellence</h3>
                                        <p className="text-ld-white/60">Medical Grade Compliance</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
