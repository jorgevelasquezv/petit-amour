import React from "react";

export const PhysicalFeatures = ({ physicalFeatures, setPhysicalFeatures, disabled = false}) => {
  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setPhysicalFeatures({ ...physicalFeatures, [name]: value });
  };

  return (
    <div>
      <h2 className="my-6 text-center border-blue-400 border-b text-3xl">
        Razgos Fisicos
      </h2>
      <article className="grid grid-cols-2 max-sm:grid-cols-1 lg:grid-cols-3 gap-x-10">
        <section className="my-2">
          <label
            htmlFor="color"
            className="block text-sm font-medium mb-2"
          >
            Color
          </label>

          <input
            type="text"
            id="color"
            name="color"
            className="py-3 px-4 pl-11 block w-full border-0 border-b-2 border-gray-200 text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Color de su Petit"
            value={physicalFeatures.color}
            onChange={handleChange}
            disabled={disabled}
          />
        </section>

        <section className="my-2">
          <label
            htmlFor="weight"
            className="block text-sm font-medium mb-2"
          >
            Peso en Kilo gramos
          </label>

          <input
            type="number"
            id="weight"
            name="weight"
            className="py-3 px-4 pl-11 block w-full border-0 border-b-2 border-gray-200 text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Peso de su Petit en kilos"
            value={physicalFeatures.weight}
            onChange={handleChange}
            disabled={disabled}
          />
        </section>

        <section className="my-2">
          <label
            htmlFor="size"
            className="block text-sm font-medium mb-2"
          >
            Tamaño en centimetros
          </label>

          <input
            type="number"
            id="size"
            name="size"
            className="py-3 px-4 pl-11 block w-full border-0 border-b-2 border-gray-200 text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Tamaño de su Petit en centimetros"
            value={physicalFeatures.size}
            onChange={handleChange}
            disabled={disabled}
          />
        </section>
      </article>
    </div>
  );
};
