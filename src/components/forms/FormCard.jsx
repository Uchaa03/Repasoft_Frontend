import React from 'react';

function FormCard({ children }) {
    return (
        <main className="forms__card">
            <section className="card">
                <img className="card__img" src="/img/SettingsWhite.svg" alt="Imagen decorativa" />
                <article className="card__form">
                    {children}
                </article>
            </section>
        </main>
    );
}

export default FormCard;
