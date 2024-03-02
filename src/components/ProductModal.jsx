import { motion } from "framer-motion";

import ProductDetail from "./ProductDetail";

const ProductModal = ({ article, handleClose }) => {
  return (
    <div
      onClick={() => handleClose()}
      className="flex w-full items-center fixed top-0 justify-center flex-col py-4 gap-y-4 h-full z-50 bg-[#D9D9D9] "
    >
      <h2 className="text-3xl border-b border-black">{article.titulo}</h2>
      <motion.img
        className="object-contain w-full h-[400px]"
        src={article.articulo}
        alt={article.alt}
        key={article.name}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <ProductDetail details={article} />
    </div>
  );
};

export default ProductModal;
