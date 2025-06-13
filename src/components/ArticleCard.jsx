import React from 'react';

const ArticleCard = ({
                         title,
                         description,
                         image,
                         reverse = false,
                     }) => {
    return (
        <article className={`card${reverse ? ' card--reverse' : ''}`}>
            <img className="card__image" src={image} alt={title} />
            <div className="card__content">
                <h2 className="card__title">{title}</h2>
                <p className="card__desc">{description}</p>
            </div>
        </article>
    );
};

export default ArticleCard;
