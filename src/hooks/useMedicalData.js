import { useAuth } from "./useAuth";

export const useMedicalData = (id) => {
      const { user } = useAuth();

      const medicalIndicatorsBodies = user.petits
          .map((petit) => petit.medicalData?.medicalIndicators)
          [id].map((indicator) => [
              indicator.vaccine,
              indicator.weight,
              indicator.date,
          ]);
      const medicalIndicators = {
          head: ['Vacuna', 'Peso', 'Fecha'],
          bodies: medicalIndicatorsBodies,
      };

      const medicalControlsBodies = user.petits
          .map((petit) => petit.medicalData?.medicalControls)
          [id].map((control) => [
              control.doctor,
              control.observations,
              control.date,
          ]);
      const medicalControls = {
          head: ['Doctor', 'Observaciones', 'Fecha'],
          bodies: medicalControlsBodies,
      };

      const accidentsBodies = user.petits
          .map((petit) => petit.medicalData?.accidents)
          [id].map((accident) => [
              accident.typeRegister,
              accident.diagnosis,
              accident.treatment,
              accident.evolution,
              accident.date,
          ]);
      const accidents = {
          head: [
              'Tipo de registro',
              'Diagnostico',
              'Tratamiento',
              'Evolución',
              'Fecha',
          ],
          bodies: accidentsBodies,
      };

      const examsBodies = user.petits
          .map((petit) => petit.medicalData?.exams)
          [id].map((exam) => [
              exam.exams,
              exam.recommendations,
              { image: exam.image },
              exam.date,
          ]);
      const exams = {
          head: ['Tipo de Examen', 'Recomendaciones', 'Imagen', 'Fecha'],
          bodies: examsBodies,
    };
    
    return  {medicalIndicators, medicalControls, accidents, exams}
}