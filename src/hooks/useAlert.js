import { useAuth } from "./useAuth";

export const useAlert = ({ id, handleCancel, setTabActive }) => {
    const { user, setUser } = useAuth();
    const namePetit = user.petits[id].basicData.name;

    const handleDelete = () => {
        const copyPetit = [...user.petits];
        copyPetit.splice(id, 1);
        setTabActive('0');
        setUser({
            ...user,
            ['petits']: [...copyPetit],
        });

        handleCancel();
    };

    return { namePetit, handleDelete };
};