import React from "react";
import FavoriteButton from "../FavoriteButton";
import "./Entry.css";

export default function Entry({ entry, onToggleFavorite }) {
  const { motto, notes, date, id, isFavorite } = entry;

  return (
    <article className="entry">
      <time className="entry__date">{date}</time>
      <div className="entry__content">
        <div className="entry__motto-container">
          <h2 className="entry__motto">
            <q>{motto}</q>
          </h2>
          {/* Pass all three props to the FavoriteButton component */}
          <FavoriteButton
            onToggleFavorite={onToggleFavorite}
            isFavorite={isFavorite}
            id={id}
          />
        </div>
        <p className="entry__notes">{notes}</p>
      </div>
    </article>
  );
}
