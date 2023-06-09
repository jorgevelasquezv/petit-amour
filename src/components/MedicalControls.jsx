import React from 'react';

export const MedicalControls = ({medicalControls, handleChange}) => {
    
    return (
        <article className="mx-3">
            <section className="my-2">
                <label
                    htmlFor="doctor"
                    className="block text-sm font-medium mb-2"
                >
                    Medico
                </label>

                <select
                    id="doctor"
                    name="doctor"
                    className="py-3 px-4 pl-11 block w-full border-0 border-b-2 border-gray-200 text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    value={medicalControls.doctor}
                    onChange={handleChange}
                >
                    <option>Seleccione tipo de médico</option>
                    <option value="General">General</option>
                    <option value="Especialista">Especialista</option>
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
                    value={medicalControls.date}
                    onChange={handleChange}
                />
            </section>

            <section className="my-2">
                <label
                    htmlFor="observations"
                    className="block text-sm font-medium mb-2"
                >
                    Observaciones
                </label>

                <textarea
                    id="observations"
                    name="observations"
                    rows={2}
                    className="py-3 px-4 pl-11 block w-full border-0 border-b-2 border-gray-200 text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Observaciones médicas"
                    value={medicalControls.observations}
                    onChange={handleChange}
                />
            </section>
        </article>
    );
};
