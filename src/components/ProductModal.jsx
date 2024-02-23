//crear un json con los valores de cada modal, cada elemento se selecciona por el id

const ProductModal = ({ value, handleClose }) => {
  return (
    <div onClick={() => handleClose()} className="flex items-center fixed top-0 w-full h-screen z-50 bg-white opacity-80">
      <div className="relative bg-black h-[400px] w-full mx-4 p-4">
        <h2 className="text-white">el modal mostrado es {value}</h2>
        {/* <button
          className="absolute right-2 top-0 flex items-center justify-center text-white font-bold text-2xl p-2"
          onClick={() => handleClose()}
        >
          X
        </button> */}
      </div>
    </div>
  );
};

export default ProductModal;
