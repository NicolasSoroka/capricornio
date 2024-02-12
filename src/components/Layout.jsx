import BurgerMenu from "./BurgerMenu";
import ContactButton from "./ContactButton";
import Footer from "./Footer";
import WhatsappButton from "./WhatsappButton";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-lvh">
      <header className="fixed md:hidden z-10 flex flex-col w-full h-[230px] bg-white items-center py-8 gap-y-6">
        <img src="../../public/logo.webp" alt="logo_capricornio" />
        <div className="flex w-full items-center">
          <span className="flex w-1/3"></span>
          <span className="flex flex-col items-center w-1/3 gap-y-2">
            <ContactButton />
            <BurgerMenu />
          </span>
          <span className="flex w-1/3">{/* <BurgerMenu /> */}</span>
        </div>
      </header>

      <header className="hidden md:flex md:fixed h-[130px] z-10 w-full bg-white items-center justify-center">
          <span className="flex w-1/3">
            <BurgerMenu />
          </span>
          <img src="../../public/logo.webp" alt="logo_capricornio" />
          <span className="flex flex-col items-center w-1/3">
            <ContactButton />
          </span>
      </header>
      <main className="mt-[230px] md:mt-0 w-full">{children}</main>
      <Footer />

      <WhatsappButton/>
    </div>
  );
};

export default Layout;
