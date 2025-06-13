import React from "react";
import PropTypes from "prop-types";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from "recharts";

const AdminFinanceChart = ({ data }) => (
    <section className="admin-finance-chart" aria-label="Gráfica de ingresos y gastos">
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="win" stroke="#4caf50" strokeWidth={2} />
                <Line type="monotone" dataKey="lost" stroke="#e53935" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    </section>
);

AdminFinanceChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        date: PropTypes.string,
        win: PropTypes.number,
        lost: PropTypes.number
    })).isRequired
};

export default AdminFinanceChart;
