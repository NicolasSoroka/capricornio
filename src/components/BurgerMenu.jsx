import { useState } from "react";
import menu from "../../public/menu.svg";
import { Link } from "react-router-dom";
import useEscapeKey from "../hooks/useEscapeKey";

const BurgerMenu = ({ isMenuOpen }) => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsBurgerMenuOpen((prev) => !prev);
  };

  useEscapeKey(() => setIsBurgerMenuOpen(false));

  return (
    <>
      <div
        className={`absolute left-0 flex justify-center items-center z-50 w-full h-dvh bg-slate-500 opacity-90 transition-all duration-700
          ${isBurgerMenuOpen ? "top-0" : "-top-[1000px]"}`}
      >
        <span
          onClick={handleMenuOpen}
          className="absolute top-0 right-2 font-bold text-2xl text-slate-900 p-4 cursor-pointer"
        >
          x
        </span>
        <ul className="flex flex-col text-center text-white font-bold uppercase gap-y-2 ">
          <li className="hover:text-slate-800" onClick={handleMenuOpen}>
            <Link className="px-4 py-2" to="/">Home</Link>
          </li>
          <li className="hover:text-slate-800" onClick={handleMenuOpen}>
            <Link className="px-4 py-2" to="/nosotros">Quiénes somos</Link>
          </li>
          <li className="hover:text-slate-800" onClick={handleMenuOpen}>
            <Link className="px-4 py-2" to="/productos">Productos</Link>
          </li>
          <li className="hover:text-slate-800" onClick={handleMenuOpen}>
            <Link className="px-4 py-2" to="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>

      <button onClick={handleMenuOpen} className="w-12 h-12">
        <img src={menu} alt="menu_icon" />
      </button>
    </>
  );
};

export default BurgerMenu;
