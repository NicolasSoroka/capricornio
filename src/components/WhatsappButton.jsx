import wspLogo from '../../public/wsp_logo.svg'
import { motion } from "framer-motion"

const WhatsappButton = () => {
  return (
    <motion.div
      className='fixed bottom-4 right-4 flex justify-center items-center w-[60px] h-[60px] rounded-full bg-green-400'
      whileHover={{
        scale: 1.05 ,
        transition: { duration: 0.2 },
      }}
      >
      <img 
        className='w-[35px] h-[35px]' 
        src={wspLogo} 
        alt="whatsapp_logo" />
    </motion.div>
  )
}

export default WhatsappButton