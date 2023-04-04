import React from "react";

const About = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            Acerca de nosotros
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            Los animales de compañía han formado parte de nuestras vidas durante
            casi toda la historia que ha sido documentada y, por lo tanto, Es un
            hecho establecido que demos cuidados a estos. De aqui nace la idea
            de Petit Amour, creando una aplicación web, que permita a los
            propietarios de mascotas o Petits como les llamamos con amor, tener
            registro detallado de ellos
          </p>
        </div>
        <div className="w-full lg:w-8/12 ">
          <img
            className="w-full h-full"
            src="/assets/mascotas-about.jpg"
            alt="A group of People"
          />
        </div>
      </div>

    </div>
  );
};

export default About;
