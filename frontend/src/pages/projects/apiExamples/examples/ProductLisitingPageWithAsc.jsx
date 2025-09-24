import React, { useState, useEffect } from "react";

const ProductLisitingPageWithAsc = () => {
  const [products, setProducts] = useState([]);
  const [sorting, setSorting] = useState("asc");

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((productData) => {
        const sortedData = productData.sort((a, b) =>
          sorting === "asc" ? a.price - b.price : b.price - a.price
        );
        setProducts(sortedData);
      })
      .catch((err) => console.log(err));
  }, [sorting]);

  return (
    <div>
      <h1>Product Lisiting With Sort</h1>
      <div style={{ padding: "10px" }} className="sort-dropdown">
        <label htmlFor="sort-dropdown">Sort by:</label>
        <select
          id="sort-dropdown"
          value={sorting}
          onChange={(e) => setSorting(e.target.value)}
        >
          <option value="asc">Accending order</option>
          <option value="desc">Descending order</option>
        </select>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {products.map((prod) => (
          <div
            key={prod.id}
            style={{
              width: "200px",
              padding: "10px",
              textAlign: "center",
              border: "1px solid black",
            }}
          >
            <h3>{prod.title}</h3>
            <img src={prod.image} alt={prod.title} width={100} />
            <p>${prod.price.toFixed(2)}</p>
            <p>{prod.category}</p>
            <p>{prod.description.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductLisitingPageWithAsc;
