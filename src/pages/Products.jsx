import { useState } from "react";
import ProductModal from "../components/ProductModal";
import useEscapeKey from "../hooks/useEscapeKey";
import { motion, AnimatePresence } from "framer-motion";

const ProductsPage = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [modalInfoValue, setModalInfoValue] = useState(null);
  useEscapeKey(() => setIsModalShown(false));

  const handleModal = (id) => {
    setIsModalShown((prev) => !prev);
    setModalInfoValue(id);
  };

  return (
    <>
      <ul className="flex flex-col gap-y-8 px-8 pb-8 w-full">
        <li
          className="w-full cursor-pointer h-[150px] bg-black"
          onClick={() => handleModal(0)}
        ></li>
        <li
          className="w-full cursor-pointer h-[150px] bg-black"
          onClick={() => handleModal(1)}
        ></li>
        <li
          className="w-full cursor-pointer h-[150px] bg-black"
          onClick={() => handleModal(2)}
        ></li>
        <li
          className="w-full cursor-pointer h-[150px] bg-black"
          onClick={() => handleModal(3)}
        ></li>
        <li
          className="w-full cursor-pointer h-[150px] bg-black"
          onClick={() => handleModal(4)}
        ></li>
        <li
          className="w-full cursor-pointer h-[150px] bg-black"
          onClick={() => handleModal(5)}
        ></li>
      </ul>

      <AnimatePresence>
        {isModalShown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ProductModal value={modalInfoValue} handleClose={handleModal} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductsPage;
