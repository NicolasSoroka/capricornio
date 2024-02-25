import React from "react";
import ProductDetail from "./ProductDetail";
import { motion } from "framer-motion";

const Articulo = ({ product }) => {
  return (
    <div className="flex w-full h-full items-center justify-center flex-col py-4 gap-y-4 bg-[#D9D9D9] ">
      <h2 className="text-3xl font-semibold font-didot">{product.titulo}</h2>
      <motion.img
        className="object-contain w-full h-[400px]"
        src={product.articulo}
        alt={product.alt}
        key={product.name}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <ProductDetail details={product} />
    </div>
  );
};

export default Articulo;
