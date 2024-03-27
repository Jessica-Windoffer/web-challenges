import React from "react";
import "./Tag.css";

function Tag({ tag, highlight }) {
  // Add 'tag--highlight' class if highlight is true
  const tagClass = highlight ? "tag tag--highlight" : "tag";

  return <li className={tagClass}>{tag}</li>;
}

export default Tag;
