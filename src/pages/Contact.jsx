import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <div>
      <img
        src="../public/contacto/contacto.webp"
        alt="hero"
        className="w-full h-[230px] md:h-[800px] md:object-cover"
      />

      <div className="flex flex-col p-8 gap-y-4">
        <h2 className="w-[50px] text-2xl font-bold tracking-widest text-[#AAA55B]">_fale conosco!</h2>

        <p className="w-[300px] text-lg font-bold text-slate-400 tracking-wider">
          Entre em contato para comprar, agendar visita ao nosso showroom, às
          nossas fábricas ou falar diretamente com um de nossos departamentos!
        </p>

        <p className="w-[300px] text-lg font-bold text-slate-400 tracking-wider" >Dúvidas, sugestões, elogios ou críticas também são bem-vindos!</p>
      </div>

      <ContactForm />
    </div>
  );
};

export default ContactPage;
