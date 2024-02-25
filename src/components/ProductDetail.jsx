import React from "react";

const ProductDetail = () => {
  return (
    <div className="flex flex-col border-l min-w-[200px] max-w-[300px]">
      <div className=" relative w-full h-full border-l-[2px] border-black">
        <p className=" pl-4 pb-1 ">Algarve Light</p>
        <p className="w-full pl-4 py-1 border-t-[2px] border-black">10 oz | 3x1 | 1,75 util</p>
        <p className="w-full pl-4 py-1 border-t-[2px] border-black">100% CO</p>
        <p className="w-full pl-4 pt-1 border-t-[2px] border-black">Intense Blue</p>
        <span className="flex rounded-full bg-black w-[7px] h-[7px] absolute -left-[4px] top-0"></span>
        <span className="flex rounded-full bg-black w-[7px] h-[7px] absolute -left-[4px] bottom-0"></span>
      </div>
    </div>
  );
};

export default ProductDetail;
