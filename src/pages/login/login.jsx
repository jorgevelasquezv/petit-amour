import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center px-6 mx-auto lg:py-0 md:h-screen">
      <Link
        href="/"
        className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
      >
        <img
          className="w-32 h-32 mr-2"
          src="/assets/petit-amour.jpg"
          alt="logo"
        />
      </Link>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-blue-900 dark:border-blue-800">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Iniciar sesión en su cuenta
          </h1>
          <form
            className="space-y-4 md:space-y-6"
            action="#"
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-blue-900 dark:border-blue-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-blue-900 dark:border-blue-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-blue-900 dark:border-blue-700 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="text-gray-500 dark:text-gray-300"
                  >
                    Recuérdame
                  </label>
                </div>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-blue-400 hover:underline"
              >
                ¿Has olvidado tu contraseña?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Iniciar sesión
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              ¿Aún no tienes una cuenta?
              <Link
                href="/login/register"
                className="font-medium text-blue-400 hover:underline ml-1"
              >
                Registrarse
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
