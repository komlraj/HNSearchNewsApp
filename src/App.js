import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Header from "./components/Header";
import IntervalServalError from "./components/Common/IntervalServerError";
import "./App.scss";

const Main = lazy(() => import("./components/Main"));
const NewsDetails = lazy(() => import("./components/NewsDetails"));

const routes = [
  {
    path: "/",
    name: "Home",
    element: <Main />,
  },
  {
    path: "/news/:id",
    name: "News Details",
    element: <NewsDetails />,
  },
];

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={IntervalServalError}>
        <Router>
          <Header />
          <Routes>
            {routes?.map(({ path, name, element }) => (
              <Route key={name} path={path} element={element} />
            ))}
          </Routes>
        </Router>
      </ErrorBoundary>
    </div>
  );
}

export default App;
