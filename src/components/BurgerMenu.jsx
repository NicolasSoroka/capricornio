import { useState } from "react";
import menu from "../../public/menu.svg";


const BurgerMenu = ({ isMenuOpen }) => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  //usar el hook para checkear si es mobile y bloquear el scrolling.

  const handleMenuOpen = () => {
    setIsBurgerMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className={`absolute left-0 flex justify-center items-center z-10 w-full h-dvh   bg-slate-500 opacity-90 transition-all duration-700
          ${isBurgerMenuOpen ? "top-0" : "-top-[1000px]"}`}
      >
        <span onClick={handleMenuOpen} className="absolute top-0 right-2 font-bold text-2xl text-slate-900 p-4">x</span>
        <ul className="flex flex-col text-center text-white font-bold uppercase gap-y-2 ">
          <li className="hover:text-slate-800">Home</li>
          <li className="hover:text-slate-800">Quienes somos</li>
          <li className="hover:text-slate-800">Productos</li>
          <li className="hover:text-slate-800">Contacto</li>
        </ul>
      </div>

      <button onClick={handleMenuOpen} className="w-12 h-12">
        <img src={menu} alt="menu_icon" />
      </button>
    </>
  );
};

export default BurgerMenu;
