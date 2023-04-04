import { useEffect, useState } from "react";
import WithPrivateRoute from "@components/WithPrivateRoute";
import Tab from "@components/Tab";
import { useAuth } from "@hooks/useAuth";
import Link from "next/link";
import { BasicData } from "@components/BasicData";
import { PhysicalFeatures } from "@components/PhysicalFeatures";
import { Food } from "@components/Food";
import { Care } from "@components/Care";
import { useRouter } from "next/router";
import { Alert } from "@components/Alert";

const objetUser = {
  user: {
    name: "Pepito",
    lastName: "Perez",
    email: "1@1.11",
    phone: "12345678",
    password: "12345678",
  },
  petits: [
    {
      basicData: {
        name: "Apolo",
        age: "3",
        type: "Perro",
      },
      physicalFeatures: {
        color: "Gris",
        weight: "13",
        size: "65",
      },
      food: {
        type: "Seco",
        mark: "Agility Gold",
        quantity: "150",
        frequency: "3",
        image: "C:\\fakepath\\agility_gold.jpg",
      },
      care: {
        brush: "Cerdas suaves una vez al dia",
        bath: "Una vez al mes ",
      },
    },
    {
      basicData: {
        name: "Michi",
        age: "1",
        type: "Gato",
      },
      physicalFeatures: {
        color: "Marron",
        weight: "4",
        size: "35",
      },
      food: {
        type: "Seco",
        mark: "Cat Chow",
        quantity: "50",
        frequency: "3",
        image: "C:\\fakepath\\Cat-Chow.jpeg",
      },
      care: {
        brush: "Diario cepillo cerdas suaves",
        bath: "Seco cada 15 días",
      },
    },
  ],
};

export default function Petit() {
  const router = useRouter();

  const { user } = useAuth();

  const [tabActive, setTabActive] = useState("0");

  const [deletePetit, setDeletePetit] = useState(false);

  const handleTabActive = e => {
    setTabActive(e.target.id);
  };

  const handleEdit = () => {
    router.push(`/petit/${tabActive}`);
  };

  const handleDelete = () => {
    setDeletePetit(!deletePetit);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    console.log(user);
  }, [user]);

  return (
    <div>
      <Link
        href={"/petit/add"}
        className="mr-3 text-white bg-sky-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-sky-500"
      >
        Agregar Petit
      </Link>
      {user.petits.length > 0 && (
        <>
          <button
            onClick={handleEdit}
            className="mx-3 text-white bg-amber-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-amber-500"
          >
            Editar Petit
          </button>

          <button
            onClick={handleDelete}
            className="mx-3 text-white bg-red-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-red-500"
          >
            Eliminar Petit
          </button>
        </>
      )}

      {user.petits.length > 0 && deletePetit && (
        <Alert
          id={tabActive}
          handleCancel={handleDelete}
          setTabActive={setTabActive}
        />
      )}

      {user.petits.length > 0 ? (
        <div className="my-3">
          <ul className="mb-5 flex list-none flex-col flex-wrap border-b-0 pl-0 md:flex-row">
            {user.petits.map((tab, index) => (
              <Tab
                key={tab.basicData.name}
                id={index}
                handleTabActive={handleTabActive}
                name={tab.basicData.name}
                tabActive={tabActive}
              />
            ))}
          </ul>
          <section className={"mb-6"}>
            <BasicData
              basicData={user.petits[tabActive].basicData}
              disabled={true}
            />

            <PhysicalFeatures
              physicalFeatures={user.petits[tabActive].physicalFeatures}
              disabled={true}
            />

            <Food
              food={user.petits[tabActive].food}
              disabled={true}
            />

            <Care
              care={user.petits[tabActive].care}
              disabled={true}
            />
          </section>
        </div>
      ) : (
        <h1 className="text-black my-9 text-center text-2xl">
          No hay petits registrados. Agrege un petit
        </h1>
      )}
    </div>
  );
}

Petit.Auth = WithPrivateRoute;
