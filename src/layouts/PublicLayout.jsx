import React, {Fragment} from 'react'
import {Outlet} from "react-router-dom";
import PublicHeader from "../components/PublicHeader.jsx";
import PublicFooter from "../components/PublicFooter.jsx";

const PublicLayout = () => {
    return (
        <Fragment>
            <PublicHeader/>
            <Outlet/>
            <PublicFooter/>
        </Fragment>
    )
}
export default PublicLayout
