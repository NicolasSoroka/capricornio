const TextBlock = () => {
  return (
    <div className="flex flex-col justify-center items-center p-10 gap-y-8">
      <div className="text-3xl font-semibold text-slate-500 leading-none">
        <h2 className="relative -left-4">_denim com</h2>
        <h2 className="relative left-16">verdade</h2>
      </div>

      <div className="w-full">
        <h2 className="text-2xl font-bold text-slate-700">Hola, somos</h2>
        <h2 className="text-2xl font-bold text-slate-700"> Capricornio</h2>
        <p className="text-xl font-semibold text-slate-400 w-[280px] mt-2">
          e produzimos o Denim, que e a materia-prima do grande representante da
          moda da vida real, o Jeans
        </p>
      </div>
    </div>
  );
};

export default TextBlock;
