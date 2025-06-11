import React from 'react'
import useAuthStore from "../store/authStore.js";
import {Navigate, Outlet} from "react-router-dom";

// Private Layout for check if user is in correct route
const PrivateLayout = () => {
    const { token, role } = useAuthStore();
    const path = window.location.pathname;

    if (!token) return <Navigate to="/login" replace />;

    // Redirect to private route
    if (path.startsWith('/admin') && role !== 'admin') return <Navigate to="/" replace />;
    if (path.startsWith('/tech') && role !== 'tech') return <Navigate to="/" replace />;
    if (path.startsWith('/client') && role !== 'client') return <Navigate to="/" replace />;

    return <Outlet />;
}
export default PrivateLayout