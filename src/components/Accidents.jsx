import React from 'react';

export const Accidents = ({accidents, handleChange}) => {

    return (
        <article className="mx-3">
            <section className="my-2">
                <label
                    htmlFor="typeRegister"
                    className="block text-sm font-medium mb-2"
                >
                    Tipo de registro
                </label>

                <select
                    id="typeRegister"
                    name="typeRegister"
                    className="py-3 px-4 pl-11 block w-full border-0 border-b-2 border-gray-200 text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    value={accidents.typeRegister}
                    onChange={handleChange}
                >
                    <option>Seleccione tipo de registro</option>
                    <option value="Accidente">Accidente</option>
                    <option value="Enfermedad">Enfermedad</option>
                </select>
            </section>

            <section className="my-2">
                <label
                    htmlFor="date"
                    className="block text-sm font-medium mb-2"
                >
                    Fecha
                </label>

                <input
                    type="date"
                    id="date"
                    name="date"
                    className="py-3 px-4 pl-11 block w-full border-0 border-b-2 border-gray-200 text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Fecha del registro"
                    value={accidents.date}
                    onChange={handleChange}
                />
            </section>

            <section className="my-2">
                <label
                    htmlFor="diagnosis"
                    className="block text-sm font-medium mb-2"
                >
                    Diagnostico
                </label>

                <textarea
                    id="diagnosis"
                    name="diagnosis"
                    rows={2}
                    className="py-3 px-4 pl-11 block w-full border-0 border-b-2 border-gray-200 text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Diagnotisco médico"
                    value={accidents.diagnosis}
                    onChange={handleChange}
                />
            </section>

            <section className="my-2">
                <label
                    htmlFor="treatment"
                    className="block text-sm font-medium mb-2"
                >
                    Tratamiento
                </label>

                <textarea
                    id="treatment"
                    name="treatment"
                    rows={2}
                    className="py-3 px-4 pl-11 block w-full border-0 border-b-2 border-gray-200 text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Tratamiento médico"
                    value={accidents.treatment}
                    onChange={handleChange}
                />
            </section>

            <section className="my-2">
                <label
                    htmlFor="evolution"
                    className="block text-sm font-medium mb-2"
                >
                    Evolución
                </label>

                <textarea
                    id="evolution"
                    name="evolution"
                    rows={2}
                    className="py-3 px-4 pl-11 block w-full border-0 border-b-2 border-gray-200 text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Evolución de Petit"
                    value={accidents.evolutions}
                    onChange={handleChange}
                />
            </section>
        </article>
    );
};
