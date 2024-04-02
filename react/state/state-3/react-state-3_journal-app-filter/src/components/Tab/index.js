import "./Tab.css";

// Add the prop [onClick] to the function declaration of this component
export default function Tab({ children, isActive, onClick }) {
  return (
    <button
      className={`tab${isActive ? " tab--active" : ""}`}
      // Pass the prop to the button tag like this: onClick={onClick}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
