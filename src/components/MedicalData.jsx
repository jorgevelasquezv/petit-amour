import React from "react";
import { Table } from "./Table";
import { useAuth } from "@hooks/useAuth";
import Image from "next/image";

const dataTest = {
  head: ["Head Uno", "Head Dos", "Head Tres", "Head Cuatro"],
  bodies: [
    ["body uno", "body dos", "body tres", "body cuatro"],
    ["body uno", "body dos", "body tres", "body cuatro"],
    ["body uno", "body dos", "body tres", "body cuatro"],
  ],
};

export const MedicalData = ({ id }) => {
  const { user } = useAuth();

  const medicalIndicatorsBodies = user.petits
    .map(petit => petit.medicalData.medicalIndicators)
    [id].map(indicator => [
      indicator.vaccine,
      indicator.weight,
      indicator.date,
    ]);
  const medicalIndicators = {
    head: ["Vacuna", "Peso", "Fecha"],
    bodies: medicalIndicatorsBodies,
  };

  const medicalControlsBodies = user.petits
    .map(petit => petit.medicalData.medicalControls)
    [id].map(control => [control.doctor, control.observations, control.date]);
  const medicalControls = {
    head: ["Doctor", "Observaciones", "Fecha"],
    bodies: medicalControlsBodies,
  };

  const accidentsBodies = user.petits
    .map(petit => petit.medicalData.accidents)
    [id].map(accident => [
      accident.typeRegister,
      accident.diagnosis,
      accident.treatment,
      accident.evolution,
      accident.date,
    ]);
  const accidents = {
    head: [
      "Tipo de registro",
      "Diagnostico",
      "Tratamiento",
      "Evolución",
      "Fecha",
    ],
    bodies: accidentsBodies,
  };

  const examsBodies = user.petits
    .map(petit => petit.medicalData.exams)
    [id].map(exam => [
      exam.exams,
      exam.recommendations,
      { image: exam.image },
      exam.date,
    ]);
  const exams = {
    head: ["Tipo de Examen", "Recomendaciones", "Imagen", "Fecha"],
    bodies: examsBodies,
  };

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
