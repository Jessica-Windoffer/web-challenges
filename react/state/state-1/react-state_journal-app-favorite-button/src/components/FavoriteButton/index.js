import { useState } from "react";
import "./FavoriteButton.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  function toggleIsFavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <button
      className="favorite-button"
      aria-label="favorite"
      onClick={toggleIsFavorite}
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
