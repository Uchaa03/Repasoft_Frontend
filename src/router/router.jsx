import {createBrowserRouter} from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout.jsx";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import PrivateLayout from "../layouts/PrivateLayout.jsx";
import ClientLayout from "../layouts/ClientLayout.jsx";
import TechnicianLayout from "../layouts/TechnicianLayout.jsx";
import AdminLayout from "../layouts/AdminLayout.jsx";
import AdminDashboard from "../pages/admin/AdminDashboard.jsx";
import AdminStores from "../pages/admin/AdminStores.jsx";
import AdminTechnicians from "../pages/admin/AdminTechnicians.jsx";
import AdminRepairs from "../pages/admin/AdminRepairs.jsx";
import AdminCreateTechnician from "../pages/admin/AdminCreateTechnician.jsx";
import TechDashboard from "../pages/technician/TechDashboard.jsx";
import TechParts from "../pages/technician/TechParts.jsx";
import TechRepairs from "../pages/technician/TechRepairs.jsx";
import TechCreateRepair from "../pages/technician/TechCreateRepair.jsx";
import ClientRepairs from "../pages/client/ClientRepairs.jsx";
import Error404 from "../pages/Error404.jsx";

export const router = createBrowserRouter([
    {
        //PublicRoutes
        element: <PublicLayout/>,
        errorElement: <Error404 />,
        children: [
            {path: '/', element: <Home/>},
            {path: '/login', element: <Login/>},
            {path: '/register', element: <Register/>}
        ]
    },
    {
        element: <PrivateLayout/>,
        children: [
            {
                // Admin routes
                element: <AdminLayout />,
                children: [
                    { path: '/admin/dashboard', element: <AdminDashboard /> },
                    { path: '/admin/stores', element: <AdminStores /> },
                    { path: '/admin/technicians', element: <AdminTechnicians /> },
                    { path: '/admin/repairs', element: <AdminRepairs /> },
                    { path: '/admin/create-technician', element: <AdminCreateTechnician /> },
                ]
            },
            {
                // Technicians routes
                element: <TechnicianLayout />,
                children: [
                    { path: '/tech/dashboard', element:  <TechDashboard /> },
                    { path: '/tech/parts', element:  <TechParts /> },
                    { path: '/tech/repairs', element:  <TechRepairs /> },
                    { path: '/tech/create-repair', element:  <TechCreateRepair /> },
                ]
            },
            {
                // Clients routes
                element: <ClientLayout />,
                children: [
                    { path: '/client/repairs', element:  <ClientRepairs /> },
                ]
            }
        ]
    }
])