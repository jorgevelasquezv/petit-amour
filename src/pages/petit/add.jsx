import { BasicData } from "@components/BasicData";
import { Care } from "@components/Care";
import { Food } from "@components/Food";
import { PhysicalFeatures } from "@components/PhysicalFeatures";
import { useAuth } from "@hooks/useAuth";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Add() {
  const { user, setUser } = useAuth();

  const router = useRouter();

  const [basicData, setBasicData] = useState({ name: "", age: "", type: "" });
  const [physicalFeatures, setPhysicalFeatures] = useState({
    color: "",
    weight: "",
    size: "",
  });
  const [food, setFood] = useState({
    type: "",
    mark: "",
    quantity: "",
    frequency: "",
    image: "",
  });
  const [care, setCare] = useState({ brush: "", bath: "" });

  const handleSavePetit = () => {
    setUser({
      ...user,
      ["petits"]: [...user.petits, { basicData, physicalFeatures, food, care }],
    });
    router.push("/petit");
  };

  const handleBack = () => {
    router.push("/petit");
  };

  return (
    <div className="mb-6">
      <button
        onClick={handleSavePetit}
        className="text-white bg-sky-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-sky-500"
      >
        Guardar Petit
      </button>

      <button
        onClick={handleBack}
        className="mx-3 text-white bg-amber-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-amber-500"
      >
        Ir Atras
      </button>
      <BasicData
        basicData={basicData}
        setBasicData={setBasicData}
      />

      <PhysicalFeatures
        physicalFeatures={physicalFeatures}
        setPhysicalFeatures={setPhysicalFeatures}
      />

      <Food
        food={food}
        setFood={setFood}
      />

      <Care
        care={care}
        setCare={setCare}
      />

      <button
        onClick={handleSavePetit}
        className="mt-4 text-white bg-sky-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-sky-500"
      >
        Guardar Petit
      </button>
      <button
        onClick={handleBack}
        className="mx-3 text-white bg-amber-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-amber-500"
      >
        Ir Atras
      </button>
    </div>
  );
}
