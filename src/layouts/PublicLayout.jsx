import React, { Fragment, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import PublicHeader from "../components/PublicHeader.jsx";
import PublicFooter from "../components/PublicFooter.jsx";
import useAuthStore from "../store/authStore.js";
import { useRedirectAfterAuth } from "../hooks/useRedirectAfterAuth.js";

const PublicLayout = () => {
    const { token, role, requirePaswdChange } = useAuthStore();
    const redirectAfterAuth = useRedirectAfterAuth();

    useEffect(() => {
        if (token) {
            redirectAfterAuth(role, requirePaswdChange);
        }
    }, [token, role, requirePaswdChange, redirectAfterAuth]);

    return (
        <Fragment>
            <PublicHeader/>
            <Outlet/>
            <PublicFooter/>
        </Fragment>
    );
};

export default PublicLayout;
