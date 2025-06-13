import React from 'react';

const ArticleCard = ({
                         title,
                         description,
                         image,
                         reverse = false,
                     }) => {
    return (
        <article className={`article-card${reverse ? ' article-card--reverse' : ''}`}>
            <img className="article-card__image" src={image} alt={title} />
            <div className="article-card__content">
                <h2 className="article-card__title">{title}</h2>
                <p className="article-card__desc">{description}</p>
            </div>
        </article>
    );
};

export default ArticleCard;
