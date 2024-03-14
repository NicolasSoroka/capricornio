import React, { useEffect, useState } from 'react'
import products from 'assets/products/data.json'
import Muestra from 'src/components/Muestra'
import Articulo from 'src/components/Articulo'

const ProductGallery = ({filter}) => {
  console.log("🚀 ~ ProductGallery ~ filter:", filter)
  const [selectedProduct, setSelectedProduct] = useState({
    name: 'ALGARVE_LIGHT',
    articulo: 'src/assets/products/articulos/ALGARVE_LIGHT.png',
    muestra: 'src/assets/products/muestras/ALGARVE_LIGHT.png',
    titulo: 'Algarve Light',
    oz: '100% CO',
    desc: '10 oz / 3x1 / 1.75m útil',
    color: 'Intense Blue'
  })

  const filteredProducts = products.filter( item => item.category === Number(filter))
  const [isActive, setIsActive] = useState(0)

  return (
    <div className='relative w-full justify-between h-[calc(100vh-100px)] max-h-[calc(100vh-100px)] hidden md:flex bg-[#E1E1E1] overflow-y-hidden'>
      <ul className='flex flex-col gap-y-4 overflow-y-scroll custom-scrollbar items-center bg-[#E1E1E1] w-full max-w-[400px] py-8 '>
        {filteredProducts.map((element, index) => {
          if (index > filteredProducts.length / 2) return
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
                  setIsActive(index)
                  setSelectedProduct(element)
                }}
              />
            )
          }
        })}
      </ul>
      <Articulo product={selectedProduct} />
      <ul className='flex flex-col gap-y-4 overflow-y-scroll custom-scrollbar items-center bg-[#E1E1E1] w-full max-w-[400px] py-8 scrollbar-left-container '>
        {filteredProducts.map((element, index) => {
          if (index <= filteredProducts.length / 2) return
          else {
            return (
              <Muestra
                src={element.muestra}
                alt={element.alt}
                name={element.titulo}
                key={element.name}
                pos={index - filteredProducts.length / 2 - 1}
                isActive={isActive === index}
                onClick={() => {
                  setIsActive(index)
                  setSelectedProduct(element)
                }}
              />
            )
          }
        })}
      </ul>
    </div>
  )
}

export default ProductGallery
