import React from 'react';
import { Link } from 'react-router-dom';

const PublicFooter = () => {
    return (
        <footer className="footer">
            <a
                href="https://creativecommons.org/licenses/by/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__cc-link"
            >
                CC.BY.4.0
            </a>
            <Link to="/">
                <img className="footer__logo" src="/img/Logo.svg" alt="Logo de la App" />
            </Link>
        </footer>
    );
};

export default PublicFooter;
