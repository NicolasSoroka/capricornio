import BurgerMenu from "./BurgerMenu";
import ContactButton from "./ContactButton";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-lvh">
      <header className="flex flex-col justify-center items-center py-6 gap-y-8">
        <img src="../../public/logo.webp" alt="logo_capricornio" />

        <div className="flex w-full items-center">
          <span className="flex w-1/3"></span>
          <span className="flex w-1/3">
            <ContactButton />
          </span>
          <span className="flex w-1/3">
            <BurgerMenu />
          </span>
        </div>
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
