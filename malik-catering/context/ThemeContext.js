import React, { createContext, useState, useContext } from "react";

// Creamos el contexto
const ThemeContext = createContext();

// Creamos un provider para el contexto
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Por defecto, el tema es claro

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Creamos un hook personalizado para acceder al contexto
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme debe ser utilizado dentro de un ThemeProvider");
  }
  return context;
};
