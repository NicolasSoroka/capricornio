const TextBlock = () => {
  return (
    <div className="md:overflow-hidden flex flex-col md:flex-row justify-center items-center md:items-start p-10 gap-y-8 md:my-20 md:p-0">
      <div className="text-3xl md:text-[39px] font-semibold md:font-bold md:tracking-widest text-slate-500 leading-none">
        <h2 className="relative -left-4">_denim com</h2>
        <h2 className="relative left-16">verdade</h2>
      </div>

      <div>
        <h2 className="text-2xl font-bold md:font-extrabold md:text-[25px] text-slate-700 md:tracking-widest">
          Olá, somos
        </h2>
        <h2 className="text-2xl font-bold md:font-extrabold md:text-[25px] text-slate-700 md:tracking-widest">
          a Capricórnio
        </h2>
        <p className="text-xl font-semibold text-slate-400 w-[280px] md:w-[320px] mt-2 md:text-[19px] md:font-extrabold md:tracking-widest">
          e produzimos o Denim, que e a materia-prima do grande representante da
          moda da vida real, o Jeans
        </p>
      </div>
      <img
        src="./home/logocapri.webp"
        alt="logo_watermark"
        className="absolute w-[810px] h-[800px] z-10 top-[480px] -right-[440px]"
      />
    </div>
  );
};

export default TextBlock;
