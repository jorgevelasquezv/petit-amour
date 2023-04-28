import { useRouter } from "next/router";
import { useAuth } from "./useAuth";
import { useEffect, useState } from "react";

export const usePetit = () => {
    const router = useRouter();

    const { user } = useAuth();

    const [tabActive, setTabActive] = useState('0');

    const [deletePetit, setDeletePetit] = useState(false);

    const petits = user.petits;

    const lengthPetits = user.petits.length;

    const basicData = user.petits[tabActive].basicData;

    const physicalFeatures = user.petits[tabActive].physicalFeatures;

    const food = user.petits[tabActive].food;

    const care = user.petits[tabActive].care;

    const handleTabActive = (e) => {
        setTabActive(e.target.id);
    };

    const handleEdit = () => {
        router.push(`/petit/${tabActive}`);
    };

    const handleDelete = () => {
        setDeletePetit(!deletePetit);
    };

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return {
        petits,
        handleEdit,
        handleDelete,
        deletePetit,
        tabActive,
        handleTabActive,
        setTabActive,
        lengthPetits,
        basicData,
        physicalFeatures,
        food,
        care,
    };
};
