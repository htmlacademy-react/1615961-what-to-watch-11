import React from 'react';

type FilmCardProps = {
  titleCard: string;
}

function FilmCard({titleCard}: FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src="img/aviator.jpg" alt="Aviator" width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{titleCard}</a>
      </h3>
    </article>
  );
}

export default FilmCard;
