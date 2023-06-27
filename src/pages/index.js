import InputFile from "@/components/InputFile";
import SEO from "@/components/SEO";
import SearchFile from "@/components/SearchFile";
import Table from "@/components/Table";
import clsx from "clsx";
import React, { useState } from "react";

export default function Example() {
  const [items, setItems] = useState([]);
  const [itemsFull, setItemsFull] = useState([]); // <-- add this line

  const FilterData = (e) => {
    const value = e.target.value;
    if (value === " " || value === "") {
      e.target.value = "";
      e.target.focus();
      return;
    }

    const filterData = itemsFull.filter((item) => {
      let isMatch = false;
      Object.keys(item).forEach((key) => {
        if (item[key].toString().toLowerCase().includes(value.toLowerCase())) {
          isMatch = true;
        }
      });
      return isMatch;
    });
    setItems(filterData);
  };

  return (
    <div className="bg-white pb-10">
      <SEO
        title="Filtrar datos de hojas de cálculo de Excel"
        description="Sube tu archivo Excel y filtra los datos de cualquier columna usando el buscador de excel. Funciona para cualquier archivo de Excel y NO guarda los datos en ningún servidor."
        pinColor={"#000000"}
        image={"https://filtrar-excel.vercel.app//og-image.png"}
        url={"https://filtrar-excel.vercel.app/"}
      />
      <div
        className={`py-5 w-8/12 mx-auto  flex ${clsx(
          itemsFull.length < 1
            ? "justify-center items-center flex-col h-screen"
            : "justify-between flex-row "
        )}`}
      >
        {itemsFull.length < 1 && (
          <>
            <h1 className="text-5xl font-bold">
              Filtra los datos de cualquier archivo Excel
            </h1>
            <p className="child:font-bold w-8/12 text-center mt-2 mb-5 text-xl">
              Sube tu archivo Excel y filtra los datos de{" "}
              <b>cualquier columna</b> usando el <b>buscador de excel</b>.
              Funciona para cualquier archivo de Excel y{" "}
              <span>NO guarda los datos en ningún servidor.</span>
            </p>
            <InputFile setItems={setItems} setItemsFull={setItemsFull} />
          </>
        )}
        {itemsFull.length > 0 && (
          <div className="flex flex-col lg:flex-row justify-between w-full gap-8">
            <SearchFile FilterData={FilterData} />
            <button
              onClick={() => {
                setItems([]);
                setItemsFull([]);
              }}
              type="button"
              className="bg-blue-600 whitespace-nowrap text-white rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer transition-all duration-200 ease-in-out px-2 py-1 text-md"
            >
              Subir otro archivo
            </button>
          </div>
        )}
      </div>

      <Table items={items} />
    </div>
  );
}
