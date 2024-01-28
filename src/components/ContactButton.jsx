const ContactButton = ({text = 'Contacto'}) => {
  return (
    <button className="border border-black bg-white w-[115px] h-[35px] hover:bg-[#9B9B9B] transition-all duration-500	hover:border-zinc-300 hover:text-white">
      <span className="text-sm font-extrabold uppercase tracking-widest">{text}</span>
    </button>
  )
}

export default ContactButton