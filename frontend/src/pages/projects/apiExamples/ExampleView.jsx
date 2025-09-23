import React, { lazy, Suspense} from "react";
import { useParams } from "react-router-dom";

const StarWarsCharacters = lazy(() => import("./examples/StarwarsCharacters"));
const ProductList = lazy(() => import("./examples/ProductList"));

const exampleComponents = {
  starwarsCharacters: StarWarsCharacters,
};

const ExampleView = () => {
  const { exampleName } = useParams();
  const ExampleComponent = exampleComponents[exampleName];
  if (!ExampleComponent) return <div>Example not found</div>;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ExampleComponent />
    </Suspense>
  );
};

export default ExampleView;
