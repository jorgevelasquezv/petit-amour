import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useAuth } from "@hooks/useAuth";
import { useRouter } from "next/router";
import { navigation } from "@lib/navigation";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const { auth, logout, user } = useAuth();

  const { name, lastName } = user.user;

  const avatar = `https://ui-avatars.com/api/?name=${name.trim()}+${lastName.trim()}`;

  const router = useRouter();

  const handleLogout = () => {
    logout();
  };

  const handleHome = () => {
    router.push("/");
  };

  return (
    <Disclosure
      as="nav"
      className="bg-blue-900"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-start sm:justify-center sm:items-stretch">
                <div className="flex flex-shrink-0 items-center ml-14 sm:ml-0">
                  <img
                    className="h-8 w-auto"
                    src="/assets/petit-amour.jpg"
                    alt="Petit Amour"
                    onClick={handleHome}
                  />
                  <Link
                    href="/"
                    className="text-white text-2xl ml-2 max-md:hidden"
                  >
                    Petit Amour
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map(item => {
                      if (!item.private) {
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={
                              "text-gray-300 hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                            }
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        );
                      }
                      if (auth && item.private) {
                        if (item.select) {
                          return (
                            <Menu
                              as="div"
                              className="relative ml-3"
                              key={item.name}
                            >
                              <div>
                                <Menu.Button className="flex rounded-full text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 text-sm font-medium">
                                  <BellIcon className="text-gray-300 hover:bg-blue-700 hover:text-white rounded-md text-sm font-medium h-6 w-6" />
                                </Menu.Button>
                              </div>
                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                              >
                                <Menu.Items className="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                  <Menu.Item>
                                    {({ active }) => (
                                      <Link
                                        href="/profile"
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block px-4 py-2 text-sm text-gray-700"
                                        )}
                                      >
                                        Proxima vacuna 2023-04-30
                                      </Link>
                                    )}
                                  </Menu.Item>
                                  <Menu.Item>
                                    {({ active }) => (
                                      <button
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block px-4 py-2 text-sm text-gray-700"
                                        )}
                                        onClick={handleLogout}
                                      >
                                        Proximo RX 2023-04-28
                                      </button>
                                    )}
                                  </Menu.Item>
                                </Menu.Items>
                              </Transition>
                            </Menu>
                          );
                        } else
                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              className={
                                "text-gray-300 hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                              }
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </Link>
                          );
                      }
                    })}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {!auth ? (
                  <>
                    <Link
                      href="/session/login"
                      className="bg-green-900 text-white rounded-md px-3 py-2 text-sm font-medium mr-2"
                      aria-current="page"
                    >
                      Iniciar Sesión
                    </Link>
                    <Link
                      href="/session/register"
                      className="bg-orange-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                      aria-current="page"
                    >
                      Registarse
                    </Link>
                  </>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="bg-green-900 text-white rounded-md px-3 py-2 text-sm font-medium mr-2"
                    aria-current="page"
                  >
                    Cerrar Sesión
                  </button>
                )}
                {/* Profile dropdown */}
                {auth && (
                  <Menu
                    as="div"
                    className="relative ml-3"
                  >
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={avatar}
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/profile"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Su Perfil
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                              onClick={handleLogout}
                            >
                              Cerrar Sesión
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map(item => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-blue-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
