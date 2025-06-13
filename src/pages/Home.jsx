import React from 'react';
import { useNavigate } from "react-router-dom";

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
                    <h2 className="hero__subtitle">Mejora tu negocio con nuestro software, una mejor organización y mejor experiencia para el usuario</h2>
                    <button className="hero__button" onClick={() => navigate('/register')}>Empieza Ahora</button>
                    <img src="/img/HeroIcon.svg" alt="Icono decorativo para hero" className="hero__img"/>
            </section>
        </main>
    )
}
export default Home;

