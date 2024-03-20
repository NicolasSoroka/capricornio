import ContactForm from "../components/ContactForm";

import { Resend } from 'resend';
// import Email from "../components/email";
// import { Email } from './email';


const ContactPage = () => {

  const resend = new Resend('re_123456789');

  const handleSend = async () => {
    await resend.emails.send({
      from: 'you@example.com',
      to: 'sorokanicolas@gmail.com',
      subject: 'hello world',
      // react: <Email url="https://example.com" />,
      react: <h2>Test del mail</h2>,
    });
  }

  return (
    <div className="flex flex-col items-center justify-center w-full gap-y-4 py-6">
      <img
        src="/assets/contact/contacto.webp"
        alt="hero"
        className="w-full h-[230px] md:h-[800px] md:object-cover"
      />

      <h2 className="w-full px-6 text-2xl font-bold tracking-widest text-[#AAA55B]">
        Contactanos!
      </h2>

      <p className="px-6 text-left text-xl">Escribenos y en la brevedad un asesor se pondra en contacto.</p>

      {/* <ContactForm /> */}

      <button onClick={() => handleSend()}>
        handleSend
      </button>
    </div>
  );
};

export default ContactPage;
