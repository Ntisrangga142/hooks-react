import React from "react";

function Cart({index, title, qty, src, event}) {
  return (
    <>
      <div className="w-full flex flex-row px-[130px]" key={index}>
        <h1 className="text-black mr-[25px]">
          {`${title} = ${qty}`}
        </h1>
        <div onClick={() => {event(index)}} className="cursor-pointer bg-blue">
          <img src={src} alt={"min-icon"} />
        </div>  
      </div>
    </>
  );
}

export default Cart;
