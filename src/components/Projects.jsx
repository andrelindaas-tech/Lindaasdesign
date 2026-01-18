import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectsData = [
    // Project 1: Electric Longboard / Stealth Motor Mount
    {
        id: 1,
        projectGroup: 1,
        title: 'Conceptual Design Study',
        category: 'Mechanical Design',
        description: [
            'Concept: A high-performance electric longboard with fully integrated internal electronics.',
            'Engineering: Custom carbon fiber deck design with structural battery integration.',
            'Technical Analysis: Comprehensive drive-train study developed for precision CNC manufacturing.'
        ],
        image: '/Lindaasdesignpublicimagesprojects/Electric longboard.png',
        tags: ['SolidWorks', 'CNC', 'Prototyping']
    },
    {
        id: 2,
        projectGroup: 1,
        title: 'Precision Engineering',
        category: 'Mechanical Design',
        description: "High-strength motor plate made of ALU 7075 T-6. Beautiful design with all-black finish for a stealth look – it's engineering art.",
        image: '/Lindaasdesignpublicimagesprojects/DSC_0400 ADJ.jpg',
        tags: ['Aluminum', 'Manufacturing', 'Design']
    },
    {
        id: 3,
        projectGroup: 1,
        title: 'Drive System Evolution',
        category: 'R&D',
        description: 'Comprehensive research and development of electric drive systems, showcasing multiple iterations and engineering refinements.',
        image: '/Lindaasdesignpublicimagesprojects/WSB Drive - Picture collage.jpg',
        tags: ['R&D', 'Testing', 'Innovation']
    },
    {
        id: 4,
        projectGroup: 1,
        title: 'Component Analysis',
        category: 'Technical Documentation',
        description: 'Detailed technical renders and analysis of motor mount components, demonstrating precision manufacturing capabilities.',
        image: '/Lindaasdesignpublicimagesprojects/WSP Test V5.jpg',
        tags: ['CAD', 'Rendering', 'Documentation']
    },
    // Project 2: Stiga Snowblaster
    {
        id: 5,
        projectGroup: 2,
        title: 'Stiga Snowblaster Concept',
        category: 'Industrial Design',
        description: [
            'Concept: A modern interpretation of the classic winter sled, focused on steering dynamics and safety.',
            'Engineering: Focus on lightweight and high power.',
            'Technical Analysis: Maintaining STIGA heritage within a robust, production-ready form factor.'
        ],
        image: '/Lindaasdesignpublicimagesprojects/Stiga Snowblaster/Copy of Stiga Snowblaster with logo.jpg',
        tags: ['SolidWorks', 'Mechanical Engineering', 'Rapid Prototyping', 'Electric Drivetrain', 'FEM Analysis']
    },
    {
        id: 6,
        projectGroup: 2,
        title: 'Electric Powertrain Study',
        category: 'Mechanical Engineering',
        description: [
            'Concept: High-torque drivetrain development for extreme winter conditions.',
            'Engineering: Integrated motor controller and battery management system housing.',
            'Technical Analysis: Evaluating power-to-weight ratios for optimal climbing performance.'
        ],
        image: '/Lindaasdesignpublicimagesprojects/Stiga Snowblaster/Snow Blaster render 2.12.jpg',
        tags: ['Electric Powertrain', 'Drivetrain Design', 'R&D']
    },
    {
        id: 7,
        projectGroup: 2,
        title: 'Product Development Study',
        category: 'SolidWorks CAD',
        description: [
            'Concept: Full-scale product development leveraging advanced CAD workflows.',
            'Engineering: Complex assemblies and part optimization for weight reduction.',
            'Technical Analysis: Ensuring manufacturability of intricate mechanical components.'
        ],
        image: '/Lindaasdesignpublicimagesprojects/Stiga Snowblaster/Snow Blaster render 2.15.jpg',
        tags: ['SolidWorks', 'Product Development', 'CAD']
    },
    {
        id: 8,
        projectGroup: 2,
        title: 'Technical Validation Study',
        category: 'Mechanical Engineering',
        description: [
            'Concept: Bridging the gap from initial concept to a production-ready solution.',
            'Engineering: Material selection and concept-to-production verification.',
            'Technical Analysis: Iterative lifecycle validation of structural components.'
        ],
        image: '/Lindaasdesignpublicimagesprojects/Stiga Snowblaster/Snow Blaster render 2.9.jpg',
        tags: ['Material Selection', 'Validation', 'Engineering Study']
    },
    // Project 3: Vintage VW Parts
    {
        id: 9,
        projectGroup: 3,
        title: 'Custom Beam Plates',
        category: 'Product Design',
        description: [
            'Concept: Custom-designed reinforcement plates for classic VW front beams.',
            'Engineering: Precision laser-cut components optimized for strength and weight.',
            'Technical Analysis: CAD modeling and rendering for product visualization and marketing.'
        ],
        image: '/Lindaasdesignpublicimagesprojects/VW/Beamplates2.jpg',
        tags: ['SolidWorks', 'Laser Cutting', 'Product Design']
    },
    {
        id: 10,
        projectGroup: 3,
        title: 'Extralight Bracket',
        category: 'Fabrication',
        description: [
            'Concept: Lightweight brackets designed for classic VW applications.',
            'Engineering: TIG welded aluminum construction with precision tolerances.',
            'Technical Analysis: Material selection balancing weight reduction with structural integrity.'
        ],
        image: '/Lindaasdesignpublicimagesprojects/VW/Extralight bracket3.jpg',
        tags: ['TIG Welding', 'Aluminum', 'Fabrication']
    },
    {
        id: 11,
        projectGroup: 3,
        title: 'Vintage Key Rings',
        category: 'Product Development',
        description: [
            'Concept: Custom VW-themed key rings for enthusiasts.',
            'Engineering: Designed for laser cutting with attention to detail and branding.',
            'Technical Analysis: Production workflow from CAD design to finished product.'
        ],
        image: '/Lindaasdesignpublicimagesprojects/VW/Key rings vintage.jpg',
        tags: ['Keyshot', 'Laser Cutting', 'Branding']
    },
    {
        id: 12,
        projectGroup: 3,
        title: 'W Cup Design',
        category: 'Product Rendering',
        description: [
            'Concept: Custom product design showcasing VW heritage and craftsmanship.',
            'Engineering: Photorealistic rendering for marketing and visualization.',
            'Technical Analysis: Advanced rendering techniques using Keyshot for product photography.'
        ],
        image: '/Lindaasdesignpublicimagesprojects/VW/W cup new.jpg',
        tags: ['Keyshot', 'Photoshop', 'Product Visualization']
    }
];

