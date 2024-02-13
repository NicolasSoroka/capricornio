//crear un json con los valores de cada modal, cada elemento se selecciona por el id

const ProductModal = ({ value, handleClose }) => {
  return (
    <div className="fixed top-0 w-full h-screen z-50 bg-slate-400">
      <h2>el modal mostrado es {value}</h2>
      <button
        className="bg-black text-white p-8 "
        onClick={() => handleClose()}
      >
        Cerrar modal
      </button>
    </div>
  );
};

export default ProductModal;
