import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom";
import AdminFinanceChart from "../../components/AdminFinanceChart.jsx";
import {fetchDashboardMetrics} from "../../hooks/apiCalls.js";
import useAuthStore from "../../store/authStore.js";

const AdminDashboard = () => {
    const [stats, setStats] = useState(null);
    const navigate = useNavigate();
    const { token } = useAuthStore();

    useEffect(() => {
        fetchDashboardMetrics(token)
            .then(data => setStats(data))
            .catch(() => setStats(null));
    }, [token]);

    if (!stats) return <main className="dashboard-admin"><h2>Cargando...</h2></main>;

    const chartData = stats.daily_financial_stats.map(item => ({
        date: item.date.slice(5),
        win: Number(item.income),
        lost: Number(item.expense)
    }));

    return (
        <main className="dashboard-content">
            <header>
                <h1 className="dashboard-title">Dashboard</h1>
            </header>

            <section className="dashboard-grid">
                {/* Gráfica con footer integrado */}
                <article className="dashboard-card">
                    <AdminFinanceChart data={chartData}/>
                    <footer className="dashboard-card-footer">
                        <span className="dashboard-label">Datos del Mes</span>
                        <span className="dashboard-total-income">
                            {stats.total_income}€ <span aria-label="Ganancias">▲</span>
                        </span>
                        <span className="dashboard-total-expense">
                            {stats.total_expense}€ <span aria-label="Pérdidas">▼</span>
                        </span>
                    </footer>
                </article>

                {/* Botones de navegación */}
                <aside className="dashboard-actions" aria-label="Accesos rápidos">
                    <button className="dashboard-action" onClick={() => navigate("/admin/stores")}>
                        <img src="/img/Store.svg" alt="" aria-hidden="true"/>
                        <span>Tiendas</span>
                    </button>
                    <button className="dashboard-action" onClick={() => navigate("/admin/technicians")}>
                        <img src="/img/Technicians.svg" alt="" aria-hidden="true"/>
                        <span>Técnicos</span>
                    </button>
                    <button className="dashboard-action" onClick={() => navigate("/admin/repairs")}>
                        <img src="/img/Repairs.svg" alt="" aria-hidden="true"/>
                        <span>Reparaciones</span>
                    </button>
                </aside>
            </section>
        </main>
    )
}

export default AdminDashboard
