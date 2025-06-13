import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const PublicHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const menuRef = useRef();

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    // Reset state
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    // Close Menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="header" ref={menuRef}>
            <Link to="/">
                <img className="header__logo" src="/img/Logo.svg" alt="Logo de la App" />
            </Link>
            <button
                className="header__hamburger"
                aria-label="Toggle menu"
                onClick={toggleMenu}
            >
                <img src="/img/ToggleMenu.svg" alt="Menu Mobile" />
            </button>

            {/* Desktop */}
            <nav className="header__nav">
                <Link to="/login" className="nav__button">Accede</Link>
                <button className="nav__icon">
                    <img className="icon" src="/img/Dark.svg" alt="Icono Modo oscuro" />
                </button>
            </nav>

            {/* Mobile */}
            <nav className={`header__nav--mobile ${isMenuOpen ? 'header__nav--mobile--open' : ''}`}>
                <Link to="/login" className="nav__button" onClick={() => setIsMenuOpen(false)}>Accede</Link>
                <button className="nav__icon" onClick={() => setIsMenuOpen(false)}>
                    <img className="icon" src="/img/Dark.svg" alt="Icono Modo oscuro" />
                </button>
            </nav>
        </header>
    );
};

export default PublicHeader;
