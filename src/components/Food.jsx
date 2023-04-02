import Image from "next/image";
import React from "react";

export const Food = ({ food, setFood, disabled = false }) => {
  
  const image = food.image.split("\\").pop();

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setFood({ ...food, [name]: value });
  };

  return (
    <div>
      <h2 className="my-6 text-center border-blue-400 border-b text-3xl">
        Alimentación
      </h2>
      <article className="grid grid-cols-2 max-sm:grid-cols-1 lg:grid-cols-3 gap-x-10">
        <section className="my-2">
          <label
            htmlFor="type"
            className="block text-sm font-medium mb-2"
          >
            Tipo de Alimento
          </label>

          <select
            id="type"
            name="type"
            className="py-3 px-4 pl-11 block w-full border-0 border-b-2 border-gray-200 text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            value={food.type}
            onChange={handleChange}
            disabled={disabled}
          >
            <option>Seleccione tipo de alimento</option>
            <option value="Seco">Seco</option>
            <option value="Semi Humedo">Semi Humedo</option>
            <option value="Enlatado">Enlatado</option>
          </select>
        </section>

        <section className="my-2">
          <label
            htmlFor="mark"
            className="block text-sm font-medium mb-2"
          >
            Marca
          </label>

          <input
            type="text"
            id="mark"
            name="mark"
            className="py-3 px-4 pl-11 block w-full border-0 border-b-2 border-gray-200 text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Marca de alimento"
            value={food.mark}
            onChange={handleChange}
            disabled={disabled}
          />
        </section>

        <section className="my-2">
          <label
            htmlFor="quantity"
            className="block text-sm font-medium mb-2"
          >
            Cantidad
          </label>

          <input
            type="number"
            id="quantity"
            name="quantity"
            className="py-3 px-4 pl-11 block w-full border-0 border-b-2 border-gray-200 text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Cantidad de aliemto en gramos"
            value={food.quantity}
            onChange={handleChange}
            disabled={disabled}
          />
        </section>

        <section className="my-2">
          <label
            htmlFor="frequency"
            className="block text-sm font-medium mb-2"
          >
            Frecuencia diaria
          </label>

          <input
            type="number"
            id="frequency"
            name="frequency"
            className="py-3 px-4 pl-11 block w-full border-0 border-b-2 border-gray-200 text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Cuantas veces se alimenta a diario"
            value={food.frequency}
            onChange={handleChange}
            disabled={disabled}
          />
        </section>

        {!disabled ? (
          <section className="my-2 flex items-center justify-center w-full">
            <label
              htmlFor="image"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <p className="m-2 text-sm text-gray-500">
                  <span className="font-semibold">
                    Click para subir foto de alimento
                  </span>{" "}
                  o arrastre y suelte
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                id="image"
                name="image"
                type="file"
                className="hidden"
                value={food.image}
                onChange={handleChange}
              />
            </label>
          </section>
        ) : (
          <Image
            alt={food.image}
            src={"/assets/" + image}
            width={300}
            height={120}
          />
        )}
        {/* <section className="my-2 flex items-center justify-center w-full">
          <label
            htmlFor="image"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <p className="m-2 text-sm text-gray-500">
                <span className="font-semibold">
                  Click para subir foto de alimento
                </span>{" "}
                o arrastre y suelte
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="image"
              name="image"
              type="file"
              className="hidden"
              value={food.image}
              onChange={handleChange}
            />
          </label>
        </section> */}
      </article>
    </div>
  );
};
