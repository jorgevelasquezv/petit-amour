import { useAuth } from "@hooks/useAuth";
import React from "react";

export const Alert = ({ id, handleCancel, setTabActive }) => {
  const { user, setUser } = useAuth();
  const namePetit = user.petits[id].basicData.name;

  const handleDelete = () => {
    const copyPetit = [...user.petits];
    console.log(copyPetit);
    copyPetit.splice(id, 1);
    console.log(copyPetit);
    setTabActive("0");
    setUser({
      ...user,
      ["petits"]: [...copyPetit],
    });

    handleCancel();
  };

  return (
    <div
      id="alert-additional-content-2"
      className="p-4 my-4 text-red-800 border border-red-300 rounded-lg bg-red-50"
      role="alert"
    >
      <div className="flex items-center">
        <svg
          aria-hidden="true"
          className="w-5 h-5 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
        <span className="sr-only">Info</span>
        <h3 className="text-lg font-medium">Eliminar Petit {namePetit}</h3>
      </div>
      <div className="mt-2 mb-4 text-sm">
        ¿Esta seguro que desea eliminar petit {namePetit}?.
      </div>
      <div className="flex">
        <button
          type="button"
          className="mx-1 text-red-800 bg-transparent border border-red-800 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center"
          data-dismiss-target="#alert-additional-content-2"
          aria-label="Close"
          onClick={handleDelete}
        >
          Eliminar
        </button>
        <button
          type="button"
          className="mx-1 text-green-800 bg-transparent border border-green-800 hover:bg-green-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center"
          data-dismiss-target="#alert-additional-content-2"
          aria-label="Close"
          onClick={handleCancel}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};
