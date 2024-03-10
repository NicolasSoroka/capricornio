import igLogo from '../../public/ig.svg'
import fbLogo from '../../public/fb.svg'
import ytLogo from '../../public/yt.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-center w-full h-[200px] p-4 pt-6 gap-y-4 bg-slate-400 text-white '>
      <div className='flex w-full items-center justify-center'>
        <div className='flex flex-col w-full uppercase font-bold gap-y-1 text-xs tracking-widest'>
          <Link to={'/'}>home</Link>
          <Link to={'/productos'}>productos</Link>
        </div>

        <div className='flex gap-x-3 w-full '>
          <span className='flex justify-center items-center bg-white rounded-full w-[30px] h-[30px]'>
            <img src={igLogo} alt='ig' className='w-[18px] h-[18px]' />
          </span>
          <span className='flex justify-center items-center pt-2 bg-white rounded-full w-[30px] h-[30px]'>
            <img src={fbLogo} alt='ig' className='w-[24px] h-[24px]' />
          </span>
          <span className='flex justify-center items-center bg-white rounded-full w-[30px] h-[30px]'>
            <img src={ytLogo} alt='ig' className='w-[18px] h-[18px]' />
          </span>
        </div>

        <div className='text-right flex flex-col uppercase font-bold gap-y-1 text-xs tracking-widest w-full '>
          <Link to={'/contacto'}>contacto</Link>
          <Link to={'/nosotros'}>quienes somos</Link>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center w-full text-center text-xs'>
        <p>AV. ANGÉLICA, 2250 . 9º ANDAR . SÃO PAULO, BRASIL</p>
        <p>© 2023 TODOS LOS DERECHOS RESERVADOS</p>
      </div>
    </footer>
  )
}

export default Footer
