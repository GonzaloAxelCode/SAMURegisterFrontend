import { Dialog, Menu, Transition } from "@headlessui/react";
import { ProgressBar } from "primereact/progressbar";

import {
  ArrowLeftIcon,
  Bars3BottomLeftIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useContext, useState } from "react";
import useAuth from "../Apps/Auth/hooks/useAuth";
import { DataContext } from "../context/DataContext";
import AuthPage from "./AuthPage/AuthPage";

const navigation = [
  { name: "Inicio", icon: HomeIcon, href: "/", current: true },
  { name: "Dashboard", icon: UsersIcon, href: "/dashboard", current: false },
  { name: "Registros", icon: FolderIcon, href: "/registros/", current: false },

  { name: "Perfil", icon: InboxIcon, href: "/profile", current: false },
];
const userNavigation = [
  { name: "Perfil", href: "/profile" },
  { name: "Configuraciones", href: "/profile" },
  { name: "Salir", href: "#" },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Layout = ({ children }: any) => {
  const { user } = useContext(DataContext);
  const [showMessageHeader, setShowMessageHeader] = useState(true);
  const router = useRouter();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { LogOutFull } = useAuth();

  const logoutHandler = async () => {
    await LogOutFull();
  };
  const { isAuthenticated, is_admin } = useAuth();

  if (!isAuthenticated) {
    return (
      <>
        <ScreenLoader />
        <AuthPage />
      </>
    );
  }

  return (
    <>
      <ScreenLoader />
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-shrink-0 items-center px-4">
                    <img
                      className="h-8 w-auto"
                      src="https://res.cloudinary.com/ddksrkond/image/upload/v1687316127/samu/download-removebg-preview_iidvap.png"
                      alt="Samu"
                    />
                  </div>
                  <div className="mt-5 h-0 flex-1 overflow-y-auto">
                    <nav className="space-y-1 px-2">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            router.asPath === item.href
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                            "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              router.asPath === item.href
                                ? "text-gray-500"
                                : "text-gray-400 group-hover:text-gray-500",
                              "mr-4 flex-shrink-0 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-40 md:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5">
            <div className="flex flex-shrink-0 items-center px-4">
              <img
                className="h-8 w-auto"
                src="https://res.cloudinary.com/ddksrkond/image/upload/v1687316127/samu/download-removebg-preview_iidvap.png"
                alt="SAMU"
              />
            </div>
            <div className="mt-5 flex flex-grow flex-col">
              <nav className="flex-1 space-y-1 px-2 pb-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      router.asPath === item.href
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        router.asPath === item.href
                          ? "text-gray-500"
                          : "text-gray-400 group-hover:text-gray-500",
                        "mr-3 flex-shrink-0 h-6 w-6"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col md:pl-40">
          <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 ">
            <button
              type="button"
              className="bg-white border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex flex-1 justify-between px-4 pl-0 bg-white">
              <div className="flex flex-1"></div>
              <div
                className=" flex items-center md:ml-3 bg-white px-3 pl-0 mt-1 mb-1  justify-between w-full"
                style={{ borderRadius: "50px" }}
              >
                <button
                  onClick={() => router.push("/registros")}
                  type="button"
                  className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Left Row</span>
                  <ArrowLeftIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {user?.desactivate_account && (
                  <div className="flex justify-center">
                    <div
                      className="  text-white pl-2 pr-3 pt-1 pb-1 items-center justify-center flex justify-content-between lg:justify-content-center align-items-center flex-wrap"
                      style={{
                        background: is_admin ? "#000" : "#E35959",
                        borderRadius: "30px",
                      }}
                    >
                      <div className="font-bold mr-1 text-sm">
                        {is_admin ? "🔥  Admin" : "Acceso Bloqueado"}
                      </div>
                      <div className="align-items-center hidden lg:flex">
                        <span className="line-height-3 text-xs">
                          {is_admin
                            ? "Modo Administrador"
                            : "Para poder tener acceso a todos los registros, pida el acceso al adminitrador."}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Profile dropdown */}
                <div className="flex flex-col  items-center justify-center">
                  <Menu as="div" className="relative ml-3">
                    <div className="flex justify-center">
                      <Menu.Button className="flex  max-w-xs items-center justify-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={user?.photo_url}
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
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <Link
                                onClick={
                                  item.name === "Salir"
                                    ? logoutHandler
                                    : undefined
                                }
                                href={item.href}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                {item.name}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  <div className="mt-1 pl-3 text-xs font-bold">
                    {" "}
                    {is_admin ? "Admin" : ""}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-grow">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;

function ScreenLoader() {
  const { loadingVerificarToken } = useAuth();
  return (
    <>
      {loadingVerificarToken && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div style={{ width: "200px" }}>
            <img
              className="mb-3"
              src="https://res.cloudinary.com/ddksrkond/image/upload/v1687315829/samu/download-removebg-preview_iidvap.png"
              alt=""
            />

            <ProgressBar
              mode="indeterminate"
              style={{ height: "3px", background: "transparent" }}
              color="red"
            ></ProgressBar>
          </div>
        </div>
      )}
    </>
  );
}
