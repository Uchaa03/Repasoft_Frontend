import React from 'react';
import { Link } from 'react-router-dom';

const PublicHeader = () => {
    return (
        <header className="header">
            <Link to="/">
                <img className="header__logo" src="/img/Logo.svg" alt="Logo de la App"/>
            </Link>
            <nav className="header__nav">
                <Link to="/login" className="nav__button">Accede</Link>
                <button className="nav__icon">
                    <img className="icon" src="/img/Dark.svg" alt="Icono Modo oscuro"/>
                </button>
            </nav>
        </header>
    )
}
export default PublicHeader;
