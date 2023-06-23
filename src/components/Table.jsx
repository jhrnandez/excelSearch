import clsx from "clsx";

export default function Table({ items }) {
  return (
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
  );
}
