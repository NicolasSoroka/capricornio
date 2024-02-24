import React, { useState } from "react";



const ProductGallery = () => {
  const [first, setfirst] = useState(0)


  return (
    <div className="relative flex w-full h-[500px]">
      <div className="flex flex-col gap-y-4 max-h-[600px] overflow-y-scroll items-center justify-center border-2 border-red-600 w-full max-w-[400px] py-4 ">
        <div className="w-[300px] min-h-[150px] bg-red-400"> img</div>
        <div className="w-[300px] min-h-[150px] bg-red-400"> img</div>
        <div className="w-[300px] min-h-[150px] bg-red-400"> img</div>
        <div className="w-[300px] min-h-[150px] bg-red-400"> img</div>
        <div className="w-[300px] min-h-[150px] bg-red-400"> img</div>
        <div className="w-[300px] min-h-[150px] bg-red-400"> img</div>
        <div className="w-[300px] min-h-[150px] bg-red-400"> img</div>
      </div>
      <div className="flex items-center justify-center border-2 border-red-600 w-full">
        {first}
      </div>
      <div className="flex flex-col gap-y-4 max-h-[600px] overflow-y-scroll items-center justify-center border-2 border-red-600 w-full max-w-[400px] py-4  ">
        <div className="w-[300px] min-h-[150px] bg-red-400"> img</div>
        <div className="w-[300px] min-h-[150px] bg-red-400"> img</div>
        <div className="w-[300px] min-h-[150px] bg-red-400"> img</div>
        <div className="w-[300px] min-h-[150px] bg-red-400"> img</div>
        <div className="w-[300px] min-h-[150px] bg-red-400"> img</div>
        <div className="w-[300px] min-h-[150px] bg-red-400"> img</div>
      </div>
    </div>
  );
};

export default ProductGallery;
