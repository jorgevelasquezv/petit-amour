import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ReportTableBody = ({ petit }) => {
    const name = petit.basicData.name;
    const weight = petit.physicalFeatures.weight;
    const age = petit.basicData.age;
    const condition = () => {
        const value =
            petit.medicalData.accidents[petit.medicalData.accidents.length - 1];
        return (value?.typeRegister || '') + '  ' + (value?.date || '');
    };
    const vaccine = () =>
        petit.medicalData.medicalIndicators.map((indicator) => {
            return (
                <section key={uuidv4()}>
                    {indicator.vaccine}
                    <br />
                </section>
            );
        });

    return (
        <tr className="bg-white border-b">
            <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
                {name}
            </td>
            <td className="px-6 py-4">{weight}</td>
            <td className="px-6 py-4">{age}</td>
            <td className="px-6 py-4">{condition()}</td>
            <td className="px-6 py-4">{vaccine()}</td>
        </tr>
    );
};
