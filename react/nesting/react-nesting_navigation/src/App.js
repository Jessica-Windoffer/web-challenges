import "./styles.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Link from "./components/Link";

export default function App() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
