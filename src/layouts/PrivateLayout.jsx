import React from 'react';
import useAuthStore from "../store/authStore.js";
import { Navigate, Outlet } from "react-router-dom";

const PrivateLayout = () => {
    const { token, role, requirePaswdChange } = useAuthStore();
    const path = window.location.pathname;

    if (!token) return <Navigate to="/login" replace />;

    // Redirect to change password is
    if (requirePaswdChange && !path.startsWith('/change-password')) {
        return <Navigate to="/change-password" replace />;
    }

    //Redirect to private route
    if (path.startsWith('/admin') && role !== 'admin') return <Navigate to="/" replace />;
    if (path.startsWith('/tech') && role !== 'tech') return <Navigate to="/" replace />;
    if (path.startsWith('/client') && role !== 'client') return <Navigate to="/" replace />;

    return <Outlet />;
}

export default PrivateLayout;
