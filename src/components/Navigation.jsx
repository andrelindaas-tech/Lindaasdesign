import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (sectionId) => {
        if (sectionId === 'works' || sectionId === 'passion projects') {
            navigate('/projects');
        } else if (sectionId === 'gallery') {
            navigate('/gallery');
        } else if (isHomePage) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // If on projects page, navigate to home then scroll
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    const scrollToTop = () => {
        if (isHomePage) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/');
        }
    };

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`glass-card rounded-full px-6 py-2 flex items-center gap-8 ${scrolled ? 'shadow-2xl border-ld-yellow/20' : ''
                    }`}
            >
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="cursor-pointer pr-4 border-r border-ld-white/10"
                    onClick={scrollToTop}
                >
                    <h1 className="text-lg font-bold tracking-tighter whitespace-nowrap">
                        LINDAAS <span className="text-ld-yellow">DESIGN</span>
                    </h1>
                </motion.div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-6">
                    {['ABOUT', 'EXPERIENCE', 'PASSION PROJECTS', 'GALLERY', 'SKILLS'].map((item, index) => (
                        <motion.button
                            key={item}
                            whileHover={{ y: -2 }}
                            onClick={() => handleNavClick(item.toLowerCase())}
                            className="text-[11px] font-oswald tracking-[0.2em] hover:text-ld-yellow transition-colors duration-300"
                        >
                            {item}
                        </motion.button>
                    ))}
                </div>

                {/* Mobile Menu Button - simplified for pill */}
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="md:hidden text-ld-yellow p-1"
                    aria-label="Menu"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </motion.button>
            </motion.nav>
        </div>
    );
};

export default Navigation;
