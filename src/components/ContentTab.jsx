import Image from "next/image";
import React from "react";

function ContentTab({ tabActive, id, data, disabled = true }) {

  return (
    <div className={tabActive === id ? "block" : "hidden"}>
      {data.map(section => (
        <>
          <h2 className="my-6 text-center border-blue-400 border-b text-3xl">
            {section.title}
          </h2>
          <article className="grid grid-cols-2 max-sm:grid-cols-1 lg:grid-cols-3 gap-x-10">
            {section.data.map(data => (
              <section
                key={data.title + data.data + id}
                className="my-2"
              >
                <label
                  htmlFor="hs-leading-icon"
                  className="block text-sm font-medium mb-2"
                >
                  {data.title}
                </label>

                {data.title === "Foto" ? (
                  <Image alt={ data.data } src={data.data} width={300} height={120}/>
                ) : (
                  <input
                    type="text"
                    id="hs-leading-icon"
                    name="hs-leading-icon"
                    className="py-3 px-4 pl-11 block w-full border-0 border-b-2 border-gray-200 text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="you@site.com"
                    disabled={disabled}
                    value={data.data}
                  />
                )}
              </section>
            ))}
          </article>
        </>
      ))}
    </div>
  );
}

export default ContentTab;
