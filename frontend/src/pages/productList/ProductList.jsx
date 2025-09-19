import { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProduts] = useState([]);
  useEffect(() => {
    async function fetchProductData() {
      const cartRes = await fetch("https://fakestoreapi.com/carts/2");
      const cartData = await cartRes.json();

      const detailedProducts = await Promise.all(
        cartData.products.map(async (item) => {
          const ProductRes = await fetch(
            `https://fakestoreapi.com/products/${item.productId}`
          );
          const productData = await ProductRes.json();

          return { ...productData, quantity: item.quantity };
        })
      );

      setProduts(detailedProducts);
    }
    fetchProductData();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((prod) => (
          <div key={prod.id} style={{ border: "1px solid black", margin: 10 }}>
            <img src={prod.image} alt={prod.title} style={{ height: 100 }} />
            <h3>{prod.title}</h3>
            <p>Price: ${prod.price}</p>
            <p>Quantity: {prod.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductList;
