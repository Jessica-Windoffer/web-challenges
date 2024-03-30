import React from "react";
import "./FavoriteButton.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";

export default function FavoriteButton({ onToggleFavorite, isFavorite, id }) {
  return (
    <button
      className="favorite-button"
      onClick={() => {
        // Change the button's onClick prop to call onToggleFavorite
        // and pass id with this call as first argument
        onToggleFavorite(id);
      }}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
