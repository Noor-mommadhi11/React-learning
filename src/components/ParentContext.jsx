import { createContext, useState } from "react";
import FormComponent from "./FormComponent";
import "../styles/ContextForm.css";

export const FormContext = createContext();

function ParentContext() {
  const [theme, setTheme] = useState("light");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        handleChange,
        theme,
        toggleTheme,
      }}
    >
      <div className={`container ${theme}`}>
        <h1>Form using use Context</h1>
        <FormComponent />
      </div>
    </FormContext.Provider>
  );
}

export default ParentContext;