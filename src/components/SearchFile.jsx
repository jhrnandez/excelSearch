export default function SearchFile({ FilterData }) {
  return (
    <input
      type="text"
      id="filter"
      placeholder="Buscar datos"
      className="w-full border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
      onChange={FilterData}
    />
  );
}
