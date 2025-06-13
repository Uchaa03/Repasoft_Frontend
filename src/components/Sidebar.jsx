import React, { useState } from "react";
import useLogout from "../hooks/useLogout";
import DesktopSidebar from "./DesktopSidebar";
import MobileToolbar from "./MobileToolbar";

const Sidebar = ({ menuItems, logo }) => {
    const [expanded, setExpanded] = useState(false);
    const logout = useLogout();

    const toggleSidebar = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <DesktopSidebar menuItems={menuItems} logo={logo} onLogout={logout} />
            <MobileToolbar
                menuItems={menuItems}
                logo={logo}
                onLogout={logout}
                expanded={expanded}
                onToggle={toggleSidebar}
            />
        </>
    );
};

export default Sidebar;
