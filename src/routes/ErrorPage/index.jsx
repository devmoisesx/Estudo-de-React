import { Link, useRouteError } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import Title from "../../objects/Title";
import "./styles.css";

export default function ErrorPage() {
  const [theme] = useContext(ThemeContext);
  console.log(theme);
  const error = useRouteError();
  console.error(error);

  return (
    <div className={"error-page " + theme}>
      <Title level={1}>Ooops!</Title>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          <b>Error:</b> {error.status} {error.statusText || error.message}
        </i>
      </p>
      <Link to={"/"} className="button">
        Voltar para Página inicial
      </Link>
    </div>
  );
}
