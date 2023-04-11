import { MedicalIndicators } from "./MedicalIndicators";
import { MedicalControls } from "./MedicalControls";
import { Accidents } from "./Accidents";
import { Exams } from "./Exams";
import { useHealth } from "@hooks/useHealth";

export const Health = ({ tabActive }) => {
    const {
      modalHealth,
    selectHealth,
    handleSelectHealth,
    handleCloseModal,
    medicalIndicators,
    handleChangeMedicalIndicators,
    medicalControls,
    handleChangeMedicalControls,
    exams,
    handleChangeExams,
    accidents,
    handleChangeAccidents,
    handleSaveHealth,
  } = useHealth(tabActive);

  return (
    <>
      <div className="sm:columns-3">
        <div>
          <label
            htmlFor="underline_select"
            className="sr-only"
          >
            Underline select
          </label>
          <select
            id="underline_select"
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            onChange={handleSelectHealth}
            value={selectHealth}
          >
            <option value="RS">Registar Condiciones de Salud</option>
            <option value="IM">Indicadores Medicos</option>
            <option value="CM">Controles Medicos</option>
            <option value="AE">Accidentes o Enfermedades</option>
            <option value="EL">Exámenes de Laboratorio</option>
          </select>
        </div>
      </div>

      {modalHealth && (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-full h-full max-w-2xl md:h-auto">
            {/* Modal content */}
            <div className="relative bg-neutral-200 rounded-lg shadow">
              {/* Modal header */}
              <div className="flex items-start justify-between p-4 border-b rounded-t ">
                <h3 className="text-xl font-semibold text-gray-900 ">
                  {selectHealth === "IM"
                    ? "Indicadores Medicos"
                    : selectHealth === "CM"
                    ? "Controles Medicos"
                    : selectHealth === "AE"
                    ? "Accidentes o Enfermedades"
                    : "Exámenes de Laboratorio"}
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                  data-modal-hide="defaultModal"
                  onClick={handleCloseModal}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}

              {selectHealth === "IM" && (
                <MedicalIndicators
                  medicalIndicators={medicalIndicators}
                  handleChange={handleChangeMedicalIndicators}
                />
              )}
              {selectHealth === "CM" && (
                <MedicalControls
                  medicalControls={medicalControls}
                  handleChange={handleChangeMedicalControls}
                />
              )}
              {selectHealth === "AE" && (
                <Accidents
                  accidents={accidents}
                  handleChange={handleChangeAccidents}
                />
              )}
              {selectHealth === "EL" && (
                <Exams
                  exams={exams}
                  handleChange={handleChangeExams}
                />
              )}

              {/* Modal footer */}
              <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
                <button
                  data-modal-hide="defaultModal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={handleSaveHealth}
                >
                  Guardar
                </button>
                <button
                  data-modal-hide="defaultModal"
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                  onClick={handleCloseModal}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
