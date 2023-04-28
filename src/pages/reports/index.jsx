import { ReportTableBody } from "@components/ReportTableBody";
import WithPrivateRoute from "@components/WithPrivateRoute";
import { useReports } from "@hooks/useReports";
import { v4 as uuidv4 } from "uuid";

const Reports = () => {
  const { petitsFilter, handleSearch } = useReports();

  return (
    <div className="min-h-[800px]">
      <section className="my-3">
        <label
          htmlFor="search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Buscar
        </label>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            id="search"
            onChange={handleSearch}
            type="search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Buscar Petit por nombre, peso, edad, condición y vacunas"
            required
          />
        </div>
      </section>
      <section className="relative overflow-x-auto mt-16">
        <em>Click en el nombre del Petit para ver mas detalles</em>
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th
                scope="col"
                className="px-6 py-3"
              >
                Nombre
              </th>
              <th
                scope="col"
                className="px-6 py-3"
              >
                Peso
              </th>
              <th
                scope="col"
                className="px-6 py-3"
              >
                Edad
              </th>
              <th
                scope="col"
                className="px-6 py-3"
              >
                Condición
              </th>
              <th
                scope="col"
                className="px-6 py-3"
              >
                Vacunas
              </th>
            </tr>
          </thead>
          <tbody className="bg-white border-b dark:bg-gray-800">
            {petitsFilter.map((petit, index) => (
              <ReportTableBody
                key={uuidv4()}
                petit={petit}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Reports;

Reports.Auth = WithPrivateRoute;
