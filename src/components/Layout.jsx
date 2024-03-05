import { Link, ScrollRestoration } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import ContactButton from "./ContactButton";
import Footer from "./Footer";
import WhatsappButton from "./WhatsappButton";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-lvh">
      <header className="fixed md:hidden flex flex-col w-full h-[230px] bg-white items-center py-8 gap-y-6 z-50">
        <Link
          className="text-sm font-extrabold uppercase tracking-widest"
          to="/"
        >
          <img src="../../public/logo.webp" alt="logo_capricornio" />
        </Link>
        <div className="flex w-full items-center">
          <span className="flex w-1/3"></span>
          <span className="flex flex-col items-center w-1/3 gap-y-2">
            <ContactButton />
          </span>
        </div>
        <BurgerMenu />
      </header>

      <header className="hidden md:flex md:fixed h-[100px] z-50 w-full bg-white items-center justify-evenly">
        <div className="flex w-full justify-center">
          <ContactButton />
        </div>
        <div className="flex w-full justify-center">
          <img
            src="../../public/logo.webp"
            alt="logo_capricornio"
            className=""
          />
        </div>
        <div className="flex w-full justify-center">
          <BurgerMenu />
        </div>
      </header>

      <main className="relative mt-[230px] md:mt-[100px] w-full">
        {children}
      </main>
      <Footer />
      <WhatsappButton />
      <ScrollRestoration />
    </div>
  );
};

export default Layout;
