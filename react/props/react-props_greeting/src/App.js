import "./styles.css";
console.clear();

export default function App() {
  return (
    <div>
      <Greeting name="Haydar" />
      <Greeting name="Volker" />
      <Greeting name="Feline" />
      <Greeting name="Jessica" />
    </div>
  );
}

function Greeting({ name }) {
  // if { name } is Feline, then (?) render "Coach",
  // otherwise (:) render the given name”.
  return <div>Hello, {name === "Feline" ? "Coach" : name}!</div>;
}
