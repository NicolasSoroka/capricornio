import ContactButton from "./ContactButton";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-lvh">
      <header className="flex flex-col justify-center items-center py-6 gap-y-8">
        <img src="../../public/logo.webp" alt="logo_capricornio" />
        <ContactButton/>
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
