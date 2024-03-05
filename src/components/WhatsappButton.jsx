import wspLogo from "../../public/wsp_logo.svg";
import { motion } from "framer-motion";

const WhatsappButton = () => {
  const handleWsp = () => {
    window.open('https://wa.link/b87i6c', '_blank')
  }

  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5}}
      className="fixed z-40 bottom-4 right-4 flex justify-center items-center w-[60px] h-[60px] rounded-full bg-green-400 cursor-pointer"
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.9 }}
      onClick={() => handleWsp()}
    >
      <img className="w-[35px] h-[35px]" src={wspLogo} alt="whatsapp_logo" />
    </motion.div>
  );
};

export default WhatsappButton;
