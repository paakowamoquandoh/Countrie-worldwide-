import React, { useState } from 'react';
import { MainRoute } from "./AppRoutes/MainRoute";
import { Header } from "./components/Header";


function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app ${theme}`}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <MainRoute toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
