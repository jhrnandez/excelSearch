import * as XLSX from "xlsx";
import { DocumentArrowUpIcon } from "@heroicons/react/24/solid";

export default function InputFile({ setItems, setItemsFull }) {
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
  return (
    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 relative">
      <div className="text-center">
        <DocumentArrowUpIcon
          className="mx-auto h-12 w-12 text-gray-300"
          aria-hidden="true"
        />
        <div className="mt-4 flex text-sm leading-6 text-gray-600">
          <label
            htmlFor="file-upload"
            className=" cursor-pointer rounded-md bg-white font-semibold text-indigo-600 hover:text-indigo-500 focus:outline-none"
          >
            <span>Sube o arrastra un archivo Excel</span>

            <input
              type="file"
              className=" border absolute inset-0 w-full h-full z-5 opacity-0 cursor-pointer"
              onChange={(e) => {
                const file = e.target.files[0];
                readExcel(file);
              }}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
