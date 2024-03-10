import { Link, ScrollRestoration, useLocation } from 'react-router-dom'
import BurgerMenu from './BurgerMenu'
import ContactButton from './ContactButton'
import Footer from './Footer'
import WhatsappButton from './WhatsappButton'

const Layout = ({ children }) => {
  const location = useLocation()
  let index = ''

  if (location.pathname === '/productos') {
    index = 'z-auto'
  } else {
    index = 'z-40'
  }

  return (
    <div className='flex flex-col w-full h-lvh'>
      <header
        className={`fixed md:hidden flex flex-col gap-y-2 pt-4 w-full bg-white items-center ${index}`}
      >
        <Link
          className='text-sm font-extrabold uppercase tracking-widest'
          to='/'
        >
          <img src='../../public/logo.webp' alt='logo_capricornio' />
        </Link>
        <ContactButton />
        <BurgerMenu />
      </header>

      <header className='hidden md:flex md:fixed h-[100px] z-50 w-full bg-white items-center justify-evenly'>
        <div className='flex w-full justify-center'>
          <ContactButton />
        </div>
        <Link
          className='flex justify-center w-full text-sm font-extrabold uppercase tracking-widest'
          to='/'
        >
          <img src='../../public/logo.webp' alt='logo_capricornio' />
        </Link>
        <div className='flex w-full justify-center'>
          <BurgerMenu />
        </div>
      </header>

      <main className='relative md:mt-[100px] w-full'>{children}</main>
      <Footer />
      <WhatsappButton />
      <ScrollRestoration />
    </div>
  )
}

export default Layout
