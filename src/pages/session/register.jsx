import Image from "next/image";
import Link from "next/link";
import { useValidateRegister } from "@hooks/useValidateRegister";

export default function Register() {
  const {
    dataRegister,
    handleChange,
    confirmPassword,
    handleChangeConfirmPassword,
    handleSave,
    validEmail,
  } = useValidateRegister();

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <Link
        href="/"
        className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
      >
        <Image
          className="w-32 h-32 mr-2"
          src="/assets/petit-amour.jpg"
          alt="logo"
          width={128}
          height={128}
        />
      </Link>
      <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-blue-900 border-blue-800">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
            Registrarse
          </h1>
          <form
            className="space-y-4 md:space-y-6"
            action="#"
          >
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-white"
              >
                Nombre
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-blue-900 border-blue-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your name"
                required
                value={dataRegister.name}
                onChange={handleChange}
              />
              <span
                className={
                  dataRegister.name.length < 2 && dataRegister.name.length !== 0
                    ? "text-red-500 text-xs italic"
                    : "hidden"
                }
              >
                Debe contener mas de dos caracteres.
              </span>
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-medium text-white"
              >
                Apellido
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-blue-900 border-blue-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your last name"
                required
                value={dataRegister.lastName}
                onChange={handleChange}
              />
              <span
                className={
                  dataRegister.lastName.length < 2 &&
                  dataRegister.lastName.length !== 0
                    ? "text-red-500 text-xs italic"
                    : "hidden"
                }
              >
                Debe contener mas de dos caracteres.
              </span>
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-white"
              >
                Teléfono
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-blue-900 border-blue-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your phone"
                required
                value={dataRegister.phone}
                onChange={handleChange}
              />
              <span
                className={
                  dataRegister.phone.length < 8 &&
                  dataRegister.phone.length !== 0
                    ? "text-red-500 text-xs italic"
                    : "hidden"
                }
              >
                No es un numero de telefono valido.
              </span>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-blue-900 border-blue-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="name@company.com"
                required
                value={dataRegister.email}
                onChange={handleChange}
              />
              <span
                className={
                  dataRegister.email.length === 0 ||
                  validEmail.test(dataRegister.email)
                    ? "hidden"
                    : "text-red-500 text-xs italic"
                }
              >
                No es un formato de correo valido.
              </span>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-white"
              >
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-blue-900 border-blue-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                required
                value={dataRegister.password}
                onChange={handleChange}
              />
              <span
                className={
                  dataRegister.password.length < 8 &&
                  dataRegister.password.length > 0
                    ? "text-red-500 text-xs italic"
                    : "hidden"
                }
              >
                Debe contener mas de 8 caracteres
              </span>
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block mb-2 text-sm font-medium text-white"
              >
                Confirmar Contraseña
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="••••••••"
                className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-blue-900 border-blue-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                required
                value={confirmPassword}
                onChange={handleChangeConfirmPassword}
              />
              <span
                className={
                  confirmPassword.length > 0 &&
                  dataRegister.password !== confirmPassword
                    ? "text-red-500 text-xs italic"
                    : "hidden"
                }
              >
                Las contraseñas deben ser iguales.
              </span>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="w-4 h-4 border rounded focus:ring-3 focus:ring-primary-300 bg-blue-900 border-blue-700 focus:ring-primary-600 ring-offset-gray-800"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="terms"
                  className="font-light text-gray-300"
                >
                  Acepto los{" "}
                  <a
                    className="font-medium hover:underline text-blue-400"
                    href="#"
                  >
                    Terminos y Condiciones
                  </a>
                </label>
              </div>
            </div>
            <button
              className="w-full text-white bg-sky-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-sky-500"
              onClick={handleSave}
            >
              Crear Cuenta
            </button>
            <p className="text-sm font-light text-gray-300">
              ¿Ya tienes una cuenta?{" "}
              <Link
                href="/session/login"
                className="font-medium text-blue-400 hover:underline"
              >
                Ingrese aquí
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
