import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home/index.jsx";
import Counter from "./routes/Counter/index.jsx";
import List from "./routes/List/index.jsx";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";
import "./styles/generic/reset.css";
import "./styles/elements/base.css";
import "./styles/settings/colors.css";
import "./styles/settings/sizes.css";
import "./styles/settings/spacing.css";
import ErrorPage from "./routes/ErrorPage/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "counter",
        element: <Counter />,
      },
      {
        path: "list",
        element: <List />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
