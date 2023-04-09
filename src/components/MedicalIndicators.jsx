import React from 'react'

export const MedicalIndicators = () => {

    const handleChange = (event) => {
    
}

  return (
      <article className="mx-3">
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
                  value={""}
                  onChange={handleChange}
              />
          </section>
          <section className="my-2">
              <label htmlFor="vaccine" className="block text-sm font-medium mb-2">
                  Vacunas
              </label>

              <input
                  type="text"
                  id="vaccine"
                  name="vaccine"
                  className="py-3 px-4 pl-11 block w-full border-0 border-b-2 border-gray-200 text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Vacunas aplicadas a su Petit"
                  value={''}
                  onChange={handleChange}
              />
          </section>
      </article>
  );
}

