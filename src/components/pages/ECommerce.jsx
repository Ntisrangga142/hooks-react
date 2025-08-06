import { useState } from "react";

import indomie1 from "/Product/Indomie-AyamBawang.jpg";
import indomie2 from "/Product/Indomie-AyamGeprek.jpg";
import indomie3 from "/Product/Indomie-Goreng-Aceh.jpg";
import indomie4 from "/Product/Indomie-Jumbo-Goreng.jpg";
import indomie5 from "/Product/Indomie-Jumbo-Rendang.jpg";
import indomie6 from "/Product/Indomie-Rendang.jpg";

import minIcon from "/Icon/minus-circle.svg";

import ProductCard from "../organisms/Ecommerce/ProductCard.jsx";
import Cart from "../organisms/Ecommerce/Cart.jsx";
import Header from "../templates/Header.jsx";

function ECommerce() {
  const product = [
    {
      path: indomie1,
      alt: "Indomie Ayam Bawang",
      title: "Indomie Ayam Bawang",
      harga: "Rp 3.100",
      qty: 0,
    },
    {
      path: indomie2,
      alt: "Indomie Ayam Geprek",
      title: "Indomie Ayam Geprek",
      harga: "Rp 3.100",
      qty: 0,
    },
    {
      path: indomie3,
      alt: "Indomie Goreng Aceh",
      title: "Indomie Goreng Aceh",
      harga: "Rp 3.100",
      qty: 0,
    },
    {
      path: indomie4,
      alt: "Indomie Jumbo Goreng",
      title: "Indomie Jumbo Goreng",
      harga: "Rp 3.100",
      qty: 0,
    },
    {
      path: indomie5,
      alt: "Indomie Jumbo Rendang",
      title: "Indomie Jumbo Rendang",
      harga: "Rp 3.100",
      qty: 0,
    },
    {
      path: indomie6,
      alt: "Indomie Rendang",
      title: "Indomie Rendang",
      harga: "Rp 3.100",
      qty: 0,
    },
  ];

  const [value, setValue] = useState(product);

  const Plus = (index) => {
    setValue((prev) => {
      const data = [...prev];
      data[index] = { ...data[index], qty: data[index].qty + 1 };
      return data
    });
  };

  const Min = (index) => {
    setValue((prev) => {
      const data = [...prev];
      if (data[index].qty > 0) {
        data[index] = { ...data[index], qty: data[index].qty - 1 };
      }
      return data;
    });
  };

  return (
    <>
      <Header />
      <main className="grid grid-cols-6 grid-rows-1 px-[130px] gap-[20px] my-[50px]">
        {value.map((data, idx) => {
          return (
            <div className="flex justify-center" key={idx}>
              <ProductCard path={data.path} alt={data.alt} title={data.title} harga={data.harga} event={() => Plus(idx)} index={idx} />
            </div>
          );
        })}
      </main>
      <div className="w-full">
        {value.map((data, idx) => {
          if (data.qty === 0) return null;

          return (
            <>
              <Cart key={idx} index={idx} title={data.title} qty={data.qty} src={minIcon} event={() => Min(idx)} />
            </>
          );

        })}
      </div>
    </>
  );
}

export default ECommerce;
