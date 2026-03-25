import React, { useState } from "react";

export default function ProductCard({ id, name, price, imageUrl, onAddToCart }) {
  const [isFav, setIsFav] = useState(false);

  function handleAdd() {
    onAddToCart({ id, name, price });
  }

  return (
    <article style={{ border: "1px solid gray", padding: "10px", margin: "10px", borderRadius: "10px" }}>
      <img src={imageUrl} alt={name} width="150" />
      <h3>{name}</h3>
      <p>₹{price}</p>
      <div>
        <button onClick={() => setIsFav(prev => !prev)}>
          {isFav ? "♥ Favorited" : "♡ Add to Favorites"}
        </button>
        <button onClick={handleAdd} style={{ marginLeft: "10px" }}>Add to Cart</button>
      </div>
    </article>
  );
}
