import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col w-full px-6 py-10 gap-y-4 border-2 border-green-500">
        <div className="flex justify-between border-2 border-yellow-400">
          <div className="flex flex-col gap-y-2 text-left border border-red-500">
            <p>home</p>
            <p>productos</p>
          </div>
          <div className="flex flex-col gap-y-2 text-right border border-blue-400">
            <p>sustent</p>
            <p>quienes somos</p>
          </div>
        </div>
        <div className="flex gap-x-3 w-full justify-center border-2 border-pink-500">
          <img src="./" alt="ig" className="bg-slate-500 w-[30px] h-[30px] rounded-full"/>
          <img src="./" alt="ig" className="bg-slate-500 w-[30px] h-[30px] rounded-full"/>
          <img src="./" alt="ig" className="bg-slate-500 w-[30px] h-[30px] rounded-full"/>
          <img src="./" alt="ig" className="bg-slate-500 w-[30px] h-[30px] rounded-full"/>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full h-[120px] border-2 border-purple-800">
        <p className="text-sm max-w-[300px] text-center">AV. ANGÉLICA, 2250 . 9º ANDAR . SÃO PAULO, BRASIL</p>
        <p className="text-sm max-w-[300px] text-center">© 2023 TODOS OS DIREITOS RESERVADOS</p>
      </div>
    </footer>
  );
};

export default Footer;
