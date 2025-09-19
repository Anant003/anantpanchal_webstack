import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Resume from "./pages/Resume.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./components/navbar.jsx";
import Counter from "./components/Counter.jsx";
import CounterWithuseEffect from "./components/CounterWithuseEffect.jsx";
import Parent from "./components/PassingPropsFromChildtoParent.jsx";
import ToggleSwitch from "./components/ToggleSwitch.jsx";
import Starwars from "./pages/starwars/Starwars.jsx";
import ProductList from "./pages/productList/ProductList.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/counterWithuseEffect" element={<CounterWithuseEffect />} />
        <Route path="/passingPropsFromChildtoParent" element={<Parent />} />
        <Route path="/toggleSwitch" element={<ToggleSwitch />} />
        <Route path="/starwars" element={<Starwars />} />
        <Route path="/productList" element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default App;
