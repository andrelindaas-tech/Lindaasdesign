import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Footer />
        </>
    );
};

export default HomePage;
