import React, { useState } from "react";
import products from "../../public/products/data.json";
import Muestra from "./Muestra";
import Articulo from "./Articulo";

const ProductGallery = () => {
  const [selectedProduct, setSelectedProduct] = useState({
    name: "ALGARVE_LIGHT",
    articulo: "../public/products/articulos/ALGARVE_LIGHT.png",
    muestra: "../public/products/muestras/ALGARVE_LIGHT.png",
    titulo: "Algarve Light",
    oz: "10",
    desc: "Description of Element 1",
    color: "Blue",
  });

  const [isActive, setIsActive] = useState(0)

  return (
    <div className="relative flex w-full h-[calc(100vh-100px)]">
      <ul className="flex flex-col gap-y-4 overflow-y-scroll no-scrollbar items-center bg-[#D9D9D9] w-full max-w-[400px] py-8 ">
        {products.map((element, index) => {
          if (index > products.length / 2) return;
          else {
            return (
              <Muestra
                src={element.muestra}
                alt={element.titulo}
                key={element.name}
                test={index}
                isActive={isActive === index}
                onClick={() => {
                  setIsActive(index)
                  setSelectedProduct(element)}
                }
              />
            );
          }
        })}
      </ul>
      <Articulo product={selectedProduct}/>
      <ul className="flex flex-col gap-y-4 overflow-y-scroll no-scrollbar items-center bg-[#D9D9D9] w-full max-w-[400px] py-8  ">
        {products.map((element, index) => {
          if (index <= products.length / 2) return;
          else {
            return (
              <Muestra
                src={element.muestra}
                alt={element.titulo}
                key={element.name}
                test={index}
                isActive={isActive === index}
                onClick={() => {
                  setIsActive(index)
                  setSelectedProduct(element)}
                }
              />
            );
          }
        })}
      </ul>
    </div>
  );
};

export default ProductGallery;
