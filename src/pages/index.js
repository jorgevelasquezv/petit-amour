import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-blue-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop
                  offset={1}
                  stopColor="#E935C1"
                />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Cuida de tu pequeño amor
              <br />
              Empieza a usar nuestra aplicación hoy
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              &quot;Los animales son sensibles, inteligentes, divertidos y
              entretenidos. Debemos cuidarlos al igual que hacemos con los
              niños&quot;
              <br />
              Michael Morpurgo (escritor y dramaturgo)
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                href="/session/login"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Login
              </Link>
              <Link
                href="/session/register"
                className="text-sm font-semibold leading-6 text-white"
              >
                No tienes una cuenta? Registrate{" "}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="relative mt-16 h-78 lg:mt-8">
            <Image
              className="absolute top-9 left-0 w-[30rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="/assets/petit-amour.jpg"
              alt="App screenshot"
              priority
              width={597}
              height={551}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
