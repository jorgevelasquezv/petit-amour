import React from "react";
import { Table } from "./Table";
import { useMedicalData } from "@hooks/useMedicalData";

export const MedicalData = ({ id }) => {
  const { medicalControls, medicalIndicators, accidents, exams} = useMedicalData(id)

  return (
    <div className="w-full">
      <h2 className="my-6 text-center border-blue-400 border-b text-3xl">
        Datos Médicos
      </h2>
      <article className="w-full grid grid-cols-1 gap-x-10">
        <section className="w-full my-8">
          <Table
            data={medicalIndicators}
            title={"Indicadores Médicos"}
          />
        </section>
        <section className="w-full my-8">
          <Table
            data={medicalControls}
            title={"Controles Médicos"}
          />
        </section>
        <section className="w-full my-8">
          <Table
            data={accidents}
            title={"Accidentes y Enfermedades"}
          />
        </section>
        <section className="w-full my-8">
          <Table
            data={exams}
            title={"Examenes de laboratorio"}
          />
        </section>
      </article>
    </div>
  );
};
