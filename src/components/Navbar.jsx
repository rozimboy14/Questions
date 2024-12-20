import { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useParams } from "react-router";

const toggleMode = () => {
  return localStorage.getItem("dark-mode") || "light";
};
function Navbar() {
  const { title } = useParams();
  const [theme, setTheme] = useState(toggleMode);
  const handleThemeToggle = () => {
    const NewTheme = theme === "dark-mode" ? "light" : "dark-mode";
    setTheme(NewTheme);
  };
  useEffect(() => {
    document.body.classList = "";
    document.body.classList.add(theme);
    localStorage.setItem("dark-mode", theme);
  }, [theme]);

  return (
    <header className="header">
      <div className="container">
        <div className="header-row">
          <div>
            {title && (
              <Link to="/" className="header-logo">
                <figure>
                  <img
                    src={`../assets/icon-${title.toLowerCase()}.svg`}
                    alt={`${title} icon`}
                  />
                </figure>
                <span>{title}</span>
              </Link>
            )}
          </div>
          <div>
            <div className="dark-btn " onClick={handleThemeToggle}>
              <input type="checkbox" checked={theme === "dark-mode"} readOnly />
              <span>
                <span></span>
                <span></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
