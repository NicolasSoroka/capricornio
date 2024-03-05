import igLogo from "../../public/ig.svg";
import fbLogo from "../../public/fb.svg";
import ytLogo from "../../public/yt.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="flex md:hidden flex-col w-full h-[200px] justify-center p-8 bg-slate-400">
        <div className="flex justify-between uppercase text-xs font-bold text-white tracking-widest">
          <div className="flex flex-col text-left gap-y-3">
            <p>home</p>
            <p>productos</p>
            <p>sustent</p>
            <p>quienes somos</p>
            <div className="flex gap-x-3 w-full justify-end">
              <span className="flex justify-center items-center bg-white rounded-full w-[30px] h-[30px]">
                <img src={igLogo} alt="ig" className="w-[18px] h-[18px]" />
              </span>
              <span className="flex justify-center items-center pt-2 bg-white rounded-full w-[30px] h-[30px]">
                <img src={fbLogo} alt="ig" className="w-[24px] h-[24px]" />
              </span>
              <span className="flex justify-center items-center bg-white rounded-full w-[30px] h-[30px]">
                <img src={ytLogo} alt="ig" className="w-[18px] h-[18px]" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex w-full h-[180px] justify-center items-center gap-x-20 bg-slate-400">
        <div className="flex flex-col gap-y-2 text-left uppercase text-xs font-bold text-white tracking-widest">
          <Link to={'/'}>home</Link>
          <Link to={'/productos'}>productos</Link>
        </div>
        <div className="flex gap-x-3">
          <span className="flex justify-center items-center bg-white rounded-full w-[30px] h-[30px]">
            <img src={igLogo} alt="ig" className="w-[18px] h-[18px]" />
          </span>
          <span className="flex justify-center items-center pt-2 bg-white rounded-full w-[30px] h-[30px]">
            <img src={fbLogo} alt="ig" className="w-[24px] h-[24px]" />
          </span>
          <span className="flex justify-center items-center bg-white rounded-full w-[30px] h-[30px]">
            <img src={ytLogo} alt="ig" className="w-[18px] h-[18px]" />
          </span>
        </div>
        <div className="flex flex-col gap-y-2 text-right uppercase text-xs font-bold text-white tracking-widest">
          <Link to={'/contacto'}>contacto</Link>
          <Link to={'/nosotros'}>quienes somos</Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full h-[70px] md:h-[50px] text-center text-xs gap-y-1">
        <p>AV. ANGÉLICA, 2250 . 9º ANDAR . SÃO PAULO, BRASIL</p>
        <p>© 2023 TODOS OS DIREITOS RESERVADOS</p>
      </div>
    </footer>
  );
};

export default Footer;
