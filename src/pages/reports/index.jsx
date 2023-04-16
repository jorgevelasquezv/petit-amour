import { ReportTableBody } from '@components/ReportTableBody';
import WithPrivateRoute from '@components/WithPrivateRoute';
import { useAuth } from '@hooks/useAuth';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const petits = [
    { name: 'Apolo', weight: '14', age: 3 },
    { name: 'Michi', weight: '4', age: 2 },
];

const Reports = () => {
    const { user } = useAuth();

    const [petitsFilter, setPetitsFilter] = useState([...user.petits]);

    const handleSearch = (e) => {
        const petit = e.target.value;

        setPetitsFilter(filterSearchPetits(petit));
    };

    const filterSearchPetits = (value) => {
        return [...user.petits].filter(
            (petit) =>
                petit.basicData.name
                    .toLowerCase()
                    .includes(value.toLowerCase()) ||
                petit.physicalFeatures.weight
                    .toLowerCase()
                    .includes(value.toLowerCase()) ||
                petit.basicData.age == value ||
                petit.medicalData.accidents[
                    petit.medicalData.accidents.length - 1
                ]?.typeRegister
                    .toLowerCase()
                    .includes(value.toLowerCase()) ||
                petit.medicalData.medicalIndicators[
                    petit.medicalData.medicalIndicators.length - 1
                ]?.vaccine
        );
    };

    return (
        <div>
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
            <section className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Peso
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Edad
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Condición
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Vacunas
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white border-b dark:bg-gray-800">
                        {petitsFilter.map((petit) => (
                            <ReportTableBody key={uuidv4()} petit={petit} />
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default Reports;

Reports.Auth = WithPrivateRoute;
