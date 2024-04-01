import { Link } from "react-router-dom";
import "./styles.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Header = () => {
  const [theme, toggleTheme] = useContext(ThemeContext);

  return (
    <header className={"header " + theme}>
      <nav>
        <ul className="flex gap-3 header-list">
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          <li className="link">
            <Link to="/Counter">Contador</Link>
          </li>
          <li className="link">
            <Link to="/List">Lista</Link>
          </li>
        </ul>
      </nav>
      <button className="theme-button" onClick={toggleTheme}>
        {theme}
      </button>
    </header>
  );
};

export default Header;
