import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Projects from '../components/Projects';

const ProjectsPage = () => {
    return (
        <div className="min-h-screen bg-ld-black">
            {/* Header with Back Button */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="sticky top-0 z-50 bg-ld-black/95 backdrop-blur-md border-b border-ld-dark-grey"
            >
                <div className="container-elegant">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link to="/" className="hover:opacity-80 transition-opacity">
                            <h1 className="text-xl md:text-2xl font-bold tracking-tighter font-oswald">
                                LINDAAS <span className="text-ld-yellow">DESIGN</span>
                            </h1>
                        </Link>

                        {/* Back Button */}
                        <Link
                            to="/"
                            className="flex items-center space-x-2 text-sm font-oswald tracking-wider hover:text-ld-yellow transition-colors duration-300"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            <span>BACK TO HOME</span>
                        </Link>
                    </div>
                </div>
            </motion.div>

            {/* Page Header */}
            <section className="pt-32 pb-16 px-6">
                <div className="container-elegant">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <p className="text-ld-yellow text-sm font-oswald tracking-ultra-wide mb-4">
                            PORTFOLIO
                        </p>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                            Passion <span className="text-gradient-yellow">Projects</span>
                        </h1>
                        <p className="text-xl text-ld-white/70 leading-relaxed">
                            A collection of independent engineering explorations driven by innovation and the testing of new concepts.
                            These projects represent my deep dives into new technologies, advanced mechanics, and innovative manufacturing.
                            More than just technical studies, they are a playground for learning and developing business aspects,
                            reflecting a lifelong commitment to exploring the boundaries of engineering excellence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Project 1 Section: Electric Longboard */}
            <section className="pb-16 px-6">
                <div className="container-elegant">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        {/* Project Number Badge */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-ld-yellow flex items-center justify-center font-oswald font-bold text-xl text-ld-black">
                                01
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">
                                Electric Longboard <span className="text-ld-yellow">/</span> Stealth Motor Mount
                            </h2>
                        </div>

                        {/* Narrative Text */}
                        <div className="border-l-4 border-ld-yellow pl-6 py-2 mb-12">
                            <p className="text-lg md:text-xl text-ld-white/80 leading-relaxed italic">
                                "This project started with a desire to build a custom electric longboard. At the time, high-quality drive train solutions were nearly non-existent, leading me to design and manufacture my own system—which eventually gained international traction among enthusiasts."
                            </p>
                        </div>

                        {/* Centralized Technologies Section */}
                        <div className="mt-8">
                            <p className="text-sm font-oswald tracking-ultra-wide text-ld-yellow mb-4">
                                TECHNOLOGIES USED
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {['SolidWorks', 'CNC Machining', '3D Printing', 'Prototyping'].map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-5 py-2 bg-ld-near-black border border-ld-dark-grey text-ld-white/80 text-sm font-medium tracking-wide"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Project 1 Grid */}
            <Projects projectGroup={1} />

            {/* Project 2 Section: Stiga Snowblaster */}
            <section className="pt-24 pb-16 px-6 border-t border-ld-dark-grey/30">
                <div className="container-elegant">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        {/* Project Number Badge */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-ld-yellow flex items-center justify-center font-oswald font-bold text-xl text-ld-black">
                                02
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">
                                Stiga Snowblaster
                            </h2>
                        </div>

                        {/* Narrative Text */}
                        <div className="border-l-4 border-ld-yellow pl-6 py-2 mb-12">
                            <p className="text-lg md:text-xl text-ld-white/80 leading-relaxed italic">
                                "The Stiga Snowblaster was developed with the goal of creating a lightweight and maneuverable winter mobility aid and toy for children and youth. The project involved a holistic approach, aiming for a perfect balance between speed and control."
                            </p>
                        </div>

                        {/* Additional Narrative/Process Text */}
                        <div className="mb-12">
                            <p className="text-lg text-ld-white/70 leading-relaxed">
                                The development process spanned from initial design and technical calculations in SolidWorks to a finished prototype, with a constant focus on lightweight solutions and a rapid transition from concept to reality.
                            </p>
                        </div>

                        {/* Centralized Technologies Section */}
                        <div className="mt-8">
                            <p className="text-sm font-oswald tracking-ultra-wide text-ld-yellow mb-4">
                                TECHNOLOGIES USED
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {['SolidWorks', 'Mechanical Engineering', 'Rapid Prototyping', 'Electric Drivetrain', 'FEM Analysis'].map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-5 py-2 bg-ld-near-black border border-ld-dark-grey text-ld-white/80 text-sm font-medium tracking-wide"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Project 2 Grid */}
            <Projects projectGroup={2} />

            {/* Project 3 Section: Vintage VW Parts */}
            <section className="pt-24 pb-16 px-6 border-t border-ld-dark-grey/30">
                <div className="container-elegant">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        {/* Project Number Badge */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-ld-yellow flex items-center justify-center font-oswald font-bold text-xl text-ld-black">
                                03
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">
                                Vintage VW Parts
                            </h2>
                        </div>

                        {/* Narrative Text */}
                        <div className="border-l-4 border-ld-yellow pl-6 py-2 mb-12">
                            <p className="text-lg md:text-xl text-ld-white/80 leading-relaxed italic">
                                "This was truly a passion project where I linked my skillset with my passion for old VWs, to make custom parts that I designed, fabricated, and sold to other VW enthusiasts."
                            </p>
                        </div>

                        {/* Centralized Technologies Section */}
                        <div className="mt-8">
                            <p className="text-sm font-oswald tracking-ultra-wide text-ld-yellow mb-4">
                                TECHNOLOGIES USED
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {['SolidWorks', 'Keyshot', 'Photoshop', 'Laser Cutting', 'TIG Welding'].map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-5 py-2 bg-ld-near-black border border-ld-dark-grey text-ld-white/80 text-sm font-medium tracking-wide"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Project 3 Grid */}
            <Projects projectGroup={3} />

            {/* Footer CTA */}
            <section className="section-spacing bg-ld-near-black border-t border-ld-dark-grey">
                <div className="container-elegant text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Interested in collaboration?
                        </h2>
                        <p className="text-lg text-ld-white/70 max-w-2xl mx-auto">
                            I'm always open to discussing new projects and innovative engineering challenges.
                        </p>
                        <Link to="/" className="btn-primary inline-flex">
                            VIEW PROFESSIONAL PROFILE
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ProjectsPage;
