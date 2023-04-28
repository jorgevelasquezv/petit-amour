import { useState } from "react";
import { useAuth } from "./useAuth";

export const useReports = () => {
    const { user } = useAuth();

    const [petitsFilter, setPetitsFilter] = useState([...user.petits]);

    const handleSearch = (e) => {
        const petit = e.target.value;

        setPetitsFilter(filterSearchPetits(petit));
        console.log(filterSearchPetits(petit));
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
                petit.medicalData.medicalIndicators[0]?.vaccine
                    .toLowerCase()
                    .includes(value.toLowerCase())
        );
    };

    return { petitsFilter, handleSearch}
}