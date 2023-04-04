import { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "@hooks/useAuth";
import Image from "next/image";

export default function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { auth, signIn } = useAuth();
  const router = useRouter();

  const handleSubmit = e => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signIn(email, password);
    
  };

  useEffect(() => {
    if (auth) {
      router.push('/petit');
    }
  }, [auth, router])
  

  return (
    <div className="flex flex-col items-center justify-center px-6 mx-auto lg:my-12 lg:py-0 ">
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
            Iniciar sesión en su cuenta
          </h1>
          <form
            className="space-y-4 md:space-y-6"
            onSubmit={handleSubmit}
          >
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
                className="sm:text-sm rounded-lg block w-full p-2.5 bg-blue-900 border-blue-700 dark:placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="name@company.com"
                required
                ref={emailRef}
              />
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
                className="border sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 bg-blue-900 border-blue-700 placeholder-gray-400 text-white"
                required
                ref={passwordRef}
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
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="text-gray-300"
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
              className="w-full text-white bg-sky-600 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Iniciar sesión
            </button>
            <p className="text-sm font-light text-gray-400">
              ¿Aún no tienes una cuenta?
              <Link
                href="/session/register"
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
