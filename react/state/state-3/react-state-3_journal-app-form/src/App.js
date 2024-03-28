import "./App.css";
import EntriesSection from "./components/EntriesSection";
import Entry from "./components/Entry";
import EntryForm from "./components/EntryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import { uid } from "uid";

// Move the initialEntries and the state to their common ancestor
const initialEntries = [
  {
    id: 1000,
    date: "Feb 5, 2025",
    motto: "We are in a state of chaos",
    notes:
      "Today I learned about React State. It was fun! I can't wait to learn more.",
  },
  {
    id: 999,
    date: "Feb 4, 2025",
    motto: "Props, Props, Props",
    notes:
      "Today I learned about React Props. Mad props to everyone who understands this!",
  },
  {
    id: 998,
    date: "Feb 3, 2025",
    motto: "How to nest components online fast",
    notes:
      "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
  },
  {
    id: 997,
    date: "Feb 2, 2025",
    motto: "I'm a React Developer",
    notes: "My React-ion when I learned about React: Yay!",
  },
];

function App() {
  const [entries, setEntries] = useState(initialEntries);

  // Create a function called handleAddEntry
  // Accept a parameter called newEntry,
  // which should be an object describing the new entry
  function handleAddEntry(newEntry) {
    // Create a string containing the date in the desired format
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });

    setEntries([...entries, { ...newEntry, date, id: uid() }]);
  }

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryForm onAddEntry={handleAddEntry} />
        {/* Pass the entries state via the entries prop down to the EntriesSection */}
        <EntriesSection entries={entries} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
