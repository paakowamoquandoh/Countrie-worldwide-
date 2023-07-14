import React from "react";
import { Moon, Sun } from "react-feather";
import { Link } from "react-router-dom";
import "./styles.css";

type HeaderProps = {
  toggleTheme: () => void;
  theme: string;
};

export const Header = ({ toggleTheme, theme }: HeaderProps) => {
  const isDarkMode = theme === "dark";
  const buttonText = isDarkMode ? "Light Mode" : "Dark Mode";
  const icon = isDarkMode ? <Sun /> : <Moon />;

  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <h1>Where in the world</h1>
        </Link>
        <p onClick={toggleTheme}>
          {icon} <b>{buttonText}</b>
        </p>
      </div>
    </header>
  );
};
