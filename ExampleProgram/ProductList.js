import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products, addToCart }) {
  return (
    <section style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {products.map(p => (
        <ProductCard
          key={p.id}
          id={p.id}
          name={p.name}
          price={p.price}
          imageUrl={p.imageUrl}
          onAddToCart={addToCart}
        />
      ))}
    </section>
  );
}
