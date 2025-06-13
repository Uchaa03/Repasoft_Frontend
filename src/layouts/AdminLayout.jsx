import React, {Fragment} from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const menuItems = [
    { to: "/admin/stores", icon: '/img/Store.svg', title: "Tiendas" },
    { to: "/admin/technicians", icon: '/img/Technicians.svg', title: "Técnicos" },
    { to: "/admin/repairs", icon: '/img/Repairs.svg', title: "Reparaciones" },
    { icon: '/img/Logout.svg', title: "Salir" }, // Sin 'to'
];


const AdminLayout = () => {
    return (
        <Fragment>
            <Sidebar menuItems={menuItems} logo="/img/Logo.svg" />
            <Outlet />
        </Fragment>
    );
};

export default AdminLayout;