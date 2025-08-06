import React from "react";

function ProductCard({ path, alt, title, harga, event, index}) {
  // console.log(title);

  return (
    <>
      <section onClick={() => {event(index)}} className="group cursor-pointer w-[250px] h-full flex flex-col items-center p-[20px] border border-[#000000] rounded-2xl gap-[25px] hover:bg-radial-[at_25%_25%] hover:from-white hover:to-zinc-900 hover:to-75% hover:text-[#FFFFFF]">
        <div>
          <img src={path} alt={alt} className="w-[200px] group-hover:opacity-[40%] rounded-2xl"/>
        </div>
        <div className="flex flex-col gap-[10px] ">
          <h1 className="font-normal text-2xl">{title}</h1>
          <h2 className="font-bold text-2xl">{harga}</h2>
        </div>
      </section>
    </>
  );
}

export default ProductCard;
