import { Outlet } from "react-router-dom";
import Header from "./components/Header/";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";
import "./App.css";

function App() {
  const [theme] = useContext(ThemeContext);

  return (
    <>
      <Header />
      <main className={"app " + theme}>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default App;
