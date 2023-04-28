import { useReportTableBody } from '@hooks/useReportTableBody';

export const ReportTableBody = ({ petit, index }) => {
    const { handleViewPetitDetails, name, weight, age, condition, vaccine } =
        useReportTableBody({
            petit,
            index,
        });
    return (
        <tr className="bg-white border-b">
            <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
                <strong
                    className="cursor-pointer hover:text-lg"
                    onClick={handleViewPetitDetails}
                >
                    {name}
                </strong>
            </td>
            <td className="px-6 py-4">{weight}</td>
            <td className="px-6 py-4">{age}</td>
            <td className="px-6 py-4">{condition()}</td>
            <td className="px-6 py-4">{vaccine()}</td>
        </tr>
    );
};
