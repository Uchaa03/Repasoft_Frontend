import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const MobileToolbar = ({ menuItems, logo, onLogout, expanded, onToggle }) => {
    const toolbarRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                expanded &&
                toolbarRef.current &&
                !toolbarRef.current.contains(event.target) &&
                !buttonRef.current.contains(event.target)
            ) {
                onToggle();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [expanded, onToggle]);

    return (
        <div className="floating-menu">
            <button
                ref={buttonRef}
                className="floating-menu-button"
                onClick={onToggle}
                aria-label="Menú"
                aria-expanded={expanded}
            >
                <img src={logo} alt="Logo ab" />
            </button>
            <div
                ref={toolbarRef}
                className="floating-toolbar"
                data-expanded={expanded}
            >
                <ul className="floating-toolbar-menu">
                    {menuItems.map(({ to, icon, title }, index) => (
                        <li key={index} className="floating-toolbar-item">
                            {title === "Salir" ? (
                                <button
                                    onClick={onLogout}
                                    className="floating-toolbar-link"
                                    title={title}
                                >
                  <span className="floating-toolbar-icon">
                    <img src={icon} alt={title} />
                  </span>
                                    <span>{title}</span>
                                </button>
                            ) : (
                                <Link
                                    to={to}
                                    className="floating-toolbar-link"
                                    title={title}
                                    onClick={onToggle}
                                >
                  <span className="floating-toolbar-icon">
                    <img src={icon} alt={title} />
                  </span>
                                    <span>{title}</span>
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MobileToolbar;
