import { useRouter } from "next/router";
import { useAuth } from "./useAuth";
import { useEffect, useState } from "react";

export const useAdd = (id) => {
    const { user, setUser } = useAuth();

    const router = useRouter();

    const [basicData, setBasicData] = useState({ name: '', age: '', type: '' });
    const [physicalFeatures, setPhysicalFeatures] = useState({
        color: '',
        weight: '',
        size: '',
    });
    const [food, setFood] = useState({
        type: '',
        mark: '',
        quantity: '',
        frequency: '',
        image: '',
    });
    const [care, setCare] = useState({ brush: '', bath: '' });

    const handleSavePetit = () => {
        if (id) {
            const copyPetits = [...user.petits];
            copyPetits[id].basicData = basicData;
            copyPetits[id].physicalFeatures = physicalFeatures;
            copyPetits[id].food = food;
            copyPetits[id].care = care;
            setUser({
                ...user,
                ['petits']: [...copyPetits],
            });
        } else {
            setUser({
                ...user,
                ['petits']: [
                    ...user.petits,
                    {
                        dateRegister: new Date().toISOString().split('T')[0],
                        basicData,
                        physicalFeatures,
                        food,
                        care,
                    },
                ],
            });
        }
        router.push('/petit');
    };

    const handleBack = () => {
        router.push('/petit');
    };

    useEffect(() => {
        if (id) {
            setBasicData(user.petits[id].basicData);
            setPhysicalFeatures(user.petits[id].physicalFeatures);
            setFood(user.petits[id].food);
            setCare(user.petits[id].care);
        }
    }, [user.petits]);

    return {
        handleSavePetit,
        handleBack,
        basicData,
        setBasicData,
        physicalFeatures,
        setPhysicalFeatures,
        food,
        setFood,
        care,
        setCare,
    };
}