import { useForm } from 'react-hook-form'

const ContactForm = () => {
  const {register, handleSubmit, formState: { errors }} = useForm()
  console.log("🚀 ~ ContactForm ~ errors:", errors)

  const onSubmit = async data => {
    try {
      const response = await fetch('./sendEmail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        // Aquí puedes manejar la respuesta exitosa, si lo necesitas
        console.log('Correo enviado exitosamente')
      } else {
        // Aquí puedes manejar el caso en el que no se pudo enviar el correo
        console.error('Hubo un problema al enviar el correo')
      }
    } catch (error) {
      console.error('Hubo un error al enviar el correo:', error)
    }
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      action='/action_page.php'
      className='flex flex-col w-full px-6 font-sans font-bold tracking-wider md:max-w-[700px]'
    >
      <label
        className='mb-3 text-sm font-extrabold tracking-widest'
        htmlFor='name'
      >
        Nombre
      </label>
      <input
        className='pl-4 pb-2 mb-4 border-b-slate-400 border-b-2 outline-none'
        type='text'
        placeholder='Por exemplo: Julia'
        {...register('First name', { required: true, maxLength: 80 })}
      />
      <label
        className='mb-3 text-sm font-extrabold tracking-widest'
        htmlFor='lastname'
      >
        Apellido
      </label>
      <input
        className='pl-4 pb-2 mb-4 border-b-slate-400 border-b-2 outline-none'
        type='text'
        placeholder='Apellido'
        {...register('Last name', { required: true, maxLength: 100 })}
      />
      <label
        className='mb-3 text-sm font-extrabold tracking-widest'
        htmlFor='email'
      >
        Email
      </label>
      <input
        className='pl-4 pb-2 mb-4 border-b-slate-400 border-b-2 outline-none'
        type='text'
        placeholder='Email'
        {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
      />
      <label
        className='mb-2 text-sm font-extrabold tracking-widest'
        htmlFor='phone'
      >
        Numero de telefono
      </label>
      <input
        className='pl-4 pb-2 mb-4 border-b-slate-400 border-b-2 outline-none'
        type='tel'
        placeholder='Numero de telefono'
        {...register('Mobile number', {
          required: true,
          minLength: 6,
          maxLength: 12
        })}
      />
      <label
        className='mb-3 text-sm font-extrabold tracking-widest'
        htmlFor='rubro'
      >
        Rubro
      </label>
      <select
        className='pl-4 pb-2 mb-4 border-b-slate-400 border-b-2 outline-none'
        {...register('Rubro')}
      >
        <option value='Comercial'>Comercial</option>
        <option value='Financiero'>Financiero</option>
        <option value='Industria'>Industria</option>
        <option value='Marketing'>Marketing</option>
        <option value='RRHH'>RRHH</option>
        <option value='Tecnologia'>Tecnologia</option>
        <option value='Otros'>Otros</option>
      </select>
      <label
        className='mb-2 text-sm font-extrabold tracking-widest'
        htmlFor='message'
      >
        Mensaje
      </label>
      <textarea
        rows='4'
        {...register}
        className='outline-none border-b-2 border-b-slate-400'
      />

      <input
        type='submit'
        value='enviar'
        className='w-[80%] m-auto bg-black text-white h-[50px] uppercase tracking-widest mt-6 md:max-w-[200px]'
      />
    </form>
  )
}

export default ContactForm
