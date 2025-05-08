import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('Home');

    // Handle scroll effects and active section highlight
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);

            const sections = ['Home', 'About', 'Projects', 'Services', 'Contact'];
            const scrollPosition = window.scrollY + 120;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to a section smoothly
    const scrollToSection = (sectionId) => {
        if (sectionId === 'Home') {
            window.scrollTo({ top: 1, behavior: 'auto' });
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 10);
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                });
            }
        }

        setTimeout(() => {
            setActiveSection(sectionId);
            setShowMobileMenu(false);
        }, 500);
    };

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';
    }, [showMobileMenu]);

    const navItems = ['Home', 'About', 'Projects', 'Services', 'Contact'];

    return (
        <>
            {/* Navbar */}
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
            }`}>
                <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">
                    {/* Logo */}
                    <div 
                        onClick={() => scrollToSection('Home')}
                        className="cursor-pointer hover:scale-105 transition-transform duration-300"
                    >
                        <img src={assets.logo_dark} alt="Logo" className="h-10 md:h-12" />
                    </div>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex items-center gap-7">
                        {navItems.map((item) => (
                            <li key={item}>
                                <div
                                    onClick={() => scrollToSection(item)}
                                    className={`px-3 py-2 rounded-md cursor-pointer transition-all duration-300 ${
                                        activeSection === item 
                                            ? 'text-blue-600 font-semibold scale-105' 
                                            : scrolled 
                                                ? 'text-gray-800 hover:text-blue-500' 
                                                : 'text-white hover:text-blue-300'
                                    }`}
                                >
                                    {item}
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Icon */}
                    <button 
                        onClick={() => setShowMobileMenu(true)}
                        className="md:hidden focus:outline-none"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className={`h-7 w-7 transition-all duration-300 ${
                                scrolled ? 'text-gray-800' : 'text-white'
                            }`} 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {showMobileMenu && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-90 md:hidden">
                    <div className="absolute right-0 top-0 h-full w-4/5 bg-white shadow-xl transform transition-all duration-300 animate-slideIn">
                        <div className="flex justify-end p-6">
                            <button 
                                onClick={() => setShowMobileMenu(false)}
                                className="focus:outline-none text-gray-800 hover:rotate-90 transition-transform duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <ul className="flex flex-col gap-1 mt-10 px-6">
                            {navItems.map((item) => (
                                <li key={item}>
                                    <div
                                        onClick={() => scrollToSection(item)}
                                        className={`block py-4 text-lg px-4 rounded-lg cursor-pointer transition-all duration-300 ${
                                            activeSection === item
                                                ? 'bg-blue-100 text-blue-600 font-medium'
                                                : 'text-gray-800 hover:bg-blue-50'
                                        }`}
                                    >
                                        {item}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {/* Global Styles */}
            <style jsx global>{`
                @keyframes slideIn {
                    from { transform: translateX(100%); }
                    to { transform: translateX(0); }
                }
                .animate-slideIn {
                    animation: slideIn 0.3s ease-out forwards;
                }

                html {
                    scroll-behavior: smooth;
                }
            `}</style>
        </>
    );
};

export default Navbar;
