import React from "react";

export const Care = ({ care, setCare, disabled = false }) => {
  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setCare({ ...care, [name]: value });
  };

  return (
    <div>
      <h2 className="my-6 text-center border-blue-400 border-b text-3xl">
        Cuidados
      </h2>
      <article className="grid grid-cols-2 max-sm:grid-cols-1 lg:grid-cols-3 gap-x-10">
        <section className="my-2">
          <label
            htmlFor="brush"
            className="block text-sm font-medium mb-2"
          >
            Cepillado
          </label>

          <input
            type="text"
            id="brush"
            name="brush"
            className="py-3 px-4 pl-11 block w-full border-0 border-b-2 border-gray-200 text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Cuidados al cepillar"
            value={care.brush}
            onChange={handleChange}
            disabled={disabled}
          />
        </section>

        <section className="my-2">
          <label
            htmlFor="bath"
            className="block text-sm font-medium mb-2"
          >
            Baño
          </label>

          <input
            type="text"
            id="bath"
            name="bath"
            className="py-3 px-4 pl-11 block w-full border-0 border-b-2 border-gray-200 text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Cuidados al bañar"
            value={care.bath}
            onChange={handleChange}
            disabled={disabled}
          />
        </section>
      </article>
    </div>
  );
};
