
export const Exams = ({exams, handleChange}) => {

    const handleChangeOrigen = (e) => {
            handleChange(e, "exams");
    }
 
  return (
    <article className="mx-3">
      <section className="my-2">
        <label
          htmlFor="date"
          className="block text-sm font-medium mb-2"
        >
          Fecha
        </label>

        <input
          type="date"
          id="date"
          name="date"
          className="py-3 px-4 pl-11 block w-full border-0 border-b-2 border-gray-200 text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
          placeholder="Fecha del registro"
          value={exams.date}
          onChange={handleChangeOrigen}
        />
      </section>

      <section className="my-2">
        <label
          htmlFor="exams"
          className="block text-sm font-medium mb-2"
        >
          Resultados de Exámen
        </label>

        <textarea
          id="exams"
          name="exams"
          rows={2}
          className="py-3 px-4 pl-11 block w-full border-0 border-b-2 border-gray-200 text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
          placeholder="Resultados de exámenes"
          value={exams.exams}
          onChange={handleChangeOrigen}
        />
      </section>

      <section className="my-2">
        <label
          htmlFor="recommendations"
          className="block text-sm font-medium mb-2"
        >
          Recomendaciones
        </label>

        <textarea
          id="recommendations"
          name="recommendations"
          rows={2}
          className="py-3 px-4 pl-11 block w-full border-0 border-b-2 border-gray-200 text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
          placeholder="Recomendaciones medicas"
          value={exams.recommendations}
          onChange={handleChangeOrigen}
        />
      </section>

      <section className="my-2 flex items-center justify-center w-full">
        <label
          htmlFor="image"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              className="w-10 h-10 mb-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <p className="m-2 text-sm text-gray-500">
              <span className="font-semibold">
                Click para subir imagen de exámen
              </span>{" "}
              o arrastre y suelte
            </p>
            <p className="text-xs text-gray-500">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            id="image"
            name="image"
            type="file"
            className="hidden"
            onChange={handleChangeOrigen}
          />
        </label>
      </section>
    </article>
  );
};
