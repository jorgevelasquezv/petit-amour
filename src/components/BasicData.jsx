import { tiposMascotas } from "@lib/tiposMascotas";
import React from "react";

export const BasicData = ({ basicData, setBasicData, disabled = false}) => {
  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setBasicData({ ...basicData, [name]: value });
  };

  return (
    <div>
      <h2 className="my-6 text-center border-blue-400 border-b text-3xl">
        Datos Basicos
      </h2>
      <article className="grid grid-cols-2 max-sm:grid-cols-1 lg:grid-cols-3 gap-x-10">
        <section className="my-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-2"
          >
            Nombre
          </label>

          <input
            type="text"
            id="name"
            name="name"
            className="py-3 px-4 pl-11 block w-full border-0 border-b-2 border-gray-200 text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Nombre de su Petit"
            value={basicData.name}
            onChange={handleChange}
            disabled={disabled}
          />
        </section>

        <section className="my-2">
          <label
            htmlFor="age"
            className="block text-sm font-medium mb-2"
          >
            Edad
          </label>

          <input
            type="number"
            id="age"
            name="age"
            className="py-3 px-4 pl-11 block w-full border-0 border-b-2 border-gray-200 text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Edad de su Petit en años"
            value={basicData.age}
            onChange={handleChange}
            disabled={disabled}
          />
        </section>

        <section className="my-2">
          <label
            htmlFor="type"
            className="block text-sm font-medium mb-2"
          >
            Tipo
          </label>

          <select
            id="type"
            name="type"
            className="py-3 px-4 pl-11 block w-full border-0 border-b-2 border-gray-200 text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            value={basicData.type}
            onChange={handleChange}
            disabled={disabled}
          >
            <option>Seleccione tipo de Petit</option>
            {tiposMascotas.map(type => (
              <option
                key={type}
                value={type}
              >
                {type}
              </option>
            ))}
          </select>
        </section>
      </article>
    </div>
  );
};
