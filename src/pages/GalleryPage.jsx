import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const galleryImages = [
    '/Lindaasdesignpublicimagesprojects/Image Gallery/1.jpg',
    '/Lindaasdesignpublicimagesprojects/Image Gallery/2.jpg',
    '/Lindaasdesignpublicimagesprojects/Image Gallery/3.png',
    '/Lindaasdesignpublicimagesprojects/Image Gallery/4.png',
    '/Lindaasdesignpublicimagesprojects/Image Gallery/5.png',
    '/Lindaasdesignpublicimagesprojects/Image Gallery/6.png',
    '/Lindaasdesignpublicimagesprojects/Image Gallery/7.png',
    '/Lindaasdesignpublicimagesprojects/Image Gallery/8.png'
];

const GalleryPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-rotation effect
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
        }, 4000); // 4 seconds

        return () => clearInterval(interval);
    }, [isPaused]);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    };

    return (
        <div className="min-h-screen bg-ld-black">
            {/* Header / Navigation Bar */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="sticky top-0 z-50 bg-ld-black/95 backdrop-blur-md border-b border-ld-dark-grey"
            >
                <div className="container-elegant">
                    <div className="flex items-center justify-between h-20">
                        <Link to="/" className="hover:opacity-80 transition-all duration-300">
                            <h1 className="text-xl md:text-2xl font-bold tracking-tighter font-oswald">
                                LINDAAS <span className="text-ld-yellow">DESIGN</span>
                            </h1>
                        </Link>

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

            {/* Intro Section */}
            <section className="pt-32 pb-16 px-6">
                <div className="container-elegant text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <p className="text-ld-yellow text-sm font-oswald tracking-ultra-wide mb-4">
                            ENGINEERING ARCHIVE
                        </p>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 tracking-tighter">
                            Visual <span className="text-gradient-yellow">Gallery</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-ld-white/70 leading-relaxed font-light">
                            Sketches, calculations, and creative explorations captured along the way.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Carousel Section */}
            <section className="pb-32 px-6">
                <div className="container-elegant">
                    <div
                        className="relative w-full aspect-[16/10] bg-ld-near-black border border-ld-dark-grey overflow-hidden"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {/* Image Display */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                            >
                                <img
                                    src={galleryImages[currentIndex]}
                                    alt={`Gallery image ${currentIndex + 1}`}
                                    className="w-full h-full object-contain"
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Previous Button */}
                        <button
                            onClick={goToPrevious}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-ld-black/80 hover:bg-ld-yellow text-ld-white hover:text-ld-black transition-all duration-300 border border-ld-dark-grey z-10"
                            aria-label="Previous image"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={goToNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-ld-black/80 hover:bg-ld-yellow text-ld-white hover:text-ld-black transition-all duration-300 border border-ld-dark-grey z-10"
                            aria-label="Next image"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Progress Indicator */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2 z-10">
                            {galleryImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'bg-ld-yellow w-8'
                                        : 'bg-ld-white/40 hover:bg-ld-white/60'
                                        }`}
                                    aria-label={`Go to image ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Image Counter */}
                    <div className="mt-4 text-center">
                        <p className="text-sm text-ld-white/60 font-oswald tracking-wider">
                            {currentIndex + 1} / {galleryImages.length}
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default GalleryPage;