const ProjectCard = ({ project, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden cursor-pointer"
            onClick={() => onClick(project)}
        >
            {/* Image Container - Clean, No Captions */}
            <div className="relative aspect-[4/3] overflow-hidden bg-ld-dark-grey border border-ld-dark-grey hover:border-ld-yellow/50 transition-colors duration-500">
                <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle Hover Overlay - Minimalist */}
                <div className="absolute inset-0 bg-ld-black/0 group-hover:bg-ld-black/40 transition-all duration-500 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-500">
                        <div className="flex items-center text-ld-yellow bg-ld-black/80 px-4 py-2">
                            <span className="text-sm font-oswald tracking-wider">VIEW DETAILS</span>
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-ld-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 25 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-6xl w-full bg-ld-near-black border border-ld-dark-grey overflow-hidden"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-ld-black/80 hover:bg-ld-yellow text-ld-white hover:text-ld-black transition-colors duration-300"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="grid md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative aspect-square md:aspect-auto bg-ld-dark-grey">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12 space-y-6 flex flex-col justify-center">
                        <div>
                            <p className="text-xs text-ld-yellow font-oswald tracking-ultra-wide mb-4">
                                {project.category}
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                {project.title}
                            </h2>
                            {Array.isArray(project.description) ? (
                                <ul className="list-disc pl-5 space-y-2 text-ld-white/80 leading-relaxed">
                                    {project.description.map((item, i) => (
                                        <li key={i}>
                                            <strong className="text-ld-yellow">{item.split(':')[0]}:</strong>
                                            {item.split(':')[1]}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-ld-white/80 leading-relaxed">
                                    {project.description}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Projects = ({ projectGroup }) => {
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = projectGroup
        ? projectsData.filter(p => p.projectGroup === projectGroup)
        : projectsData;

    return (
        <>
            <section className="pt-12 pb-24 bg-ld-near-black relative">
                <div className="container-elegant">
                    {/* Clean Minimalist Image Grid */}
                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                        {filteredProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onClick={setSelectedProject}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default Projects;
