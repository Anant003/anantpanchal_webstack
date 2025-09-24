import About from "../pages/about/About";
import Projects from "../pages/projects/Projects";
import Resume from "../pages/resume/Resume";
import Contact from "../pages/contact/Contact";
import Counter from "../components/Counter";
import CounterWithuseEffect from "../components/CounterWithuseEffect";
import Parent from "../components/PassingPropsFromChildtoParent";
import ToggleSwitch from "../components/ToggleSwitch";
import ExampleDataTableView from "../pages/projects/apiExamples/ExampleDataTableView";
import ProductList from "../pages/productList/ProductList";
import StarwarsCharacters from "../pages/projects/apiExamples/examples/StarwarsCharacters";
import ReactChallengesView from "../pages/projects/react-challenges/ReactChallengesView";
import AccessibilityComponentsView from "../pages/projects/accessibility-components/AccessibilityComponentsView";
import ProductLisitingPageWithAsc from "../pages/projects/apiExamples/examples/ProductLisitingPageWithAsc";
import PokemonDropdown from "../pages/projects/apiExamples/examples/PokemonDropdown";

export const routes = [
  { path: "/about", element: <About /> },
  { path: "/projects", element: <Projects /> },
  { path: "/resume", element: <Resume /> },
  { path: "/contact", element: <Contact /> },
  { path: "/counter", element: <Counter /> },
  { path: "/counterWithuseEffect", element: <CounterWithuseEffect /> },
  { path: "/passingPropsFromChildtoParent", element: <Parent /> },
  { path: "/toggleSwitch", element: <ToggleSwitch /> },
  { path: "/projects/api-examples", element: <ExampleDataTableView /> },
  { path: "/productList", element: <ProductList /> },
  {
    path: "/projects/apiExamples/Starwars-Characters",
    element: <StarwarsCharacters />,
  },
  {
    path: "/apiExampleView/Product-Listing-Page",
    element: <ProductLisitingPageWithAsc />,
  },
  {
    path: "/apiExampleView/Pokemon-Dropdown",
    element: <PokemonDropdown />,
  },
  { path: "/projects/react-challenges", element: <ReactChallengesView /> },
  {
    path: "/projects/accessibility-components",
    element: <AccessibilityComponentsView />,
  },
];
