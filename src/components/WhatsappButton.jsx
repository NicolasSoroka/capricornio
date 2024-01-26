import React from 'react'
import wspLogo from '../../public/wsp_logo.svg'

const WhatsappButton = () => {
  return (
    <div className='flex justify-center items-center w-[65px] h-[65px] rounded-full bg-green-500'>
      <img 
        className='w-[38px] h-[38px]' 
        src={wspLogo} 
        alt="whatsapp_logo" />
    </div>
  )
}

export default WhatsappButton