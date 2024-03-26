import React from "react";
import "./styles.css";
import Box from "./components/Box";

export default function App() {
  return (
    <main className="flex-container">
      <BoxesWithDiv />
      <BoxesWithFragements />
    </main>
  );
}

function BoxesWithDiv() {
  return (
    <div>
      <Box color="#007bff" />
      <Box color="#fc3" />
      <Box color="#ff3333" />
    </div>
  );
}

function BoxesWithFragements() {
  return (
    <>
      <Box color="#ffffff" />
      <Box color="#007bff" />
      <Box color="#fc3" />
      <Box color="#ff3333" />
    </>
  );
}
