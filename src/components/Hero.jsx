import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    const goToProjects = () => {
        navigate('/projects');
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Gradient Accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-ld-black via-ld-near-black to-ld-black" />

            <div className="container-wide relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {/* Left Side - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="space-y-8 lg:pr-12"
                    >
                        {/* Overline */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-ld-yellow text-sm font-oswald tracking-ultra-wide"
                        >
                            EST. 2002
                        </motion.p>

                        {/* Main Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
                        >
                            ANDRE LINDAAS –{' '}
                            <span className="text-gradient-yellow">ENGINEER</span>.{' '}
                            DESIGNER. INNOVATOR.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-lg md:text-xl text-ld-white/80 font-light leading-relaxed max-w-2xl"
                        >
                            22 years of precision mechanical engineering—transforming complex technical challenges into production-ready solutions.
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                        >
                            <button
                                onClick={goToProjects}
                                className="btn-primary group"
                            >
                                EXPLORE MY WORK
                                <svg
                                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Hero Image & Bento High-Fidelity Modules */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative lg:translate-x-8"
                    >
                        <div className="relative group">
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-ld-yellow/20 blur-[120px] group-hover:bg-ld-yellow/30 transition-all duration-700" />

                            {/* Floating Module 1: Experience */}
                            <motion.div
                                initial={{ x: 20, y: 20, opacity: 0 }}
                                animate={{ x: 0, y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                                className="absolute -top-10 -left-10 z-20 glass-card p-5 rounded-3xl hidden xl:block"
                            >
                                <div className="space-y-1">
                                    <p className="text-3xl font-bold">22<span className="text-ld-yellow">+</span></p>
                                    <p className="text-[10px] font-oswald tracking-[0.2em] text-ld-white/50 uppercase">Years Excellence</p>
                                </div>
                            </motion.div>


                            {/* Main Image */}
                            <img
                                src="/Lindaasdesignpublicimagesprojects/hero-product.png"
                                alt="Precision Engineering - Motor Mount Assembly"
                                className="relative z-10 w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="text-ld-yellow/60"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
