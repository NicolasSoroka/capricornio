import igLogo from "../../public/ig.svg";
import fbLogo from "../../public/fb.svg";
import ytLogo from "../../public/yt.svg";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col w-full h-[200px] justify-center px-8 py-8 gap-y-4 bg-slate-400">
        <div className="flex justify-between uppercase text-xs font-bold text-white tracking-widest">
          <div className="flex flex-col gap-y-2 text-left">
            <p>home</p>
            <p>productos</p>
            <p>sustent</p>
            <p>quienes somos</p>
          </div>
          {/* <div className="flex flex-col gap-y-2 text-right">
            <p>sustent</p>
            <p>quienes somos</p>
          </div> */}
        </div>
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

      <div className="flex flex-col items-center justify-center w-full h-[120px] text-center text-xs gap-y-1">
        <p>AV. ANGÉLICA, 2250 . 9º ANDAR . SÃO PAULO, BRASIL</p>
        <p>© 2023 TODOS OS DIREITOS RESERVADOS</p>
      </div>
    </footer>
  );
};

export default Footer;
