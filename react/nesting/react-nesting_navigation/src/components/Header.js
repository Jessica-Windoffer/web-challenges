import avatar from "../img/avatar.jpg";
import logo from "../img/logo.jpg";

export default function Header({ children }) {
  return (
    <header className="header">
      <a href="#">
        <img className="round-image" src={logo} alt="logo" />
      </a>
      {children}
      <button
        type="button"
        onClick={() => console.log("I could toggle a profile!")}
        aria-label="toggle profile"
      >
        <img className="round-image" src={avatar} alt="avatar" />
      </button>
    </header>
  );
}
