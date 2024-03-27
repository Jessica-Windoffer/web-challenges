import React from "react";
import "./Card.css";
import Tag from "./Tag";
import Button from "./Button";

function Card({ user }) {
  return (
    <article className="card">
      <h2>{user.name}</h2>
      <ul className="card__taglist">
        {user.roles.map((role) => {
          // Is the User an admin?
          const highlight = role === "admin";

          return <Tag key={role} tag={role} highlight={highlight} />;
        })}
      </ul>
      <p>{user.about}</p>
      <Button>edit</Button>
      <Button buttonType="danger">invoice</Button>
    </article>
  );
}

export default Card;
