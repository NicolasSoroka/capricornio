import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-y-4 py-4">
      <img
        src="../public/contact/contacto.webp"
        alt="hero"
        className="w-full h-[230px] md:h-[800px] md:object-cover"
      />

      <h2 className="w-full px-6 text-2xl font-bold tracking-widest text-[#AAA55B]">
        Contactanos!
      </h2>

      <ContactForm />
    </div>
  );
};

export default ContactPage;
