import React from "react";
import ProductDetail from "./ProductDetail";

const Articulo = ({ product }) => {
  console.log(product);
  return (
    <div className="flex w-full h-full items-center justify-center flex-col py-4 gap-y-4 bg-[#D9D9D9]">
      <h2>{product.titulo}</h2>
      <img
        className="object-contain w-full h-[400px]"
        src={product.articulo}
        alt={product.alt}
      />
      <ProductDetail />
    </div>
  );
};

export default Articulo;
