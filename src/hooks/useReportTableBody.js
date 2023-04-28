import { useRouter } from "next/router";
import { v4 as uuidv4 } from 'uuid';

export const useReportTableBody = ({ petit, index }) => {
    const router = useRouter();
    const name = petit.basicData.name;
    const weight = petit.physicalFeatures.weight;
    const age = petit.basicData.age;
    const condition = () => {
        const value =
            petit?.medicalData?.accidents[
                petit?.medicalData?.accidents?.length - 1
            ];
        return (value?.typeRegister || '') + '  ' + (value?.date || '');
    };
    const vaccine = () =>
        petit?.medicalData?.medicalIndicators?.map((indicator) => {
            return (
                <section key={uuidv4()}>
                    {indicator.vaccine}
                    <br />
                </section>
            );
        });
    const handleViewPetitDetails = () => {
        router.push(`/reports/${index}`);
    };

    return { handleViewPetitDetails, name, weight, age, condition, vaccine };
};
