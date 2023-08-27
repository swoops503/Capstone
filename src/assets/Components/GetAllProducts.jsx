import React, { useState, useEffect } from "react";

export const GetAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleShowDetails = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <div className="productsdiv">
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} style={{ maxWidth: "300px" }}/>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <button onClick={() => handleShowDetails(product)}>See Details</button>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <div className="selected-product">
          <h2>{selectedProduct.title}</h2>
          <img src={selectedProduct.image} alt={selectedProduct.title} style={{ maxWidth: "400px" }}/>
          <p>{selectedProduct.description}</p>
          <p>Price: ${selectedProduct.price}</p>
          <p>Category: {selectedProduct.category}</p>
        </div>
      )}
    </div>
  );
};
