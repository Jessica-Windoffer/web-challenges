import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 0, name: "🍌 banana", color: "yellow" },
    { id: 1, name: "🍓 strawberrie", color: "red" },
    { id: 2, name: "🍑 peach", color: "orange" },
    { id: 3, name: "🍏 apple", color: "green" },
    { id: 4, name: "🍇 grapes", color: "purple" },
  ];

  return (
    <div className="app">
      <h1>Fruit List</h1>
      <dl>
        {fruits.map(({ id, name, color }) => (
          <Card key={id} name={name} color={color}></Card>
        ))}
      </dl>
    </div>
  );
}
