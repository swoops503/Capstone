import React, { useState, useEffect } from 'react';

export function CartComponent() {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/carts/5')
      .then(res => res.json())
      .then(json => {
        if (Array.isArray(json)) {
          setCartData(json); // If json is an array, set it as is
        } else {
          setCartData([json]); // If json is an object, convert it to an array
        }
      });
  }, []);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartData.map(cart => (
        <div key={cart.id}>
          {cart.products.map(product => (
            <div key={product.productId}>
              <p>Product ID: {product.productId}</p>
              <p>Quantity: {product.quantity}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
