import { useContext } from "react";
import { FormContext } from "./ParentContext";

function ThemeButton() {
  const { toggleTheme, theme } = useContext(FormContext);

  return (
    <button className="theme-btn" onClick={toggleTheme}>
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}

export default ThemeButton;