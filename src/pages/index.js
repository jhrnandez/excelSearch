import clsx from "clsx";
import React, { useState } from "react";
import * as XLSX from "xlsx";

export default function Example() {
  const [items, setItems] = useState([]);
  const [itemsFull, setItemsFull] = useState([]); // <-- add this line
  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, {
          type: "buffer",
        });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
    promise.then((d) => {
      setItems(d);
      setItemsFull(d); // <-- add this line
    });
  };

  const FilterData = (e) => {
    const value = e.target.value;
    if (value === "") {
      setItems(itemsFull);
      return;
    }

    const filterData = items.filter((item) => {
      let isMatch = false;
      Object.keys(item).forEach((key) => {
        if (item[key].toString().includes(value)) {
          isMatch = true;
        }
      });
      return isMatch;
    });
    setItems(filterData);
  };
  return (
    <div className="bg-white">
      <div className="py-5 w-8/12 mx-auto justify-between flex">
        <input
          type="file"
          className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
          onChange={(e) => {
            const file = e.target.files[0];
            readExcel(file);
          }}
        />
        <input
          type="text"
          id="filter"
          placeholder="Buscar datos"
          className="w-1/2 border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
          onChange={FilterData}
        />
      </div>

      <table className="text-xs font-light w-[98%] mx-auto">
        <thead>
          <tr>
            {items.length > 0 &&
              Object.keys(items[0]).map((key, index) => (
                <th className="text-sm border px-3 py-1" key={index}>
                  {key}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {items.length > 0 &&
            items.map((d, i) => (
              <tr key={i}>
                {Object.keys(items[0]).map((key, index) => (
                  <td
                    className={
                      "text-center border-r px-3 py-2 " +
                      clsx(i % 2 === 0 ? "bg-gray-100" : "bg-white")
                    }
                    key={index}
                  >
                    {d[key]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
