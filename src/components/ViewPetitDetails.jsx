import React from "react";
import { BasicData } from "./BasicData";
import { PhysicalFeatures } from "./PhysicalFeatures";
import { Food } from "./Food";
import { Care } from "./Care";
import { useAuth } from "@hooks/useAuth";
import { useRouter } from "next/router";
import { MedicalData } from "./MedicalData";

export const ViewPetitDetails = ({ id }) => {
    const { user } = useAuth();

    const router = useRouter();

    const handleBack = () => {
      router.push("/reports");
    };
  return (
    <div className="my-3">
      <button
        onClick={handleBack}
        className="mx-3 text-white bg-amber-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-amber-500"
      >
        Ir Atras
      </button>

      <section className={"mb-6"}>
        <BasicData
          basicData={user.petits[id].basicData}
          disabled={true}
        />

        {/* <PhysicalFeatures
          physicalFeatures={user.petits[id].physicalFeatures}
          disabled={true}
        />

        <Food
          food={user.petits[id].food}
          disabled={true}
        />

        <Care
          care={user.petits[id].care}
          disabled={true}
        /> */}

        <MedicalData id={id} />
      </section>
    </div>
  );
};
