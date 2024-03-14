import ProductGallery from '../components/ProductGallery'
import MobileGallery from '../components/MobileGallery'
import { useState } from 'react'

const ProductsPage = () => {
  const [filter, setFilter] = useState(1)

  const onChange = event => {
    const value = event.target.value
    setFilter(value)
  }

  return (
    <>
      <div className='flex w-full pb-2'>
        <select
          onChange={onChange}
          className='w-auto p-2 m-auto text-xl rounded-md items-center justify-center outline-none border '
        >
          <option defaultChecked disabled>
            Seleccione filtro
          </option>
          <option value='1'>Algodón</option>
          <option value='2'>Algodón/Elastano</option>
          <option value='3'>Algodón/Elastano/Poliester</option>
          <option value='4'>Gabardinas</option>
        </select>
      </div>
      <MobileGallery filter={filter} />
      <ProductGallery filter={filter} />
    </>
  )
}

export default ProductsPage
