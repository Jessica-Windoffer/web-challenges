import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">This is a Headline for the article!</h2>
      <label htmlFor="inputField">Put your input into the text field:</label>
      <input id="inputField"></input>
      <a
        className="article__link"
        href="https://de.wikipedia.org/wiki/Lorem_ipsum"
      >
        Wikipedia Article regarding Lorem Ipsum
      </a>
    </article>
  );
}
