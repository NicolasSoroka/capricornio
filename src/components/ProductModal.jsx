//crear un json con los valores de cada modal, cada elemento se selecciona por el id

const ProductModal = ({ value }) => {
  return <div className="absolute top-0 w-full h-screen z-50 bg-slate-400 opacity-80">el modal mostrado es {value}</div>;
};

export default ProductModal;
