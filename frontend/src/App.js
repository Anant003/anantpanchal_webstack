import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import { routes } from "./routes/routes.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
