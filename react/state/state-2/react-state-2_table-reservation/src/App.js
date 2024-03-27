import React from "react";
import { useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(0);

  function handleAddingPerson() {
    setPeople(people + 1);
  }

  function handleSubtractingPerson() {
    if (people > 0) {
      setPeople(people - 1);
    }
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
        handleAddingPerson={handleAddingPerson}
        handleSubtractingPerson={handleSubtractingPerson}
      />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
