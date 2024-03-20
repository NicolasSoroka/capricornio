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
            Seleccione tipo
          </option>
          <option value='1'>Elastizados</option>
          <option value='2'>Rígidos</option>
          <option value='3'>Semirrígido</option>
        </select>
      </div>
      <MobileGallery filter={filter} />
      <ProductGallery filter={filter} />
    </>
  )
}

export default ProductsPage
