import React from 'react'


const Muestra = ({ name, src, alt, onClick, isActive }) => {
  return (
    <li className={`cursor-pointer ${isActive ? 'outline-dashed outline-2 outline-offset-2' : '' }`} onClick={onClick}>
      <img className="w-[200px] min-h-[100px]" alt={alt} src={src} key={name} loading='lazy'/>
    </li>
  )
}

export default Muestra