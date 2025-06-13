import React from 'react';
import { useNavigate } from "react-router-dom";
import ArticleCard from "../components/ArticleCard.jsx";

const Home = () => {
    const navigate = useNavigate();

    return (
        <main className="main">
            <section className="hero">
                <h1 className="hero__title">Mejora tus reparaciones
                    <span className="hero__highlight"> Rápido</span>,
                    <span className="hero__highlight"> Eficiente</span>,
                    <span className="hero__highlight"> Sencillo</span>.
                </h1>
                <h2 className="hero__subtitle">Mejora tu negocio con nuestro software, una mejor organización y mejor
                    experiencia para el usuario</h2>
                <button className="hero__button" onClick={() => navigate('/register')}>Empieza Ahora</button>
                <img src="/img/HeroIcon.svg" alt="Icono decorativo para hero" className="hero__img"/>
            </section>
            <section className="cards">
                <ArticleCard
                    title="Gestiona tus Locales"
                    description="Crea y Gestiona tus locales de reparaciones desde una plataforma única, visualiza las ganancias y perdidas generales y de cada local para así llevar una buena gestión de tu empresa"
                    image="/img/Store.svg"
                    reverse={false}
                />
                <ArticleCard
                    title="Controla tus Técnicos"
                    description="Crea, edita o elimina a tus técnicos cuando sea necesario, lleva un control sobre sus reparaciones y ganancias obtenidas, con cada uno, en el dashboard general de datos."
                    image="/img/Users.svg"
                    reverse={true}
                />
                <ArticleCard
                    title="Visualiza las reparaciones"
                    description="Visualiza las reparaciones con la realización de los respectivos técnicos, para llevar un control total del trabajo de tus técnicos en tus locales."
                    image="/img/Repairs.svg"
                    reverse={false}
                />
                <ArticleCard
                    title="Controla tus Técnicos"
                    description="Empieza a ganar productividad y organización gracias a nuestro programa de gestión de reparaciones, simplemente registrandote y creando tu local virtual."
                    image="/img/Settings.svg"
                    reverse={true}
                />
            </section>

        </main>
    )
}
export default Home;

