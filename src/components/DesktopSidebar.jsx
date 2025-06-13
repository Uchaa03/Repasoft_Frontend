import React from "react";
import { Link } from "react-router-dom";

const DesktopSidebar = ({ menuItems, logo, onLogout }) => {
    return (
        <aside className="sidebar">
            <nav className="sidebar-nav">
                <ul className="sidebar-menu">
                    {menuItems.map(({ to, icon, title }, index) => (
                        <li key={index} className="sidebar-menu-item">
                            {title === "Salir" ? (
                                <button
                                    onClick={onLogout}
                                    className="sidebar-link"
                                    title={title}
                                    style={{ background: "none", border: "none", cursor: "pointer" }}
                                >
                  <span className="sidebar-icon">
                    <img src={icon} alt={title} />
                  </span>
                                    <span className="sidebar-title">{title}</span>
                                </button>
                            ) : (
                                <Link
                                    to={to}
                                    className="sidebar-link"
                                    title={title}
                                >
                  <span className="sidebar-icon">
                    <img src={icon} alt={title} />
                  </span>
                                    <span className="sidebar-title">{title}</span>
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
            <button className="sidebar-logo" aria-label="Menú">
                <img src={logo} alt="Logo" />
            </button>
        </aside>
    );
};

export default DesktopSidebar;
