import { useState } from "react";
import ProductModal from "../components/ProductModal";
import useEscapeKey from "../hooks/useEscapeKey";

const ProductsPage = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [modalInfoValue, setModalInfoValue] = useState(null)
  useEscapeKey(() => setIsModalShown(false))

  const handleModal = (id) => {
    setIsModalShown( prev => !prev)
    setModalInfoValue(id)
  }

  return (
    <>
      <ul className="flex flex-col gap-y-8 p-8 w-full border-2 border-blue-600">
        <li className="w-full cursor-pointer h-[150px] bg-black" onClick={() => handleModal(0)}></li>
        <li className="w-full cursor-pointer h-[150px] bg-black" onClick={() => handleModal(1)}></li>
        <li className="w-full cursor-pointer h-[150px] bg-black" onClick={() => handleModal(2)}></li>
        <li className="w-full cursor-pointer h-[150px] bg-black" onClick={() => handleModal(3)}></li>
        <li className="w-full cursor-pointer h-[150px] bg-black" onClick={() => handleModal(4)}></li>
        <li className="w-full cursor-pointer h-[150px] bg-black" onClick={() => handleModal(5)}></li>
      </ul>

      {isModalShown && <ProductModal value={modalInfoValue}/>}
    </>
  );
};

export default ProductsPage;
