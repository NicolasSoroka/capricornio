import React, { useEffect, useState } from "react";
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

  const [isActive, setIsActive] = useState(0);

  useEffect(() => {
    products.forEach((picture) => {
      const img = new Image();
      img.src = picture.articulo;
    });
  }, []);

  return (
    <div className="relative w-full h-[calc(100vh-100px)] hidden md:flex">
      <ul className="flex flex-col gap-y-4 overflow-y-scroll custom-scrollbar items-center bg-[#D9D9D9] w-full max-w-[400px] py-8 ">
        {products.map((element, index) => {
          if (index > products.length / 2) return;
          else {
            return (
              <Muestra
                src={element.muestra}
                alt={element.alt}
                name={element.titulo}
                key={element.name}
                pos={index}
                isActive={isActive === index}
                onClick={() => {
                  setIsActive(index);
                  setSelectedProduct(element);
                }}
              />
            );
          }
        })}
      </ul>
      <Articulo product={selectedProduct} />
      <ul className="flex flex-col gap-y-4 overflow-y-scroll custom-scrollbar items-center bg-[#D9D9D9] w-full max-w-[400px] py-8 scrollbar-left-container ">
        {products.map((element, index) => {
          if (index <= products.length / 2) return;
          else {
            return (
              <Muestra
                src={element.muestra}
                alt={element.alt}
                name={element.titulo}
                key={element.name}
                pos={index - products.length / 2 - 1}
                isActive={isActive === index}
                onClick={() => {
                  setIsActive(index);
                  setSelectedProduct(element);
                }}
              />
            );
          }
        })}
      </ul>
    </div>
  );
};

export default ProductGallery;
