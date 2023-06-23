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
    if (value === "") {
      setItems(itemsFull);
      return;
    }

    const filterData = items.filter((item) => {
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
    <div className="bg-white">
      <SEO
        title="Filtrar datos de hojas de cálculo de Excel"
        description="Sube tu archivo Excel y filtra los datos de cualquier columna usando el buscador de excel. Funciona para cualquier archivo de Excel y NO guarda los datos en ningún servidor."
        pinColor={"#000000"}
        image={"https://filtrar-excel.vercel.app//og-image.png"}
        url={"https://filtrar-excel.vercel.app/"}
      />
      <div
        className={`py-5 w-8/12 mx-auto  flex ${clsx(
          items.length < 1
            ? "justify-center items-center flex-col h-screen"
            : "justify-between flex-row "
        )}`}
      >
        {items.length < 1 && (
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

        {items.length > 0 && <SearchFile FilterData={FilterData} />}
      </div>

      <Table items={items} />
    </div>
  );
}
