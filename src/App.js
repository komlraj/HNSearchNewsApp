import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

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
      <Router>
        <Header />
        <Routes>
          {routes?.map(({ path, name, element }) => (
            <Route key={name} path={path} element={element} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
